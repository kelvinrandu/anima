import React from "react";
import Group414 from "../Group414";
import Search3 from "../Search3";
import Image5 from "../Image5";
import "./CompareScholarships.css";

function CompareScholarships(props) {
  const {
    overlapGroup,
    theChrisBorisFoundation1,
    institutionUnivers1,
    theChrisBorisFoundation2,
    institutionUnivers2,
    adHere,
    search3Props,
    image51Props,
    image52Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="compare-scholarships screen">
        <div className="overlap-group-30" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <Group414 />
          <Search3 search1={search3Props.search1} className={search3Props.className} />
          <div className="overlap-group-container-47">
            <div className="overlap-group3-18">
              <Image5 className={image51Props.className} />
              <div className="tion-container-1">
                <div className="the-chris-boris-foundation-12 poppins-semi-bold-ebony-clay-18px">
                  {theChrisBorisFoundation1}
                </div>
                <p className="institution-univers-12 poppins-normal-ebony-clay-14px">{institutionUnivers1}</p>
              </div>
            </div>
            <div className="overlap-group1-14">
              <Image5 className={image52Props.className} />
              <div className="tion-container-1">
                <div className="the-chris-boris-foundation-12 poppins-semi-bold-ebony-clay-18px">
                  {theChrisBorisFoundation2}
                </div>
                <p className="institution-univers-12 poppins-normal-ebony-clay-14px">{institutionUnivers2}</p>
              </div>
            </div>
            <div className="overlap-group4-18">
              <div className="bg-47"></div>
            </div>
            <div className="overlap-group2-10">
              <div className="ad-here-1 poppins-medium-sizzling-sunrise-25px">{adHere}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareScholarships;
