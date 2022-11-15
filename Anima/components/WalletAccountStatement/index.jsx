import React from "react";
import Group41 from "../Group41";
import MainMenu from "../MainMenu";
import Dashboard from "../Dashboard";
import Group2 from "../Group2";
import BarChart from "../BarChart";
import UsersThreeFilled from "../UsersThreeFilled";
import Layer13 from "../Layer13";
import SettingsFilled from "../SettingsFilled";
import TryPremium from "../TryPremium";
import Search from "../Search";
import Group from "../Group";
import Group9022 from "../Group9022";
import Image6 from "../Image6";
import Group963 from "../Group963";
import "./WalletAccountStatement.css";

function WalletAccountStatement(props) {
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
    book,
    library,
    combinedShape1,
    resources,
    combinedShape2,
    conferencing,
    community,
    reports,
    overlapGroup7,
    wallet,
    setting,
    support,
    image,
    baraka,
    currentBalance,
    price1,
    path1002,
    neverReceivedOrFo1,
    availableBalance,
    price2,
    path1013,
    neverReceivedOrFo2,
    neverReceivedOrFo3,
    neverReceivedOrFo4,
    neverReceivedOrFo5,
    acts_Logo,
    dateTime,
    transactionId,
    place,
    beneficiary,
    details,
    amountBalance,
    group41Props,
    mainMenuProps,
    dashboardProps,
    group2Props,
    barChartProps,
    usersThreeFilled1Props,
    layer13Props,
    usersThreeFilled2Props,
    tryPremiumProps,
    searchProps,
    group1Props,
    group2Props2,
    group3Props,
    group4Props,
    group9631Props,
    group9632Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="wallet-account-statement screen">
        <div className="overlap-group4-14" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <Group41 className={group41Props.className} group1Props={group41Props.group1Props} />
          <div className="overlap-group-container-36">
            <div className="overlap-group5-11" style={{ backgroundImage: `url(${overlapGroup5})` }}>
              <div className="overlap-group-container-37">
                <div className="path-container-32">
                  <img className="path-1-37" src={path1} alt="Path 1" />
                  <img className="path-2-11" src={path2} alt="Path 2" />
                </div>
                <div className="overlap-group8-12">
                  <div className="new-to-acts-10 circularstdbold-regular-bold-white-30px">{newToActs}</div>
                  <div className="sign-in-10 circularstdbook-regular-normal-white-16px">{signIn}</div>
                  <div className="line-container-26">
                    <img className="line-11-25" src={line11} alt="Line 11" />
                    <img className="line-12-25" src={line12} alt="Line 12" />
                    <img className="line-13-25" src={line13} alt="Line 13" />
                  </div>
                </div>
              </div>
              <MainMenu className={mainMenuProps.className} />
              <div className="flex-row-109">
                <div className="home-10" style={{ backgroundImage: `url(${home})` }}></div>
                <div className="dashboard-24 poppins-medium-suva-gray-20px">{dashboard}</div>
              </div>
              <div className="flex-row-110">
                <Dashboard
                  path11={dashboardProps.path11}
                  path12={dashboardProps.path12}
                  path14={dashboardProps.path14}
                  path13={dashboardProps.path13}
                  className={dashboardProps.className}
                />
                <div className="study-hub-12 poppins-medium-suva-gray-20px">{studyHub}</div>
              </div>
              <div className="flex-row-111">
                <div className="book-10" style={{ backgroundImage: `url(${book})` }}></div>
                <div className="library-20 poppins-medium-suva-gray-20px">{library}</div>
              </div>
              <div className="flex-row-112">
                <img className="combined-shape-20" src={combinedShape1} alt="Combined Shape" />
                <div className="resources-10 poppins-medium-suva-gray-20px">{resources}</div>
              </div>
              <div className="flex-row-113">
                <img className="combined-shape-21" src={combinedShape2} alt="Combined Shape" />
                <div className="conferencing-10 poppins-medium-suva-gray-20px">{conferencing}</div>
              </div>
              <div className="flex-row-114">
                <Group2 user1Props={group2Props.user1Props} user2Props={group2Props.user2Props} />
                <div className="community-17 poppins-medium-suva-gray-20px">{community}</div>
              </div>
              <div className="flex-row-115">
                <BarChart className={barChartProps.className} />
                <div className="reports-10 poppins-medium-suva-gray-20px">{reports}</div>
              </div>
              <div className="overlap-group7-10" style={{ backgroundImage: `url(${overlapGroup7})` }}>
                <UsersThreeFilled src={usersThreeFilled1Props.src} className={usersThreeFilled1Props.className} />
                <div className="wallet-15 poppins-medium-black-20px">{wallet}</div>
                <Layer13 src={layer13Props.src} />
              </div>
              <div className="setting-container-9">
                <SettingsFilled />
                <div className="setting-10 poppins-medium-suva-gray-20px">{setting}</div>
              </div>
              <div className="flex-row-116">
                <UsersThreeFilled src={usersThreeFilled2Props.src} className={usersThreeFilled2Props.className} />
                <div className="support-10 poppins-medium-suva-gray-20px">{support}</div>
              </div>
              <div className="image-52" style={{ backgroundImage: `url(${image})` }}></div>
              <div className="baraka-14 poppins-medium-white-18px">{baraka}</div>
              <TryPremium
                logOut={tryPremiumProps.logOut}
                className={tryPremiumProps.className}
                arrowProps={tryPremiumProps.arrowProps}
              />
            </div>
            <div className="overlap-group6-11">
              <div className="rounded-rectangle-1-copy-15-7"></div>
              <div className="device-that-you-can-use-11"></div>
              <Search search1={searchProps.search1} className={searchProps.className} />
              <div className="current-balance-2 poppins-medium-white-30px">{currentBalance}</div>
              <div className="price-8 poppins-medium-white-30px">{price1}</div>
              <img className="path-1002-3" src={path1002} alt="Path 1002" />
              <p className="never-received-or-fo-32 sfprotext-regular-normal-white-20px">{neverReceivedOrFo1}</p>
              <div className="available-balance-3 poppins-medium-white-30px">{availableBalance}</div>
              <div className="price-9 poppins-medium-white-30px">{price2}</div>
              <img className="path-1013-3" src={path1013} alt="Path 1013" />
              <Group className={group1Props.className} />
              <div className="never-received-or-fo-33 sfprotext-regular-normal-white-27px">{neverReceivedOrFo2}</div>
              <Group className={group2Props2.className} />
              <div className="never-received-or-fo-34 sfprotext-regular-normal-white-27px">{neverReceivedOrFo3}</div>
              <Group className={group3Props.className} />
              <div className="never-received-or-fo-35 sfprotext-regular-normal-white-27px">{neverReceivedOrFo4}</div>
              <Group className={group4Props.className} />
              <div className="never-received-or-fo-36 sfprotext-regular-normal-white-27px">{neverReceivedOrFo5}</div>
              <img className="acts_logo-16" src={acts_Logo} alt="ACTS_LOGO" />
              <Group9022 />
              <Image6 />
              <div className="rectangle-2-copy-15-12"></div>
              <div className="rectangle-2-copy-15-13"></div>
              <div className="group-962 poppins-semi-bold-black-16px">
                <div className="date-time">{dateTime}</div>
                <div className="transaction-id">{transactionId}</div>
                <div className="place-6">{place}</div>
                <div className="beneficiary">{beneficiary}</div>
                <div className="details">{details}</div>
                <div className="amount-balance">{amountBalance}</div>
              </div>
              <Group963 />
              <Group963 className={group9631Props.className} />
              <Group963 className={group9632Props.className} />
              <div className="rectangle-2-copy-15-14"></div>
              <div className="rectangle-2-copy-15-15"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletAccountStatement;
