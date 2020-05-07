import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Button = ({ theme, value, size }) => (
  <button className={`btn ${theme} ${size}`}>{value}</button>
);

Button.propTypes = {
  theme: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  theme: "btn-default",
};

export default Button;
