import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import * as ROUTES from "../routes/routes";

const Ul = styled.ul`
  list-style: none;
  display: ${({ open }) => (open ? "flex" : "none")};
  z-index: 200;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  .burgerText {
    color: #0f4a7b;
    margin-right: 600px;
    text-decoration: none;
    padding-right: 50px;
    font-family: AvenirNextCyr-Bold;
    font-size: 14px;
    text-transform: uppercase;
    opacity: 1;
    cursor: pointer;
  }
  .burgerText:hover {
    transform: scale(1.03);
  }
  .txt {
    margin-top: 20px;
  }
  @media (min-width: 100px) {
    z-index: 1;
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #0f4a7b;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <p className="nav_item nav_extras burgerText">Jobs</p>
      <p className="nav_item nav_extras burgerText">Review</p>
      <p className="nav_item nav_extras burgerText">Find Salaries</p>
      <Link to={ROUTES.LOGIN}>
        <p className="nav_item nav_extras burgerText">Post Job</p>
      </Link>
    </Ul>
  );
};

export default RightNav;
