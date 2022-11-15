import React from "react";
import "./BarChart.css";

function BarChart(props) {
  const { className } = props;

  return (
    <div className={`bar-chart ${className || ""}`}>
      <div className="group-4"></div>
      <div className="group-6"></div>
      <div className="group-8"></div>
    </div>
  );
}

export default BarChart;
