import React from "react";
import "./AlignLeft1.css";

function AlignLeft1(props) {
  const { className } = props;

  return (
    <div className={`align-left-1 ${className || ""}`}>
      <img className="path" src="/img/path@1x.png" alt="Path" />
      <img className="path-1" src="/img/path-1@1x.png" alt="Path" />
      <img className="path-2" src="/img/path-2@1x.png" alt="Path" />
    </div>
  );
}

export default AlignLeft1;
