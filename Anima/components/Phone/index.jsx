import React from "react";
import "./Phone.css";

function Phone(props) {
  const { className } = props;

  return (
    <div className={`phone-1 ${className || ""}`}>
      <div className="phone-call-2"></div>
      <div className="text-11-1 poppins-normal-suva-gray-14px">(589)505-4521</div>
    </div>
  );
}

export default Phone;
