import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Navbar = ({
  theme,
  logo
}) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: `navbar ${theme}`,
  id: "myNav"
}, /*#__PURE__*/React.createElement("div", {
  className: "logo"
}, /*#__PURE__*/React.createElement("img", {
  src: logo,
  alt: "logo",
  height: "42"
})), /*#__PURE__*/React.createElement("div", {
  className: "nav-links"
}, /*#__PURE__*/React.createElement("a", {
  href: "#home"
}, "Home"), /*#__PURE__*/React.createElement("a", {
  href: "#contact"
}, "Contact"), /*#__PURE__*/React.createElement("a", {
  href: "#about"
}, "About"), /*#__PURE__*/React.createElement("a", {
  href: "#login"
}, "Login"))));

Navbar.propTypes = {
  theme: PropTypes.string,
  value: PropTypes.string
};
export default Navbar;