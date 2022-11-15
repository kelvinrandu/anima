import React from "react";
import "./Image2.css";

function Image2(props) {
  const { src } = props;

  return (
    <div className="container-center-horizontal">
      <div className="image-2-6 screen">
        <img className="pexels-andrea-piacquadio-3769021" src={src} alt="pexels-andrea-piacquadio-3769021" />
      </div>
    </div>
  );
}

export default Image2;
