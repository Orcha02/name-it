import React from "react";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search-container">
      <input placeholder="Type keywords" className="search-input" type="text" />
    </div>
  );
};

export default SearchBox;