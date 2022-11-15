import React from "react";
import "./Expand.css";

function Expand(props) {
  const { path2, path3, path4, className } = props;

  return (
    <div className={`expand-2 ${className || ""}`}>
      <div className="path-container-25">
        <img className="path-8" src="/img/path-49@1x.png" alt="Path" />
        <img className="path-11" src={path2} alt="Path" />
      </div>
      <div className="path-container-25">
        <img className="path-11" src={path3} alt="Path" />
        <img className="path-8" src={path4} alt="Path" />
      </div>
    </div>
  );
}

export default Expand;
