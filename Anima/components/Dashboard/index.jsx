import React from "react";
import "./Dashboard.css";

function Dashboard(props) {
  const { path11, path12, path14, path13, className } = props;

  return (
    <div className={`dashboard-1 ${className || ""}`}>
      <div className="path-container-1">
        <img className="path-1-2" src={path11} alt="Path 11" />
        <img className="path-1-3" src={path12} alt="Path 12" />
      </div>
      <div className="path-container-1 variant-1">
        <img className="path-1-3" src={path14} alt="Path 14" />
        <img className="path-1-2" src={path13} alt="Path 13" />
      </div>
    </div>
  );
}

export default Dashboard;
