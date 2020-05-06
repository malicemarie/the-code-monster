import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Button = ({ theme, value }) => <button className={theme}>{value}</button>;

Button.propTypes = {
  theme: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  theme: "btn-default",
};

export default Button;
