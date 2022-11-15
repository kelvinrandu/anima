import React from "react";
import "./Image42.css";

function Image42(props) {
  const { src, className } = props;

  return (
    <div className={`image-13-1 ${className || ""}`} style={{ backgroundImage: `url(${src})` }}>
      <div className="ellipse-60"></div>
    </div>
  );
}

export default Image42;
