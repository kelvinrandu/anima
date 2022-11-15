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
import Group903 from "../Group903";
import Pagination from "../Pagination";
import DorisSanders from "../DorisSanders";
import Search from "../Search";
import "./StudyHub1.css";

function StudyHub1(props) {
  const {
    overlapGroup9,
    overlapGroup10,
    path1,
    path2,
    newToActs,
    signIn,
    line11,
    line12,
    line13,
    home,
    dashboard,
    overlapGroup13,
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
    baraka,
    unitTitle,
    unitCode,
    instructor,
    place,
    notification,
    group41Props,
    mainMenuProps,
    dashboardProps,
    group2Props,
    barChartProps,
    usersThreeFilled1Props,
    usersThreeFilled2Props,
    tryPremiumProps,
    group902Props,
    group9031Props,
    group9032Props,
    group9033Props,
    group9034Props,
    paginationProps,
    dorisSandersProps,
    searchProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="study-hub-1-1 screen">
        <div className="overlap-group9-4" style={{ backgroundImage: `url(${overlapGroup9})` }}>
          <Group41 className={group41Props.className} group1Props={group41Props.group1Props} />
          <div className="overlap-group-container-19">
            <div className="overlap-group10-3" style={{ backgroundImage: `url(${overlapGroup10})` }}>
              <div className="overlap-group-container-20">
                <div className="path-container-15">
                  <img className="path-1-29" src={path1} alt="Path 1" />
                  <img className="path-2-3" src={path2} alt="Path 2" />
                </div>
                <div className="overlap-group12-2">
                  <div className="new-to-acts-2 circularstdbold-regular-bold-white-30px">{newToActs}</div>
                  <div className="sign-in-2 circularstdbook-regular-normal-white-16px">{signIn}</div>
                  <div className="line-container-17">
                    <img className="line-11-16" src={line11} alt="Line 11" />
                    <img className="line-12-16" src={line12} alt="Line 12" />
                    <img className="line-13-16" src={line13} alt="Line 13" />
                  </div>
                </div>
              </div>
              <MainMenu className={mainMenuProps.className} />
              <div className="flex-row-40">
                <div className="home-2" style={{ backgroundImage: `url(${home})` }}></div>
                <div className="dashboard-16 poppins-medium-suva-gray-20px">{dashboard}</div>
              </div>
              <div className="overlap-group13-2" style={{ backgroundImage: `url(${overlapGroup13})` }}>
                <Dashboard
                  path11={dashboardProps.path11}
                  path12={dashboardProps.path12}
                  path14={dashboardProps.path14}
                  path13={dashboardProps.path13}
                  className={dashboardProps.className}
                />
                <div className="study-hub-2 poppins-medium-black-20px">{studyHub}</div>
              </div>
              <div className="flex-row-41">
                <div className="book-2" style={{ backgroundImage: `url(${book})` }}></div>
                <div className="library-9 poppins-medium-suva-gray-20px">{library}</div>
              </div>
              <div className="flex-row-42">
                <img className="combined-shape-4" src={combinedShape1} alt="Combined Shape" />
                <div className="resources-2 poppins-medium-suva-gray-20px">{resources}</div>
              </div>
              <div className="flex-row-43">
                <img className="combined-shape-5" src={combinedShape2} alt="Combined Shape" />
                <div className="conferencing-2 poppins-medium-suva-gray-20px">{conferencing}</div>
              </div>
              <div className="flex-row-44">
                <Group2 user1Props={group2Props.user1Props} user2Props={group2Props.user2Props} />
                <div className="community-9 poppins-medium-suva-gray-20px">{community}</div>
              </div>
              <div className="flex-row-45">
                <BarChart className={barChartProps.className} />
                <div className="reports-2 poppins-medium-suva-gray-20px">{reports}</div>
              </div>
              <div className="flex-row-46">
                <UsersThreeFilled src={usersThreeFilled1Props.src} />
                <div className="wallet-2 poppins-medium-suva-gray-20px">{wallet}</div>
              </div>
              <div className="setting-container-2">
                <SettingsFilled />
                <div className="setting-2 poppins-medium-suva-gray-20px">{setting}</div>
              </div>
              <div className="flex-row-47">
                <UsersThreeFilled src={usersThreeFilled2Props.src} className={usersThreeFilled2Props.className} />
                <div className="support-2 poppins-medium-suva-gray-20px">{support}</div>
              </div>
              <div className="image-5" style={{ backgroundImage: `url(${image})` }}></div>
              <div className="baraka-6 poppins-medium-white-18px">{baraka}</div>
              <TryPremium
                logOut={tryPremiumProps.logOut}
                className={tryPremiumProps.className}
                arrowProps={tryPremiumProps.arrowProps}
              />
            </div>
            <div className="overlap-group11-3">
              <div className="rounded-rectangle-1-copy-15-4"></div>
              <div className="rectangle-2-copy-15-10"></div>
              <div className="device-that-you-can-use-5"></div>
              <div className="rectangle-2-copy-15-11"></div>
              <Group902 studyHub={group902Props.studyHub} />
              <div className="group-27-3 poppins-semi-bold-black-20px">
                <div className="unit-title">{unitTitle}</div>
                <div className="unit-code">{unitCode}</div>
                <div className="instructor">{instructor}</div>
                <div className="place-4">{place}</div>
                <div className="notification">{notification}</div>
              </div>
              <Group903 />
              <Group903 className={group9031Props.className} />
              <Group903 className={group9032Props.className} />
              <Group903 className={group9033Props.className} />
              <Group903 className={group9034Props.className} />
              <Pagination
                previous1Props={paginationProps.previous1Props}
                previous2Props={paginationProps.previous2Props}
              />
              <DorisSanders
                className={dorisSandersProps.className}
                phoneProps={dorisSandersProps.phoneProps}
                envelopeProps={dorisSandersProps.envelopeProps}
              />
              <Search search1={searchProps.search1} className={searchProps.className} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyHub1;
