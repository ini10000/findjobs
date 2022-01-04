import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/login.css";

import logo from "../assets/images/loginLogo.png";
import login from "../assets/images/loginImagea.png";
import auth from "../utils/auth";
import Button from "../components/Button";
import * as ROUTES from "../routes/routes";

export default function Login() {
  let navigate = useNavigate();
  return (
    <div className="login_container">
      <div className="login_left_side">
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="Login Logo" />
        </Link>
        <br />
        <h1 className="login_welcome">
          Find the best
          <br />
          candidates for your
          <br />
          orgaanisation
        </h1>
        <img className="login_image" src={login} alt="Login" height={250} />
      </div>
      <div className="login_right_side">
        <form className="login_form">
          <p className="login_form_header">Login</p>
          <label className="login_label">E-mail</label>
          <input name="email" className="login_input" type={"email"} />
          <label className="login_label">Password</label>
          <input name="password" className="login_input" type={"password"} />
          <Button
            className="login_button"
            onClick={(e) => {
              e.preventDefault();
              auth.login(() => {
                navigate(ROUTES.ADMIN_HOME);
              });
            }}
            title="Login"
          />
        </form>
      </div>
    </div>
  );
}
