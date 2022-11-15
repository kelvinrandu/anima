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
import Expand from "../Expand";
import "./LibraryPlayVideo.css";

function LibraryPlayVideo(props) {
  const {
    overlapGroup5,
    overlapGroup6,
    path1,
    path2,
    newToActs,
    signIn,
    line111,
    line121,
    line131,
    home,
    dashboard,
    studyHub,
    overlapGroup9,
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
    line112,
    line122,
    line132,
    play,
    group41Props,
    mainMenuProps,
    dashboardProps,
    group2Props,
    barChartProps,
    usersThreeFilled1Props,
    usersThreeFilled2Props,
    tryPremiumProps,
    group902Props,
    expand1Props,
    expand2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="library-play-video screen">
        <div className="overlap-group5-8" style={{ backgroundImage: `url(${overlapGroup5})` }}>
          <Group41 className={group41Props.className} group1Props={group41Props.group1Props} />
          <div className="flex-row-74">
            <div className="overlap-group6-7" style={{ backgroundImage: `url(${overlapGroup6})` }}>
              <div className="overlap-group-container-30">
                <div className="path-container-24">
                  <img className="path-1-33" src={path1} alt="Path 1" />
                  <img className="path-2-7" src={path2} alt="Path 2" />
                </div>
                <div className="overlap-group8-8">
                  <div className="new-to-acts-6 circularstdbold-regular-bold-white-30px">{newToActs}</div>
                  <div className="sign-in-6 circularstdbook-regular-normal-white-16px">{signIn}</div>
                  <div className="line-container-21">
                    <img className="line-11-20" src={line111} alt="Line 11" />
                    <img className="line-12-20" src={line121} alt="Line 12" />
                    <img className="line-13-20" src={line131} alt="Line 13" />
                  </div>
                </div>
              </div>
              <MainMenu className={mainMenuProps.className} />
              <div className="flex-row-75">
                <div className="home-6" style={{ backgroundImage: `url(${home})` }}></div>
                <div className="dashboard-20 poppins-medium-suva-gray-20px">{dashboard}</div>
              </div>
              <div className="flex-row-76">
                <Dashboard
                  path11={dashboardProps.path11}
                  path12={dashboardProps.path12}
                  path14={dashboardProps.path14}
                  path13={dashboardProps.path13}
                  className={dashboardProps.className}
                />
                <div className="study-hub-8 poppins-medium-suva-gray-20px">{studyHub}</div>
              </div>
              <div className="overlap-group9-6" style={{ backgroundImage: `url(${overlapGroup9})` }}>
                <div className="book-6" style={{ backgroundImage: `url(${book})` }}></div>
                <div className="library-16 poppins-medium-black-20px">{library}</div>
              </div>
              <div className="flex-row-77">
                <img className="combined-shape-12" src={combinedShape1} alt="Combined Shape" />
                <div className="resources-6 poppins-medium-suva-gray-20px">{resources}</div>
              </div>
              <div className="flex-row-78">
                <img className="combined-shape-13" src={combinedShape2} alt="Combined Shape" />
                <div className="conferencing-6 poppins-medium-suva-gray-20px">{conferencing}</div>
              </div>
              <div className="flex-row-79">
                <Group2 user1Props={group2Props.user1Props} user2Props={group2Props.user2Props} />
                <div className="community-13 poppins-medium-suva-gray-20px">{community}</div>
              </div>
              <div className="flex-row-80">
                <BarChart className={barChartProps.className} />
                <div className="reports-6 poppins-medium-suva-gray-20px">{reports}</div>
              </div>
              <div className="flex-row-81">
                <UsersThreeFilled src={usersThreeFilled1Props.src} />
                <div className="wallet-6 poppins-medium-suva-gray-20px">{wallet}</div>
              </div>
              <div className="setting-container-5">
                <SettingsFilled />
                <div className="setting-6 poppins-medium-suva-gray-20px">{setting}</div>
              </div>
              <div className="flex-row-82">
                <UsersThreeFilled src={usersThreeFilled2Props.src} className={usersThreeFilled2Props.className} />
                <div className="support-6 poppins-medium-suva-gray-20px">{support}</div>
              </div>
              <div className="image-45" style={{ backgroundImage: `url(${image})` }}></div>
              <div className="baraka-10 poppins-medium-white-18px">{baraka}</div>
              <TryPremium
                logOut={tryPremiumProps.logOut}
                className={tryPremiumProps.className}
                arrowProps={tryPremiumProps.arrowProps}
              />
            </div>
            <div className="flex-col-15">
              <div className="flex-row-83">
                <Group902 studyHub={group902Props.studyHub} className={group902Props.className} />
                <div className="arrow-2">
                  <div className="line-container-22">
                    <img className="line-11-21" src={line112} alt="Line 11" />
                    <img className="line-12-21" src={line122} alt="Line 12" />
                    <img className="line-13-21" src={line132} alt="Line 13" />
                  </div>
                </div>
              </div>
              <div className="overlap-group7-7">
                <div className="group-959">
                  <Expand path2={expand1Props.path2} path3={expand1Props.path3} path4={expand1Props.path4} />
                  <Expand
                    path2={expand2Props.path2}
                    path3={expand2Props.path3}
                    path4={expand2Props.path4}
                    className={expand2Props.className}
                  />
                </div>
                <img className="play" src={play} alt="Play" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LibraryPlayVideo;
