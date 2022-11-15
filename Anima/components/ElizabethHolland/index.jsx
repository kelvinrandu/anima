import React from "react";
import Image5 from "../Image5";
import "./ElizabethHolland.css";

function ElizabethHolland(props) {
  const { name, className, image5Props } = props;

  return (
    <div className={`elizabeth-holland-1 ${className || ""}`}>
      <Image5 className={image5Props.className} />
      <div className="text-30">
        <div className="name-8 poppins-semi-bold-ebony-clay-18px">{name}</div>
        <p className="hi-did-you-check-the-file-1 poppins-normal-ebony-clay-14px">Hi, Did you check the file?</p>
      </div>
    </div>
  );
}

export default ElizabethHolland;
