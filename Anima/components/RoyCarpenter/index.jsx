import React from "react";
import Image from "../Image";
import Option from "../Option";
import Text4 from "../Text4";
import Phone from "../Phone";
import Email from "../Email";
import Button from "../Button";
import "./RoyCarpenter.css";

function RoyCarpenter(props) {
  const { className, imageProps, text4Props, emailProps, buttonProps } = props;

  return (
    <div className={`roy-carpenter ${className || ""}`}>
      <div className="flex-row-121">
        <Image className={imageProps.className} />
        <Option />
      </div>
      <Text4 name={text4Props.name} className={text4Props.className} />
      <Phone />
      <Email className={emailProps.className} envelopeProps={emailProps.envelopeProps} />
      <Button className={buttonProps.className} messageProps={buttonProps.messageProps} />
    </div>
  );
}

export default RoyCarpenter;
