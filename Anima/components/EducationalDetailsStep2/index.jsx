import React from "react";
import Layer12 from "../Layer12";
import Group42 from "../Group42";
import Calendar from "../Calendar";
import Group from "../Group";
import "./EducationalDetailsStep2.css";

function EducationalDetailsStep2(props) {
  const {
    acts_Logo,
    overlapGroup3,
    step2,
    taskDone,
    text9,
    overlapGroup18,
    path1003,
    rectangle,
    ridhoTijanGmailCo1,
    ridhoTijanGmailCo2,
    ridhoTijanGmailCo3,
    ridhoTijanGmailCo4,
    profileUpdate,
    educationDetails,
    addEntry,
    ridhoTijanGmailCo5,
    neverReceivedOrFo1,
    ridhoTijanGmailCo6,
    x51,
    x111,
    x171,
    neverReceivedOrFo2,
    x23,
    neverReceivedOrFo3,
    x25,
    neverReceivedOrFo4,
    x27,
    neverReceivedOrFo5,
    neverReceivedOrFo6,
    layer121Props,
    calendar1Props,
    calendar2Props,
    layer122Props,
    group41Props,
    group42Props,
    group43Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="educational-details-step2 screen">
        <img className="acts_logo-6" src={acts_Logo} alt="ACTS_LOGO" />
        <div className="flex-col-1">
          <div className="flex-row-15">
            <div className="overlap-group-container-3">
              <div className="overlap-group3-3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                <div className="text-4">
                  <div className="step-2 poppins-semi-bold-black-20px">{step2}</div>
                  <div className="flex-row-16 poppins-normal-black-16px">
                    <div className="task-done-1">{taskDone}</div>
                    <div className="text-4-1">{text9}</div>
                  </div>
                </div>
                <div className="overlap-group18" style={{ backgroundImage: `url(${overlapGroup18})` }}>
                  <img className="path-1003-1" src={path1003} alt="Path 1003" />
                </div>
              </div>
              <div className="overlap-group5-3">
                <img className="rectangle-7" src={rectangle} alt="Rectangle" />
                <div className="ridhotijangmailco-12 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo1}</div>
                <div className="rectangle-8"></div>
                <div className="ridhotijangmailco-13 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo2}</div>
                <div className="rectangle-9"></div>
                <div className="ridhotijangmailco-14 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo3}</div>
                <div className="rectangle-10"></div>
                <div className="ridhotijangmailco-15 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo4}</div>
                <div className="profile-update-1 poppins-semi-bold-white-17px">{profileUpdate}</div>
                <div className="education-details poppins-semi-bold-black-50px">{educationDetails}</div>
              </div>
            </div>
            <div className="overlap-group-container-4">
              <div className="overlap-group13">
                <div className="add-entry poppins-normal-white-16px">{addEntry}</div>
              </div>
              <div className="overlap-group2-3">
                <div className="ridhotijangmailco-16 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo5}</div>
                <Layer12 src={layer121Props.src} />
                <div className="overlap-group14">
                  <Group42 />
                  <div className="never-received-or-fo-11">{neverReceivedOrFo1}</div>
                </div>
              </div>
              <div className="overlap-group11">
                <div className="ridhotijangmailco-17 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo6}</div>
              </div>
            </div>
          </div>
          <div className="overlap-group-container-5">
            <div className="overlap-group7-2">
              <div className="x-5 sfprotext-regular-normal-white-20px">{x51}</div>
              <Calendar {...calendar1Props} />
            </div>
            <div className="overlap-group6-2">
              <div className="x-6 sfprotext-regular-normal-white-20px">{x111}</div>
              <Calendar {...calendar2Props} />
            </div>
            <div className="overlap-group9-2">
              <div className="x-7 sfprotext-regular-normal-white-20px">{x171}</div>
              <Layer12 src={layer122Props.src} className={layer122Props.className} />
            </div>
          </div>
        </div>
        <div className="overlap-group-container-6">
          <div className="overlap-group4-5">
            <div className="overlap-group15">
              <Group42 className={group41Props.className} />
              <div className="never-received-or-fo-10 sfprotext-regular-normal-white-14px">{neverReceivedOrFo2}</div>
            </div>
            <div className="x-8 sfprotext-regular-normal-white-20px">{x23}</div>
          </div>
          <div className="overlap-group10">
            <div className="overlap-group16">
              <Group42 className={group42Props.className} />
              <div className="never-received-or-fo-10 sfprotext-regular-normal-white-14px">{neverReceivedOrFo3}</div>
            </div>
            <div className="x-9 sfprotext-regular-normal-white-20px">{x25}</div>
          </div>
          <div className="overlap-group1-2">
            <div className="overlap-group17">
              <Group42 className={group43Props.className} />
              <div className="never-received-or-fo-10 sfprotext-regular-normal-white-14px">{neverReceivedOrFo4}</div>
            </div>
            <div className="x-10 sfprotext-regular-normal-white-20px">{x27}</div>
          </div>
        </div>
        <div className="overlap-group-container-7">
          <div className="overlap-group8-2">
            <div className="group-11"></div>
            <div className="never-received-or-fo-12 sfprotext-regular-normal-white-27px">{neverReceivedOrFo5}</div>
          </div>
          <div className="overlap-group12">
            <Group />
            <div className="never-received-or-fo-13 sfprotext-regular-normal-white-27px">{neverReceivedOrFo6}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationalDetailsStep2;
