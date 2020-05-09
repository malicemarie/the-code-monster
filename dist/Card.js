import React from "react";
import Proptypes from "prop-types";
import "./style.css";

const Card = ({
  theme,
  cardImage,
  value,
  title
}) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: `card ${theme}`
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "card"
  }, title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "img-fluid",
    src: cardImage,
    alt: "Gaga"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "card-p"
  }, value))))));
};

Card.propTypes = {
  theme: Proptypes.string,
  cardImage: Proptypes.string,
  value: Proptypes.string,
  title: Proptypes.string
};
export default Card;