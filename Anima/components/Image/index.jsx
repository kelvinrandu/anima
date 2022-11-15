import React from "react";
import "./Image.css";

function Image(props) {
  const { className } = props;

  return (
    <div className={`image-3 ${className || ""}`}>
      <div className="active-1"></div>
    </div>
  );
}

export default Image;
