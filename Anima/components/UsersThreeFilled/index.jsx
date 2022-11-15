import React from "react";
import "./UsersThreeFilled.css";

function UsersThreeFilled(props) {
  const { src, className } = props;

  return (
    <div className={`coupon-filled ${className || ""}`}>
      <img className="coupon-filled_1_" src={src} alt="coupon-Filled_1_" />
    </div>
  );
}

export default UsersThreeFilled;
