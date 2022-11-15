import React from "react";
import Calendar from "../Calendar";
import Group from "../Group";
import "./ProfessionalExperienceStep3.css";

function ProfessionalExperienceStep3(props) {
  const {
    acts_Logo,
    overlapGroup3,
    step3,
    taskDone,
    text3,
    overlapGroup11,
    path1003,
    rectangle,
    ridhoTijanGmailCo1,
    ridhoTijanGmailCo2,
    ridhoTijanGmailCo3,
    ridhoTijanGmailCo4,
    profileUpdate,
    professionalExperience,
    addEntry,
    ridhoTijanGmailCo5,
    ridhoTijanGmailCo6,
    x5,
    x11,
    x17,
    neverReceivedOrFo1,
    neverReceivedOrFo2,
    calendar1Props,
    calendar2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="professional-experience-step-3 screen">
        <img className="acts_logo-7" src={acts_Logo} alt="ACTS_LOGO" />
        <div className="flex-row-17">
          <div className="overlap-group-container-8">
            <div className="overlap-group3-4" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <div className="text-5">
                <div className="step-3 poppins-semi-bold-black-20px">{step3}</div>
                <div className="flex-row-18 poppins-normal-black-16px">
                  <div className="task-done-2">{taskDone}</div>
                  <div className="text-5-1">{text3}</div>
                </div>
              </div>
              <div className="overlap-group11-1" style={{ backgroundImage: `url(${overlapGroup11})` }}>
                <img className="path-1003-2" src={path1003} alt="Path 1003" />
              </div>
            </div>
            <div className="overlap-group1-3">
              <img className="rectangle-11" src={rectangle} alt="Rectangle" />
              <div className="ridhotijangmailco-18 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo1}</div>
              <div className="rectangle-12"></div>
              <div className="ridhotijangmailco-19 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo2}</div>
              <div className="rectangle-13"></div>
              <div className="ridhotijangmailco-20 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo3}</div>
              <div className="rectangle-14"></div>
              <div className="ridhotijangmailco-21 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo4}</div>
              <div className="profile-update-2 poppins-semi-bold-white-17px">{profileUpdate}</div>
              <div className="professional-experience poppins-semi-bold-black-50px">{professionalExperience}</div>
            </div>
          </div>
          <div className="overlap-group-container-9">
            <div className="overlap-group2-4">
              <div className="add-entry-1 poppins-normal-white-16px">{addEntry}</div>
            </div>
            <div className="overlap-group4-6">
              <div className="ridhotijangmailco-22 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo5}</div>
            </div>
            <div className="overlap-group9-3">
              <div className="ridhotijangmailco-23 sfprotext-regular-normal-white-20px">{ridhoTijanGmailCo6}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-container-10">
          <div className="overlap-group5-4">
            <div className="x-11 sfprotext-regular-normal-white-20px">{x5}</div>
            <Calendar {...calendar1Props} />
          </div>
          <div className="overlap-group8-3">
            <div className="x-12 sfprotext-regular-normal-white-20px">{x11}</div>
            <Calendar {...calendar2Props} />
          </div>
          <div className="overlap-group7-3">
            <div className="x-13 sfprotext-regular-normal-white-20px">{x17}</div>
          </div>
        </div>
        <div className="overlap-group-container-11">
          <div className="overlap-group6-3">
            <div className="group-17"></div>
            <div className="never-received-or-fo-14 sfprotext-regular-normal-white-27px">{neverReceivedOrFo1}</div>
          </div>
          <div className="overlap-group10-1">
            <Group />
            <div className="never-received-or-fo-15 sfprotext-regular-normal-white-27px">{neverReceivedOrFo2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalExperienceStep3;
