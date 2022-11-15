import React from "react";
import "./Search2.css";

function Search2(props) {
  const { search1, className } = props;

  return (
    <div className={`search-7 ${className || ""}`}>
      <div className="search-10" style={{ backgroundImage: `url(${search1})` }}></div>
      <div className="search-13 poppins-normal-suva-gray-20px">Search</div>
    </div>
  );
}

export default Search2;
