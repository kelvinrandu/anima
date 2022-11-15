import React from "react";
import "./Group22.css";

function Group22(props) {
  const { className } = props;

  return (
    <div className={`group-22-1 poppins-normal-black-20px ${className || ""}`}>
      <div className="havarduniversity-2">
        Havard
        <br />
        University
      </div>
      <div className="film-production-animation-2">
        Film Production
        <br />
        &amp; Animation
      </div>
      <div className="masters-2">Masters</div>
      <div className="post-graduate-2">Post Graduate</div>
      <div className="animation-2">Animation</div>
      <div className="date-1">20.01.2023</div>
    </div>
  );
}

export default Group22;
