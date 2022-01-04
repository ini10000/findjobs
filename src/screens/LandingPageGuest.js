import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import location from "../assets/images/location.png";
import { Jobs } from "../data/Jobs";
import "../assets/css/landingGuest.css";

import logo from "../assets/images/FindJobs.png";
import copyright from "../assets/images/copyright.png";
import quick from "../assets/images/Quick.png";
import social from "../assets/images/Social.png";
import icons from "../assets/images/socialMediaIcons.png";
import CustomButton from "../components/Button";
import CustomModal from "../components/Modal";
import Navbar from "../components/Navbar";

export default function LandingPageGuest() {
  const [searched, setSearched] = useState(Jobs.data);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = Jobs.data.filter((data) => {
      return data.title.toLowerCase().includes(value);
    });
    setSearched(result);
    console.log(searched);
  };

  const handleLocation = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = Jobs.data.filter((data) => {
      return data.location.toLowerCase().includes(value);
    });
    setSearched(result);
    console.log(searched);
  };
  const paged_jobs = page === 1 ? searched.slice(0, 3) : searched.slice(4, 6);

  return (
    <div className="guest_container">
      <div className="guest_header">
        <Navbar />
        <p className="guest_dream">Find Your Dream Job</p>
      </div>
      <div className={"search_container"}>
        <InputGroup className="mb-3 guest_search">
          <FormControl
            className="search"
            onChange={(e) => handleSearch(e)}
            placeholder="Frontend Developer"
          />
          <FormControl
            className="search"
            onChange={(e) => handleLocation(e)}
            placeholder="Lagos, Nigeria"
          />
          <Button variant="danger" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>

      <div className="guest_body">
        <div className="guest_body_left">
          <div className="guest_left_row">
            <p className="guest_text">Showing 7 results</p>
            <p className="guest_text">
              <span className="grey_text">Sort by: </span>Latest
            </p>
          </div>
          {paged_jobs.map((item) => (
            <div key={item.id} className="guest_job_container">
              <div className="guest_job_header">
                <p className="guest_job_header_text">{item.title}</p>
                <p className="guest_job_header_text">{item.salary}</p>
              </div>
              <div className="guest_job_location">
                <img height={19} src={location} alt="location" />
                <p className="guest_job_location_text">{item.location}</p>
              </div>
              <div className="guest_job_description_container">
                <p className="guest_job_description">{item.description}</p>
              </div>
              <div className="guest_job_footer">
                <CustomButton
                  click={() => setShow(true)}
                  textStyle={"see_button_text"}
                  containerStyle={"see_button"}
                  title="Apply Via Find Job"
                />
              </div>
              <CustomModal
                item={item}
                setShow={setShow}
                show={show}
                location={location}
              />
            </div>
          ))}
          <div className="pagination_container">
            <div
              onClick={() => (page === 2 ? setPage(page - 1) : "")}
              className="pagination_box"
            >
              <p className="pagination_text">{`<`}</p>
            </div>
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
            <div
              onClick={() => setPage(2)}
              className={
                page === 2 ? `selected_box pagination_box` : "pagination_box"
              }
            >
              <p
                className={
                  page === 2 ? `selected pagination_text` : "pagination_text"
                }
              >{`2`}</p>
            </div>
            <div
              onClick={() => (page === 1 ? setPage(page + 1) : "")}
              className="pagination_box"
            >
              <p className="pagination_text">{`>`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="guest_footer">
        <div className="guest_footer_column">
          <img src={logo} alt="logo" />
          <img src={copyright} alt="copyright" />
        </div>
        <div className="guest_footer_column">
          <img src={quick} alt="quick" />
        </div>
        <div className="guest_footer_column">
          <img src={quick} alt="quick" />
        </div>
        <div className="guest_footer_column socials">
          <img
            style={{ marginBottom: "10px" }}
            width={100}
            src={social}
            alt="social"
          />
          <img src={icons} alt="icons" />
        </div>
      </div>
    </div>
  );
}
