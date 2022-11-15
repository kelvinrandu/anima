import React from "react";
import "./Envelope.css";

function Envelope(props) {
  const { className } = props;

  return (
    <div className={`envelope-1 ${className || ""}`}>
      <div className="group-894-2">
        <div className="path-container-16">
          <img className="path-998-1" src="/img/path-998-1@1x.png" alt="Path 998" />
          <img className="path-999-1" src="/img/path-999-1@1x.png" alt="Path 999" />
        </div>
      </div>
    </div>
  );
}

export default Envelope;
