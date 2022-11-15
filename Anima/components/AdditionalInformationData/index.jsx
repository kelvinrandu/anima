import React from "react";
import Group14 from "../Group14";
import Group21 from "../Group21";
import Group35 from "../Group35";
import Group22 from "../Group22";
import "./AdditionalInformationData.css";

function AdditionalInformationData(props) {
  const {
    overlapGroup1,
    date,
    barakaTimothyAddit,
    approve,
    acts_Logo,
    group142Props,
    group143Props,
    group144Props,
    group221Props,
    group222Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="additional-information-data screen">
        <div className="overlap-group1-5" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <div className="rounded-rectangle-1-copy-15-2"></div>
          <div className="rectangle-2-copy-15-4"></div>
          <div className="device-that-you-can-use-2"></div>
          <Group14 />
          <div className="date poppins-normal-black-20px">{date}</div>
          <Group21 />
          <Group35 />
          <div className="rectangle-2-copy-15-5"></div>
          <div className="baraka-timothyaddit poppins-semi-bold-black-50px">{barakaTimothyAddit}</div>
          <Group14 className={group142Props.className} />
          <Group14 className={group143Props.className} />
          <Group14 className={group144Props.className} />
          <div className="approve-2 poppins-semi-bold-black-20px">{approve}</div>
          <Group22 />
          <Group22 className={group221Props.className} />
          <Group22 className={group222Props.className} />
          <img className="acts_logo-11" src={acts_Logo} alt="ACTS_LOGO" />
        </div>
      </div>
    </div>
  );
}

export default AdditionalInformationData;
