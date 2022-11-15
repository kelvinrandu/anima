import React from "react";
import "./Group.css";

function Group(props) {
  const { className } = props;

  return (
    <div className={`group-14 ${className || ""}`}>
      <div className="sign-up-9 sfprotext-bold-heliotrope-7px">LOGIN</div>
    </div>
  );
}

export default Group;
