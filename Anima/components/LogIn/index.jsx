import React from "react";
import Group32 from "../Group32";
import "./LogIn.css";

function LogIn(props) {
  const {
    overlapGroup2,
    acts_Logo,
    arrowPathContainer,
    arrowPath1,
    arrowPath2,
    ridhoTijanGmailCo,
    rectangle,
    text11,
    neverReceivedOrFo1,
    neverReceivedOrFo2,
    resetPassword1,
    neverReceivedOrFo3,
    resetPassword2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="log-in-1 screen">
        <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
          <img className="acts_logo-1" src={acts_Logo} alt="ACTS_LOGO" />
          <div className="overlap-group4-1">
            <div className="arrow-path-container" style={{ backgroundImage: `url(${arrowPathContainer})` }}>
              <img className="arrow-path" src={arrowPath1} alt="arrow-path" />
              <img className="arrow-path-1" src={arrowPath2} alt="arrow-path" />
            </div>
            <div className="ridhotijangmailco sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo}</div>
          </div>
          <div className="overlap-group3-1">
            <div className="overlap-group-1">
              <img className="rectangle" src={rectangle} alt="rectangle" />
              <img className="oval" src="/img/oval-1@1x.png" alt="oval" />
            </div>
            <div className="text-1 sfprotext-regular-normal-white-20px">{text11}</div>
          </div>
          <div className="overlap-group5">
            <Group32 />
            <div className="never-received-or-fo sfprotext-regular-normal-white-19px">{neverReceivedOrFo1}</div>
          </div>
          <div className="flex-row-10">
            <div className="never-received-or-fo-1 sfprotext-regular-normal-black-20px">{neverReceivedOrFo2}</div>
            <div className="reset-password sfprotext-semi-bold-fun-green-20px">{resetPassword1}</div>
          </div>
          <div className="flex-row-11">
            <div className="never-received-or-fo-2">{neverReceivedOrFo3}</div>
            <div className="reset-password sfprotext-semi-bold-fun-green-20px">{resetPassword2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
