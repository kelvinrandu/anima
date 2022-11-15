import React from "react";
import "./Group21.css";

function Group21(props) {
  const { className } = props;

  return (
    <div className={`group-21-1 poppins-normal-black-20px ${className || ""}`}>
      <div className="havarduniversity">
        Havard
        <br />
        University
      </div>
      <div className="film-production-animation">
        Film Production
        <br />
        &amp; Animation
      </div>
      <div className="masters">Masters</div>
      <div className="post-graduate">Post Graduate</div>
      <div className="animation">Animation</div>
    </div>
  );
}

export default Group21;
