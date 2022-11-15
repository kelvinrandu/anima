import React from "react";
import Image5 from "../Image5";
import "./BobbyMendez2.css";

function BobbyMendez2(props) {
  const { name, className, image5Props } = props;

  return (
    <div className={`bobby-mendez-3 ${className || ""}`}>
      <Image5 className={image5Props.className} />
      <div className="text-27">
        <div className="name-6 poppins-semi-bold-white-18px">{name}</div>
        <p className="hi-when-we-will-start-the-meeting poppins-normal-white-14px">
          Hi, When we will start the meeting?
        </p>
      </div>
    </div>
  );
}

export default BobbyMendez2;
