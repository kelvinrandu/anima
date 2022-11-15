import React from "react";
import "./TotalClients.css";

function TotalClients(props) {
  const { group839, path36, className } = props;

  return (
    <div className={`total-clients ${className || ""}`}>
      <div className="overlap-group-11">
        <div className="courses-7 poppins-semi-bold-white-19px">Courses</div>
        <div className="number poppins-bold-white-29px">2</div>
        <div className="pie-chart">
          <div className="number-1 poppins-semi-bold-white-17px">5</div>
          <div className="group-839" style={{ backgroundImage: `url(${group839})` }}>
            <img className="path-36-1" src={path36} alt="Path 36" />
          </div>
        </div>
        <div className="enrolled poppins-normal-white-17px">Enrolled</div>
      </div>
    </div>
  );
}

export default TotalClients;
