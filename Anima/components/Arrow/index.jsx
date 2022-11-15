import React from "react";
import "./Arrow.css";

function Arrow(props) {
  const { line11, line12, line13, className } = props;

  return (
    <div className={`arrow ${className || ""}`}>
      <div className="line-container-1">
        <img className="line-11-1" src={line11} alt="Line 11" />
        <img className="line-12-1" src={line12} alt="Line 12" />
        <img className="line-13-1" src={line13} alt="Line 13" />
      </div>
    </div>
  );
}

export default Arrow;
