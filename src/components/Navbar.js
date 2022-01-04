import React from "react";
import { Link } from "react-router-dom";

import Burger from "./Burger";
import logo from "../assets/images/FindJobs.png";
import CustomButton from "../components/Button";
import * as ROUTES from "../routes/routes";

function Navbar() {
  return (
    <div>
      {window.innerWidth > 1080 ? (
        <div className="guest_nav">
          <img height={40} src={logo} alt="logo" />
          <nav className="guest_sub_nav">
            <p className="nav_item">Jobs</p>
            <p className="nav_item nav_extras">Company Review</p>
            <p className="nav_item nav_extras">Find Salaries</p>
            <Link to={ROUTES.LOGIN}>
              <CustomButton
                containerStyle="post_button"
                textStyle="post_button_text"
                title="Post Job"
              />
            </Link>
          </nav>
        </div>
      ) : (
        <div className="guest_nav">
          <img height={40} src={logo} alt="logo" />
          <Burger />
        </div>
      )}
    </div>
  );
}
export default Navbar;
