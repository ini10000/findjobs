import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import { Jobs } from "../data/Jobs";
import * as ROUTES from "../routes/routes";
import "../assets/css/landingGuest.css";
import "../assets/css/landingAdmin.css";

import auth from "../utils/auth";
import CustomButton from "../components/Button";
import logo from "../assets/images/loginLogo.png";
import copyright from "../assets/images/copyright.png";
import terms from "../assets/images/Terms.png";
import icons from "../assets/images/socialMediaIcons.png";
import avatar from "../assets/images/Avatar.png";
import vector from "../assets/images/Vector.png";
import pink from "../assets/images/pinkBullet.png";
import CreateModal from "../components/CreateModal";

export default function LandingPageAdmin() {
  const [searched, setSearched] = useState(Jobs.data);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  let navigate = useNavigate();

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = Jobs.data.filter((data) => {
      return data.title.toLowerCase().includes(value);
    });
    setSearched(result);
  };

  return (
    <div className="guest_container">
      <div className="guest_header">
        <div className="guest_nav">
          <img height={40} src={logo} alt="logo" />
          <nav className="guest_sub_nav">
            <img className="admin_nav" height={22} src={vector} alt="logo" />
            <img
              onClick={(e) => {
                auth.logout(() => {
                  navigate(ROUTES.HOME);
                });
              }}
              className="admin_nav"
              height={22}
              src={avatar}
              alt="logo"
            />
          </nav>
        </div>
        <p className="guest_dream">Jobs</p>
      </div>
      <div className="admin_body">
        <div className="admin_row">
          <InputGroup className="mb-3 guest_search admin_search ">
            <FormControl
              onChange={(e) => handleSearch(e)}
              aria-label="First name"
              id="search"
              placeholder="Frontend Developer"
            />
            <Button variant="danger" id="button-addon2">
              Search
            </Button>
          </InputGroup>
          <CustomButton
            click={() => {
              setShowModal(true);
            }}
            textStyle={"see_button_text"}
            containerStyle={"see_button tested"}
            title="+ New Job"
          />
        </div>
        <div className="guest_body_left">
          <div style={{ marginBottom: "20px" }} className="admin_table">
            <p style={{ flex: 2 }} className="admin_table_header"></p>
            <p className="admin_table_header">Job Title</p>
            <p className="admin_table_header">Date Modified</p>
            <p className="admin_table_header">Candidates</p>
            <p style={{ flex: 4 }} className="admin_table_header"></p>
            <p className="admin_table_header">Filters</p>
          </div>
          {searched.map((item) => (
            <div className="admin_table table_continue">
              <p
                style={{ flex: 1 }}
                className="admin_table_header admin_table_header2 "
              >
                <img height={10} src={pink} alt="button" />
              </p>
              <p className="admin_table_header admin_table_header2 ">
                {item.title}
              </p>
              <p className="admin_table_header admin_table_header2 ">
                {item.updated_at.split("T")[0]}
              </p>
              <p className="admin_table_header admin_table_header2 ">
                {Math.floor(Math.random(0, 1) * 200)}
              </p>
              <p className="admin_table_header admin_table_header2 ">
                <CustomButton
                  textStyle={"see_button_text"}
                  containerStyle={"see_button"}
                  title="Edit"
                />
              </p>
              <p className="admin_table_header admin_table_header2 ">
                <CustomButton
                  textStyle={"see_button_text deleted_text"}
                  containerStyle={"see_button deleted"}
                  title="Delete"
                />
              </p>
            </div>
          ))}
          {showModal && <CreateModal hideModal={setShowModal} />}
          <div className="pagination_container">
            <div
              onClick={() => setPage(1)}
              className={
                page === 1 ? `selected_box pagination_box` : "pagination_box"
              }
            >
              <p
                className={
                  page === 1 ? `selected pagination_text` : "pagination_text"
                }
              >{`1`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="guest_footer">
        <div className="guest_footer_column">
          <img src={logo} alt="logo" />
        </div>
        <div className="guest_footer_column">
          <img src={copyright} alt="copyright" />
        </div>
        <div className="guest_footer_column">
          <img src={terms} alt="terms" />
        </div>
        <div className="guest_footer_column socials">
          <img src={icons} alt="icons" />
        </div>
      </div>
    </div>
  );
}
