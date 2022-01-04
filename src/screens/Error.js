import React from "react";
import * as ROUTES from "../routes/routes";
import { Link } from "react-router-dom";

import "../assets/css/landingGuest.css";

import logo from "../assets/images/FindJobs.png";

import Button from "../components/Button";

export default function Error() {
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

      <div className="guest_body error_body">
        <h1>There is nothing to display here</h1>
      </div>
    </div>
  );
}
