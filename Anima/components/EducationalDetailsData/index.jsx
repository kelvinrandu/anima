import React from "react";
import Group14 from "../Group14";
import Group10 from "../Group10";
import "./EducationalDetailsData.css";

function EducationalDetailsData(props) {
  const {
    overlapGroup,
    barakaTimothyEducationDetailsData,
    institution,
    areaOfStudy,
    gradeScore,
    levelOfStudy,
    specificCertificate,
    majorSpeciality,
    modeOfStudy,
    approve,
    acts_Logo,
    group102Props,
    group103Props,
    group104Props,
    group142Props,
    group143Props,
    group144Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="educational-details-data screen">
        <div className="overlap-group-5" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="rounded-rectangle-1-copy-15"></div>
          <div className="rectangle-2-copy-15"></div>
          <div className="device-that-you-can-use"></div>
          <Group14 />
          <Group10 />
          <Group10 className={group102Props.className} />
          <Group10 className={group103Props.className} />
          <div className="rectangle-2-copy-15-1"></div>
          <Group10 className={group104Props.className} />
          <div className="baraka-timothyeducation-details-data poppins-semi-bold-black-50px">
            {barakaTimothyEducationDetailsData}
          </div>
          <Group14 className={group142Props.className} />
          <Group14 className={group143Props.className} />
          <Group14 className={group144Props.className} />
          <div className="group-27-1 poppins-semi-bold-black-20px">
            <div className="institution-7">{institution}</div>
            <div className="area-of-study">{areaOfStudy}</div>
            <div className="grade-score">{gradeScore}</div>
            <div className="level-of-study">{levelOfStudy}</div>
            <div className="specific-certificate">{specificCertificate}</div>
            <div className="major-speciality">{majorSpeciality}</div>
            <div className="mode-of-study">{modeOfStudy}</div>
            <div className="approve">{approve}</div>
          </div>
          <img className="acts_logo-9" src={acts_Logo} alt="ACTS_LOGO" />
        </div>
      </div>
    </div>
  );
}

export default EducationalDetailsData;
