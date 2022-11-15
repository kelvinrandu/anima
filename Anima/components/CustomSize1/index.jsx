import React from "react";
import Group32 from "../Group32";
import "./CustomSize1.css";

function CustomSize1(props) {
  const {
    overlapGroup4,
    acts_Logo,
    neverReceivedOrFo1,
    arrowPathContainer1,
    arrowPath1,
    arrowPath2,
    ridhoTijanGmailCo1,
    arrowPathContainer2,
    arrowPath3,
    arrowPath4,
    ridhoTijanGmailCo2,
    rectangle1,
    x8,
    rectangle2,
    oval2,
    x112,
    neverReceivedOrFo2,
    resetPassword1,
    resetPassword2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="custom-size-1 screen">
        <div className="overlap-group4-2" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <img className="acts_logo-3" src={acts_Logo} alt="ACTS_LOGO" />
          <div className="never-received-or-fo-3 sfprotext-regular-normal-black-30px">{neverReceivedOrFo1}</div>
          <div className="overlap-group5-1">
            <div className="arrow-path-container-1" style={{ backgroundImage: `url(${arrowPathContainer1})` }}>
              <img className="arrow-path-2" src={arrowPath1} alt="arrow-path" />
              <img className="arrow-path-3" src={arrowPath2} alt="arrow-path" />
            </div>
            <div className="ridhotijangmailco-1 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo1}</div>
          </div>
          <div className="overlap-group6">
            <div className="arrow-path-container-1" style={{ backgroundImage: `url(${arrowPathContainer2})` }}>
              <img className="arrow-path-2" src={arrowPath3} alt="arrow-path" />
              <img className="arrow-path-3" src={arrowPath4} alt="arrow-path" />
            </div>
            <div className="ridhotijangmailco-2 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo2}</div>
          </div>
          <div className="overlap-group8">
            <div className="overlap-group-3">
              <img className="rectangle-1" src={rectangle1} alt="rectangle" />
              <img className="oval-1" src="/img/oval-1@1x.png" alt="oval" />
            </div>
            <div className="x sfprotext-regular-normal-white-20px">{x8}</div>
          </div>
          <div className="overlap-group7">
            <div className="overlap-group-3">
              <img className="rectangle-1" src={rectangle2} alt="rectangle" />
              <img className="oval-1" src={oval2} alt="oval" />
            </div>
            <div className="x-1 sfprotext-regular-normal-white-20px">{x112}</div>
          </div>
          <div className="flex-row-12">
            <div className="overlap-group9">
              <Group32 />
              <div className="never-received-or-fo-4 sfprotext-regular-normal-white-19px">{neverReceivedOrFo2}</div>
            </div>
            <div className="reset-password-1">{resetPassword1}</div>
            <div className="reset-password-2 sfprotext-semi-bold-fun-green-20px">{resetPassword2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomSize1;
