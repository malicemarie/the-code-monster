import React from "react";

const SearchBar = ({ theme, value, placeholderText }) => {
  return (
    <div className={`search-bar col-lg-6 col-sm-12 ${theme}`}>
      <input
        className="search-input"
        type="text"
        placeholder={placeholderText}
      ></input>

      <button className={theme}>{value}</button>
    </div>
  );
};
export default SearchBar;
