import React from "react";
import "./SlidersHFilled.css";

function SlidersHFilled(props) {
  const { src } = props;

  return (
    <div className="sliders-h-filled">
      <img className="sliders-h-filled_1_" src={src} alt="sliders-h-Filled_1_" />
    </div>
  );
}

export default SlidersHFilled;
