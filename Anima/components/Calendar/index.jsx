import React from "react";
import "./Calendar.css";

function Calendar(props) {
  const { path18, path19, path20, path21, path22, path23, path24, path25, path26, className } = props;

  return (
    <div className={`calendar-1 ${className || ""}`}>
      <div className="group-9-3">
        <div className="path-container-14">
          <img className="path-18-3" src={path18} alt="Path 18" />
          <img className="path-19-3" src={path19} alt="Path 19" />
          <img className="path-20-3" src={path20} alt="Path 20" />
          <img className="path-21-3" src={path21} alt="Path 21" />
          <img className="path-22-3" src={path22} alt="Path 22" />
          <img className="path-23-3" src={path23} alt="Path 23" />
          <img className="path-24-2" src={path24} alt="Path 24" />
          <img className="path-25-3" src={path25} alt="Path 25" />
          <img className="path-26-3" src={path26} alt="Path 26" />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
