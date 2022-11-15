import React from "react";
import Group32 from "../Group32";
import "./PostSignUpOneTimePinIsSentToYourEma.css";

function PostSignUpOneTimePinIsSentToYourEma(props) {
  const {
    overlapGroup1,
    acts_Logo,
    neverReceivedOrFo1,
    neverReceivedOrFo2,
    rectangle,
    text8,
    neverReceivedOrFo3,
    neverReceivedOrFo4,
    neverReceivedOrFo5,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="post-sign-up-one-time-pin-is-sent-to-your-email-address screen">
        <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <img className="acts_logo-4" src={acts_Logo} alt="ACTS_LOGO" />
          <div className="never-received-or-fo-container sfprotext-regular-normal-black-30px">
            <p className="never-received-or-fo-5">{neverReceivedOrFo1}</p>
            <p className="never-received-or-fo-5">{neverReceivedOrFo2}</p>
          </div>
          <div className="overlap-group2-1">
            <div className="overlap-group-4">
              <img className="rectangle-2" src={rectangle} alt="rectangle" />
              <img className="oval-2" src="/img/oval@1x.png" alt="oval" />
            </div>
            <div className="text-2 sfprotext-regular-normal-white-20px">{text8}</div>
          </div>
          <div className="never-received-or-fo-container-1">
            <div className="never-received-or-fo-6 sfprotext-regular-normal-black-20px">{neverReceivedOrFo3}</div>
            <div className="never-received-or-fo-7">{neverReceivedOrFo4}</div>
          </div>
          <div className="overlap-group4-3">
            <Group32 />
            <div className="never-received-or-fo-8 sfprotext-regular-normal-white-19px">{neverReceivedOrFo5}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSignUpOneTimePinIsSentToYourEma;
