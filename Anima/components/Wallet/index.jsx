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
import G4158 from "../G4158";
import Group9022 from "../Group9022";
import Image6 from "../Image6";
import "./Wallet.css";

function Wallet(props) {
  const {
    overlapGroup6,
    overlapGroup7,
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
    overlapGroup9,
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
    modeOfPayment,
    mastercardLogoSvg,
    paypal_Png7,
    maestro_2016Svg,
    googleWalletLogoVector,
    mpesaGlobal,
    polygon2,
    mobileMoney,
    acts_Logo,
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
    g4158Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="wallet-7 screen">
        <div className="overlap-group6-8" style={{ backgroundImage: `url(${overlapGroup6})` }}>
          <Group41 className={group41Props.className} group1Props={group41Props.group1Props} />
          <div className="overlap-group-container-31">
            <div className="overlap-group7-8" style={{ backgroundImage: `url(${overlapGroup7})` }}>
              <div className="overlap-group-container-32">
                <div className="path-container-26">
                  <img className="path-1-34" src={path1} alt="Path 1" />
                  <img className="path-2-8" src={path2} alt="Path 2" />
                </div>
                <div className="overlap-group10-5">
                  <div className="new-to-acts-7 circularstdbold-regular-bold-white-30px">{newToActs}</div>
                  <div className="sign-in-7 circularstdbook-regular-normal-white-16px">{signIn}</div>
                  <div className="line-container-23">
                    <img className="line-11-22" src={line11} alt="Line 11" />
                    <img className="line-12-22" src={line12} alt="Line 12" />
                    <img className="line-13-22" src={line13} alt="Line 13" />
                  </div>
                </div>
              </div>
              <MainMenu className={mainMenuProps.className} />
              <div className="flex-row-84">
                <div className="home-7" style={{ backgroundImage: `url(${home})` }}></div>
                <div className="dashboard-21 poppins-medium-suva-gray-20px">{dashboard}</div>
              </div>
              <div className="flex-row-85">
                <Dashboard
                  path11={dashboardProps.path11}
                  path12={dashboardProps.path12}
                  path14={dashboardProps.path14}
                  path13={dashboardProps.path13}
                  className={dashboardProps.className}
                />
                <div className="study-hub-9 poppins-medium-suva-gray-20px">{studyHub}</div>
              </div>
              <div className="flex-row-86">
                <div className="book-7" style={{ backgroundImage: `url(${book})` }}></div>
                <div className="library-17 poppins-medium-suva-gray-20px">{library}</div>
              </div>
              <div className="flex-row-87">
                <img className="combined-shape-14" src={combinedShape1} alt="Combined Shape" />
                <div className="resources-7 poppins-medium-suva-gray-20px">{resources}</div>
              </div>
              <div className="flex-row-88">
                <img className="combined-shape-15" src={combinedShape2} alt="Combined Shape" />
                <div className="conferencing-7 poppins-medium-suva-gray-20px">{conferencing}</div>
              </div>
              <div className="flex-row-89">
                <Group2 user1Props={group2Props.user1Props} user2Props={group2Props.user2Props} />
                <div className="community-14 poppins-medium-suva-gray-20px">{community}</div>
              </div>
              <div className="flex-row-90">
                <BarChart className={barChartProps.className} />
                <div className="reports-7 poppins-medium-suva-gray-20px">{reports}</div>
              </div>
              <div className="overlap-group9-7" style={{ backgroundImage: `url(${overlapGroup9})` }}>
                <UsersThreeFilled src={usersThreeFilled1Props.src} className={usersThreeFilled1Props.className} />
                <div className="wallet-8 poppins-medium-black-20px">{wallet}</div>
                <Layer13 src={layer13Props.src} />
              </div>
              <div className="setting-container-6">
                <SettingsFilled />
                <div className="setting-7 poppins-medium-suva-gray-20px">{setting}</div>
              </div>
              <div className="flex-row-91">
                <UsersThreeFilled src={usersThreeFilled2Props.src} className={usersThreeFilled2Props.className} />
                <div className="support-7 poppins-medium-suva-gray-20px">{support}</div>
              </div>
              <div className="image-47" style={{ backgroundImage: `url(${image})` }}></div>
              <div className="baraka-11 poppins-medium-white-18px">{baraka}</div>
              <TryPremium
                logOut={tryPremiumProps.logOut}
                className={tryPremiumProps.className}
                arrowProps={tryPremiumProps.arrowProps}
              />
            </div>
            <div className="overlap-group8-9">
              <div className="rounded-rectangle-1-copy-15-5"></div>
              <div className="device-that-you-can-use-7"></div>
              <Search search1={searchProps.search1} className={searchProps.className} />
              <div className="current-balance poppins-medium-white-30px">{currentBalance}</div>
              <div className="price poppins-medium-white-30px">{price1}</div>
              <img className="path-1002-1" src={path1002} alt="Path 1002" />
              <p className="never-received-or-fo-19 sfprotext-regular-normal-white-20px">{neverReceivedOrFo1}</p>
              <div className="available-balance poppins-medium-white-30px">{availableBalance}</div>
              <div className="price-1 poppins-medium-white-30px">{price2}</div>
              <img className="path-1013" src={path1013} alt="Path 1013" />
              <Group className={group1Props.className} />
              <div className="never-received-or-fo-20 sfprotext-regular-normal-white-27px">{neverReceivedOrFo2}</div>
              <Group className={group2Props2.className} />
              <div className="never-received-or-fo-21 sfprotext-regular-normal-white-27px">{neverReceivedOrFo3}</div>
              <Group className={group3Props.className} />
              <div className="never-received-or-fo-22 sfprotext-regular-normal-white-27px">{neverReceivedOrFo4}</div>
              <Group className={group4Props.className} />
              <div className="never-received-or-fo-23 sfprotext-regular-normal-white-27px">{neverReceivedOrFo5}</div>
              <div className="mode-of-payment poppins-medium-white-30px">{modeOfPayment}</div>
              <div className="bg-7"></div>
              <img className="mastercard-logosvg" src={mastercardLogoSvg} alt="Mastercard-logo.svg" />
              <div className="bg-8"></div>
              <div className="bg-9"></div>
              <div className="bg-10"></div>
              <div className="bg-11"></div>
              <img className="paypal_png7" src={paypal_Png7} alt="paypal_PNG7" />
              <img className="maestro_2016svg" src={maestro_2016Svg} alt="Maestro_2016.svg" />
              <img className="google-wallet-logo-vector" src={googleWalletLogoVector} alt="google-wallet-logo-vector" />
              <G4158 path13={g4158Props.path13} />
              <div className="rectangle-44-1"></div>
              <div className="mpesa-global poppins-medium-unmellow-yellow-18px">{mpesaGlobal}</div>
              <img className="polygon-2" src={polygon2} alt="Polygon 2" />
              <div className="mobile-money poppins-semi-bold-white-17px">{mobileMoney}</div>
              <img className="acts_logo-13" src={acts_Logo} alt="ACTS_LOGO" />
              <Group9022 />
              <Image6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
