import React from "react";
import Option from "../Option";
import "./CustomSize3.css";

function CustomSize3(props) {
  const {
    image,
    name,
    nairobiKenya,
    emailTimothyActsCom,
    institution,
    areaOfStudy1,
    gradeScore,
    levelOfStudy1,
    specificCertificate,
    majorSpeciality1,
    modeOfStudy,
    nameOfCompany,
    position,
    place,
    fieldOfPractice,
    reportingTo,
    location,
    startEndDate,
    preferredInstitution,
    areaOfStudy2,
    preferredCertificate,
    levelOfStudy2,
    majorSpeciality2,
    preferredStartDate,
    optionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="custom-size-3 screen">
        <div className="overlap-group1-10">
          <Option className={optionProps.className} />
          <div className="image-46" style={{ backgroundImage: `url(${image})` }}>
            <div className="active-12"></div>
          </div>
        </div>
        <div className="overlap-group2-6">
          <div className="name-9 poppins-semi-bold-black-50px">{name}</div>
          <div className="nairobi-kenya-2 poppins-semi-bold-black-50px">{nairobiKenya}</div>
          <div className="email-timothyactscom poppins-normal-black-20px">{emailTimothyActsCom}</div>
        </div>
        <div className="group-container-3 poppins-semi-bold-black-20px">
          <div className="group-27-4">
            <div className="institution-9">{institution}</div>
            <div className="area-of-study-4">{areaOfStudy1}</div>
            <div className="grade-score-2">{gradeScore}</div>
            <div className="level-of-study-4">{levelOfStudy1}</div>
            <div className="specific-certificate-2">{specificCertificate}</div>
            <div className="major-speciality-4">{majorSpeciality1}</div>
            <div className="mode-of-study-2">{modeOfStudy}</div>
          </div>
          <div className="group-976">
            <div className="name-of-company">{nameOfCompany}</div>
            <div className="group-976-item">{position}</div>
            <div className="place-5">{place}</div>
            <div className="field-of-practice-2">{fieldOfPractice}</div>
            <div className="group-976-item">{reportingTo}</div>
            <div className="group-976-item">{location}</div>
            <div className="group-976-item">{startEndDate}</div>
          </div>
          <div className="group-35-2 poppins-semi-bold-black-20px">
            <div className="overlap-group-18">
              <div className="preferred-institution">{preferredInstitution}</div>
              <div className="area-of-study-5">{areaOfStudy2}</div>
              <div className="preferred-certificate">{preferredCertificate}</div>
              <div className="level-of-study-5">{levelOfStudy2}</div>
            </div>
            <div className="major-speciality-5">{majorSpeciality2}</div>
            <div className="preferred-start-date">{preferredStartDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomSize3;
