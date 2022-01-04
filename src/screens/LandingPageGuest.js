import React, { useEffect, useState } from "react";
import * as ROUTES from "../routes/routes";
import { Link } from "react-router-dom";
import axios from "axios";
import location from "../assets/images/location.png";
import { Jobs } from "../data/Jobs";
import "../assets/css/landingGuest.css";

import logo from "../assets/images/FindJobs.png";
import copyright from "../assets/images/copyright.png";
import quick from "../assets/images/Quick.png";
import social from "../assets/images/Social.png";
import search from "../assets/images/GuestSearch.png";
import icons from "../assets/images/socialMediaIcons.png";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function LandingPageGuest() {
  const [jobs, setJobs] = useState(null);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);

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
    instance.get("/jobs").then((response) => {
      setJobs(response.data);
      console.log(jobs);
    });
  }, [jobs, instance]);

  const paged_jobs = page === 1 ? Jobs.data.slice(0, 3) : Jobs.data.slice(4, 6);

  return (
    <div className="guest_container">
      <div className="guest_header">
        <div className="guest_nav">
          <img height={40} src={logo} alt="logo" />
          <nav className="guest_sub_nav">
            <p className="nav_item">Jobs</p>
            <p className="nav_item nav_extras">Company Review</p>
            <p className="nav_item nav_extras">Find Salaries</p>
            <Link to={ROUTES.LOGIN}>
              <Button
                containerStyle="post_button"
                textStyle="post_button_text"
                title="Post Job"
              />
            </Link>
          </nav>
        </div>
        <p className="guest_dream">Find Your Dream Job</p>
      </div>
      <img className="guest_search" height={90} src={search} alt="search" />
      <div className="guest_body">
        <div className="guest_body_left">
          <div className="guest_left_row">
            <p className="guest_text">Showing 7 results</p>
            <p className="guest_text">
              <span className="grey_text">Sort by: </span>Latest
            </p>
          </div>
          {paged_jobs.map((item) => (
            <div className="guest_job_container">
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
                <Button
                  onClick={() => setShow(true)}
                  textStyle={"see_button_text"}
                  containerStyle={"see_button"}
                  title="Apply Via Find Job"
                />
              </div>
              <Modal
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
