import React from "react";
import "./Expand22.css";

function Expand22(props) {
  const { path2, path3, path4, className } = props;

  return (
    <div className={`expand-1 ${className || ""}`}>
      <div className="path-container-22">
        <img className="path-6" src="/img/path-117@1x.png" alt="Path" />
        <img className="path-7" src={path2} alt="Path" />
      </div>
      <div className="path-container-23">
        <img className="path-7" src={path3} alt="Path" />
        <img className="path-6" src={path4} alt="Path" />
      </div>
    </div>
  );
}

export default Expand22;
