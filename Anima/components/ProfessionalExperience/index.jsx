import React from "react";
import Group14 from "../Group14";
import Group102 from "../Group102";
import "./ProfessionalExperience.css";

function ProfessionalExperience(props) {
  const {
    overlapGroup,
    nameOfCompany,
    position,
    place,
    fieldOfPractice,
    reportingTo,
    location,
    startEndDate,
    barakaTimothyProfe,
    approve,
    ddMmYear,
    acts_Logo,
    group142Props,
    group143Props,
    group144Props,
    group1022Props,
    group1023Props,
    group1024Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="professional-experience-1 screen">
        <div className="overlap-group-7" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="rounded-rectangle-1-copy-15-1"></div>
          <div className="rectangle-2-copy-15-2"></div>
          <div className="device-that-you-can-use-1"></div>
          <div className="name-ofcompany poppins-semi-bold-black-20px">{nameOfCompany}</div>
          <div className="position poppins-semi-bold-black-20px">{position}</div>
          <div className="place poppins-semi-bold-black-20px">{place}</div>
          <div className="field-of-practice poppins-semi-bold-black-20px">{fieldOfPractice}</div>
          <div className="reporting-to poppins-semi-bold-black-20px">{reportingTo}</div>
          <div className="location poppins-semi-bold-black-20px">{location}</div>
          <div className="start-end-date poppins-semi-bold-black-20px">{startEndDate}</div>
          <Group14 />
          <Group102 />
          <div className="rectangle-2-copy-15-3"></div>
          <p className="baraka-timothyprofe poppins-semi-bold-black-50px">{barakaTimothyProfe}</p>
          <Group14 className={group142Props.className} />
          <Group14 className={group143Props.className} />
          <Group14 className={group144Props.className} />
          <div className="approve-1 poppins-semi-bold-black-20px">{approve}</div>
          <Group102 className={group1022Props.className} />
          <Group102 className={group1023Props.className} />
          <Group102 className={group1024Props.className} />
          <div className="ddmmyear poppins-normal-black-10px">{ddMmYear}</div>
          <img className="acts_logo-10" src={acts_Logo} alt="ACTS_LOGO" />
        </div>
      </div>
    </div>
  );
}

export default ProfessionalExperience;
