import React from "react";

const SearchBar = ({
  theme,
  value,
  placeholderText
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `search-bar col-lg-6 col-sm-12 ${theme}`
  }, /*#__PURE__*/React.createElement("input", {
    className: "search-input",
    type: "text",
    placeholder: placeholderText
  }), /*#__PURE__*/React.createElement("button", {
    className: theme
  }, value));
};

export default SearchBar;