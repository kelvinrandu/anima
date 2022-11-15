import React from "react";
import "./Typing.css";

function Typing(props) {
  const { className } = props;

  return (
    <div className={`typing-1 ${className || ""}`}>
      <div className="ellipse-68"></div>
      <div className="ellipse-69"></div>
      <div className="ellipse-70"></div>
    </div>
  );
}

export default Typing;
