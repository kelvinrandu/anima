import React from "react";
import "./Group35.css";

function Group35(props) {
  const { className } = props;

  return (
    <div className={`group-35 poppins-semi-bold-black-20px ${className || ""}`}>
      <div className="preferredinstitution">
        Preferred
        <br />
        Institution
      </div>
      <div className="area-of-study-1">Area of Study</div>
      <div className="preferredcertificate">
        Preferred
        <br />
        Certificate
      </div>
      <div className="level-of-study-1">Level of Study</div>
      <div className="major-speciality-1">Major/Speciality</div>
      <div className="overlap-group-8">
        <div className="preferredstart-date poppins-semi-bold-black-20px">
          Preferred
          <br />
          Start Date
        </div>
        <div className="ddmmyear-1 poppins-normal-black-10px">DD.MM.YEAR</div>
      </div>
    </div>
  );
}

export default Group35;
