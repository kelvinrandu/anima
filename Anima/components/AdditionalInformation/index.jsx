import React from "react";
import Layer1 from "../Layer1";
import Calendar from "../Calendar";
import Group from "../Group";
import "./AdditionalInformation.css";

function AdditionalInformation(props) {
  const {
    acts_Logo,
    overlapGroup4,
    step4,
    taskDone,
    text2,
    overlapGroup8,
    path1003,
    rectangle,
    ridhoTijanGmailCo1,
    ridhoTijanGmailCo2,
    ridhoTijanGmailCo3,
    ridhoTijanGmailCo4,
    profileUpdate,
    additionalInformation,
    futureEducationOptional,
    ridhoTijanGmailCo5,
    ridhoTijanGmailCo6,
    addEntry,
    neverReceivedOrFo1,
    neverReceivedOrFo2,
    layer1Props,
    calendarProps,
    groupProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="additional-information screen">
        <img className="acts_logo-8" src={acts_Logo} alt="ACTS_LOGO" />
        <div className="overlap-group4-7" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <div className="text-6">
            <div className="step-4 poppins-semi-bold-black-20px">{step4}</div>
            <div className="flex-row-19 poppins-normal-black-16px">
              <div className="task-done-3">{taskDone}</div>
              <div className="text-6-1">{text2}</div>
            </div>
          </div>
          <div className="overlap-group8-4" style={{ backgroundImage: `url(${overlapGroup8})` }}>
            <img className="path-1003-3" src={path1003} alt="Path 1003" />
          </div>
        </div>
        <div className="overlap-group-container-12">
          <div className="overlap-group-container-13">
            <div className="overlap-group10-2">
              <div className="overlap-group3-5">
                <img className="rectangle-15" src={rectangle} alt="Rectangle" />
                <div className="ridhotijangmailco-24 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo1}</div>
                <div className="rectangle-16"></div>
                <div className="ridhotijangmailco-25 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo2}</div>
                <div className="rectangle-17"></div>
                <div className="ridhotijangmailco-26 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo3}</div>
                <div className="rectangle-18"></div>
                <div className="ridhotijangmailco-27 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo4}</div>
                <div className="profile-update-3 poppins-semi-bold-white-17px">{profileUpdate}</div>
                <Layer1 src={layer1Props.src} className={layer1Props.className} />
                <div className="additional-information-1 poppins-semi-bold-black-50px">{additionalInformation}</div>
              </div>
              <div className="future-education-optional">{futureEducationOptional}</div>
            </div>
            <div className="overlap-group1-4">
              <div className="ridhotijangmailco-28 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo5}</div>
            </div>
            <div className="overlap-group5-5">
              <div className="ridhotijangmailco-29 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo6}</div>
              <Calendar {...calendarProps} />
            </div>
          </div>
          <div className="overlap-group7-4">
            <div className="add-entry-2 poppins-normal-white-16px">{addEntry}</div>
          </div>
        </div>
        <div className="overlap-group-container-14">
          <div className="overlap-group6-4">
            <Group className={groupProps.className} />
            <div className="never-received-or-fo-16 sfprotext-regular-normal-white-27px">{neverReceivedOrFo1}</div>
          </div>
          <div className="overlap-group2-5">
            <Group />
            <div className="never-received-or-fo-17 sfprotext-regular-normal-white-27px">{neverReceivedOrFo2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInformation;
