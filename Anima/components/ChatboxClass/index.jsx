import React from "react";
import Group41 from "../Group41";
import TryPremium from "../TryPremium";
import MainMenu from "../MainMenu";
import Dashboard from "../Dashboard";
import Group2 from "../Group2";
import BarChart from "../BarChart";
import SettingsFilled from "../SettingsFilled";
import UsersThreeFilled from "../UsersThreeFilled";
import Search from "../Search";
import AndreeaWade from "../AndreeaWade";
import BobbyMendez from "../BobbyMendez";
import TomSchneider from "../TomSchneider";
import Image42 from "../Image42";
import Text from "../Text";
import BobbyMendez2 from "../BobbyMendez2";
import ElizabethHolland from "../ElizabethHolland";
import Option from "../Option";
import Search2 from "../Search2";
import Text1 from "../Text1";
import Text2 from "../Text2";
import Text3 from "../Text3";
import Typing from "../Typing";
import Image5 from "../Image5";
import "./ChatboxClass.css";

function ChatboxClass(props) {
  const {
    groupContainer,
    bg1,
    bg2,
    image,
    baraka,
    path1,
    path2,
    newToActs,
    signIn,
    dashboard,
    resources,
    conferencing,
    community,
    reports,
    wallet,
    setting,
    support,
    studyHub,
    line11,
    line12,
    line13,
    library,
    home,
    book,
    combinedShape1,
    combinedShape2,
    bg3,
    recentMessage,
    line27,
    canYouSendMeThe,
    smileFace,
    paperClip,
    sent,
    path1002,
    path1003,
    sundayMarch172021At239Pm,
    sundayMarch172021At245Pm,
    proinAcQuamEtLec,
    sundayMarch172021At252Pm,
    typing,
    line17,
    salomeAkinyi,
    hiDidYouCheckTheFile,
    searchProps,
    tryPremiumProps,
    dashboardProps,
    dashboardProps2,
    group2Props,
    group2Props2,
    usersThreeFilled1Props,
    usersThreeFilled1Props2,
    usersThreeFilled2Props,
    searchProps2,
    andreeaWadeProps,
    bobbyMendezProps,
    tomSchneiderProps,
    image41Props,
    bobbyMendez2Props,
    elizabethHollandProps,
    optionProps,
    search2Props,
    text11Props,
    text12Props,
    image51Props,
    image42Props,
    image52Props,
    image53Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="chatbox-class screen">
        <div className="group-container-2" style={{ backgroundImage: `url(${groupContainer})` }}>
          <Group41 className={searchProps.className} group1Props={searchProps.group1Props} />
          <div className="overlap-group4-9">
            <img className="bg-3" src={bg1} alt="BG" />
            <img className="bg-4" src={bg2} alt="BG" />
            <div className="image-7" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="baraka-8 poppins-medium-white-18px">{baraka}</div>
            <TryPremium
              logOut={tryPremiumProps.logOut}
              className={tryPremiumProps.className}
              arrowProps={tryPremiumProps.arrowProps}
            />
            <MainMenu className={dashboardProps.className} />
            <div className="path-container-20">
              <img className="path-1-31" src={path1} alt="Path 1" />
              <img className="path-2-5" src={path2} alt="Path 2" />
            </div>
            <div className="new-to-acts-4 circularstdbold-regular-bold-white-30px">{newToActs}</div>
            <div className="sign-in-4 circularstdbook-regular-normal-white-16px">{signIn}</div>
            <div className="dashboard-18 poppins-medium-suva-gray-20px">{dashboard}</div>
            <div className="resources-4 poppins-medium-suva-gray-20px">{resources}</div>
            <div className="conferencing-4 poppins-medium-suva-gray-20px">{conferencing}</div>
            <div className="community-11 poppins-medium-suva-gray-20px">{community}</div>
            <div className="reports-4 poppins-medium-suva-gray-20px">{reports}</div>
            <div className="wallet-4 poppins-medium-suva-gray-20px">{wallet}</div>
            <div className="setting-4 poppins-medium-suva-gray-20px">{setting}</div>
            <div className="support-4 poppins-medium-suva-gray-20px">{support}</div>
            <div className="study-hub-6 poppins-medium-black-20px">{studyHub}</div>
            <div className="line-container-19">
              <img className="line-11-18" src={line11} alt="Line 11" />
              <img className="line-12-18" src={line12} alt="Line 12" />
              <img className="line-13-18" src={line13} alt="Line 13" />
            </div>
            <div className="library-13 poppins-medium-suva-gray-20px">{library}</div>
            <div className="home-4" style={{ backgroundImage: `url(${home})` }}></div>
            <Dashboard
              path11={dashboardProps2.path11}
              path12={dashboardProps2.path12}
              path14={dashboardProps2.path14}
              path13={dashboardProps2.path13}
              className={dashboardProps2.className}
            />
            <div className="book-4" style={{ backgroundImage: `url(${book})` }}></div>
            <img className="combined-shape-8" src={combinedShape1} alt="Combined Shape" />
            <Group2
              className={group2Props.className}
              user1Props={group2Props.user1Props}
              user2Props={group2Props.user2Props}
            />
            <img className="combined-shape-9" src={combinedShape2} alt="Combined Shape" />
            <BarChart className={group2Props2.className} />
            <SettingsFilled className={usersThreeFilled1Props.className} />
            <UsersThreeFilled src={usersThreeFilled1Props2.src} className={usersThreeFilled1Props2.className} />
            <UsersThreeFilled src={usersThreeFilled2Props.src} className={usersThreeFilled2Props.className} />
            <Search search1={searchProps2.search1} className={searchProps2.className} />
            <img className="bg-5" src={bg3} alt="BG" />
            <AndreeaWade andreeaWade={andreeaWadeProps.andreeaWade} image4Props={andreeaWadeProps.image4Props} />
            <BobbyMendez name={bobbyMendezProps.name} />
            <TomSchneider name={tomSchneiderProps.name} image4Props={tomSchneiderProps.image4Props} />
            <div className="andreea-wade">
              <Image42 src={image41Props.src} className={image41Props.className} />
              <Text />
            </div>
            <BobbyMendez2 name={bobbyMendez2Props.name} image5Props={bobbyMendez2Props.image5Props} />
            <ElizabethHolland name={elizabethHollandProps.name} image5Props={elizabethHollandProps.image5Props} />
            <Option className={optionProps.className} />
            <div className="recent-message poppins-semi-bold-white-24px">{recentMessage}</div>
            <Search2 search1={search2Props.search1} />
            <div className="bg-6"></div>
            <div className="type-here">
              <div className="text-17">
                <div className="overlap-group1-9">
                  <img className="line-27" src={line27} alt="Line 27" />
                  <p className="can-you-send-me-the poppins-normal-white-18px">{canYouSendMeThe}</p>
                </div>
              </div>
              <div className="smile-face" style={{ backgroundImage: `url(${smileFace})` }}></div>
              <div className="paper-clip" style={{ backgroundImage: `url(${paperClip})` }}></div>
              <div className="button">
                <div className="text-18">
                  <div className="sent poppins-normal-white-16px">{sent}</div>
                  <div className="paper-plane">
                    <div className="overlap-group-17">
                      <img className="path-1002" src={path1002} alt="Path 1002" />
                      <img className="icon-paper_plane" src={path1003} alt="icon-paper_plane" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-19 poppins-normal-star-dust-14px">
              <Text1>{text11Props.children}</Text1>
              <p className="sunday-march-17-2021-at-2">{sundayMarch172021At239Pm}</p>
              <Text2 />
              <Text3 />
              <p className="sunday-march-17-2021-at-245-pm">{sundayMarch172021At245Pm}</p>
              <Text1 className={text12Props.className}>{text12Props.children}</Text1>
              <div className="text-5-2">
                <p className="proin-ac-quam-et-lec poppins-normal-ebony-clay-16px">{proinAcQuamEtLec}</p>
              </div>
              <p className="sunday-march-17-2021-at-2">{sundayMarch172021At252Pm}</p>
              <div className="typing-container">
                <div className="typing poppins-normal-white-16px">{typing}</div>
                <Typing />
              </div>
            </div>
            <div className="image-12">
              <Image5 className={image51Props.className} />
              <Image42 src={image42Props.src} className={image42Props.className} />
              <Image5 className={image52Props.className} />
              <Image5 className={image53Props.className} />
            </div>
            <img className="line-17" src={line17} alt="Line 17" />
            <div className="elizabeth-holland">
              <Image5 />
              <div className="text-20">
                <div className="salome-akinyi poppins-semi-bold-white-18px">{salomeAkinyi}</div>
                <p className="hi-did-you-check-the-file poppins-normal-white-14px">{hiDidYouCheckTheFile}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatboxClass;
