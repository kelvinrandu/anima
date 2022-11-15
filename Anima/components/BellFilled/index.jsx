import React from "react";
import "./BellFilled.css";

function BellFilled(props) {
  const { src } = props;

  return (
    <div className="bell-filled">
      <img className="icon-notifications" src={src} alt="icon-notifications" />
    </div>
  );
}

export default BellFilled;
