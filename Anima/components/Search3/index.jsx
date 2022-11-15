import React from "react";
import "./Search3.css";

function Search3(props) {
  const { search1, className } = props;

  return (
    <div className={`search-35 ${className || ""}`}>
      <div className="search-36" style={{ backgroundImage: `url(${search1})` }}></div>
      <div className="search-37 poppins-normal-suva-gray-20px">Search</div>
    </div>
  );
}

export default Search3;
