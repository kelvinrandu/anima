import React from "react";
import "./Image3.css";

function Image3(props) {
  const { src } = props;

  return (
    <div className="container-center-horizontal">
      <div className="image-3-1 screen">
        <img className="pexels-kampus-production-5940841" src={src} alt="pexels-kampus-production-5940841" />
      </div>
    </div>
  );
}

export default Image3;
