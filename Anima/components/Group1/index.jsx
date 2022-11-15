import React from "react";
import "./Group1.css";

function Group1(props) {
  const { className } = props;

  return (
    <div className={`navbar poppins-medium-white-16px ${className || ""}`}>
      <div className="navbar-link-applications">Applications</div>
      <div className="navbar-link-institution">Institution</div>
      <div className="navbar-link-courses">Courses</div>
      <div className="navbar-link-library">Library</div>
      <div className="navbar-link-market">Market</div>
      <div className="navbar-link-community">Community</div>
    </div>
  );
}

export default Group1;
