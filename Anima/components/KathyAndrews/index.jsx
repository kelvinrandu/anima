import React from "react";
import Image from "../Image";
import Option from "../Option";
import Text4 from "../Text4";
import Phone from "../Phone";
import Email from "../Email";
import Button from "../Button";
import "./KathyAndrews.css";

function KathyAndrews(props) {
  const { className, imageProps, text4Props, phoneProps, emailProps, buttonProps } = props;

  return (
    <div className={`kathy-andrews ${className || ""}`}>
      <div className="flex-row-118">
        <Image className={imageProps.className} />
        <Option />
      </div>
      <Text4 name={text4Props.name} className={text4Props.className} />
      <Phone className={phoneProps.className} />
      <Email envelopeProps={emailProps.envelopeProps} />
      <Button messageProps={buttonProps.messageProps} />
    </div>
  );
}

export default KathyAndrews;
