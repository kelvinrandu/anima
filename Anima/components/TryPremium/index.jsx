import React from "react";
import Arrow from "../Arrow";
import "./TryPremium.css";

function TryPremium(props) {
  const { logOut, className, arrowProps } = props;

  return (
    <div className={`try-premium ${className || ""}`}>
      <div className="log-in poppins-bold-white-20px">{logOut}</div>
      <Arrow line11={arrowProps.line11} line12={arrowProps.line12} line13={arrowProps.line13} />
    </div>
  );
}

export default TryPremium;
