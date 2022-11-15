import React from "react";
import Image5 from "../Image5";
import "./BobbyMendez.css";

function BobbyMendez(props) {
  const { name, className } = props;

  return (
    <div className={`bobby-mendez ${className || ""}`}>
      <Image5 />
      <div className="text-22">
        <div className="name-2 poppins-semi-bold-white-18px">{name}</div>
        <p className="i-will-check-it-tonight poppins-normal-white-14px">I will check it tonight</p>
      </div>
    </div>
  );
}

export default BobbyMendez;
