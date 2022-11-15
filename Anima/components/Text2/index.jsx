import React from "react";
import "./Text2.css";

function Text2(props) {
  const { className } = props;

  return (
    <div className={`text-2-1 ${className || ""}`}>
      <p className="cras-eu-elit-congue poppins-normal-white-16px">
        Cras eu elit congue, placerat dui ut, tincidunt nisl.
      </p>
    </div>
  );
}

export default Text2;
