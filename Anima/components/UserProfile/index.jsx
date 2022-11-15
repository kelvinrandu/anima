import React from "react";
import Group14 from "../Group14";
import Group10 from "../Group10";
import Group102 from "../Group102";
import Group35 from "../Group35";
import Group21 from "../Group21";
import Group36 from "../Group36";
import Image from "../Image";
import "./UserProfile.css";

function UserProfile(props) {
  const {
    overlapGroup1,
    name1,
    baraka,
    amayi,
    date1,
    male,
    name2,
    place1,
    place2,
    barakaTimothyUserProfile,
    firstName,
    surname,
    otherName,
    dateOfBirth,
    gender,
    country,
    state,
    city,
    approve,
    institution,
    areaOfStudy,
    gradeScore,
    levelOfStudy,
    specificCertificate,
    majorSpeciality,
    modeOfStudy,
    nameOfCompany,
    position,
    place3,
    fieldOfPractice,
    reportingTo,
    location,
    startEndDate,
    ddMmYear,
    date2,
    acts_Logo,
    group141Props,
    group141Props2,
    group142Props,
    group143Props,
    group361Props,
    group144Props,
    group145Props,
    group146Props,
    group147Props,
    group362Props,
    group363Props,
    group363Props2,
    group361Props2,
    group362Props2,
    group363Props3,
    group361Props3,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="user-profile screen">
        <div className="overlap-group1-7" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <div className="rounded-rectangle-1-copy-15-3"></div>
          <div className="rectangle-2-copy-15-6"></div>
          <div className="device-that-you-can-use-3"></div>
          <Group14 className={group141Props.className} />
          <div className="group-21-3 poppins-normal-black-20px">
            <div className="name">{name1}</div>
            <div className="baraka-5">{baraka}</div>
            <div className="amayi">{amayi}</div>
            <div className="date-2">{date1}</div>
            <div className="male">{male}</div>
            <div className="name-1">{name2}</div>
            <div className="place-1">{place1}</div>
            <div className="place-2">{place2}</div>
          </div>
          <div className="rectangle-2-copy-15-7"></div>
          <p className="baraka-timothy-user-profile poppins-semi-bold-black-50px">{barakaTimothyUserProfile}</p>
          <Group14 className={group141Props2.className} />
          <Group14 className={group142Props.className} />
          <Group14 className={group143Props.className} />
          <div className="group-25-1 poppins-semi-bold-black-20px">
            <div className="firstname">{firstName}</div>
            <div className="surname">{surname}</div>
            <div className="othername">{otherName}</div>
            <div className="date-ofbirth">{dateOfBirth}</div>
            <div className="gender">{gender}</div>
            <div className="country">{country}</div>
            <div className="state">{state}</div>
            <div className="city">{city}</div>
            <div className="approve-3">{approve}</div>
          </div>
          <div className="group-27-2 poppins-semi-bold-black-20px">
            <div className="institution-8">{institution}</div>
            <div className="area-of-study-3">{areaOfStudy}</div>
            <div className="grade-score-1">{gradeScore}</div>
            <div className="level-of-study-3">{levelOfStudy}</div>
            <div className="specific-certificate-1">{specificCertificate}</div>
            <div className="major-speciality-3">{majorSpeciality}</div>
            <div className="mode-of-study-1">{modeOfStudy}</div>
          </div>
          <Group10 className={group361Props.className} />
          <div className="rectangle-2-copy-15-8"></div>
          <Group14 className={group144Props.className} />
          <Group14 className={group145Props.className} />
          <div className="rectangle-2-copy-15-9"></div>
          <Group14 className={group146Props.className} />
          <Group14 className={group147Props.className} />
          <div className="name-ofcompany-1 poppins-semi-bold-black-20px">{nameOfCompany}</div>
          <div className="position-1 poppins-semi-bold-black-20px">{position}</div>
          <div className="place-3 poppins-semi-bold-black-20px">{place3}</div>
          <div className="field-of-practice-1 poppins-semi-bold-black-20px">{fieldOfPractice}</div>
          <div className="reporting-to-1 poppins-semi-bold-black-20px">{reportingTo}</div>
          <div className="location-1 poppins-semi-bold-black-20px">{location}</div>
          <div className="start-end-date-1 poppins-semi-bold-black-20px">{startEndDate}</div>
          <div className="ddmmyear-3 poppins-normal-black-10px">{ddMmYear}</div>
          <Group102 className={group362Props.className} />
          <Group35 className={group363Props.className} />
          <Group21 className={group363Props2.className} />
          <div className="date-3 poppins-normal-black-20px">{date2}</div>
          <Group36 />
          <Group36 className={group361Props2.className} />
          <Group36 className={group362Props2.className} />
          <Group36 className={group363Props3.className} />
          <Image className={group361Props3.className} />
          <img className="acts_logo-12" src={acts_Logo} alt="ACTS_LOGO" />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
