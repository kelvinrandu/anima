import React from "react";
import "./Previous.css";

function Previous(props) {
  const { children } = props;

  return (
    <div className="pagination-item">
      <div className="prev poppins-normal-gin-16px">{children}</div>
    </div>
  );
}

export default Previous;
