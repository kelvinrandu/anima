import React from "react";
import "./Group903.css";

function Group903(props) {
  const { className } = props;

  return (
    <div className={`group-903 ${className || ""}`}>
      <img className="checkbox" src="/img/checkbox-11@1x.png" alt="checkbox" />
      <div className="thermodynamics poppins-medium-eden-16px">Thermodynamics</div>
      <div className="mit-cus-002578 poppins-normal-eden-16px">MIT-CUS-002578</div>
      <div className="mr-baraka poppins-normal-eden-16px">Mr.Baraka</div>
      <div className="overlap-group-12">
        <img className="path-1003-4" src="/img/path-1003-5@1x.png" alt="Path 1003" />
      </div>
      <div className="percent-1 poppins-semi-bold-black-16px">85%</div>
      <div className="assignment-submissionis-due-today poppins-normal-eden-16px">
        Assignment Submission
        <br />
        is Due today
      </div>
    </div>
  );
}

export default Group903;
