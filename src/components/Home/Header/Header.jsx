import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo.png";
import Searchbar from "./Searchbar/Searchbar";

import "./Header.css";

const Header = () => {
  return (
    <Navbar className="navbar navbar-expand navbar-light justify-content-between align-items-center">
        <Navbar.Brand href="#home">
          <img
            alt="Visual Pymes logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        Visual Pymes
        </Navbar.Brand>
        <Searchbar />
    </Navbar>
  );
};

export default Header;
