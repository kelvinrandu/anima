import React from "react";
import Image5 from "../Image5";
import Group5 from "../Group5";
import "./Group966.css";

function Group966(props) {
  const { className, image5Props } = props;

  return (
    <div className={`group-9-2-1 ${className || ""}`}>
      <div className="overlap-group-25">
        <div className="bg-35"></div>
        <p className="institution-go-fun-1 poppins-normal-ebony-clay-14px">
          Institution - Go Fund Africa
          <br />
          Location: Nairobi
        </p>
        <div className="startup-funding-opportunity-1 poppins-semi-bold-ebony-clay-18px">
          Startup Funding Opportunity
        </div>
        <Image5 className={image5Props.className} />
        <div className="grunteligibility-east-africa-1 poppins-normal-ebony-clay-14px">
          Grunt
          <br />
          Eligibility: East Africa
        </div>
        <div className="type-of-funding-2 poppins-semi-bold-ebony-clay-18px">Type of Funding</div>
        <p className="september-30th-2022-1 poppins-normal-ebony-clay-14px">
          September 30th 2022
          <br />
          Eligible Entities: NGO
        </p>
        <div className="application-deadline-1 poppins-semi-bold-ebony-clay-18px">Application&nbsp;&nbsp;Deadline</div>
        <div className="area-of-funding-agricultur-1 poppins-normal-ebony-clay-14px">Area of Funding: Agricultur</div>
        <div className="amount-10000-1 poppins-semi-bold-ebony-clay-18px">Amount: $10,000</div>
      </div>
      <div className="overlap-group-container-45">
        <div className="overlap-group-26">
          <div className="never-received-or-fo-43 sfprotext-regular-normal-white-8px">Details</div>
        </div>
        <div className="overlap-group-27">
          <Group5 />
          <div className="never-received-or-fo-44 sfprotext-regular-normal-white-8px">Compare</div>
        </div>
        <div className="overlap-group-28">
          <div className="never-received-or-fo-45 sfprotext-regular-normal-white-8px">Apply</div>
        </div>
      </div>
    </div>
  );
}

export default Group966;
