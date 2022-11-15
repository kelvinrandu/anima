import React from "react";
import Group41 from "../Group41";
import AlignLeft1 from "../AlignLeft1";
import MainMenu from "../MainMenu";
import Dashboard from "../Dashboard";
import Group2 from "../Group2";
import BarChart from "../BarChart";
import UsersThreeFilled from "../UsersThreeFilled";
import SettingsFilled from "../SettingsFilled";
import TryPremium from "../TryPremium";
import "./MenuButton.css";

function MenuButton(props) {
  const {
    overlapGroup4,
    group40,
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
    anonymous,
    group41Props,
    alignLeft1Props,
    dashboardProps,
    group2Props,
    usersThreeFilled1Props,
    usersThreeFilled2Props,
    tryPremiumProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-button screen">
        <div className="overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <div className="flex-row">
            <Group41 group1Props={group41Props.group1Props} />
            <AlignLeft1 className={alignLeft1Props.className} />
          </div>
          <div className="group-40" style={{ backgroundImage: `url(${group40})` }}>
            <div className="overlap-group-container">
              <div className="path-container">
                <img className="path-1-1" src={path1} alt="Path 1" />
                <img className="path-2-1" src={path2} alt="Path 2" />
              </div>
              <div className="overlap-group3">
                <div className="new-to-acts circularstdbold-regular-bold-white-30px">{newToActs}</div>
                <div className="sign-in circularstdbook-regular-normal-white-16px">{signIn}</div>
                <div className="line-container">
                  <img className="line-11" src={line11} alt="Line 11" />
                  <img className="line-12" src={line12} alt="Line 12" />
                  <img className="line-13" src={line13} alt="Line 13" />
                </div>
              </div>
            </div>
            <MainMenu />
            <div className="flex-row-1">
              <div className="home" style={{ backgroundImage: `url(${home})` }}></div>
              <div className="dashboard poppins-medium-suva-gray-20px">{dashboard}</div>
            </div>
            <div className="flex-row-2">
              <Dashboard
                path11={dashboardProps.path11}
                path12={dashboardProps.path12}
                path14={dashboardProps.path14}
                path13={dashboardProps.path13}
              />
              <div className="study-hub poppins-medium-suva-gray-20px">{studyHub}</div>
            </div>
            <div className="flex-row-3">
              <div className="book" style={{ backgroundImage: `url(${book})` }}></div>
              <div className="library-7 poppins-medium-suva-gray-20px">{library}</div>
            </div>
            <div className="flex-row-4">
              <img className="combined-shape" src={combinedShape1} alt="Combined Shape" />
              <div className="resources poppins-medium-suva-gray-20px">{resources}</div>
            </div>
            <div className="flex-row-5">
              <img className="combined-shape-1" src={combinedShape2} alt="Combined Shape" />
              <div className="conferencing poppins-medium-suva-gray-20px">{conferencing}</div>
            </div>
            <div className="flex-row-6">
              <Group2 user1Props={group2Props.user1Props} user2Props={group2Props.user2Props} />
              <div className="community-7 poppins-medium-suva-gray-20px">{community}</div>
            </div>
            <div className="flex-row-7">
              <BarChart />
              <div className="reports poppins-medium-suva-gray-20px">{reports}</div>
            </div>
            <div className="flex-row-8">
              <UsersThreeFilled src={usersThreeFilled1Props.src} />
              <div className="wallet poppins-medium-suva-gray-20px">{wallet}</div>
            </div>
            <div className="setting-container">
              <SettingsFilled />
              <div className="setting poppins-medium-suva-gray-20px">{setting}</div>
            </div>
            <div className="flex-row-9">
              <UsersThreeFilled src={usersThreeFilled2Props.src} className={usersThreeFilled2Props.className} />
              <div className="support poppins-medium-suva-gray-20px">{support}</div>
            </div>
            <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="anonymous poppins-medium-white-18px">{anonymous}</div>
            <TryPremium logOut={tryPremiumProps.logOut} arrowProps={tryPremiumProps.arrowProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuButton;
