import React from "react";
import "./Image1.css";

function Image1(props) {
  const { src } = props;

  return (
    <div className="container-center-horizontal">
      <div className="image-1-1 screen">
        <img className="pexels-cottonbro-6208713" src={src} alt="pexels-cottonbro-6208713" />
      </div>
    </div>
  );
}

export default Image1;
