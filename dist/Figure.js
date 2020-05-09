import React from "react";
import "./style.css";

const Figure = ({
  caption,
  imageSrc,
  theme
}) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("figure", {
    className: `${theme} figure`
  }, /*#__PURE__*/React.createElement("img", {
    className: "figureImage",
    alt: "placeholder",
    src: imageSrc
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "figureLabel"
  }, caption))));
};

export default Figure;