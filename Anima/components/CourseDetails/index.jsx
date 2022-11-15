import React from "react";
import Group412 from "../Group412";
import Search3 from "../Search3";
import "./CourseDetails.css";

function CourseDetails(props) {
  const {
    overlapGroup,
    levelOfStudy,
    undergraduate,
    polygon2,
    generalAreaOfStudy,
    specificAreaOfStudy,
    modeOfStudy,
    gis,
    polygon9,
    mapping,
    polygon10,
    hybrid,
    polygon11,
    coreUnitsCode11,
    coreUnitsCode12,
    coreUnitsCode13,
    coreUnitsCode14,
    coreUnitsCode15,
    coreUnitsCode16,
    coreUnitsCode17,
    coreUnitsCode18,
    coreUnitsCode19,
    coreUnitsCode110,
    coreUnitsCode111,
    coreUnitsCode112,
    courseDescription,
    admissionRequiremen,
    courseCompletionRequirements,
    address1,
    otherDetails,
    address2,
    group412Props,
    search3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="course-details screen">
        <div className="overlap-group-20" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <Group412 className={group412Props.className} />
          <div className="flex-row-122">
            <div className="flex-row-123">
              <Search3 search1={search3Props.search1} className={search3Props.className} />
              <div className="flex-col-23">
                <div className="level-of-study-7 poppins-normal-suva-gray-20px">{levelOfStudy}</div>
                <div className="overlap-group6-13">
                  <div className="undergraduate-3 poppins-medium-unmellow-yellow-18px">{undergraduate}</div>
                  <img className="polygon-5" src={polygon2} alt="Polygon 2" />
                </div>
              </div>
            </div>
            <div className="flex-col-24">
              <div className="of-study-container poppins-normal-suva-gray-20px">
                <div className="general-area-of-study-1">{generalAreaOfStudy}</div>
                <div className="specific-area-of-study-1">{specificAreaOfStudy}</div>
                <div className="mode-of-study-4">{modeOfStudy}</div>
              </div>
              <div className="overlap-group-container-38 poppins-medium-unmellow-yellow-18px">
                <div className="overlap-group2-8">
                  <div className="gis-1">{gis}</div>
                  <img className="polygon-5" src={polygon9} alt="Polygon 9" />
                </div>
                <div className="overlap-group5-13">
                  <div className="mapping-1">{mapping}</div>
                  <img className="polygon-5" src={polygon10} alt="Polygon 10" />
                </div>
                <div className="overlap-group4-16">
                  <div className="hybrid-14">{hybrid}</div>
                  <img className="polygon-5" src={polygon11} alt="Polygon 11" />
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group-container-39">
            <div className="overlap-group1-12 segoeui-regular-normal-dove-gray-20px">
              <div className="bg-26"></div>
              <div className="bg-27"></div>
              <div className="bg-28"></div>
              <p className="core-unitscode-1">{coreUnitsCode11}</p>
              <p className="core-unitscode-1-1">{coreUnitsCode12}</p>
              <p className="core-unitscode-1-2">{coreUnitsCode13}</p>
              <p className="core-unitscode-1-3">{coreUnitsCode14}</p>
              <p className="core-unitscode-1-4">{coreUnitsCode15}</p>
              <p className="core-unitscode-1-5">{coreUnitsCode16}</p>
              <div className="bg-29"></div>
              <p className="core-unitscode-1-6">{coreUnitsCode17}</p>
              <p className="core-unitscode-1-7">{coreUnitsCode18}</p>
              <p className="core-unitscode-1-8">{coreUnitsCode19}</p>
              <p className="core-unitscode-1-9">{coreUnitsCode110}</p>
              <p className="core-unitscode-1-10">{coreUnitsCode111}</p>
              <p className="core-unitscode-1-11">{coreUnitsCode112}</p>
            </div>
            <div className="overlap-group3-16">
              <div className="overlap-group7-12">
                <div className="course-description-1 poppins-medium-sizzling-sunrise-25px">{courseDescription}</div>
                <p className="admission-requiremen-1 segoeui-regular-normal-dove-gray-20px">{admissionRequiremen}</p>
              </div>
              <div className="course-completion-requirements poppins-medium-sizzling-sunrise-25px">
                {courseCompletionRequirements}
              </div>
              <p className="address-13 segoeui-regular-normal-white-20px">{address1}</p>
              <div className="other-details poppins-medium-sizzling-sunrise-25px">{otherDetails}</div>
              <p className="address-14 segoeui-regular-normal-white-20px">{address2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
