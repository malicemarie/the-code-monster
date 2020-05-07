import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Footer = ({ theme, footerLogo, logoHeight }) => {
  return (
    <div>
      <div className={`footer ${theme}`} id="myNav">
        <div className="foot-contents">
          <img src={footerLogo} alt="logo" height={logoHeight} />
        </div>
      </div>
    </div>
  );
};
Footer.propTypes = {
  logo: PropTypes.string,
};
export default Footer;
