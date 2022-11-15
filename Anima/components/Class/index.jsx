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
import BellFilled from "../BellFilled";
import Group902 from "../Group902";
import DorisSanders from "../DorisSanders";
import Pagination from "../Pagination";
import "./Class.css";

function Class(props) {
  const {
    overlapGroup4,
    overlapGroup6,
    path1,
    path2,
    newToActs,
    signIn,
    line11,
    line12,
    line13,
    home,
    dashboard,
    overlapGroup25,
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
    topic11,
    ridhoTijanGmailCo1,
    ridhoTijanGmailCo2,
    ridhoTijanGmailCo3,
    checkbox1,
    checkbox2,
    checkbox3,
    liveClass1,
    liveClass2,
    liveClass3,
    tutorialAudio1,
    sound1,
    tutorialAudio2,
    sound2,
    tutorialAudio3,
    sound3,
    tutorialVideo1,
    video1,
    tutorialVideo2,
    video2,
    tutorialVideo3,
    video3,
    quiz,
    quiz11,
    polygon2,
    assignment,
    assignment11,
    polygon4,
    topic12,
    ridhoTijanGmailCo4,
    ridhoTijanGmailCo5,
    ridhoTijanGmailCo6,
    checkbox4,
    checkbox5,
    checkbox6,
    liveClass4,
    liveClass5,
    liveClass6,
    tutorialAudio4,
    sound4,
    tutorialAudio5,
    sound5,
    tutorialAudio6,
    sound6,
    tutorialVideo4,
    video4,
    tutorialVideo5,
    video5,
    tutorialVideo6,
    video6,
    quiz2,
    quiz12,
    polygon5,
    assignment2,
    assignment12,
    polygon6,
    tutorialAudio7,
    tutorialAudio8,
    tutorialAudio9,
    tutorialVideo7,
    tutorialVideo8,
    tutorialVideo9,
    video7,
    video8,
    video9,
    checkbox7,
    liveClass7,
    topic13,
    ridhoTijanGmailCo7,
    ridhoTijanGmailCo8,
    ridhoTijanGmailCo9,
    checkbox8,
    liveClass8,
    checkbox9,
    liveClass9,
    sound7,
    sound8,
    sound9,
    quiz13,
    polygon7,
    assignment13,
    polygon8,
    quiz3,
    assignment3,
    myNotesHere,
    group41Props,
    mainMenuProps,
    dashboardProps,
    group2Props,
    barChartProps,
    usersThreeFilled1Props,
    usersThreeFilled2Props,
    tryPremiumProps,
    searchProps,
    bellFilledProps,
    group902Props,
    dorisSandersProps,
    paginationProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="class screen">
        <div className="overlap-group4-8" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <Group41 className={group41Props.className} group1Props={group41Props.group1Props} />
          <div className="overlap-group-container-21">
            <div className="overlap-group6-6" style={{ backgroundImage: `url(${overlapGroup6})` }}>
              <div className="overlap-group-container-22">
                <div className="path-container-18">
                  <img className="path-1-30" src={path1} alt="Path 1" />
                  <img className="path-2-4" src={path2} alt="Path 2" />
                </div>
                <div className="overlap-group26">
                  <div className="new-to-acts-3 circularstdbold-regular-bold-white-30px">{newToActs}</div>
                  <div className="sign-in-3 circularstdbook-regular-normal-white-16px">{signIn}</div>
                  <div className="line-container-18">
                    <img className="line-11-17" src={line11} alt="Line 11" />
                    <img className="line-12-17" src={line12} alt="Line 12" />
                    <img className="line-13-17" src={line13} alt="Line 13" />
                  </div>
                </div>
              </div>
              <MainMenu className={mainMenuProps.className} />
              <div className="flex-row-48">
                <div className="home-3" style={{ backgroundImage: `url(${home})` }}></div>
                <div className="dashboard-17 poppins-medium-suva-gray-20px">{dashboard}</div>
              </div>
              <div className="overlap-group25" style={{ backgroundImage: `url(${overlapGroup25})` }}>
                <Dashboard
                  path11={dashboardProps.path11}
                  path12={dashboardProps.path12}
                  path14={dashboardProps.path14}
                  path13={dashboardProps.path13}
                  className={dashboardProps.className}
                />
                <div className="study-hub-5 poppins-medium-black-20px">{studyHub}</div>
              </div>
              <div className="flex-row-49">
                <div className="book-3" style={{ backgroundImage: `url(${book})` }}></div>
                <div className="library-12 poppins-medium-suva-gray-20px">{library}</div>
              </div>
              <div className="flex-row-50">
                <img className="combined-shape-6" src={combinedShape1} alt="Combined Shape" />
                <div className="resources-3 poppins-medium-suva-gray-20px">{resources}</div>
              </div>
              <div className="flex-row-51">
                <img className="combined-shape-7" src={combinedShape2} alt="Combined Shape" />
                <div className="conferencing-3 poppins-medium-suva-gray-20px">{conferencing}</div>
              </div>
              <div className="flex-row-52">
                <Group2 user1Props={group2Props.user1Props} user2Props={group2Props.user2Props} />
                <div className="community-10 poppins-medium-suva-gray-20px">{community}</div>
              </div>
              <div className="flex-row-53">
                <BarChart className={barChartProps.className} />
                <div className="reports-3 poppins-medium-suva-gray-20px">{reports}</div>
              </div>
              <div className="flex-row-54">
                <UsersThreeFilled src={usersThreeFilled1Props.src} />
                <div className="wallet-3 poppins-medium-suva-gray-20px">{wallet}</div>
              </div>
              <div className="setting-container-3">
                <SettingsFilled />
                <div className="setting-3 poppins-medium-suva-gray-20px">{setting}</div>
              </div>
              <div className="flex-row-55">
                <UsersThreeFilled src={usersThreeFilled2Props.src} className={usersThreeFilled2Props.className} />
                <div className="support-3 poppins-medium-suva-gray-20px">{support}</div>
              </div>
              <div className="image-6" style={{ backgroundImage: `url(${image})` }}></div>
              <div className="baraka-7 poppins-medium-white-18px">{baraka}</div>
              <TryPremium
                logOut={tryPremiumProps.logOut}
                className={tryPremiumProps.className}
                arrowProps={tryPremiumProps.arrowProps}
              />
            </div>
            <div className="overlap-group5-6">
              <div className="flex-row-56">
                <div className="flex-col-10">
                  <div className="flex-row-57">
                    <Search search1={searchProps.search1} className={searchProps.className} />
                    <BellFilled src={bellFilledProps.src} />
                  </div>
                  <div className="flex-row-58">
                    <div className="flex-col-11">
                      <div className="group-container-1">
                        <Group902 studyHub={group902Props.studyHub} className={group902Props.className} />
                        <div className="flex-row-59">
                          <div className="flex-row-60">
                            <div className="flex-col-8">
                              <div className="topic-1 poppins-medium-white-30px">{topic11}</div>
                              <div className="ridhotijangmailco-42 sfprotext-regular-normal-delta-20px">
                                {ridhoTijanGmailCo1}
                              </div>
                              <div className="ridhotijangmailco-43 sfprotext-regular-normal-delta-20px">
                                {ridhoTijanGmailCo2}
                              </div>
                              <div className="ridhotijangmailco-43 sfprotext-regular-normal-delta-20px">
                                {ridhoTijanGmailCo3}
                              </div>
                            </div>
                            <div className="checkbox-container">
                              <img className="checkbox-1" src={checkbox1} alt="checkbox" />
                              <img className="checkbox-1" src={checkbox2} alt="checkbox" />
                              <img className="checkbox-1" src={checkbox3} alt="checkbox" />
                            </div>
                            <div className="live-class-container poppins-medium-suva-gray-20px">
                              <div className="live-class">{liveClass1}</div>
                              <div className="live-class-1">{liveClass2}</div>
                              <div className="live-class-2">{liveClass3}</div>
                            </div>
                            <div className="overlap-group-container-23">
                              <div className="overlap-group-16">
                                <div className="tutorial poppins-normal-white-18px">{tutorialAudio1}</div>
                                <div className="sound" style={{ backgroundImage: `url(${sound1})` }}></div>
                              </div>
                              <div className="overlap-group-16">
                                <div className="tutorial poppins-normal-white-18px">{tutorialAudio2}</div>
                                <div className="sound-1" style={{ backgroundImage: `url(${sound2})` }}></div>
                              </div>
                              <div className="overlap-group-16">
                                <div className="tutorial poppins-normal-white-18px">{tutorialAudio3}</div>
                                <div className="sound-2" style={{ backgroundImage: `url(${sound3})` }}></div>
                              </div>
                            </div>
                            <div className="overlap-group-container-24">
                              <div className="video-container">
                                <div className="tutorial poppins-normal-white-18px">{tutorialVideo1}</div>
                                <div className="video" style={{ backgroundImage: `url(${video1})` }}></div>
                              </div>
                              <div className="video-container">
                                <div className="tutorial poppins-normal-white-18px">{tutorialVideo2}</div>
                                <div className="video-1" style={{ backgroundImage: `url(${video2})` }}></div>
                              </div>
                              <div className="video-container">
                                <div className="tutorial poppins-normal-white-18px">{tutorialVideo3}</div>
                                <div className="video" style={{ backgroundImage: `url(${video3})` }}></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-col-9">
                            <div className="quiz poppins-normal-white-18px">{quiz}</div>
                            <div className="overlap-group21-1">
                              <div className="quiz-1 poppins-medium-eden-18px">{quiz11}</div>
                              <img className="polygon" src={polygon2} alt="Polygon 2" />
                            </div>
                            <div className="assignment poppins-normal-white-18px">{assignment}</div>
                            <div className="overlap-group1-8">
                              <div className="assignment-1 poppins-medium-eden-18px">{assignment11}</div>
                              <img className="polygon" src={polygon4} alt="Polygon 4" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-row-61">
                        <div className="flex-row-62">
                          <div className="flex-col-8">
                            <div className="topic-1-1">{topic12}</div>
                            <div className="ridhotijangmailco-42 sfprotext-regular-normal-delta-20px">
                              {ridhoTijanGmailCo4}
                            </div>
                            <div className="ridhotijangmailco-43 sfprotext-regular-normal-delta-20px">
                              {ridhoTijanGmailCo5}
                            </div>
                            <div className="ridhotijangmailco-43 sfprotext-regular-normal-delta-20px">
                              {ridhoTijanGmailCo6}
                            </div>
                          </div>
                          <div className="checkbox-container-1">
                            <img className="checkbox-1" src={checkbox4} alt="checkbox" />
                            <img className="checkbox-1" src={checkbox5} alt="checkbox" />
                            <img className="checkbox-1" src={checkbox6} alt="checkbox" />
                          </div>
                          <div className="live-class-container poppins-medium-suva-gray-20px">
                            <div className="live-class-3">{liveClass4}</div>
                            <div className="live-class-4">{liveClass5}</div>
                            <div className="live-class-5">{liveClass6}</div>
                          </div>
                          <div className="overlap-group-container-25">
                            <div className="overlap-group-16">
                              <div className="tutorial poppins-normal-eden-18px">{tutorialAudio4}</div>
                              <div className="sound" style={{ backgroundImage: `url(${sound4})` }}></div>
                            </div>
                            <div className="overlap-group-16">
                              <div className="tutorial poppins-normal-eden-18px">{tutorialAudio5}</div>
                              <div className="sound-1" style={{ backgroundImage: `url(${sound5})` }}></div>
                            </div>
                            <div className="overlap-group-16">
                              <div className="tutorial poppins-normal-eden-18px">{tutorialAudio6}</div>
                              <div className="sound-2" style={{ backgroundImage: `url(${sound6})` }}></div>
                            </div>
                          </div>
                          <div className="overlap-group-container-26">
                            <div className="video-container">
                              <div className="tutorial poppins-normal-eden-18px">{tutorialVideo4}</div>
                              <div className="video" style={{ backgroundImage: `url(${video4})` }}></div>
                            </div>
                            <div className="video-container">
                              <div className="tutorial poppins-normal-eden-18px">{tutorialVideo5}</div>
                              <div className="video" style={{ backgroundImage: `url(${video5})` }}></div>
                            </div>
                            <div className="video-container">
                              <div className="tutorial poppins-normal-eden-18px">{tutorialVideo6}</div>
                              <div className="video" style={{ backgroundImage: `url(${video6})` }}></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-col-9">
                          <div className="quiz-2 poppins-normal-black-18px">{quiz2}</div>
                          <div className="overlap-group12-3">
                            <div className="quiz-1 poppins-medium-eden-18px">{quiz12}</div>
                            <img className="polygon-1" src={polygon5} alt="Polygon 5" />
                          </div>
                          <div className="assignment-2 poppins-normal-black-18px">{assignment2}</div>
                          <div className="overlap-group13-3">
                            <div className="assignment-1 poppins-medium-eden-18px">{assignment12}</div>
                            <img className="polygon-1" src={polygon6} alt="Polygon 6" />
                          </div>
                        </div>
                      </div>
                      <div className="overlap-group8-6">
                        <div className="device-that-you-can-use-6"></div>
                        <div className="tutorial-audio poppins-normal-white-18px">{tutorialAudio7}</div>
                        <div className="tutorial-audio-1 poppins-normal-white-18px">{tutorialAudio8}</div>
                        <div className="tutorial-audio-2 poppins-normal-white-18px">{tutorialAudio9}</div>
                        <div className="tutorial-video poppins-normal-white-18px">{tutorialVideo7}</div>
                        <div className="tutorial-video-1 poppins-normal-white-18px">{tutorialVideo8}</div>
                        <div className="tutorial-video-2 poppins-normal-white-18px">{tutorialVideo9}</div>
                        <div className="video-2" style={{ backgroundImage: `url(${video7})` }}></div>
                        <div className="video-3" style={{ backgroundImage: `url(${video8})` }}></div>
                        <div className="video-4" style={{ backgroundImage: `url(${video9})` }}></div>
                        <img className="checkbox-2" src={checkbox7} alt="checkbox" />
                        <div className="live-class-6 poppins-medium-suva-gray-20px">{liveClass7}</div>
                        <div className="topic-1-2 poppins-medium-white-30px">{topic13}</div>
                        <div className="ridhotijangmailco-44 sfprotext-regular-normal-delta-20px">
                          {ridhoTijanGmailCo7}
                        </div>
                        <div className="ridhotijangmailco-45 sfprotext-regular-normal-delta-20px">
                          {ridhoTijanGmailCo8}
                        </div>
                        <div className="ridhotijangmailco-46 sfprotext-regular-normal-delta-20px">
                          {ridhoTijanGmailCo9}
                        </div>
                        <img className="checkbox-3" src={checkbox8} alt="checkbox" />
                        <div className="live-class-7 poppins-medium-suva-gray-20px">{liveClass8}</div>
                        <img className="checkbox-4" src={checkbox9} alt="checkbox" />
                        <div className="live-class-8 poppins-medium-suva-gray-20px">{liveClass9}</div>
                        <div className="sound-3" style={{ backgroundImage: `url(${sound7})` }}></div>
                        <div className="sound-4" style={{ backgroundImage: `url(${sound8})` }}></div>
                        <div className="sound-5" style={{ backgroundImage: `url(${sound9})` }}></div>
                        <div className="rectangle-134"></div>
                        <div className="quiz-1-1 poppins-medium-eden-18px">{quiz13}</div>
                        <img className="polygon-7" src={polygon7} alt="Polygon 7" />
                        <div className="rectangle-135"></div>
                        <div className="assignment-1-1 poppins-medium-eden-18px">{assignment13}</div>
                        <img className="polygon-8" src={polygon8} alt="Polygon 8" />
                        <div className="quiz-3 poppins-normal-white-18px">{quiz3}</div>
                        <div className="assignment-3 poppins-normal-white-18px">{assignment3}</div>
                      </div>
                    </div>
                    <div className="overlap-group9-5">
                      <div className="message-4"></div>
                    </div>
                  </div>
                  <div className="message-5"></div>
                </div>
                <div className="flex-col-12">
                  <DorisSanders
                    className={dorisSandersProps.className}
                    phoneProps={dorisSandersProps.phoneProps}
                    envelopeProps={dorisSandersProps.envelopeProps}
                  />
                  <div className="overlap-group11-4">
                    <div className="text-16">
                      <div className="my-notes-here poppins-semi-bold-white-20px">{myNotesHere}</div>
                    </div>
                  </div>
                </div>
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
  );
}

export default Class;
