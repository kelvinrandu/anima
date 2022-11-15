import React from "react";
import Image from "../Image";
import Option from "../Option";
import Phone from "../Phone";
import Envelope from "../Envelope";
import "./DorisSanders.css";

function DorisSanders(props) {
  const { className, phoneProps, envelopeProps } = props;

  return (
    <div className={`doris-sanders ${className || ""}`}>
      <div className="flex-row-32">
        <Image />
        <Option />
      </div>
      <div className="text-8">
        <div className="flex-col-4">
          <div className="baraka-1 poppins-semi-bold-white-20px">Baraka</div>
          <div className="student-at poppins-normal-suva-gray-14px">Student at</div>
        </div>
        <div className="acts poppins-medium-white-14px">Acts</div>
      </div>
      <Phone className={phoneProps.className} />
      <div className="email">
        <Envelope className={envelopeProps.className} />
        <div className="barakaactscom poppins-normal-suva-gray-14px">Baraka@acts.com</div>
      </div>
      <div className="flex-row-33">
        <div className="message">
          <div className="edit-profile poppins-normal-white-16px">Edit Profile</div>
        </div>
        <div className="view-profile">
          <div className="update-profile poppins-normal-eden-16px">Update Profile</div>
        </div>
      </div>
    </div>
  );
}

export default DorisSanders;
