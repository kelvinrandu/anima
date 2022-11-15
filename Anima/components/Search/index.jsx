import React from "react";
import "./Search.css";

function Search(props) {
  const { search1, className } = props;

  return (
    <div className={`search-27 ${className || ""}`}>
      <div className="search-1" style={{ backgroundImage: `url(${search1})` }}></div>
      <div className="search-2 poppins-normal-suva-gray-20px">Search</div>
    </div>
  );
}

export default Search;
