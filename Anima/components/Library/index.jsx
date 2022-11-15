import React from "react";
import Group41 from "../Group41";
import MainMenu from "../MainMenu";
import Dashboard from "../Dashboard";
import Group2 from "../Group2";
import BarChart from "../BarChart";
import UsersThreeFilled from "../UsersThreeFilled";
import SettingsFilled from "../SettingsFilled";
import TryPremium from "../TryPremium";
import Group902 from "../Group902";
import Search from "../Search";
import SlidersHFilled from "../SlidersHFilled";
import Group959 from "../Group959";
import DorisSanders from "../DorisSanders";
import Pagination from "../Pagination";
import "./Library.css";

function Library(props) {
  const {
    overlapGroup4,
    overlapGroup5,
    path1,
    path2,
    newToActs,
    signIn,
    line11,
    line12,
    line13,
    home,
    dashboard,
    studyHub,
    overlapGroup11,
    book,
    library,
    combinedShape1,
    resources,
    combinedShape2,
    conferencing,
    community,
    reports,
    wallet,
    setting,
    support,
    image,
    baraka,
    customRange,
    play1,
    play2,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    play3,
    group41Props,
    mainMenuProps,
    dashboardProps,
    group2Props,
    barChartProps,
    usersThreeFilled1Props,
    usersThreeFilled2Props,
    tryPremiumProps,
    group902Props,
    searchProps,
    slidersHFilledProps,
    group9591Props,
    group9592Props,
    dorisSandersProps,
    group9593Props,
    paginationProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="library-14 screen">
        <div className="overlap-group4-10" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <Group41 className={group41Props.className} group1Props={group41Props.group1Props} />
          <div className="overlap-group-container-27">
            <div className="overlap-group5-7" style={{ backgroundImage: `url(${overlapGroup5})` }}>
              <div className="overlap-group-container-28">
                <div className="path-container-21">
                  <img className="path-1-32" src={path1} alt="Path 1" />
                  <img className="path-2-6" src={path2} alt="Path 2" />
                </div>
                <div className="overlap-group12-4">
                  <div className="new-to-acts-5 circularstdbold-regular-bold-white-30px">{newToActs}</div>
                  <div className="sign-in-5 circularstdbook-regular-normal-white-16px">{signIn}</div>
                  <div className="line-container-20">
                    <img className="line-11-19" src={line11} alt="Line 11" />
                    <img className="line-12-19" src={line12} alt="Line 12" />
                    <img className="line-13-19" src={line13} alt="Line 13" />
                  </div>
                </div>
              </div>
              <MainMenu className={mainMenuProps.className} />
              <div className="flex-row-63">
                <div className="home-5" style={{ backgroundImage: `url(${home})` }}></div>
                <div className="dashboard-19 poppins-medium-suva-gray-20px">{dashboard}</div>
              </div>
              <div className="flex-row-64">
                <Dashboard
                  path11={dashboardProps.path11}
                  path12={dashboardProps.path12}
                  path14={dashboardProps.path14}
                  path13={dashboardProps.path13}
                  className={dashboardProps.className}
                />
                <div className="study-hub-7 poppins-medium-suva-gray-20px">{studyHub}</div>
              </div>
              <div className="overlap-group11-5" style={{ backgroundImage: `url(${overlapGroup11})` }}>
                <div className="book-5" style={{ backgroundImage: `url(${book})` }}></div>
                <div className="library-15 poppins-medium-black-20px">{library}</div>
              </div>
              <div className="flex-row-65">
                <img className="combined-shape-10" src={combinedShape1} alt="Combined Shape" />
                <div className="resources-5 poppins-medium-suva-gray-20px">{resources}</div>
              </div>
              <div className="flex-row-66">
                <img className="combined-shape-11" src={combinedShape2} alt="Combined Shape" />
                <div className="conferencing-5 poppins-medium-suva-gray-20px">{conferencing}</div>
              </div>
              <div className="flex-row-67">
                <Group2 user1Props={group2Props.user1Props} user2Props={group2Props.user2Props} />
                <div className="community-12 poppins-medium-suva-gray-20px">{community}</div>
              </div>
              <div className="flex-row-68">
                <BarChart className={barChartProps.className} />
                <div className="reports-5 poppins-medium-suva-gray-20px">{reports}</div>
              </div>
              <div className="flex-row-69">
                <UsersThreeFilled src={usersThreeFilled1Props.src} />
                <div className="wallet-5 poppins-medium-suva-gray-20px">{wallet}</div>
              </div>
              <div className="setting-container-4">
                <SettingsFilled />
                <div className="setting-5 poppins-medium-suva-gray-20px">{setting}</div>
              </div>
              <div className="flex-row-70">
                <UsersThreeFilled src={usersThreeFilled2Props.src} className={usersThreeFilled2Props.className} />
                <div className="support-5 poppins-medium-suva-gray-20px">{support}</div>
              </div>
              <div className="image-44" style={{ backgroundImage: `url(${image})` }}></div>
              <div className="baraka-9 poppins-medium-white-18px">{baraka}</div>
              <TryPremium
                logOut={tryPremiumProps.logOut}
                className={tryPremiumProps.className}
                arrowProps={tryPremiumProps.arrowProps}
              />
            </div>
            <div className="flex-row-71">
              <div className="flex-col-13">
                <Group902 studyHub={group902Props.studyHub} className={group902Props.className} />
                <div className="flex-row-72">
                  <div className="group-957">
                    <Search search1={searchProps.search1} className={searchProps.className} />
                  </div>
                  <SlidersHFilled src={slidersHFilledProps.src} />
                </div>
                <div className="flex-row-73">
                  <div className="overlap-group-container-29">
                    <div className="message-container">
                      <div className="message-6">
                        <div className="custom-range poppins-normal-white-16px">{customRange}</div>
                      </div>
                      <div className="message-7"></div>
                      <div className="message-8"></div>
                    </div>
                    <div className="overlap-group7-6">
                      <Group959
                        expand21Props={group9591Props.expand21Props}
                        expand22Props={group9591Props.expand22Props}
                      />
                      <img className="icon-play" src={play1} alt="icon-play" />
                    </div>
                  </div>
                  <div className="overlap-group10-4">
                    <Group959
                      expand21Props={group9592Props.expand21Props}
                      expand22Props={group9592Props.expand22Props}
                    />
                    <img className="icon-play" src={play2} alt="icon-play" />
                  </div>
                </div>
                <p className="title-thermodynamic">
                  <span className="segoeui-bold-dove-gray-20px">{spanText1}</span>
                  <span className="segoeui-regular-normal-dove-gray-20px">{spanText2}</span>
                  <span className="segoeui-bold-dove-gray-20px">{spanText3}</span>
                  <span className="segoeui-regular-normal-dove-gray-20px">{spanText4}</span>
                </p>
              </div>
              <div className="flex-col-14">
                <DorisSanders
                  className={dorisSandersProps.className}
                  phoneProps={dorisSandersProps.phoneProps}
                  envelopeProps={dorisSandersProps.envelopeProps}
                />
                <div className="overlap-group8-7">
                  <Group959 expand21Props={group9593Props.expand21Props} expand22Props={group9593Props.expand22Props} />
                  <img className="icon-play" src={play3} alt="icon-play" />
                </div>
                <Pagination
                  className={paginationProps.className}
                  previous1Props={paginationProps.previous1Props}
                  previous2Props={paginationProps.previous2Props}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
