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
import "./WalletAccountDetails.css";

function WalletAccountDetails(props) {
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
    anythingDesign,
    accountName,
    phone,
    accountNumber,
    price3,
    amount,
    price4,
    balance,
    salomeAkinyi,
    beneficiaryName,
    automation,
    transactionFee05,
    price5,
    totalDebit,
    approveTransaction,
    checkbox,
    receivedCashAsAgreed,
    note,
    x20PaidToActs50,
    paymentHistory,
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="wallet-account-details screen">
        <div className="overlap-group4-13" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <Group41 className={group41Props.className} group1Props={group41Props.group1Props} />
          <div className="overlap-group-container-34">
            <div className="overlap-group6-10" style={{ backgroundImage: `url(${overlapGroup6})` }}>
              <div className="overlap-group-container-35">
                <div className="path-container-31">
                  <img className="path-1-36" src={path1} alt="Path 1" />
                  <img className="path-2-10" src={path2} alt="Path 2" />
                </div>
                <div className="overlap-group8-11">
                  <div className="new-to-acts-9 circularstdbold-regular-bold-white-30px">{newToActs}</div>
                  <div className="sign-in-9 circularstdbook-regular-normal-white-16px">{signIn}</div>
                  <div className="line-container-25">
                    <img className="line-11-24" src={line11} alt="Line 11" />
                    <img className="line-12-24" src={line12} alt="Line 12" />
                    <img className="line-13-24" src={line13} alt="Line 13" />
                  </div>
                </div>
              </div>
              <MainMenu className={mainMenuProps.className} />
              <div className="flex-row-101">
                <div className="home-9" style={{ backgroundImage: `url(${home})` }}></div>
                <div className="dashboard-23 poppins-medium-suva-gray-20px">{dashboard}</div>
              </div>
              <div className="flex-row-102">
                <Dashboard
                  path11={dashboardProps.path11}
                  path12={dashboardProps.path12}
                  path14={dashboardProps.path14}
                  path13={dashboardProps.path13}
                  className={dashboardProps.className}
                />
                <div className="study-hub-11 poppins-medium-suva-gray-20px">{studyHub}</div>
              </div>
              <div className="flex-row-103">
                <div className="book-9" style={{ backgroundImage: `url(${book})` }}></div>
                <div className="library-19 poppins-medium-suva-gray-20px">{library}</div>
              </div>
              <div className="flex-row-104">
                <img className="combined-shape-18" src={combinedShape1} alt="Combined Shape" />
                <div className="resources-9 poppins-medium-suva-gray-20px">{resources}</div>
              </div>
              <div className="flex-row-105">
                <img className="combined-shape-19" src={combinedShape2} alt="Combined Shape" />
                <div className="conferencing-9 poppins-medium-suva-gray-20px">{conferencing}</div>
              </div>
              <div className="flex-row-106">
                <Group2 user1Props={group2Props.user1Props} user2Props={group2Props.user2Props} />
                <div className="community-16 poppins-medium-suva-gray-20px">{community}</div>
              </div>
              <div className="flex-row-107">
                <BarChart className={barChartProps.className} />
                <div className="reports-9 poppins-medium-suva-gray-20px">{reports}</div>
              </div>
              <div className="overlap-group7-9" style={{ backgroundImage: `url(${overlapGroup7})` }}>
                <UsersThreeFilled src={usersThreeFilled1Props.src} className={usersThreeFilled1Props.className} />
                <div className="wallet-14 poppins-medium-black-20px">{wallet}</div>
                <Layer13 src={layer13Props.src} />
              </div>
              <div className="setting-container-8">
                <SettingsFilled />
                <div className="setting-9 poppins-medium-suva-gray-20px">{setting}</div>
              </div>
              <div className="flex-row-108">
                <UsersThreeFilled src={usersThreeFilled2Props.src} className={usersThreeFilled2Props.className} />
                <div className="support-9 poppins-medium-suva-gray-20px">{support}</div>
              </div>
              <div className="image-51" style={{ backgroundImage: `url(${image})` }}></div>
              <div className="baraka-13 poppins-medium-white-18px">{baraka}</div>
              <TryPremium
                logOut={tryPremiumProps.logOut}
                className={tryPremiumProps.className}
                arrowProps={tryPremiumProps.arrowProps}
              />
            </div>
            <div className="overlap-group5-10">
              <div className="rounded-rectangle-1-copy-15-6"></div>
              <div className="device-that-you-can-use-9"></div>
              <Search search1={searchProps.search1} className={searchProps.className} />
              <div className="current-balance-1 poppins-medium-white-30px">{currentBalance}</div>
              <div className="price-3 poppins-medium-white-30px">{price1}</div>
              <img className="path-1002-2" src={path1002} alt="Path 1002" />
              <p className="never-received-or-fo-27 sfprotext-regular-normal-white-20px">{neverReceivedOrFo1}</p>
              <div className="available-balance-2 poppins-medium-white-30px">{availableBalance}</div>
              <div className="price-4 poppins-medium-white-30px">{price2}</div>
              <img className="path-1013-2" src={path1013} alt="Path 1013" />
              <Group className={group1Props.className} />
              <div className="never-received-or-fo-28 sfprotext-regular-normal-white-27px">{neverReceivedOrFo2}</div>
              <Group className={group2Props2.className} />
              <div className="never-received-or-fo-29 sfprotext-regular-normal-white-27px">{neverReceivedOrFo3}</div>
              <Group className={group3Props.className} />
              <div className="never-received-or-fo-30 sfprotext-regular-normal-white-27px">{neverReceivedOrFo4}</div>
              <Group className={group4Props.className} />
              <div className="never-received-or-fo-31 sfprotext-regular-normal-white-27px">{neverReceivedOrFo5}</div>
              <img className="acts_logo-15" src={acts_Logo} alt="ACTS_LOGO" />
              <Group9022 />
              <Image6 />
              <div className="device-that-you-can-use-10"></div>
              <div className="rectangle-44-2"></div>
              <div className="anything-design poppins-medium-eden-18px">{anythingDesign}</div>
              <div className="account-name poppins-semi-bold-white-17px">{accountName}</div>
              <div className="rectangle-119"></div>
              <div className="phone-7 poppins-medium-eden-18px">{phone}</div>
              <div className="account-number poppins-semi-bold-white-17px">{accountNumber}</div>
              <div className="rectangle-120"></div>
              <div className="price-5 poppins-medium-eden-18px">{price3}</div>
              <div className="amount poppins-semi-bold-white-17px">{amount}</div>
              <div className="rectangle-121"></div>
              <div className="price-6 poppins-medium-eden-18px">{price4}</div>
              <div className="balance poppins-semi-bold-white-17px">{balance}</div>
              <div className="rectangle-122"></div>
              <div className="salome-akinyi-1 poppins-medium-eden-18px">{salomeAkinyi}</div>
              <div className="beneficiary-name poppins-semi-bold-white-17px">{beneficiaryName}</div>
              <div className="rectangle-123"></div>
              <div className="automation poppins-medium-eden-18px">{automation}</div>
              <div className="transaction-fee-05 poppins-semi-bold-white-17px">{transactionFee05}</div>
              <div className="rectangle-124"></div>
              <div className="price-7 poppins-medium-eden-18px">{price5}</div>
              <div className="total-debit poppins-semi-bold-white-17px">{totalDebit}</div>
              <div className="approve-transaction poppins-medium-white-16px">{approveTransaction}</div>
              <img className="checkbox-6" src={checkbox} alt="checkbox" />
              <div className="rectangle-125"></div>
              <div className="received-cash-as-agreed poppins-medium-eden-18px">{receivedCashAsAgreed}</div>
              <div className="note poppins-semi-bold-white-17px">{note}</div>
              <div className="rectangle-126"></div>
              <p className="x20-paid-to-acts50 poppins-medium-eden-18px">{x20PaidToActs50}</p>
              <div className="payment-history poppins-semi-bold-white-17px">{paymentHistory}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletAccountDetails;
