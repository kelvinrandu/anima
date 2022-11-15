import React from "react";
import "./Layer1.css";

function Layer1(props) {
  const { src, className } = props;

  return (
    <div className={`layer1-1 ${className || ""}`}>
      <img className="path9429" src={src} alt="path9429" />
    </div>
  );
}

export default Layer1;
