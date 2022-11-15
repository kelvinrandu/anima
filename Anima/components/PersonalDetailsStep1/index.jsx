import React from "react";
import Layer1 from "../Layer1";
import Calendar from "../Calendar";
import "./PersonalDetailsStep1.css";

function PersonalDetailsStep1(props) {
  const {
    acts_Logo,
    overlapGroup7,
    step1,
    taskDone,
    text12,
    overlapGroup9,
    path1003,
    rectangle,
    ridhoTijanGmailCo1,
    ridhoTijanGmailCo2,
    ridhoTijanGmailCo3,
    ridhoTijanGmailCo4,
    ridhoTijanGmailCo5,
    ridhoTijanGmailCo6,
    profileUpdate,
    personalDetails,
    path1014,
    ridhoTijanGmailCo7,
    ridhoTijanGmailCo8,
    ridhoTijanGmailCo9,
    x53,
    x113,
    x19,
    neverReceivedOrFo,
    layer11Props,
    calendarProps,
    layer12Props,
    layer13Props,
    layer14Props,
    layer15Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="personal-details-step-1 screen">
        <img className="acts_logo-5" src={acts_Logo} alt="ACTS_LOGO" />
        <div className="flex-row-13">
          <div className="overlap-group-container-1">
            <div className="overlap-group7-1" style={{ backgroundImage: `url(${overlapGroup7})` }}>
              <div className="text">
                <div className="step-1 poppins-semi-bold-black-20px">{step1}</div>
                <div className="flex-row-14 poppins-normal-black-16px">
                  <div className="task-done">{taskDone}</div>
                  <div className="text-3">{text12}</div>
                </div>
              </div>
              <div className="overlap-group9-1" style={{ backgroundImage: `url(${overlapGroup9})` }}>
                <img className="path-1003" src={path1003} alt="Path 1003" />
              </div>
            </div>
            <div className="overlap-group1-1">
              <img className="rectangle-3" src={rectangle} alt="Rectangle" />
              <div className="ridhotijangmailco-3 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo1}</div>
              <div className="rectangle-4"></div>
              <div className="ridhotijangmailco-4 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo2}</div>
              <div className="rectangle-5"></div>
              <div className="ridhotijangmailco-5 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo3}</div>
              <div className="rectangle-6"></div>
              <div className="ridhotijangmailco-6 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo4}</div>
              <Layer1 src={layer11Props.src} />
              <div className="ridhotijangmailco-7 sfprotext-regular-normal-delta-20px">{ridhoTijanGmailCo5}</div>
              <div className="ridhotijangmailco-8 sfprotext-regular-normal-delta-20px">{ridhoTijanGmailCo6}</div>
              <div className="profile-update poppins-semi-bold-white-17px">{profileUpdate}</div>
              <Calendar {...calendarProps} />
              <div className="personal-details poppins-semi-bold-black-50px">{personalDetails}</div>
            </div>
          </div>
          <div className="flex-col">
            <img className="path-1014" src={path1014} alt="Path 1014" />
            <div className="ridhotijangmailco-9 sfprotext-regular-normal-delta-20px">{ridhoTijanGmailCo7}</div>
            <div className="overlap-group2-2">
              <div className="ridhotijangmailco-10 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo8}</div>
              <Layer1 src={layer12Props.src} className={layer12Props.className} />
            </div>
            <div className="overlap-group3-2">
              <div className="ridhotijangmailco-11 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo9}</div>
              <Layer1 src={layer13Props.src} className={layer13Props.className} />
            </div>
          </div>
        </div>
        <div className="overlap-group-container-2">
          <div className="overlap-group4-4">
            <div className="x-2 sfprotext-regular-normal-white-20px">{x53}</div>
          </div>
          <div className="overlap-group8-1">
            <div className="x-3 sfprotext-regular-normal-white-20px">{x113}</div>
            <Layer1 src={layer14Props.src} className={layer14Props.className} />
          </div>
          <div className="overlap-group6-1">
            <div className="x-4 sfprotext-regular-normal-white-20px">{x19}</div>
            <Layer1 src={layer15Props.src} className={layer15Props.className} />
          </div>
        </div>
        <div className="overlap-group5-2">
          <div className="group-10"></div>
          <div className="never-received-or-fo-9 sfprotext-regular-normal-white-27px">{neverReceivedOrFo}</div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetailsStep1;
