import React from "react";
import "./Text1.css";

function Text1(props) {
  const { children, className } = props;

  return (
    <div className={`text-1-1 ${className || ""}`}>
      <p className="proin-ac-quam-et-lec-1 poppins-normal-ebony-clay-16px">{children}</p>
    </div>
  );
}

export default Text1;
