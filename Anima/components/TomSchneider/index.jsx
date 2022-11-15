import React from "react";
import Image42 from "../Image42";
import "./TomSchneider.css";

function TomSchneider(props) {
  const { name, className, image4Props } = props;

  return (
    <div className={`tom-schneider ${className || ""}`}>
      <Image42 src={image4Props.src} className={image4Props.className} />
      <div className="group-956">
        <div className="name-4 poppins-semi-bold-white-18px">{name}</div>
        <p className="whats-new-about-the-new-project poppins-normal-white-14px">
          What&#39;s new about the new project?
        </p>
      </div>
    </div>
  );
}

export default TomSchneider;
