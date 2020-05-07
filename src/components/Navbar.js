import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Navbar = ({ theme, logo }) => (
  <div>
    <div className={`navbar ${theme}`} id="myNav">
      <div className="logo">
        <img src={logo} alt="logo" height="42" />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#login">Login</a>
      </div>
    </div>
  </div>
);

Navbar.propTypes = {
  theme: PropTypes.string,
  value: PropTypes.string,
};

export default Navbar;
