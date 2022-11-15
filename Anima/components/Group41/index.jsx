import React from "react";
import Group1 from "../Group1";
import "./Group41.css";

function Group41(props) {
  const { className, group1Props } = props;

  return (
    <div className={`group-41 ${className || ""}`}>
      <Group1 className={group1Props.className} />
    </div>
  );
}

export default Group41;
