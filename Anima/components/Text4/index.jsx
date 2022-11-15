import React from "react";
import "./Text4.css";

function Text4(props) {
  const { name, className } = props;

  return (
    <div className={`text-32-1 ${className || ""}`}>
      <div className="name-10 poppins-semi-bold-white-20px">{name}</div>
      <div className="flex-row-119">
        <div className="founder-at poppins-normal-suva-gray-14px">Founder at</div>
        <div className="company-name poppins-medium-white-14px">Company Name</div>
      </div>
    </div>
  );
}

export default Text4;
