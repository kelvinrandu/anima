import React from "react";
import Group41 from "../Group41";
import MainMenu from "../MainMenu";
import Dashboard from "../Dashboard";
import Group2 from "../Group2";
import BarChart from "../BarChart";
import UsersThreeFilled from "../UsersThreeFilled";
import SettingsFilled from "../SettingsFilled";
import TryPremium from "../TryPremium";
import Search from "../Search";
import Calendar from "../Calendar";
import DorisSanders from "../DorisSanders";
import TotalClients from "../TotalClients";
import "./Dashboard2.css";

function Dashboard2(props) {
  const {
    overlapGroup6,
    overlapGroup7,
    path1,
    path2,
    newToActs,
    signIn,
    line111,
    line121,
    line131,
    overlapGroup17,
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
    baraka,
    enrollNow,
    myCourses,
    calendContainer,
    myCalender,
    storyTellingForSocialChange,
    overlapGroup21,
    path1016,
    percent,
    actsSchoolOfComputing,
    path1024,
    bachelorsDegree,
    startDate,
    neverReceivedOrFo1,
    neverReceivedOrFo2,
    line112,
    line122,
    line132,
    completedCourses,
    address1,
    path987,
    adsHere,
    summaryOfAlertsGenerated,
    path35,
    path36,
    union1,
    path988,
    alertsGenerated,
    low,
    medium,
    high,
    courseInProgress,
    address2,
    path1023,
    group41Props,
    mainMenuProps,
    dashboardProps,
    group2Props,
    barChartProps,
    usersThreeFilled1Props,
    usersThreeFilled2Props,
    tryPremiumProps,
    search1Props,
    search2Props,
    calendar1Props,
    calendar2Props,
    dorisSandersProps,
    totalClients1Props,
    totalClients2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashboard-14 screen">
        <div className="overlap-group6-5" style={{ backgroundImage: `url(${overlapGroup6})` }}>
          <Group41 className={group41Props.className} group1Props={group41Props.group1Props} />
          <div className="flex-row-20">
            <div className="overlap-group7-5" style={{ backgroundImage: `url(${overlapGroup7})` }}>
              <div className="overlap-group-container-15">
                <div className="path-container-12">
                  <img className="path-1-28" src={path1} alt="Path 1" />
                  <img className="path-2-2" src={path2} alt="Path 2" />
                </div>
                <div className="overlap-group16-1">
                  <div className="new-to-acts-1 circularstdbold-regular-bold-white-30px">{newToActs}</div>
                  <div className="sign-in-1 circularstdbook-regular-normal-white-16px">{signIn}</div>
                  <div className="line-container-15">
                    <img className="line-11-15" src={line111} alt="Line 11" />
                    <img className="line-12-15" src={line121} alt="Line 12" />
                    <img className="line-13-15" src={line131} alt="Line 13" />
                  </div>
                </div>
              </div>
              <MainMenu className={mainMenuProps.className} />
              <div className="overlap-group17-1" style={{ backgroundImage: `url(${overlapGroup17})` }}>
                <div className="home-1" style={{ backgroundImage: `url(${home})` }}></div>
                <div className="dashboard-15 poppins-medium-black-20px">{dashboard}</div>
              </div>
              <div className="flex-row-21">
                <Dashboard
                  path11={dashboardProps.path11}
                  path12={dashboardProps.path12}
                  path14={dashboardProps.path14}
                  path13={dashboardProps.path13}
                  className={dashboardProps.className}
                />
                <div className="study-hub-1 poppins-medium-suva-gray-20px">{studyHub}</div>
              </div>
              <div className="flex-row-22">
                <div className="book-1" style={{ backgroundImage: `url(${book})` }}></div>
                <div className="library-8 poppins-medium-suva-gray-20px">{library}</div>
              </div>
              <div className="flex-row-23">
                <img className="combined-shape-2" src={combinedShape1} alt="Combined Shape" />
                <div className="resources-1 poppins-medium-suva-gray-20px">{resources}</div>
              </div>
              <div className="flex-row-24">
                <img className="combined-shape-3" src={combinedShape2} alt="Combined Shape" />
                <div className="conferencing-1 poppins-medium-suva-gray-20px">{conferencing}</div>
              </div>
              <div className="flex-row-25">
                <Group2 user1Props={group2Props.user1Props} user2Props={group2Props.user2Props} />
                <div className="community-8 poppins-medium-suva-gray-20px">{community}</div>
              </div>
              <div className="flex-row-26">
                <BarChart className={barChartProps.className} />
                <div className="reports-1 poppins-medium-suva-gray-20px">{reports}</div>
              </div>
              <div className="flex-row-27">
                <UsersThreeFilled src={usersThreeFilled1Props.src} />
                <div className="wallet-1 poppins-medium-suva-gray-20px">{wallet}</div>
              </div>
              <div className="setting-container-1">
                <SettingsFilled />
                <div className="setting-1 poppins-medium-suva-gray-20px">{setting}</div>
              </div>
              <div className="flex-row-28">
                <UsersThreeFilled src={usersThreeFilled2Props.src} className={usersThreeFilled2Props.className} />
                <div className="support-1 poppins-medium-suva-gray-20px">{support}</div>
              </div>
              <div className="image-1" style={{ backgroundImage: `url(${image})` }}></div>
              <div className="baraka poppins-medium-white-18px">{baraka}</div>
              <TryPremium
                logOut={tryPremiumProps.logOut}
                className={tryPremiumProps.className}
                arrowProps={tryPremiumProps.arrowProps}
              />
            </div>
            <div className="flex-col-2">
              <div className="flex-row-29">
                <div className="enroll-now">{enrollNow}</div>
                <div className="search-container">
                  <Search search1={search1Props.search1} />
                  <Search search1={search2Props.search1} />
                </div>
              </div>
              <div className="overlap-group-container-16">
                <div className="overlap-group8-5">
                  <div className="my-courses poppins-medium-eden-18px">{myCourses}</div>
                </div>
                <div className="calend-container" style={{ backgroundImage: `url(${calendContainer})` }}>
                  <div className="my-calender poppins-medium-eden-18px">{myCalender}</div>
                  <Calendar {...calendar1Props} />
                </div>
              </div>
              <div className="flex-row-30">
                <div className="overlap-group14-1">
                  <div className="flex-row-31">
                    <div className="flex-col-3">
                      <div className="story-telling-forsocial-change poppins-medium-white-30px">
                        {storyTellingForSocialChange}
                      </div>
                      <div className="overlap-group21" style={{ backgroundImage: `url(${overlapGroup21})` }}>
                        <img className="path-1016" src={path1016} alt="Path 1016" />
                      </div>
                    </div>
                    <div className="percent">{percent}</div>
                  </div>
                  <div className="overlap-group18-1">
                    <p className="acts-school-of-computing poppins-normal-white-18px">{actsSchoolOfComputing}</p>
                    <div className="rectangle-44"></div>
                    <img className="path-1024" src={path1024} alt="Path 1024" />
                    <div className="bachelors-degree poppins-medium-eden-18px">{bachelorsDegree}</div>
                    <div className="rectangle-116"></div>
                    <div className="start-date poppins-medium-eden-18px">{startDate}</div>
                    <Calendar {...calendar2Props} />
                  </div>
                  <div className="overlap-group-container-17">
                    <div className="overlap-group20">
                      <div className="group-36"></div>
                      <div className="never-received-or-fo-18 sfprotext-regular-normal-white-13px">
                        {neverReceivedOrFo1}
                      </div>
                    </div>
                    <div className="overlap-group19">
                      <div className="group-36"></div>
                      <div className="never-received-or-fo-18 sfprotext-regular-normal-white-13px">
                        {neverReceivedOrFo2}
                      </div>
                    </div>
                  </div>
                  <div className="group-container">
                    <div className="line-container-16">
                      <img className="line-11-15" src={line112} alt="Line 11" />
                      <img className="line-12-15" src={line122} alt="Line 12" />
                      <img className="line-13-15" src={line132} alt="Line 13" />
                    </div>
                    <div className="group-901">
                      <div className="ellipse-108"></div>
                      <div className="ellipse-107"></div>
                      <div className="ellipse-105"></div>
                      <div className="ellipse-106"></div>
                    </div>
                  </div>
                </div>
                <DorisSanders
                  phoneProps={dorisSandersProps.phoneProps}
                  envelopeProps={dorisSandersProps.envelopeProps}
                />
              </div>
              <div className="overlap-group-container-18">
                <div className="overlap-group12-1">
                  <TotalClients group839={totalClients1Props.group839} path36={totalClients1Props.path36} />
                </div>
                <div className="overlap-group15-1">
                  <div className="bg"></div>
                  <div className="completed-courses poppins-bold-white-19px">{completedCourses}</div>
                  <div className="address poppins-normal-white-17px">{address1}</div>
                  <div className="rectangle-63"></div>
                  <img className="path-987" src={path987} alt="Path 987" />
                </div>
                <div className="overlap-group1-6">
                  <div className="overlap-group11-2">
                    <div className="title-1">
                      <div className="ads-here">{adsHere}</div>
                    </div>
                  </div>
                  <div className="overlap-group13-1">
                    <div className="bg-1"></div>
                    <div className="title-2">
                      <div className="summary-of-alerts-generated poppins-normal-white-17px">
                        {summaryOfAlertsGenerated}
                      </div>
                    </div>
                    <div className="on-progress">
                      <div className="progess-meter">
                        <div className="overlap-group-10">
                          <img className="path-35" src={path35} alt="Path 35" />
                          <img className="path-36" src={path36} alt="Path 36" />
                          <div className="meter-scal">
                            <img className="union-1" src={union1} alt="Union 1" />
                          </div>
                          <img className="path-988" src={path988} alt="Path 988" />
                        </div>
                      </div>
                    </div>
                    <div className="alerts-generated poppins-normal-white-18px">{alertsGenerated}</div>
                    <div className="low poppins-normal-white-18px">{low}</div>
                    <div className="medium poppins-normal-white-18px">{medium}</div>
                    <div className="high poppins-normal-white-18px">{high}</div>
                    <div className="overlap-group13-item"></div>
                    <div className="overlap-group13-item"></div>
                    <div className="course-in-progress poppins-bold-white-19px">{courseInProgress}</div>
                    <div className="address-1 poppins-normal-white-17px">{address2}</div>
                    <div className="rectangle-118"></div>
                    <img className="path-1023" src={path1023} alt="Path 1023" />
                    <div className="bg-2"></div>
                    <TotalClients
                      group839={totalClients2Props.group839}
                      path36={totalClients2Props.path36}
                      className={totalClients2Props.className}
                    />
                  </div>
                  <div className="rectangle-102"></div>
                  <div className="rectangle-103"></div>
                  <div className="rectangle-104"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard2;
