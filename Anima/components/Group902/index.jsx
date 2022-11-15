import React from "react";
import "./Group902.css";

function Group902(props) {
  const { studyHub, className } = props;

  return (
    <div className={`group-902 ${className || ""}`}>
      <div className="overlap-group3-6">
        <div className="thermodynamics-moi-ui905 poppins-medium-black-30px">Thermodynamics (MOI-UI905)</div>
        <div className="study-hub-3 poppins-semi-bold-eden-40px">{studyHub}</div>
      </div>
      <div className="ridhotijangmailco-container sfprotext-regular-normal-delta-20px">
        <div className="ridhotijangmailco-30">82 Units</div>
        <div className="ridhotijangmailco-31">Bachelors Degree</div>
      </div>
      <p className="ridhotijangmailco-32 sfprotext-regular-normal-eden-20px">
        Introduction- Acts School of Thermodynamics
      </p>
    </div>
  );
}

export default Group902;
