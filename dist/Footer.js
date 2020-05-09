import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Footer = ({
  theme,
  footerLogo,
  logoHeight
}) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: `footer ${theme}`,
    id: "myNav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-contents"
  }, /*#__PURE__*/React.createElement("img", {
    src: footerLogo,
    alt: "logo",
    height: logoHeight
  }))));
};

Footer.propTypes = {
  logo: PropTypes.string
};
export default Footer;