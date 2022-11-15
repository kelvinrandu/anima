import React from "react";
import "./User.css";

function User(props) {
  const { path9, path10, className } = props;

  return (
    <div className={`user ${className || ""}`}>
      <img className="path-9" src={path9} alt="Path 9" />
      <img className="path-10" src={path10} alt="Path 10" />
    </div>
  );
}

export default User;
