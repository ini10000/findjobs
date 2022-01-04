import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Jobs } from "../data/Jobs";
import * as ROUTES from "../routes/routes";
import "../assets/css/landingGuest.css";
import "../assets/css/landingAdmin.css";

import auth from "../utils/auth";
import logo from "../assets/images/loginLogo.png";
import copyright from "../assets/images/copyright.png";
import terms from "../assets/images/Terms.png";
import icons from "../assets/images/socialMediaIcons.png";
import avatar from "../assets/images/Avatar.png";
import newJob from "../assets/images/New.png";
import search from "../assets/images/AdminSearch.png";
import vector from "../assets/images/Vector.png";
import edit from "../assets/images/Edit.png";
import de from "../assets/images/Delete.png";
import pink from "../assets/images/pinkBullet.png";
import CreateModal from "../components/CreateModal";

export default function LandingPageAdmin() {
  const [jobs, setJobs] = useState(null);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);

  let navigate = useNavigate();

  const instance = axios.create({
    baseURL: "https://api.jobboard.tedbree.com/v1",
    withCredentials: false,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*",
    },
  });

  useEffect(() => {
    instance.get("/my/jobs").then((response) => {
      setJobs(response.data);
      console.log(jobs);
    });
  }, [jobs, instance]);

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
          <img height={60} src={search} alt="search" />
          <img
            height={60}
            style={{ cursor: "pointer" }}
            onClick={() => setShow(true)}
            src={newJob}
            alt="button"
          />
        </div>
        <div className="guest_body_left">
          <div className="admin_table">
            <p style={{ flex: 1 }} className="admin_table_header"></p>
            <p className="admin_table_header">Job Title</p>
            <p className="admin_table_header">Date Modified</p>
            <p className="admin_table_header">Candidates</p>
            <p className="admin_table_header"></p>
            <p className="admin_table_header">Filters</p>
          </div>
          {Jobs.data.map((item) => (
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
                <img src={edit} alt="button" />
              </p>
              <p className="admin_table_header admin_table_header2 ">
                <img src={de} alt="button" />
              </p>
            </div>
          ))}
          <CreateModal setShow={setShow} show={show} />
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
