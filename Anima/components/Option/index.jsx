import React from "react";
import "./Option.css";

function Option(props) {
  const { className } = props;

  return (
    <div className={`option-1 ${className || ""}`}>
      <div className="ellipse-3"></div>
      <div className="ellipse-3"></div>
      <div className="ellipse-3"></div>
    </div>
  );
}

export default Option;
