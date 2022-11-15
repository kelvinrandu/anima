import React from "react";
import "./Text.css";

function Text(props) {
  const { className } = props;

  return (
    <div className={`text-25 ${className || ""}`}>
      <div className="andreea-wade-6 poppins-semi-bold-white-18px">Andreea Wade</div>
      <p className="please-let-me-check-it poppins-normal-white-14px">Please let me check it.</p>
    </div>
  );
}

export default Text;
