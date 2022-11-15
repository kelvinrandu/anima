import React from "react";
import Group414 from "../Group414";
import Search3 from "../Search3";
import Image5 from "../Image5";
import "./CompareFunding.css";

function CompareFunding(props) {
  const {
    overlapGroup,
    startupFundingOpportunity1,
    institutionGoFun1,
    startupFundingOpportunity2,
    institutionGoFun2,
    adHere,
    search3Props,
    image51Props,
    image52Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="compare-funding screen">
        <div className="overlap-group-29" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <Group414 />
          <Search3 search1={search3Props.search1} className={search3Props.className} />
          <div className="overlap-group-container-46">
            <div className="overlap-group2-9">
              <Image5 className={image51Props.className} />
              <div className="fun-container">
                <div className="startup-funding-opportunity-2 poppins-semi-bold-ebony-clay-18px">
                  {startupFundingOpportunity1}
                </div>
                <p className="institution-go-fun-2 poppins-normal-ebony-clay-14px">{institutionGoFun1}</p>
              </div>
            </div>
            <div className="overlap-group4-17">
              <Image5 className={image52Props.className} />
              <div className="fun-container">
                <div className="startup-funding-opportunity-2 poppins-semi-bold-ebony-clay-18px">
                  {startupFundingOpportunity2}
                </div>
                <p className="institution-go-fun-2 poppins-normal-ebony-clay-14px">{institutionGoFun2}</p>
              </div>
            </div>
            <div className="overlap-group1-13">
              <div className="bg-43"></div>
            </div>
            <div className="overlap-group3-17">
              <div className="ad-here poppins-medium-sizzling-sunrise-25px">{adHere}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareFunding;
