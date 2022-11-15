import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MenuButton from "./components/MenuButton";
import LogIn from "./components/LogIn";
import Welcome from "./components/Welcome";
import CustomSize1 from "./components/CustomSize1";
import PostSignUpOneTimePinIsSentToYourEma from "./components/PostSignUpOneTimePinIsSentToYourEma";
import ToCompleteYourProfile from "./components/ToCompleteYourProfile";
import PersonalDetailsStep1 from "./components/PersonalDetailsStep1";
import EducationalDetailsStep2 from "./components/EducationalDetailsStep2";
import ProfessionalExperienceStep3 from "./components/ProfessionalExperienceStep3";
import AdditionalInformation from "./components/AdditionalInformation";
import EducationalDetailsData from "./components/EducationalDetailsData";
import ProfessionalExperience from "./components/ProfessionalExperience";
import AdditionalInformationData from "./components/AdditionalInformationData";
import CustomSize2 from "./components/CustomSize2";
import Dashboard2 from "./components/Dashboard2";
import UserProfile from "./components/UserProfile";
import StudyHub1 from "./components/StudyHub1";
import Class from "./components/Class";
import ChatboxClass from "./components/ChatboxClass";
import Library from "./components/Library";
import LibraryPlayVideo from "./components/LibraryPlayVideo";
import CustomSize3 from "./components/CustomSize3";
import Wallet from "./components/Wallet";
import CheckOutWallet from "./components/CheckOutWallet";
import WalletAccountDetails from "./components/WalletAccountDetails";
import WalletAccountStatement from "./components/WalletAccountStatement";
import Community from "./components/Community";
import CommunityGroups from "./components/CommunityGroups";
import Course from "./components/Course";
import CourseDetails from "./components/CourseDetails";
import Image1 from "./components/Image1";
import Image2 from "./components/Image2";
import Image3 from "./components/Image3";
import ApplicationFunding from "./components/ApplicationFunding";
import CompareFunding from "./components/CompareFunding";
import ApplicationScholarship from "./components/ApplicationScholarship";
import CompareScholarships from "./components/CompareScholarships";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|landing-page)">
          <LandingPage overlapGroup="/img/pexels-cottonbro-6208713@1x.png" acts_Logo="/img/acts-logo@1x.png" />
        </Route>
        <Route path="/menu-button">
          <MenuButton {...menuButtonData} />
        </Route>
        <Route path="/log-in">
          <LogIn {...logInData} />
        </Route>
        <Route path="/welcome">
          <Welcome
            overlapGroup="/img/female-teenage-hacker-sitting-in-front-of-computer-2021-08-27-09-1@1x.png"
            acts_Logo="/img/acts-logo-5@1x.png"
            welcomeToActsAcademy="Welcome to ACTS Academy"
          />
        </Route>
        <Route path="/custom-size-1">
          <CustomSize1 {...customSize1Data} />
        </Route>
        <Route path="/post-sign-up-one-time-pin-is-sent-to-your-email-address">
          <PostSignUpOneTimePinIsSentToYourEma {...postSignUpOneTimePinIsSentToYourEmaData} />
        </Route>
        <Route path="/to-complete-your-profile">
          <ToCompleteYourProfile
            tryPremiumContainer="/img/pexels-kampus-production-5940841-1@1x.png"
            title="We would like to Know you"
            completeYourProfile="Complete your profile"
            arrowProps={toCompleteYourProfileData.arrowProps}
          />
        </Route>
        <Route path="/personal-details-step-1">
          <PersonalDetailsStep1 {...personalDetailsStep1Data} />
        </Route>
        <Route path="/educational-details-step2">
          <EducationalDetailsStep2 {...educationalDetailsStep2Data} />
        </Route>
        <Route path="/professional-experience-step-3">
          <ProfessionalExperienceStep3 {...professionalExperienceStep3Data} />
        </Route>
        <Route path="/additional-information">
          <AdditionalInformation {...additionalInformationData} />
        </Route>
        <Route path="/educational-details-data">
          <EducationalDetailsData {...educationalDetailsDataData} />
        </Route>
        <Route path="/professional-experience">
          <ProfessionalExperience {...professionalExperienceData} />
        </Route>
        <Route path="/additional-information-data">
          <AdditionalInformationData {...additionalInformationDataData} />
        </Route>
        <Route path="/custom-size-2">
          <CustomSize2 />
        </Route>
        <Route path="/dashboard">
          <Dashboard2 {...dashboard22Data} />
        </Route>
        <Route path="/user-profile">
          <UserProfile {...userProfileData} />
        </Route>
        <Route path="/study-hub-1">
          <StudyHub1 {...studyHub1Data} />
        </Route>
        <Route path="/class">
          <Class {...classData} />
        </Route>
        <Route path="/chatbox-class">
          <ChatboxClass {...chatboxClassData} />
        </Route>
        <Route path="/library">
          <Library {...libraryData} />
        </Route>
        <Route path="/library-play-video">
          <LibraryPlayVideo {...libraryPlayVideoData} />
        </Route>
        <Route path="/custom-size-3">
          <CustomSize3 {...customSize3Data} />
        </Route>
        <Route path="/wallet">
          <Wallet {...walletData} />
        </Route>
        <Route path="/check-out-wallet">
          <CheckOutWallet {...checkOutWalletData} />
        </Route>
        <Route path="/wallet-account-details">
          <WalletAccountDetails {...walletAccountDetailsData} />
        </Route>
        <Route path="/wallet-account-statement">
          <WalletAccountStatement {...walletAccountStatementData} />
        </Route>
        <Route path="/community">
          <Community {...communityData} />
        </Route>
        <Route path="/community-groups">
          <CommunityGroups {...communityGroupsData} />
        </Route>
        <Route path="/course">
          <Course {...courseData} />
        </Route>
        <Route path="/course-details">
          <CourseDetails {...courseDetailsData} />
        </Route>
        <Route path="/image-1">
          <Image1 src="/img/pexels-cottonbro-6208713-1x-png@1x.png" />
        </Route>
        <Route path="/image-2">
          <Image2 src="/img/pexels-andrea-piacquadio-3769021@1x.png" />
        </Route>
        <Route path="/image-3">
          <Image3 src="/img/pexels-kampus-production-5940841@1x.png" />
        </Route>
        <Route path="/application-funding">
          <ApplicationFunding {...applicationFundingData} />
        </Route>
        <Route path="/compare-funding">
          <CompareFunding {...compareFundingData} />
        </Route>
        <Route path="/application-scholarship">
          <ApplicationScholarship {...applicationScholarshipData} />
        </Route>
        <Route path="/compare-scholarships">
          <CompareScholarships {...compareScholarshipsData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group12Data = {
    className: "navbar-1",
};

const group411Data = {
    group1Props: group12Data,
};

const alignLeft12Data = {
    className: "align-left-1-1",
};

const dashboard1Data = {
    path11: "/img/path-11-10@1x.png",
    path12: "/img/path-12-10@1x.png",
    path14: "/img/path-12-10@1x.png",
    path13: "/img/path-11-10@1x.png",
};

const user1Data = {
    path9: "/img/path-9-12@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "",
};

const user2Data = {
    path9: "/img/path-9-12@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-1",
};

const group21Data = {
    user1Props: user1Data,
    user2Props: user2Data,
};

const usersThreeFilled1Data = {
    src: "/img/coupon-filled-1--11@1x.png",
};

const usersThreeFilled2Data = {
    src: "/img/users-three-filled-1--10@1x.png",
    className: "users-three-filled",
};

const arrow1Data = {
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
};

const tryPremium1Data = {
    logOut: "Log in",
    arrowProps: arrow1Data,
};

const menuButtonData = {
    overlapGroup4: "/img/pexels-cottonbro-6208713@1x.png",
    group40: "/img/bg-11@1x.png",
    path1: "/img/path-1-10@1x.png",
    path2: "/img/path-2-10@1x.png",
    newToActs: "New to ACTS",
    signIn: "Sign in",
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-15@1x.png",
    line13: "/img/line-13-15@1x.png",
    home: "/img/home-6@1x.png",
    dashboard: "Dashboard",
    studyHub: "Study Hub",
    book: "/img/book-10@1x.png",
    library: "Library",
    combinedShape1: "/img/combined-shape-14@1x.png",
    resources: "Resources",
    combinedShape2: "/img/combined-shape-13@1x.png",
    conferencing: "Conferencing",
    community: "Community",
    reports: "Reports",
    wallet: "Wallet",
    setting: "Setting",
    support: "Support",
    image: "/img/image-change-here-100@1x.png",
    anonymous: "Anonymous",
    group41Props: group411Data,
    alignLeft1Props: alignLeft12Data,
    dashboardProps: dashboard1Data,
    group2Props: group21Data,
    usersThreeFilled1Props: usersThreeFilled1Data,
    usersThreeFilled2Props: usersThreeFilled2Data,
    tryPremiumProps: tryPremium1Data,
};

const logInData = {
    overlapGroup2: "/img/female-teenage-hacker-sitting-in-front-of-computer-2021-08-27-09-1@1x.png",
    acts_Logo: "/img/acts-logo@1x.png",
    arrowPathContainer: "/img/rectangle-13@1x.png",
    arrowPath1: "/img/arrow-path-2@1x.png",
    arrowPath2: "/img/arrow-path-1@1x.png",
    ridhoTijanGmailCo: "eg. baraka@acts.org",
    rectangle: "/img/rectangle-12@1x.png",
    text11: "***********",
    neverReceivedOrFo1: "LOGIN",
    neverReceivedOrFo2: "Don't have an account?",
    resetPassword1: "Sign up",
    neverReceivedOrFo3: " Forgot your password?",
    resetPassword2: "Reset Password",
};

const customSize1Data = {
    overlapGroup4: "/img/pexels-andrea-piacquadio-3769021-1@1x.png",
    acts_Logo: "/img/acts-logo@1x.png",
    neverReceivedOrFo1: "Join ACTS Academy",
    arrowPathContainer1: "/img/rectangle-13@1x.png",
    arrowPath1: "/img/arrow-path-2@1x.png",
    arrowPath2: "/img/arrow-path-1@1x.png",
    ridhoTijanGmailCo1: "Email",
    arrowPathContainer2: "/img/rectangle-13@1x.png",
    arrowPath3: "/img/arrow-path-2@1x.png",
    arrowPath4: "/img/arrow-path-1@1x.png",
    ridhoTijanGmailCo2: "Phone Number",
    rectangle1: "/img/rectangle-12@1x.png",
    x8: "Password",
    rectangle2: "/img/rectangle-12@1x.png",
    oval2: "/img/oval-1@1x.png",
    x112: "Confirm Password",
    neverReceivedOrFo2: "Sign Up",
    resetPassword1: "Already signed up?",
    resetPassword2: "Log In",
};

const postSignUpOneTimePinIsSentToYourEmaData = {
    overlapGroup1: "/img/pexels-andrea-piacquadio-3769021-1@1x.png",
    acts_Logo: "/img/acts-logo@1x.png",
    neverReceivedOrFo1: "An OTP has been sent to your email",
    neverReceivedOrFo2: "An OTP has been sent to your email",
    rectangle: "/img/rectangle-2@1x.png",
    text8: "***********",
    neverReceivedOrFo3: "timothyamayi@gmail.com",
    neverReceivedOrFo4: "Resend?",
    neverReceivedOrFo5: "Confirm",
};

const arrow2Data = {
    line11: "/img/line-11@1x.png",
    line12: "/img/line-12@1x.png",
    line13: "/img/line-13@1x.png",
    className: "arrow-1",
};

const toCompleteYourProfileData = {
    arrowProps: arrow2Data,
};

const layer11Data = {
    src: "/img/path9429-6@1x.png",
};

const calendar1Data = {
    path18: "/img/path-18-1@1x.png",
    path19: "/img/path-18-1@1x.png",
    path20: "/img/path-20-1@1x.png",
    path21: "/img/path-18-1@1x.png",
    path22: "/img/path-18-1@1x.png",
    path23: "/img/path-20-1@1x.png",
    path24: "/img/path-24-1@1x.png",
    path25: "/img/path-25-1@1x.png",
    path26: "/img/path-25-1@1x.png",
};

const layer12Data = {
    src: "/img/path9429-10@1x.png",
    className: "layer1-2",
};

const layer13Data = {
    src: "/img/path9429-10@1x.png",
    className: "layer1-3",
};

const layer14Data = {
    src: "/img/path9429-6@1x.png",
    className: "layer1",
};

const layer15Data = {
    src: "/img/path9429-10@1x.png",
    className: "layer1",
};

const personalDetailsStep1Data = {
    acts_Logo: "/img/acts-logo@1x.png",
    overlapGroup7: "/img/path-1001-1@1x.png",
    step1: "Step 1",
    taskDone: "Task Done:",
    text12: "8/9",
    overlapGroup9: "/img/path-1002-1@1x.png",
    path1003: "/img/path-1003-1@1x.png",
    rectangle: "/img/rectangle-18@1x.png",
    ridhoTijanGmailCo1: "First Name",
    ridhoTijanGmailCo2: "Surname",
    ridhoTijanGmailCo3: "DOB (Date of Birth)",
    ridhoTijanGmailCo4: "Gender",
    ridhoTijanGmailCo5: "Name Update:",
    ridhoTijanGmailCo6: "Bio Update:",
    profileUpdate: "Profile Update",
    personalDetails: "Personal Details",
    path1014: "/img/path-1014@1x.png",
    ridhoTijanGmailCo7: "Location:",
    ridhoTijanGmailCo8: "Country",
    ridhoTijanGmailCo9: "State",
    x53: "Other Names",
    x113: "Nationality",
    x19: "City",
    neverReceivedOrFo: "NEXT",
    layer11Props: layer11Data,
    calendarProps: calendar1Data,
    layer12Props: layer12Data,
    layer13Props: layer13Data,
    layer14Props: layer14Data,
    layer15Props: layer15Data,
};

const layer122Data = {
    src: "/img/path9429-1@1x.png",
};

const calendar2Data = {
    path18: "/img/path-18-1@1x.png",
    path19: "/img/path-18-1@1x.png",
    path20: "/img/path-20-1@1x.png",
    path21: "/img/path-18-1@1x.png",
    path22: "/img/path-18-1@1x.png",
    path23: "/img/path-20-1@1x.png",
    path24: "/img/path-24-1@1x.png",
    path25: "/img/path-25-1@1x.png",
    path26: "/img/path-25-1@1x.png",
    className: "calendar-7",
};

const calendar3Data = {
    path18: "/img/path-18-1@1x.png",
    path19: "/img/path-18-1@1x.png",
    path20: "/img/path-20-1@1x.png",
    path21: "/img/path-18-1@1x.png",
    path22: "/img/path-18-1@1x.png",
    path23: "/img/path-20-1@1x.png",
    path24: "/img/path-24-1@1x.png",
    path25: "/img/path-25-1@1x.png",
    path26: "/img/path-25-1@1x.png",
    className: "calendar",
};

const layer123Data = {
    src: "/img/path9429-2@1x.png",
    className: "layer1-6",
};

const group422Data = {
    className: "group-12",
};

const group423Data = {
    className: "group-12",
};

const group424Data = {
    className: "group-12",
};

const educationalDetailsStep2Data = {
    acts_Logo: "/img/acts-logo@1x.png",
    overlapGroup3: "/img/path-1001-1@1x.png",
    step2: "Step 2",
    taskDone: "Task Done:",
    text9: "8/12",
    overlapGroup18: "/img/path-1002-1@1x.png",
    path1003: "/img/path-1003-1@1x.png",
    rectangle: "/img/rectangle-18@1x.png",
    ridhoTijanGmailCo1: "Institution",
    ridhoTijanGmailCo2: "Level of study",
    ridhoTijanGmailCo3: "Area of study",
    ridhoTijanGmailCo4: "Specific Certificate",
    profileUpdate: "Profile Update",
    educationDetails: "Education Details:",
    addEntry: "Add Entry",
    ridhoTijanGmailCo5: "Grade/Score",
    neverReceivedOrFo1: "%",
    ridhoTijanGmailCo6: "Major/Speciality",
    x51: "Start Date",
    x111: "End Date",
    x171: "Mode of study",
    neverReceivedOrFo2: "Upload",
    x23: "Certificate",
    neverReceivedOrFo3: "Upload",
    x25: "Transcript",
    neverReceivedOrFo4: "Upload",
    x27: "Thesis/Project",
    neverReceivedOrFo5: "PREVIOUS",
    neverReceivedOrFo6: "NEXT",
    layer121Props: layer122Data,
    calendar1Props: calendar2Data,
    calendar2Props: calendar3Data,
    layer122Props: layer123Data,
    group41Props: group422Data,
    group42Props: group423Data,
    group43Props: group424Data,
};

const calendar4Data = {
    path18: "/img/path-18-1@1x.png",
    path19: "/img/path-18-1@1x.png",
    path20: "/img/path-20-1@1x.png",
    path21: "/img/path-18-1@1x.png",
    path22: "/img/path-18-1@1x.png",
    path23: "/img/path-20-1@1x.png",
    path24: "/img/path-24-1@1x.png",
    path25: "/img/path-25-1@1x.png",
    path26: "/img/path-25-1@1x.png",
    className: "calendar-2",
};

const calendar5Data = {
    path18: "/img/path-18-1@1x.png",
    path19: "/img/path-18-1@1x.png",
    path20: "/img/path-20-1@1x.png",
    path21: "/img/path-18-1@1x.png",
    path22: "/img/path-18-1@1x.png",
    path23: "/img/path-20-1@1x.png",
    path24: "/img/path-24-1@1x.png",
    path25: "/img/path-25-1@1x.png",
    path26: "/img/path-25-1@1x.png",
    className: "calendar-3",
};

const professionalExperienceStep3Data = {
    acts_Logo: "/img/acts-logo@1x.png",
    overlapGroup3: "/img/path-1001-1@1x.png",
    step3: "Step 3",
    taskDone: "Task Done:",
    text3: "8/9",
    overlapGroup11: "/img/path-1002-1@1x.png",
    path1003: "/img/path-1003-1@1x.png",
    rectangle: "/img/rectangle-18@1x.png",
    ridhoTijanGmailCo1: "Name of company",
    ridhoTijanGmailCo2: "Field of practice",
    ridhoTijanGmailCo3: "Position",
    ridhoTijanGmailCo4: "Reporting to",
    profileUpdate: "Profile Update",
    professionalExperience: "Professional Experience",
    addEntry: "Add Entry",
    ridhoTijanGmailCo5: "Industry",
    ridhoTijanGmailCo6: "Location",
    x5: "Start Date",
    x11: "End Date",
    x17: "Role reference (Email)",
    neverReceivedOrFo1: "PREVIOUS",
    neverReceivedOrFo2: "NEXT",
    calendar1Props: calendar4Data,
    calendar2Props: calendar5Data,
};

const layer16Data = {
    src: "/img/path9429@1x.png",
    className: "layer1-4",
};

const calendar6Data = {
    path18: "/img/path-18-1@1x.png",
    path19: "/img/path-18-1@1x.png",
    path20: "/img/path-20-1@1x.png",
    path21: "/img/path-18-1@1x.png",
    path22: "/img/path-18-1@1x.png",
    path23: "/img/path-20-1@1x.png",
    path24: "/img/path-24-1@1x.png",
    path25: "/img/path-25-1@1x.png",
    path26: "/img/path-25-1@1x.png",
    className: "calendar-4",
};

const group4Data = {
    className: "group-16",
};

const additionalInformationData = {
    acts_Logo: "/img/acts-logo@1x.png",
    overlapGroup4: "/img/path-1001-1@1x.png",
    step4: "Step 4",
    taskDone: "Task Done:",
    text2: "8/9",
    overlapGroup8: "/img/path-1002-1@1x.png",
    path1003: "/img/path-1003-1@1x.png",
    rectangle: "/img/rectangle-18@1x.png",
    ridhoTijanGmailCo1: "Preferred Institution",
    ridhoTijanGmailCo2: "Level of study",
    ridhoTijanGmailCo3: "Area of study",
    ridhoTijanGmailCo4: "Major/Speciality",
    profileUpdate: "Profile Update",
    additionalInformation: "Additional Information",
    futureEducationOptional: "Future Education (Optional)",
    ridhoTijanGmailCo5: "Preferred certificate",
    ridhoTijanGmailCo6: "Preferred start date",
    addEntry: "Add Entry",
    neverReceivedOrFo1: "CANCEL",
    neverReceivedOrFo2: "SUBMIT",
    layer1Props: layer16Data,
    calendarProps: calendar6Data,
    groupProps: group4Data,
};

const group102Data = {
    className: "group-11-1",
};

const group103Data = {
    className: "group-12-1",
};

const group104Data = {
    className: "group-13-1",
};

const group142Data = {
    className: "group-15-1",
};

const group143Data = {
    className: "group-16-1",
};

const group144Data = {
    className: "group-17-1",
};

const educationalDetailsDataData = {
    overlapGroup: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    barakaTimothyEducationDetailsData: <React.Fragment>Baraka Timothy<br />Education Details (Data)</React.Fragment>,
    institution: "Institution",
    areaOfStudy: "Area of Study",
    gradeScore: "Grade/Score",
    levelOfStudy: "Level of Study",
    specificCertificate: "Specific Certificate",
    majorSpeciality: "Major/Speciality",
    modeOfStudy: "Mode of Study",
    approve: "Approve",
    acts_Logo: "/img/acts-logo@1x.png",
    group102Props: group102Data,
    group103Props: group103Data,
    group104Props: group104Data,
    group142Props: group142Data,
    group143Props: group143Data,
    group144Props: group144Data,
};

const group146Data = {
    className: "group-15-2",
};

const group147Data = {
    className: "group-16-2",
};

const group148Data = {
    className: "group-17-2",
};

const group1023Data = {
    className: "group-18-1",
};

const group1024Data = {
    className: "group-19-1",
};

const group1025Data = {
    className: "group-20-1",
};

const professionalExperienceData = {
    overlapGroup: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    nameOfCompany: <React.Fragment>Name of<br />Company</React.Fragment>,
    position: "Position",
    place: "Industry",
    fieldOfPractice: "Field of Practice",
    reportingTo: "Reporting to?",
    location: "Location",
    startEndDate: "Start/End Date",
    barakaTimothyProfe: <React.Fragment>Baraka Timothy<br />Professional Experience Details (Data)</React.Fragment>,
    approve: "Approve",
    ddMmYear: "DD.MM.YEAR",
    acts_Logo: "/img/acts-logo@1x.png",
    group142Props: group146Data,
    group143Props: group147Data,
    group144Props: group148Data,
    group1022Props: group1023Data,
    group1023Props: group1024Data,
    group1024Props: group1025Data,
};

const group1410Data = {
    className: "group-15-3",
};

const group1411Data = {
    className: "group-16-3",
};

const group1412Data = {
    className: "group-17-3",
};

const group222Data = {
    className: "group-23-1",
};

const group223Data = {
    className: "group-24-1",
};

const additionalInformationDataData = {
    overlapGroup1: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    date: "20.01.2023",
    barakaTimothyAddit: <React.Fragment>Baraka Timothy<br />Additional Information (Data)</React.Fragment>,
    approve: "Approve",
    acts_Logo: "/img/acts-logo@1x.png",
    group142Props: group1410Data,
    group143Props: group1411Data,
    group144Props: group1412Data,
    group221Props: group222Data,
    group222Props: group223Data,
};

const group13Data = {
    className: "navbar-2",
};

const group412Data = {
    className: "group-41-1",
    group1Props: group13Data,
};

const mainMenu2Data = {
    className: "main-menu-2",
};

const dashboard2Data = {
    path11: "/img/path-11-10@1x.png",
    path12: "/img/path-12-10@1x.png",
    path14: "/img/path-12-10@1x.png",
    path13: "/img/path-11-10@1x.png",
    className: "dashboard-2",
};

const user3Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-2",
};

const user4Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-3",
};

const group23Data = {
    user1Props: user3Data,
    user2Props: user4Data,
};

const barChart2Data = {
    className: "bar-chart-1",
};

const usersThreeFilled3Data = {
    src: "/img/coupon-filled-1--11@1x.png",
};

const usersThreeFilled4Data = {
    src: "/img/users-three-filled-1--10@1x.png",
    className: "users-three-filled-1",
};

const arrow3Data = {
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
};

const tryPremium2Data = {
    logOut: "Log out",
    className: "try-premium-1",
    arrowProps: arrow3Data,
};

const search1Data = {
    search1: "/img/path-27-10@1x.png",
};

const search2Data = {
    search1: "/img/path-27-10@1x.png",
};

const calendar7Data = {
    path18: "/img/path-18-6@1x.png",
    path19: "/img/path-18-6@1x.png",
    path20: "/img/path-20-6@1x.png",
    path21: "/img/path-18-6@1x.png",
    path22: "/img/path-18-6@1x.png",
    path23: "/img/path-20-6@1x.png",
    path24: "/img/path-24-6@1x.png",
    path25: "/img/path-25-6@1x.png",
    path26: "/img/path-25-6@1x.png",
    className: "calendar-5",
};

const calendar8Data = {
    path18: "/img/path-18-6@1x.png",
    path19: "/img/path-18-6@1x.png",
    path20: "/img/path-20-6@1x.png",
    path21: "/img/path-18-6@1x.png",
    path22: "/img/path-18-6@1x.png",
    path23: "/img/path-20-6@1x.png",
    path24: "/img/path-24-6@1x.png",
    path25: "/img/path-25-6@1x.png",
    path26: "/img/path-25-6@1x.png",
    className: "calendar-6",
};

const phone1Data = {
    className: "",
};

const envelope1Data = {
    className: "",
};

const dorisSanders1Data = {
    phoneProps: phone1Data,
    envelopeProps: envelope1Data,
};

const totalClients1Data = {
    group839: "/img/path-35-1@1x.png",
    path36: "/img/path-36-1@1x.png",
};

const totalClients2Data = {
    group839: "/img/path-35-3@1x.png",
    path36: "/img/path-36-3@1x.png",
    className: "total-clients-1",
};

const dashboard22Data = {
    overlapGroup6: "/img/pexels-artem-podrez-5726810@1x.png",
    overlapGroup7: "/img/bg-11@1x.png",
    path1: "/img/path-1-10@1x.png",
    path2: "/img/path-2-10@1x.png",
    newToActs: "New to ACTS",
    signIn: "Sign in",
    line111: "/img/line-11-10@1x.png",
    line121: "/img/line-12-10@1x.png",
    line131: "/img/line-13-10@1x.png",
    overlapGroup17: "/img/bg-10@1x.png",
    home: "/img/home-7@1x.png",
    dashboard: "Dashboard",
    studyHub: "Study Hub",
    book: "/img/book-10@1x.png",
    library: "Library",
    combinedShape1: "/img/combined-shape-14@1x.png",
    resources: "Resources",
    combinedShape2: "/img/combined-shape-13@1x.png",
    conferencing: "Conferencing",
    community: "Community",
    reports: "Reports",
    wallet: "Wallet",
    setting: "Setting",
    support: "Support",
    image: "/img/image-change-here-100@1x.png",
    baraka: "Baraka",
    enrollNow: "Enroll Now",
    myCourses: "My courses",
    calendContainer: "/img/path-1025@1x.png",
    myCalender: "My calender",
    storyTellingForSocialChange: <React.Fragment>Story telling for<br />social change</React.Fragment>,
    overlapGroup21: "/img/path-1015@1x.png",
    path1016: "/img/path-1016@1x.png",
    percent: "85%",
    actsSchoolOfComputing: "Acts - School of computing",
    path1024: "/img/path-1024@1x.png",
    bachelorsDegree: "Bachelors Degree",
    startDate: "Start Date",
    neverReceivedOrFo1: "Details",
    neverReceivedOrFo2: "Next",
    line112: "/img/line-11-10@1x.png",
    line122: "/img/line-12-10@1x.png",
    line132: "/img/line-13-10@1x.png",
    completedCourses: "Completed Courses",
    address1: "2 Courses",
    path987: "/img/path-987@1x.png",
    adsHere: "Ads Here",
    summaryOfAlertsGenerated: "Summary of alerts generated",
    path35: "/img/path-35-2@1x.png",
    path36: "/img/path-36-2@1x.png",
    union1: "/img/union-1@1x.png",
    path988: "/img/path-988@1x.png",
    alertsGenerated: "Alerts generated",
    low: "Low",
    medium: "Medium",
    high: "High",
    courseInProgress: "Course in Progress",
    address2: "3 Courses",
    path1023: "/img/path-1023@1x.png",
    group41Props: group412Data,
    mainMenuProps: mainMenu2Data,
    dashboardProps: dashboard2Data,
    group2Props: group23Data,
    barChartProps: barChart2Data,
    usersThreeFilled1Props: usersThreeFilled3Data,
    usersThreeFilled2Props: usersThreeFilled4Data,
    tryPremiumProps: tryPremium2Data,
    search1Props: search1Data,
    search2Props: search2Data,
    calendar1Props: calendar7Data,
    calendar2Props: calendar8Data,
    dorisSandersProps: dorisSanders1Data,
    totalClients1Props: totalClients1Data,
    totalClients2Props: totalClients2Data,
};

const group1413Data = {
    className: "group-14-4",
};

const group1414Data = {
    className: "group-15-4",
};

const group1415Data = {
    className: "group-16-4",
};

const group1416Data = {
    className: "group-17-4",
};

const group105Data = {
    className: "group-10-2",
};

const group1417Data = {
    className: "group-29-1",
};

const group1418Data = {
    className: "group-30-1",
};

const group1419Data = {
    className: "group-33",
};

const group1420Data = {
    className: "group-34",
};

const group1026Data = {
    className: "group-10-4",
};

const group352Data = {
    className: "group-35-1",
};

const group212Data = {
    className: "group-21-2",
};

const group362Data = {
    className: "group-37",
};

const group363Data = {
    className: "group-38",
};

const group364Data = {
    className: "group-39",
};

const image2Data = {
    className: "image-4",
};

const userProfileData = {
    overlapGroup1: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    name1: "Timothy",
    baraka: "Baraka",
    amayi: "Amayi",
    date1: "03.03.1997",
    male: "Male",
    name2: "Kenya",
    place1: "Nairobi",
    place2: "Nairobi",
    barakaTimothyUserProfile: "Baraka Timothy - User Profile",
    firstName: <React.Fragment>First<br />Name</React.Fragment>,
    surname: "Surname",
    otherName: <React.Fragment>Other<br />Name</React.Fragment>,
    dateOfBirth: <React.Fragment>Date of<br />Birth</React.Fragment>,
    gender: "Gender",
    country: "Country",
    state: "State",
    city: "City",
    approve: "Approve",
    institution: "Institution",
    areaOfStudy: "Area of Study",
    gradeScore: "Grade/Score",
    levelOfStudy: "Level of Study",
    specificCertificate: "Specific Certificate",
    majorSpeciality: "Major/Speciality",
    modeOfStudy: "Mode of Study",
    nameOfCompany: <React.Fragment>Name of<br />Company</React.Fragment>,
    position: "Position",
    place3: "Industry",
    fieldOfPractice: "Field of Practice",
    reportingTo: "Reporting to?",
    location: "Location",
    startEndDate: "Start/End Date",
    ddMmYear: "DD.MM.YEAR",
    date2: "10.02.2023",
    acts_Logo: "/img/acts-logo@1x.png",
    group141Props: group1413Data,
    group141Props2: group1414Data,
    group142Props: group1415Data,
    group143Props: group1416Data,
    group361Props: group105Data,
    group144Props: group1417Data,
    group145Props: group1418Data,
    group146Props: group1419Data,
    group147Props: group1420Data,
    group362Props: group1026Data,
    group363Props: group352Data,
    group363Props2: group212Data,
    group361Props2: group362Data,
    group362Props2: group363Data,
    group363Props3: group364Data,
    group361Props3: image2Data,
};

const group15Data = {
    className: "navbar-3",
};

const group413Data = {
    className: "group-41-2",
    group1Props: group15Data,
};

const mainMenu3Data = {
    className: "main-menu-4",
};

const dashboard3Data = {
    path11: "/img/path-11-1@1x.png",
    path12: "/img/path-12-1@1x.png",
    path14: "/img/path-12-1@1x.png",
    path13: "/img/path-11-1@1x.png",
    className: "dashboard-3",
};

const user5Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-2",
};

const user6Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-5",
};

const group24Data = {
    user1Props: user5Data,
    user2Props: user6Data,
};

const barChart3Data = {
    className: "bar-chart-2",
};

const usersThreeFilled5Data = {
    src: "/img/coupon-filled-1--11@1x.png",
};

const usersThreeFilled6Data = {
    src: "/img/users-three-filled-1--10@1x.png",
    className: "users-three-filled-2",
};

const arrow4Data = {
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
};

const tryPremium3Data = {
    logOut: "Log out",
    className: "try-premium-2",
    arrowProps: arrow4Data,
};

const group9021Data = {
    studyHub: "Study Hub",
};

const group9032Data = {
    className: "group-904",
};

const group9033Data = {
    className: "group-905",
};

const group9034Data = {
    className: "group-906",
};

const group9035Data = {
    className: "group-907",
};

const previous1Data = {
    children: "Prev",
};

const previous2Data = {
    children: "Next",
};

const pagination1Data = {
    previous1Props: previous1Data,
    previous2Props: previous2Data,
};

const phone2Data = {
    className: "",
};

const envelope2Data = {
    className: "",
};

const dorisSanders2Data = {
    className: "doris-sanders-1",
    phoneProps: phone2Data,
    envelopeProps: envelope2Data,
};

const search3Data = {
    search1: "/img/path-27-10@1x.png",
    className: "search-3",
};

const studyHub1Data = {
    overlapGroup9: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    overlapGroup10: "/img/bg-11@1x.png",
    path1: "/img/path-1-10@1x.png",
    path2: "/img/path-2-10@1x.png",
    newToActs: "New to ACTS",
    signIn: "Sign in",
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
    home: "/img/home-10@1x.png",
    dashboard: "Dashboard",
    overlapGroup13: "/img/bg-10@1x.png",
    studyHub: "Study Hub",
    book: "/img/book-10@1x.png",
    library: "Library",
    combinedShape1: "/img/combined-shape-14@1x.png",
    resources: "Resources",
    combinedShape2: "/img/combined-shape-13@1x.png",
    conferencing: "Conferencing",
    community: "Community",
    reports: "Reports",
    wallet: "Wallet",
    setting: "Setting",
    support: "Support",
    image: "/img/image-change-here-100@1x.png",
    baraka: "Baraka",
    unitTitle: "Unit Title",
    unitCode: "Unit Code",
    instructor: "Instructor",
    place: "Progress",
    notification: "Notification",
    group41Props: group413Data,
    mainMenuProps: mainMenu3Data,
    dashboardProps: dashboard3Data,
    group2Props: group24Data,
    barChartProps: barChart3Data,
    usersThreeFilled1Props: usersThreeFilled5Data,
    usersThreeFilled2Props: usersThreeFilled6Data,
    tryPremiumProps: tryPremium3Data,
    group902Props: group9021Data,
    group9031Props: group9032Data,
    group9032Props: group9033Data,
    group9033Props: group9034Data,
    group9034Props: group9035Data,
    paginationProps: pagination1Data,
    dorisSandersProps: dorisSanders2Data,
    searchProps: search3Data,
};

const group16Data = {
    className: "group-1",
};

const group414Data = {
    className: "group-41-3",
    group1Props: group16Data,
};

const mainMenu4Data = {
    className: "main-menu-6",
};

const dashboard4Data = {
    path11: "/img/path-11-1@1x.png",
    path12: "/img/path-12-1@1x.png",
    path14: "/img/path-12-1@1x.png",
    path13: "/img/path-11-1@1x.png",
    className: "dashboard-4",
};

const user7Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-6",
};

const user8Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-7",
};

const group25Data = {
    user1Props: user7Data,
    user2Props: user8Data,
};

const barChart4Data = {
    className: "bar-chart-3",
};

const usersThreeFilled7Data = {
    src: "/img/coupon-filled-1--11@1x.png",
};

const usersThreeFilled8Data = {
    src: "/img/users-three-filled-1--10@1x.png",
    className: "users-three-filled-3",
};

const arrow5Data = {
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
};

const tryPremium4Data = {
    logOut: "Log out",
    className: "try-premium-3",
    arrowProps: arrow5Data,
};

const search4Data = {
    search1: "/img/path-27-13@1x.png",
    className: "search-6",
};

const bellFilledData = {
    src: "/img/bell-filled-1-@1x.png",
};

const group9022Data = {
    studyHub: "Study Hub",
    className: "group-902-1",
};

const phone3Data = {
    className: "phone-3",
};

const envelope3Data = {
    className: "envelope-3",
};

const dorisSanders3Data = {
    className: "doris-sanders-2",
    phoneProps: phone3Data,
    envelopeProps: envelope3Data,
};

const previous3Data = {
    children: "Prev",
};

const previous4Data = {
    children: "Next",
};

const pagination2Data = {
    className: "pagination-1",
    previous1Props: previous3Data,
    previous2Props: previous4Data,
};

const classData = {
    overlapGroup4: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    overlapGroup6: "/img/bg-11@1x.png",
    path1: "/img/path-1-10@1x.png",
    path2: "/img/path-2-10@1x.png",
    newToActs: "New to ACTS",
    signIn: "Sign in",
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
    home: "/img/home-12@1x.png",
    dashboard: "Dashboard",
    overlapGroup25: "/img/bg-10@1x.png",
    studyHub: "Study Hub",
    book: "/img/book-10@1x.png",
    library: "Library",
    combinedShape1: "/img/combined-shape-14@1x.png",
    resources: "Resources",
    combinedShape2: "/img/combined-shape-13@1x.png",
    conferencing: "Conferencing",
    community: "Community",
    reports: "Reports",
    wallet: "Wallet",
    setting: "Setting",
    support: "Support",
    image: "/img/image-change-here-100@1x.png",
    baraka: "Baraka",
    topic11: "Topic 1",
    ridhoTijanGmailCo1: "Subtopic 1",
    ridhoTijanGmailCo2: "Subtopic 2",
    ridhoTijanGmailCo3: "Subtopic 3",
    checkbox1: "/img/checkbox-1@1x.png",
    checkbox2: "/img/checkbox-1@1x.png",
    checkbox3: "/img/checkbox-1@1x.png",
    liveClass1: "Live Class",
    liveClass2: "Live Class",
    liveClass3: "Live Class",
    tutorialAudio1: "Tutorial Audio",
    sound1: "/img/sound-1@1x.png",
    tutorialAudio2: "Tutorial Audio",
    sound2: "/img/sound-1@1x.png",
    tutorialAudio3: "Tutorial Audio",
    sound3: "/img/sound-1@1x.png",
    tutorialVideo1: "Tutorial Video",
    video1: "/img/combined-shape-10@1x.png",
    tutorialVideo2: "Tutorial Video",
    video2: "/img/combined-shape-10@1x.png",
    tutorialVideo3: "Tutorial Video",
    video3: "/img/combined-shape-10@1x.png",
    quiz: "Quiz",
    quiz11: "Quiz 1",
    polygon2: "/img/polygon-2@1x.png",
    assignment: "Assignment",
    assignment11: "Assignment 1",
    polygon4: "/img/polygon-2@1x.png",
    topic12: "Topic 1",
    ridhoTijanGmailCo4: "Subtopic 1",
    ridhoTijanGmailCo5: "Subtopic 2",
    ridhoTijanGmailCo6: "Subtopic 3",
    checkbox4: "/img/checkbox-1@1x.png",
    checkbox5: "/img/checkbox-1@1x.png",
    checkbox6: "/img/checkbox-1@1x.png",
    liveClass4: "Live Class",
    liveClass5: "Live Class",
    liveClass6: "Live Class",
    tutorialAudio4: "Tutorial Audio",
    sound4: "/img/sound-3@1x.png",
    tutorialAudio5: "Tutorial Audio",
    sound5: "/img/sound-3@1x.png",
    tutorialAudio6: "Tutorial Audio",
    sound6: "/img/sound-3@1x.png",
    tutorialVideo4: "Tutorial Video",
    video4: "/img/combined-shape-7@1x.png",
    tutorialVideo5: "Tutorial Video",
    video5: "/img/combined-shape-7@1x.png",
    tutorialVideo6: "Tutorial Video",
    video6: "/img/combined-shape-7@1x.png",
    quiz2: "Quiz",
    quiz12: "Quiz 1",
    polygon5: "/img/polygon-2@1x.png",
    assignment2: "Assignment",
    assignment12: "Assignment 1",
    polygon6: "/img/polygon-2@1x.png",
    tutorialAudio7: "Tutorial Audio",
    tutorialAudio8: "Tutorial Audio",
    tutorialAudio9: "Tutorial Audio",
    tutorialVideo7: "Tutorial Video",
    tutorialVideo8: "Tutorial Video",
    tutorialVideo9: "Tutorial Video",
    video7: "/img/combined-shape-10@1x.png",
    video8: "/img/combined-shape-10@1x.png",
    video9: "/img/combined-shape-10@1x.png",
    checkbox7: "/img/checkbox-1@1x.png",
    liveClass7: "Live Class",
    topic13: "Topic 1",
    ridhoTijanGmailCo7: "Subtopic 1",
    ridhoTijanGmailCo8: "Subtopic 2",
    ridhoTijanGmailCo9: "Subtopic 3",
    checkbox8: "/img/checkbox-1@1x.png",
    liveClass8: "Live Class",
    checkbox9: "/img/checkbox-1@1x.png",
    liveClass9: "Live Class",
    sound7: "/img/sound-1@1x.png",
    sound8: "/img/sound-1@1x.png",
    sound9: "/img/sound-1@1x.png",
    quiz13: "Quiz 1",
    polygon7: "/img/polygon-2@1x.png",
    assignment13: "Assignment 1",
    polygon8: "/img/polygon-2@1x.png",
    quiz3: "Quiz",
    assignment3: "Assignment",
    myNotesHere: "My Notes Here",
    group41Props: group414Data,
    mainMenuProps: mainMenu4Data,
    dashboardProps: dashboard4Data,
    group2Props: group25Data,
    barChartProps: barChart4Data,
    usersThreeFilled1Props: usersThreeFilled7Data,
    usersThreeFilled2Props: usersThreeFilled8Data,
    tryPremiumProps: tryPremium4Data,
    searchProps: search4Data,
    bellFilledProps: bellFilledData,
    group902Props: group9022Data,
    dorisSandersProps: dorisSanders3Data,
    paginationProps: pagination2Data,
};

const group17Data = {
    className: "group-1-1",
};

const group415Data = {
    className: "group-41-4",
    group1Props: group17Data,
};

const arrow6Data = {
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
};

const tryPremium5Data = {
    logOut: "Log out",
    className: "try-premium-4",
    arrowProps: arrow6Data,
};

const mainMenu5Data = {
    className: "main-menu-8",
};

const dashboard5Data = {
    path11: "/img/path-11-1@1x.png",
    path12: "/img/path-12-1@1x.png",
    path14: "/img/path-12-1@1x.png",
    path13: "/img/path-11-1@1x.png",
    className: "dashboard-5",
};

const user9Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-8",
};

const user10Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-9",
};

const group26Data = {
    className: "group-2-4",
    user1Props: user9Data,
    user2Props: user10Data,
};

const barChart5Data = {
    className: "bar-chart-4",
};

const settingsFilled5Data = {
    className: "settings-filled-8",
};

const usersThreeFilled9Data = {
    src: "/img/users-three-filled-1--10@1x.png",
    className: "users-three-filled-4",
};

const usersThreeFilled10Data = {
    src: "/img/coupon-filled-1--11@1x.png",
    className: "coupon-filled-4",
};

const search5Data = {
    search1: "/img/path-27-13@1x.png",
    className: "search-9",
};

const image421Data = {
    src: "/img/image-change-here-3@1x.png",
    className: "",
};

const andreeaWade1Data = {
    andreeaWade: "Andreea Wade",
    image4Props: image421Data,
};

const bobbyMendez1Data = {
    name: "Bobby Mendez",
};

const image422Data = {
    src: "/img/image-change-here-100@1x.png",
    className: "image-13-2",
};

const tomSchneider1Data = {
    name: "Tom Schneider",
    image4Props: image422Data,
};

const image423Data = {
    src: "/img/image-change-here-100@1x.png",
    className: "image-13",
};

const image52Data = {
    className: "image-18",
};

const bobbyMendez21Data = {
    name: "Bobby Mendez",
    image5Props: image52Data,
};

const image53Data = {
    className: "image-19",
};

const elizabethHolland1Data = {
    name: "Elizabeth Holland",
    image5Props: image53Data,
};

const option4Data = {
    className: "option-4",
};

const search22Data = {
    search1: "/img/path-27-13@1x.png",
};

const text11Data = {
    children: "Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam.",
};

const text12Data = {
    children: "Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed.",
    className: "text-4-2",
};

const image54Data = {
    className: "image-19",
};

const image424Data = {
    src: "/img/image-change-here-100@1x.png",
    className: "image-16",
};

const image55Data = {
    className: "image-38",
};

const image56Data = {
    className: "image-39",
};

const chatboxClassData = {
    groupContainer: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    bg1: "/img/bg-11@1x.png",
    bg2: "/img/bg-10@1x.png",
    image: "/img/image-change-here-100@1x.png",
    baraka: "Baraka",
    path1: "/img/path-1-10@1x.png",
    path2: "/img/path-2-10@1x.png",
    newToActs: "New to ACTS",
    signIn: "Sign in",
    dashboard: "Dashboard",
    resources: "Resources",
    conferencing: "Conferencing",
    community: "Community",
    reports: "Reports",
    wallet: "Wallet",
    setting: "Setting",
    support: "Support",
    studyHub: "Study Hub",
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
    library: "Library",
    home: "/img/home-12@1x.png",
    book: "/img/book-10@1x.png",
    combinedShape1: "/img/combined-shape-13@1x.png",
    combinedShape2: "/img/combined-shape-14@1x.png",
    bg3: "/img/bg-2@1x.png",
    recentMessage: "Recent Message",
    line27: "/img/line-27@1x.png",
    canYouSendMeThe: "Can you send me the png without background. Than",
    smileFace: "/img/path-1001-2@1x.png",
    paperClip: "/img/path-992@1x.png",
    sent: "Sent",
    path1002: "/img/path-1002-2@1x.png",
    path1003: "/img/path-1003-2@1x.png",
    sundayMarch172021At239Pm: "Sunday, march 17, 2021  at 2:39 PM",
    sundayMarch172021At245Pm: "Sunday, march 17, 2021  at 2:45 PM",
    proinAcQuamEtLec: "Proin ac quam et lectus vestibulum blandit.",
    sundayMarch172021At252Pm: "Sunday, march 17, 2021  at 2:52 PM",
    typing: "Typing",
    line17: "/img/line-17@1x.png",
    salomeAkinyi: "Salome Akinyi",
    hiDidYouCheckTheFile: "Hi, Did you check the file?",
    searchProps: group415Data,
    tryPremiumProps: tryPremium5Data,
    dashboardProps: mainMenu5Data,
    dashboardProps2: dashboard5Data,
    group2Props: group26Data,
    group2Props2: barChart5Data,
    usersThreeFilled1Props: settingsFilled5Data,
    usersThreeFilled1Props2: usersThreeFilled9Data,
    usersThreeFilled2Props: usersThreeFilled10Data,
    searchProps2: search5Data,
    andreeaWadeProps: andreeaWade1Data,
    bobbyMendezProps: bobbyMendez1Data,
    tomSchneiderProps: tomSchneider1Data,
    image41Props: image423Data,
    bobbyMendez2Props: bobbyMendez21Data,
    elizabethHollandProps: elizabethHolland1Data,
    optionProps: option4Data,
    search2Props: search22Data,
    text11Props: text11Data,
    text12Props: text12Data,
    image51Props: image54Data,
    image42Props: image424Data,
    image52Props: image55Data,
    image53Props: image56Data,
};

const group18Data = {
    className: "navbar-4",
};

const group416Data = {
    className: "group-41-5",
    group1Props: group18Data,
};

const mainMenu6Data = {
    className: "main-menu-10",
};

const dashboard6Data = {
    path11: "/img/path-11-10@1x.png",
    path12: "/img/path-12-10@1x.png",
    path14: "/img/path-12-10@1x.png",
    path13: "/img/path-11-10@1x.png",
    className: "dashboard-6",
};

const user11Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-2",
};

const user12Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-11",
};

const group27Data = {
    user1Props: user11Data,
    user2Props: user12Data,
};

const barChart6Data = {
    className: "bar-chart-5",
};

const usersThreeFilled11Data = {
    src: "/img/coupon-filled-1--11@1x.png",
};

const usersThreeFilled12Data = {
    src: "/img/users-three-filled-1--10@1x.png",
    className: "users-three-filled-5",
};

const arrow7Data = {
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
};

const tryPremium6Data = {
    logOut: "Log out",
    className: "try-premium-5",
    arrowProps: arrow7Data,
};

const group9023Data = {
    studyHub: "Library",
    className: "group-902-2",
};

const search6Data = {
    search1: "/img/path-27-10@1x.png",
    className: "search-12",
};

const slidersHFilledData = {
    src: "/img/sliders-h-filled-1-@1x.png",
};

const expand221Data = {
    path2: "/img/path-120@1x.png",
    path3: "/img/path-118@1x.png",
    path4: "/img/path-121@1x.png",
};

const expand222Data = {
    path2: "/img/path-116@1x.png",
    path3: "/img/path-114@1x.png",
    path4: "/img/path-117@1x.png",
    className: "compress-1",
};

const group9591Data = {
    expand21Props: expand221Data,
    expand22Props: expand222Data,
};

const expand223Data = {
    path2: "/img/path-120@1x.png",
    path3: "/img/path-118@1x.png",
    path4: "/img/path-121@1x.png",
};

const expand224Data = {
    path2: "/img/path-116@1x.png",
    path3: "/img/path-114@1x.png",
    path4: "/img/path-117@1x.png",
    className: "compress-2",
};

const group9592Data = {
    expand21Props: expand223Data,
    expand22Props: expand224Data,
};

const phone4Data = {
    className: "",
};

const envelope4Data = {
    className: "envelope-4",
};

const dorisSanders4Data = {
    className: "doris-sanders-3",
    phoneProps: phone4Data,
    envelopeProps: envelope4Data,
};

const expand225Data = {
    path2: "/img/path-120@1x.png",
    path3: "/img/path-118@1x.png",
    path4: "/img/path-121@1x.png",
};

const expand226Data = {
    path2: "/img/path-116@1x.png",
    path3: "/img/path-114@1x.png",
    path4: "/img/path-117@1x.png",
    className: "compress",
};

const group9593Data = {
    expand21Props: expand225Data,
    expand22Props: expand226Data,
};

const previous5Data = {
    children: "Prev",
};

const previous6Data = {
    children: "Next",
};

const pagination3Data = {
    className: "pagination-2",
    previous1Props: previous5Data,
    previous2Props: previous6Data,
};

const libraryData = {
    overlapGroup4: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    overlapGroup5: "/img/bg-11@1x.png",
    path1: "/img/path-1-10@1x.png",
    path2: "/img/path-2-10@1x.png",
    newToActs: "New to ACTS",
    signIn: "Sign in",
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
    home: "/img/home-10@1x.png",
    dashboard: "Dashboard",
    studyHub: "Study Hub",
    overlapGroup11: "/img/bg-10@1x.png",
    book: "/img/book-2@1x.png",
    library: "Library",
    combinedShape1: "/img/combined-shape-14@1x.png",
    resources: "Resources",
    combinedShape2: "/img/combined-shape-13@1x.png",
    conferencing: "Conferencing",
    community: "Community",
    reports: "Reports",
    wallet: "Wallet",
    setting: "Setting",
    support: "Support",
    image: "/img/image-change-here-100@1x.png",
    baraka: "Baraka",
    customRange: "Custom Range",
    play1: "/img/play-1@1x.png",
    play2: "/img/play-1@1x.png",
    spanText1: "Title:",
    spanText2: <React.Fragment> Thermodynamics and Statistical Mechanics of Macromolecular Systems<br />Author: Michael Bachmann<br /></React.Fragment>,
    spanText3: <React.Fragment>More<br /></React.Fragment>,
    spanText4: <React.Fragment>Title: Thermodynamics and Statistical Mechanics of Macromolecular Systems<br />Author: Michael Bachmann<br />Edition: 1st<br />Publisher: Cambridge University Press<br />Publication Date: June 23, 2014<br />Language: English<br />ISBN-10: 1107014476<br />ISBN-13: 978-1107014473<br />Type: AUDIO<br />Category: Science - Engineering<br />Item No.: 1234567890<br />Brief: Short description Short description Short description Short description Short description Short description Short description Short description Short description Short description Short description Short</React.Fragment>,
    play3: "/img/play-1@1x.png",
    group41Props: group416Data,
    mainMenuProps: mainMenu6Data,
    dashboardProps: dashboard6Data,
    group2Props: group27Data,
    barChartProps: barChart6Data,
    usersThreeFilled1Props: usersThreeFilled11Data,
    usersThreeFilled2Props: usersThreeFilled12Data,
    tryPremiumProps: tryPremium6Data,
    group902Props: group9023Data,
    searchProps: search6Data,
    slidersHFilledProps: slidersHFilledData,
    group9591Props: group9591Data,
    group9592Props: group9592Data,
    dorisSandersProps: dorisSanders4Data,
    group9593Props: group9593Data,
    paginationProps: pagination3Data,
};

const group19Data = {
    className: "group-1-2",
};

const group417Data = {
    className: "group-41-6",
    group1Props: group19Data,
};

const mainMenu7Data = {
    className: "main-menu-12",
};

const dashboard7Data = {
    path11: "/img/path-11-10@1x.png",
    path12: "/img/path-12-10@1x.png",
    path14: "/img/path-12-10@1x.png",
    path13: "/img/path-11-10@1x.png",
    className: "dashboard-7",
};

const user13Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-12",
};

const user14Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-13",
};

const group28Data = {
    user1Props: user13Data,
    user2Props: user14Data,
};

const barChart7Data = {
    className: "bar-chart-6",
};

const usersThreeFilled13Data = {
    src: "/img/coupon-filled-1--11@1x.png",
};

const usersThreeFilled14Data = {
    src: "/img/users-three-filled-1--10@1x.png",
    className: "users-three-filled-6",
};

const arrow8Data = {
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
};

const tryPremium7Data = {
    logOut: "Log out",
    className: "try-premium-6",
    arrowProps: arrow8Data,
};

const group9024Data = {
    studyHub: "Library",
    className: "group-902-3",
};

const expand1Data = {
    path2: "/img/path-50@1x.png",
    path3: "/img/path-48@1x.png",
    path4: "/img/path-51@1x.png",
};

const expand2Data = {
    path2: "/img/path-46@1x.png",
    path3: "/img/path-44@1x.png",
    path4: "/img/path-47@1x.png",
    className: "compress-3",
};

const libraryPlayVideoData = {
    overlapGroup5: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    overlapGroup6: "/img/bg-11@1x.png",
    path1: "/img/path-1-10@1x.png",
    path2: "/img/path-2-10@1x.png",
    newToActs: "New to ACTS",
    signIn: "Sign in",
    line111: "/img/line-11-10@1x.png",
    line121: "/img/line-12-10@1x.png",
    line131: "/img/line-13-10@1x.png",
    home: "/img/home-12@1x.png",
    dashboard: "Dashboard",
    studyHub: "Study Hub",
    overlapGroup9: "/img/bg-10@1x.png",
    book: "/img/book-2@1x.png",
    library: "Library",
    combinedShape1: "/img/combined-shape-14@1x.png",
    resources: "Resources",
    combinedShape2: "/img/combined-shape-13@1x.png",
    conferencing: "Conferencing",
    community: "Community",
    reports: "Reports",
    wallet: "Wallet",
    setting: "Setting",
    support: "Support",
    image: "/img/image-change-here-100@1x.png",
    baraka: "Baraka",
    line112: "/img/line-11-7@1x.png",
    line122: "/img/line-12-7@1x.png",
    line132: "/img/line-13-7@1x.png",
    play: "/img/play@1x.png",
    group41Props: group417Data,
    mainMenuProps: mainMenu7Data,
    dashboardProps: dashboard7Data,
    group2Props: group28Data,
    barChartProps: barChart7Data,
    usersThreeFilled1Props: usersThreeFilled13Data,
    usersThreeFilled2Props: usersThreeFilled14Data,
    tryPremiumProps: tryPremium7Data,
    group902Props: group9024Data,
    expand1Props: expand1Data,
    expand2Props: expand2Data,
};

const option6Data = {
    className: "option-6",
};

const customSize3Data = {
    image: "/img/image-change-here@1x.png",
    name: "Timothy Baraka Amayi",
    nairobiKenya: "Nairobi Kenya",
    emailTimothyActsCom: "Email: timothy@acts.com",
    institution: "Institution",
    areaOfStudy1: "Area of Study",
    gradeScore: "Grade/Score",
    levelOfStudy1: "Level of Study",
    specificCertificate: "Specific Certificate",
    majorSpeciality1: "Major/Speciality",
    modeOfStudy: "Mode of Study",
    nameOfCompany: "Name of Company",
    position: "Position",
    place: "Industry",
    fieldOfPractice: "Field of Practice",
    reportingTo: "Reporting to?",
    location: "Location",
    startEndDate: "Start/End Date",
    preferredInstitution: "Preferred Institution",
    areaOfStudy2: "Area of Study",
    preferredCertificate: "Preferred Certificate",
    levelOfStudy2: "Level of Study",
    majorSpeciality2: "Major/Speciality",
    preferredStartDate: "Preferred Start Date",
    optionProps: option6Data,
};

const group110Data = {
    className: "navbar-5",
};

const group418Data = {
    className: "group-41-7",
    group1Props: group110Data,
};

const mainMenu8Data = {
    className: "main-menu-14",
};

const dashboard8Data = {
    path11: "/img/path-11-10@1x.png",
    path12: "/img/path-12-10@1x.png",
    path14: "/img/path-12-10@1x.png",
    path13: "/img/path-11-10@1x.png",
    className: "dashboard-8",
};

const user15Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-2",
};

const user16Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-15",
};

const group29Data = {
    user1Props: user15Data,
    user2Props: user16Data,
};

const barChart8Data = {
    className: "bar-chart-7",
};

const usersThreeFilled15Data = {
    src: "/img/coupon-filled-1--10@1x.png",
    className: "group-2-1",
};

const layer132Data = {
    src: "/img/path9429-11@1x.png",
};

const usersThreeFilled16Data = {
    src: "/img/users-three-filled-1--10@1x.png",
    className: "users-three-filled-7",
};

const arrow9Data = {
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
};

const tryPremium8Data = {
    logOut: "Log out",
    className: "try-premium-7",
    arrowProps: arrow9Data,
};

const search7Data = {
    search1: "/img/path-27-10@1x.png",
    className: "search-15",
};

const group6Data = {
    className: "group-18",
};

const group7Data = {
    className: "group-19",
};

const group8Data = {
    className: "group-20",
};

const group9Data = {
    className: "group-21",
};

const g41581Data = {
    path13: "/img/path13-2@1x.png",
};

const walletData = {
    overlapGroup6: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    overlapGroup7: "/img/bg-11@1x.png",
    path1: "/img/path-1-10@1x.png",
    path2: "/img/path-2-10@1x.png",
    newToActs: "New to ACTS",
    signIn: "Sign in",
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
    home: "/img/home-10@1x.png",
    dashboard: "Dashboard",
    studyHub: "Study Hub",
    book: "/img/book-10@1x.png",
    library: "Library",
    combinedShape1: "/img/combined-shape-14@1x.png",
    resources: "Resources",
    combinedShape2: "/img/combined-shape-13@1x.png",
    conferencing: "Conferencing",
    community: "Community",
    reports: "Reports",
    overlapGroup9: "/img/bg-10@1x.png",
    wallet: "Wallet",
    setting: "Setting",
    support: "Support",
    image: "/img/image-change-here-100@1x.png",
    baraka: "Baraka",
    currentBalance: "Current Balance",
    price1: "$19,860",
    path1002: "/img/path-1002-12@1x.png",
    neverReceivedOrFo1: "Last Transaction: Oct 14th, 2022 - Moi university - $ 20.00",
    availableBalance: "Available Balance",
    price2: "$19,100",
    path1013: "/img/path-1002-12@1x.png",
    neverReceivedOrFo2: "Transfers",
    neverReceivedOrFo3: "Deposit",
    neverReceivedOrFo4: "Payments",
    neverReceivedOrFo5: "Transactions",
    modeOfPayment: "Mode of Payment",
    mastercardLogoSvg: "/img/mastercard-logo-svg-1@1x.png",
    paypal_Png7: "/img/paypal-png7-2@1x.png",
    maestro_2016Svg: "/img/maestro-2016-svg-2@1x.png",
    googleWalletLogoVector: "/img/google-wallet-logo-vector-2@1x.png",
    mpesaGlobal: "Mpesa global",
    polygon2: "/img/polygon-10-1@1x.png",
    mobileMoney: "Mobile money",
    acts_Logo: "/img/acts-logo-10@1x.png",
    group41Props: group418Data,
    mainMenuProps: mainMenu8Data,
    dashboardProps: dashboard8Data,
    group2Props: group29Data,
    barChartProps: barChart8Data,
    usersThreeFilled1Props: usersThreeFilled15Data,
    layer13Props: layer132Data,
    usersThreeFilled2Props: usersThreeFilled16Data,
    tryPremiumProps: tryPremium8Data,
    searchProps: search7Data,
    group1Props: group6Data,
    group2Props2: group7Data,
    group3Props: group8Data,
    group4Props: group9Data,
    g4158Props: g41581Data,
};

const group111Data = {
    className: "group-1-3",
};

const group419Data = {
    className: "group-41-8",
    group1Props: group111Data,
};

const mainMenu9Data = {
    className: "main-menu-16",
};

const dashboard9Data = {
    path11: "/img/path-11-10@1x.png",
    path12: "/img/path-12-10@1x.png",
    path14: "/img/path-12-10@1x.png",
    path13: "/img/path-11-10@1x.png",
    className: "dashboard-9",
};

const user17Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-16",
};

const user18Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-17",
};

const group210Data = {
    user1Props: user17Data,
    user2Props: user18Data,
};

const barChart9Data = {
    className: "bar-chart-8",
};

const usersThreeFilled17Data = {
    src: "/img/coupon-filled-1--10@1x.png",
    className: "group-2-1",
};

const layer133Data = {
    src: "/img/path9429-11@1x.png",
};

const usersThreeFilled18Data = {
    src: "/img/users-three-filled-1--10@1x.png",
    className: "users-three-filled-8",
};

const arrow10Data = {
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
};

const tryPremium9Data = {
    logOut: "Log out",
    className: "try-premium-8",
    arrowProps: arrow10Data,
};

const search8Data = {
    search1: "/img/path-27-13@1x.png",
    className: "search-18",
};

const group11Data = {
    className: "group-22",
};

const group20Data = {
    className: "group-23",
};

const g41582Data = {
    path13: "/img/path13@1x.png",
    className: "g4158-1",
};

const group30Data = {
    className: "group-24",
};

const group90223Data = {
    className: "group-902-5",
};

const image63Data = {
    className: "image-49",
};

const checkOutWalletData = {
    overlapGroup9: "/img/bg-11@1x.png",
    path1: "/img/path-1-10@1x.png",
    path2: "/img/path-2-10@1x.png",
    newToActs: "New to ACTS",
    signIn: "Sign in",
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
    home: "/img/home-12@1x.png",
    dashboard: "Dashboard",
    studyHub: "Study Hub",
    book: "/img/book-10@1x.png",
    library: "Library",
    combinedShape1: "/img/combined-shape-14@1x.png",
    resources: "Resources",
    combinedShape2: "/img/combined-shape-13@1x.png",
    conferencing: "Conferencing",
    community: "Community",
    reports: "Reports",
    overlapGroup11: "/img/bg-10@1x.png",
    wallet: "Wallet",
    setting: "Setting",
    support: "Support",
    image: "/img/image-change-here-100@1x.png",
    baraka: "Baraka",
    availableBalance: "Available Balance",
    price: "$19,100",
    path1013: "/img/path-1013@1x.png",
    neverReceivedOrFo1: "Deposit",
    neverReceivedOrFo2: "Transactions",
    paypal_Png71: "/img/paypal-png7@1x.png",
    maestro_2016Svg1: "/img/maestro-2016-svg@1x.png",
    googleWalletLogoVector1: "/img/google-wallet-logo-vector@1x.png",
    mastercardLogoSvg: "/img/mastercard-logo-svg@1x.png",
    paypal_Png72: "/img/paypal-png7-1@1x.png",
    maestro_2016Svg2: "/img/maestro-2016-svg-1@1x.png",
    googleWalletLogoVector2: "/img/google-wallet-logo-vector-1@1x.png",
    polygon9: "/img/polygon9-1@1x.png",
    path15: "/img/path15-1@1x.png",
    path17: "/img/path17-1@1x.png",
    path11: "/img/path11-1@1x.png",
    path13: "/img/path13-1@1x.png",
    ridhoTijanGmailCo1: "Preferred Institution",
    ridhoTijanGmailCo2: "Level of study",
    rectangle1: "/img/rectangle-4@1x.png",
    ridhoTijanGmailCo3: "Baraka",
    ridhoTijanGmailCo4: "Card Holders Name",
    rectangle2: "/img/rectangle-10@1x.png",
    ridhoTijanGmailCo5: "1234",
    ridhoTijanGmailCo6: "Card Number",
    rectangle3: "/img/rectangle-10@1x.png",
    ridhoTijanGmailCo7: "5678",
    rectangle4: "/img/rectangle-10@1x.png",
    ridhoTijanGmailCo8: "9101",
    rectangle5: "/img/rectangle-10@1x.png",
    ridhoTijanGmailCo9: "1213",
    rectangle6: "/img/rectangle-9@1x.png",
    ridhoTijanGmailCo10: "January",
    ridhoTijanGmailCo11: "Expiry Date",
    rectangle7: "/img/rectangle-10@1x.png",
    ridhoTijanGmailCo12: "2023",
    polygon2: "/img/polygon-10-1@1x.png",
    polygon3: "/img/polygon-10-1@1x.png",
    rectangle8: "/img/rectangle-11@1x.png",
    ridhoTijanGmailCo13: "123",
    ridhoTijanGmailCo14: "CVV/CVC",
    ridhoTijanGmailCo15: "3 or 4 Digit Code",
    neverReceivedOrFo3: "Pay Now",
    saveCardDetails: "Save card details",
    checkbox: "/img/checkbox-10@1x.png",
    acts_Logo: "/img/acts-logo-10@1x.png",
    group41Props: group419Data,
    mainMenuProps: mainMenu9Data,
    dashboardProps: dashboard9Data,
    group2Props: group210Data,
    barChartProps: barChart9Data,
    usersThreeFilled1Props: usersThreeFilled17Data,
    layer13Props: layer133Data,
    usersThreeFilled2Props: usersThreeFilled18Data,
    tryPremiumProps: tryPremium9Data,
    searchProps: search8Data,
    group1Props: group11Data,
    group2Props2: group20Data,
    g4158Props: g41582Data,
    group3Props: group30Data,
    mainMenuProps2: group90223Data,
    searchProps2: image63Data,
};

const group112Data = {
    className: "group-1-4",
};

const group4110Data = {
    className: "group-41-9",
    group1Props: group112Data,
};

const mainMenu10Data = {
    className: "main-menu-18",
};

const dashboard10Data = {
    path11: "/img/path-11-10@1x.png",
    path12: "/img/path-12-10@1x.png",
    path14: "/img/path-12-10@1x.png",
    path13: "/img/path-11-10@1x.png",
    className: "dashboard-10",
};

const user19Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-18",
};

const user20Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-19",
};

const group211Data = {
    user1Props: user19Data,
    user2Props: user20Data,
};

const barChart10Data = {
    className: "bar-chart-9",
};

const usersThreeFilled19Data = {
    src: "/img/coupon-filled-1--10@1x.png",
    className: "group-2-1",
};

const layer134Data = {
    src: "/img/path9429-11@1x.png",
};

const usersThreeFilled20Data = {
    src: "/img/users-three-filled-1--10@1x.png",
    className: "users-three-filled-9",
};

const arrow11Data = {
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
};

const tryPremium10Data = {
    logOut: "Log out",
    className: "try-premium-9",
    arrowProps: arrow11Data,
};

const search9Data = {
    search1: "/img/path-27-13@1x.png",
    className: "search-21",
};

const group31Data = {
    className: "group-25",
};

const group33Data = {
    className: "group-26",
};

const group34Data = {
    className: "group-27",
};

const group37Data = {
    className: "group-28",
};

const walletAccountDetailsData = {
    overlapGroup4: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    overlapGroup6: "/img/bg-11@1x.png",
    path1: "/img/path-1-10@1x.png",
    path2: "/img/path-2-10@1x.png",
    newToActs: "New to ACTS",
    signIn: "Sign in",
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
    home: "/img/home-12@1x.png",
    dashboard: "Dashboard",
    studyHub: "Study Hub",
    book: "/img/book-10@1x.png",
    library: "Library",
    combinedShape1: "/img/combined-shape-14@1x.png",
    resources: "Resources",
    combinedShape2: "/img/combined-shape-13@1x.png",
    conferencing: "Conferencing",
    community: "Community",
    reports: "Reports",
    overlapGroup7: "/img/bg-10@1x.png",
    wallet: "Wallet",
    setting: "Setting",
    support: "Support",
    image: "/img/image-change-here-100@1x.png",
    baraka: "Baraka",
    currentBalance: "Current Balance",
    price1: "$19,860",
    path1002: "/img/path-1002-12@1x.png",
    neverReceivedOrFo1: "Last Transaction: Oct 14th, 2022 - Moi university - $ 20.00",
    availableBalance: "Available Balance",
    price2: "$19,100",
    path1013: "/img/path-1002-12@1x.png",
    neverReceivedOrFo2: "Transfers",
    neverReceivedOrFo3: "Deposit",
    neverReceivedOrFo4: "Payments",
    neverReceivedOrFo5: "Transactions",
    acts_Logo: "/img/acts-logo-10@1x.png",
    anythingDesign: "Anything Design",
    accountName: "Account Name",
    phone: "1287564965",
    accountNumber: "Account Number",
    price3: "$10,987",
    amount: "Amount",
    price4: "$59",
    balance: "Balance",
    salomeAkinyi: "Salome Akinyi",
    beneficiaryName: "Beneficiary Name",
    automation: "Automation",
    transactionFee05: "Transaction fee (0.5%)",
    price5: "$1,098",
    totalDebit: "Total Debit",
    approveTransaction: "Approve transaction",
    checkbox: "/img/checkbox-10@1x.png",
    receivedCashAsAgreed: "Received cash as agreed",
    note: "Note",
    x20PaidToActs50: <React.Fragment>$20 Paid to Acts<br />$50 Paid to acts<br />$100 Paid to Acts</React.Fragment>,
    paymentHistory: "Payment History",
    group41Props: group4110Data,
    mainMenuProps: mainMenu10Data,
    dashboardProps: dashboard10Data,
    group2Props: group211Data,
    barChartProps: barChart10Data,
    usersThreeFilled1Props: usersThreeFilled19Data,
    layer13Props: layer134Data,
    usersThreeFilled2Props: usersThreeFilled20Data,
    tryPremiumProps: tryPremium10Data,
    searchProps: search9Data,
    group1Props: group31Data,
    group2Props2: group33Data,
    group3Props: group34Data,
    group4Props: group37Data,
};

const group113Data = {
    className: "group-1-5",
};

const group4111Data = {
    className: "group-41-10",
    group1Props: group113Data,
};

const mainMenu11Data = {
    className: "main-menu-20",
};

const dashboard11Data = {
    path11: "/img/path-11-10@1x.png",
    path12: "/img/path-12-10@1x.png",
    path14: "/img/path-12-10@1x.png",
    path13: "/img/path-11-10@1x.png",
    className: "dashboard-11",
};

const user21Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-20",
};

const user22Data = {
    path9: "/img/path-9-10@1x.png",
    path10: "/img/path-10-10@1x.png",
    className: "user-21",
};

const group213Data = {
    user1Props: user21Data,
    user2Props: user22Data,
};

const barChart11Data = {
    className: "bar-chart-10",
};

const usersThreeFilled21Data = {
    src: "/img/coupon-filled-1--10@1x.png",
    className: "group-2-1",
};

const layer135Data = {
    src: "/img/path9429-11@1x.png",
};

const usersThreeFilled22Data = {
    src: "/img/users-three-filled-1--10@1x.png",
    className: "users-three-filled-10",
};

const arrow12Data = {
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
};

const tryPremium11Data = {
    logOut: "Log out",
    className: "try-premium-10",
    arrowProps: arrow12Data,
};

const search10Data = {
    search1: "/img/path-27-10@1x.png",
    className: "search-24",
};

const group38Data = {
    className: "group-29",
};

const group39Data = {
    className: "group-30",
};

const group40Data = {
    className: "group-31",
};

const group43Data = {
    className: "group-32",
};

const group9632Data = {
    className: "group-964",
};

const group9633Data = {
    className: "group-965",
};

const walletAccountStatementData = {
    overlapGroup4: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    overlapGroup5: "/img/bg-11@1x.png",
    path1: "/img/path-1-10@1x.png",
    path2: "/img/path-2-10@1x.png",
    newToActs: "New to ACTS",
    signIn: "Sign in",
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
    home: "/img/home-12@1x.png",
    dashboard: "Dashboard",
    studyHub: "Study Hub",
    book: "/img/book-10@1x.png",
    library: "Library",
    combinedShape1: "/img/combined-shape-14@1x.png",
    resources: "Resources",
    combinedShape2: "/img/combined-shape-13@1x.png",
    conferencing: "Conferencing",
    community: "Community",
    reports: "Reports",
    overlapGroup7: "/img/bg-10@1x.png",
    wallet: "Wallet",
    setting: "Setting",
    support: "Support",
    image: "/img/image-change-here-100@1x.png",
    baraka: "Baraka",
    currentBalance: "Current Balance",
    price1: "$19,860",
    path1002: "/img/path-1002-12@1x.png",
    neverReceivedOrFo1: "Last Transaction: Oct 14th, 2022 - Moi university - $ 20.00",
    availableBalance: "Available Balance",
    price2: "$19,100",
    path1013: "/img/path-1002-12@1x.png",
    neverReceivedOrFo2: "Transfers",
    neverReceivedOrFo3: "Deposit",
    neverReceivedOrFo4: "Payments",
    neverReceivedOrFo5: "Transactions",
    acts_Logo: "/img/acts-logo-10@1x.png",
    dateTime: "Date & Time",
    transactionId: "Transaction ID",
    place: "From",
    beneficiary: "Beneficiary",
    details: "Details",
    amountBalance: "Amount Balance",
    group41Props: group4111Data,
    mainMenuProps: mainMenu11Data,
    dashboardProps: dashboard11Data,
    group2Props: group213Data,
    barChartProps: barChart11Data,
    usersThreeFilled1Props: usersThreeFilled21Data,
    layer13Props: layer135Data,
    usersThreeFilled2Props: usersThreeFilled22Data,
    tryPremiumProps: tryPremium11Data,
    searchProps: search10Data,
    group1Props: group38Data,
    group2Props2: group39Data,
    group3Props: group40Data,
    group4Props: group43Data,
    group9631Props: group9632Data,
    group9632Props: group9633Data,
};

const arrow13Data = {
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
};

const tryPremium12Data = {
    logOut: "Log out",
    className: "try-premium-11",
    arrowProps: arrow13Data,
};

const mainMenu12Data = {
    className: "main-menu-22",
};

const dashboard12Data = {
    path11: "/img/path-11-10@1x.png",
    path12: "/img/path-12-10@1x.png",
    path14: "/img/path-12-10@1x.png",
    path13: "/img/path-11-10@1x.png",
    className: "dashboard-12",
};

const user23Data = {
    path9: "/img/path-9-22@1x.png",
    path10: "/img/path-10-22@1x.png",
    className: "user-2",
};

const user24Data = {
    path9: "/img/path-9-22@1x.png",
    path10: "/img/path-10-22@1x.png",
    className: "user-23",
};

const group214Data = {
    className: "group-2-11",
    user1Props: user23Data,
    user2Props: user24Data,
};

const barChart12Data = {
    className: "bar-chart-11",
};

const settingsFilled12Data = {
    className: "settings-filled-22",
};

const usersThreeFilled23Data = {
    src: "/img/users-three-filled-1--10@1x.png",
    className: "users-three-filled-11",
};

const usersThreeFilled24Data = {
    src: "/img/coupon-filled-1--11@1x.png",
    className: "coupon-filled-11",
};

const group114Data = {
    className: "navbar-6",
};

const group4112Data = {
    className: "group-41-11",
    group1Props: group114Data,
};

const layer136Data = {
    src: "/img/path9429-12@1x.png",
    className: "layer1-11",
};

const image7Data = {
    className: "image-2-1",
};

const text41Data = {
    name: "Kathy Andrews",
    className: "",
};

const phone5Data = {
    className: "phone-4",
};

const envelope5Data = {
    className: "envelope-2",
};

const email1Data = {
    envelopeProps: envelope5Data,
};

const message1Data = {
    children: "Message",
};

const button1Data = {
    messageProps: message1Data,
};

const kathyAndrews1Data = {
    imageProps: image7Data,
    text4Props: text41Data,
    phoneProps: phone5Data,
    emailProps: email1Data,
    buttonProps: button1Data,
};

const image8Data = {
    className: "image-2-2",
};

const text42Data = {
    name: "Brandon Collins",
    className: "text-32",
};

const envelope6Data = {
    className: "envelope-5",
};

const email2Data = {
    envelopeProps: envelope6Data,
};

const message2Data = {
    children: "Message",
};

const button2Data = {
    messageProps: message2Data,
};

const image9Data = {
    className: "image-2-3",
};

const text43Data = {
    name: "Roy Carpenter",
    className: "text-32",
};

const envelope7Data = {
    className: "envelope-6",
};

const email3Data = {
    className: "email-5",
    envelopeProps: envelope7Data,
};

const message3Data = {
    children: "Message",
};

const button3Data = {
    className: "button-2",
    messageProps: message3Data,
};

const royCarpenter1Data = {
    imageProps: image9Data,
    text4Props: text43Data,
    emailProps: email3Data,
    buttonProps: button3Data,
};

const image10Data = {
    className: "image-2-4",
};

const text44Data = {
    name: "Danielle Meyer",
    className: "text-32",
};

const phone7Data = {
    className: "phone-6",
};

const envelope8Data = {
    className: "envelope-7",
};

const email4Data = {
    envelopeProps: envelope8Data,
};

const message4Data = {
    children: "Message",
};

const button4Data = {
    messageProps: message4Data,
};

const kathyAndrews2Data = {
    className: "danielle-meyer",
    imageProps: image10Data,
    text4Props: text44Data,
    phoneProps: phone7Data,
    emailProps: email4Data,
    buttonProps: button4Data,
};

const image11Data = {
    className: "image-2-5",
};

const text45Data = {
    name: "Kathy Andrews",
    className: "",
};

const phone8Data = {
    className: "phone",
};

const envelope9Data = {
    className: "envelope-8",
};

const email5Data = {
    envelopeProps: envelope9Data,
};

const message5Data = {
    children: "Message",
};

const button5Data = {
    messageProps: message5Data,
};

const kathyAndrews3Data = {
    className: "kathy-andrews-1",
    imageProps: image11Data,
    text4Props: text45Data,
    phoneProps: phone8Data,
    emailProps: email5Data,
    buttonProps: button5Data,
};

const image12Data = {
    className: "image-2",
};

const text46Data = {
    name: "Roy Carpenter",
    className: "text-32",
};

const envelope10Data = {
    className: "envelope",
};

const email6Data = {
    className: "email-5",
    envelopeProps: envelope10Data,
};

const message6Data = {
    children: "Message",
};

const button6Data = {
    className: "button-2",
    messageProps: message6Data,
};

const royCarpenter2Data = {
    className: "roy-carpenter-1",
    imageProps: image12Data,
    text4Props: text46Data,
    emailProps: email6Data,
    buttonProps: button6Data,
};

const image425Data = {
    src: "/img/image-change-here-100@1x.png",
    className: "image-14-1",
};

const andreeaWade2Data = {
    andreeaWade: "Andreea Wade",
    className: "andreea-wade-3",
    image4Props: image425Data,
};

const bobbyMendez3Data = {
    name: "Bobby Mendez",
    className: "bobby-mendez-1",
};

const image426Data = {
    src: "/img/image-change-here-100@1x.png",
    className: "image-14",
};

const tomSchneider2Data = {
    name: "Tom Schneider",
    className: "tom-schneider-1",
    image4Props: image426Data,
};

const text5Data = {
    className: "text-26",
};

const image510Data = {
    className: "image-20",
};

const bobbyMendez22Data = {
    name: "Bobby Mendez",
    className: "bobby-mendez-4",
    image5Props: image510Data,
};

const image511Data = {
    className: "image-40",
};

const elizabethHolland2Data = {
    name: "Salome Akinyi",
    className: "elizabeth-holland-2",
    image5Props: image511Data,
};

const search23Data = {
    search1: "/img/path-27-10@1x.png",
    className: "search-19",
};

const message7Data = {
    children: "Groups",
    className: "message-11",
};

const usersThreeFilled25Data = {
    src: "/img/users-three-filled-1--12@1x.png",
    className: "users-three-filled-12",
};

const communityData = {
    pexelsTimaMiroshnichenko5198252: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    bg1: "/img/bg-11@1x.png",
    bg2: "/img/bg-10@1x.png",
    image: "/img/image-change-here-100@1x.png",
    baraka: "Baraka",
    path1: "/img/path-1-10@1x.png",
    path2: "/img/path-2-10@1x.png",
    newToActs: "New to ACTS",
    signIn: "Sign in",
    dashboard: "Dashboard",
    resources: "Resources",
    conferencing: "Conferencing",
    community: "Community",
    reports: "Reports",
    wallet: "Wallet",
    setting: "Setting",
    support: "Support",
    studyHub: "Study Hub",
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
    library: "Library",
    home: "/img/home-10@1x.png",
    book: "/img/book-10@1x.png",
    combinedShape1: "/img/combined-shape-13@1x.png",
    combinedShape2: "/img/combined-shape-14@1x.png",
    phoneCall: "/img/path-1000-1@1x.png",
    text17: "(589)505-4521",
    search1: "Search",
    search2: "/img/path-27-10@1x.png",
    bg3: "/img/bg-24@1x.png",
    recentMessage: "Recent Message",
    adsHere: "Ads Here",
    tryPremiumProps: tryPremium12Data,
    mainMenuProps: mainMenu12Data,
    dashboardProps: dashboard12Data,
    group2Props: group214Data,
    barChartProps: barChart12Data,
    settingsFilledProps: settingsFilled12Data,
    usersThreeFilled1Props: usersThreeFilled23Data,
    usersThreeFilled2Props: usersThreeFilled24Data,
    group41Props: group4112Data,
    layer13Props: layer136Data,
    kathyAndrews1Props: kathyAndrews1Data,
    imageProps: image8Data,
    text4Props: text42Data,
    emailProps: email2Data,
    buttonProps: button2Data,
    royCarpenter1Props: royCarpenter1Data,
    kathyAndrews2Props: kathyAndrews2Data,
    kathyAndrews3Props: kathyAndrews3Data,
    royCarpenter2Props: royCarpenter2Data,
    andreeaWadeProps: andreeaWade2Data,
    bobbyMendezProps: bobbyMendez3Data,
    tomSchneiderProps: tomSchneider2Data,
    textProps: text5Data,
    bobbyMendez2Props: bobbyMendez22Data,
    elizabethHollandProps: elizabethHolland2Data,
    search2Props: search23Data,
    messageProps: message7Data,
    usersThreeFilled3Props: usersThreeFilled25Data,
};

const arrow14Data = {
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
};

const tryPremium13Data = {
    logOut: "Log out",
    className: "try-premium-12",
    arrowProps: arrow14Data,
};

const mainMenu13Data = {
    className: "main-menu-24",
};

const dashboard13Data = {
    path11: "/img/path-11-10@1x.png",
    path12: "/img/path-12-10@1x.png",
    path14: "/img/path-12-10@1x.png",
    path13: "/img/path-11-10@1x.png",
    className: "dashboard-13",
};

const user25Data = {
    path9: "/img/path-9-22@1x.png",
    path10: "/img/path-10-22@1x.png",
    className: "user-24",
};

const user26Data = {
    path9: "/img/path-9-22@1x.png",
    path10: "/img/path-10-22@1x.png",
    className: "user-25",
};

const group215Data = {
    className: "group-2-12",
    user1Props: user25Data,
    user2Props: user26Data,
};

const barChart13Data = {
    className: "bar-chart-12",
};

const settingsFilled13Data = {
    className: "settings-filled-24",
};

const usersThreeFilled26Data = {
    src: "/img/users-three-filled-1--10@1x.png",
    className: "users-three-filled-13",
};

const usersThreeFilled27Data = {
    src: "/img/coupon-filled-1--11@1x.png",
    className: "coupon-filled-12",
};

const group115Data = {
    className: "group-1-6",
};

const group4113Data = {
    className: "group-41-12",
    group1Props: group115Data,
};

const layer137Data = {
    src: "/img/path9429-12@1x.png",
    className: "layer1-12",
};

const text47Data = {
    name: "Akinyi Ouru",
    className: "text-33",
};

const option13Data = {
    className: "option-7",
};

const image13Data = {
    className: "image-8",
};

const image427Data = {
    src: "/img/image-change-here-100@1x.png",
    className: "image-15-1",
};

const andreeaWade3Data = {
    andreeaWade: "Team Kenya",
    className: "andreea-wade-5",
    image4Props: image427Data,
};

const bobbyMendez4Data = {
    name: "Christian Union",
    className: "bobby-mendez-2",
};

const image428Data = {
    src: "/img/image-change-here-100@1x.png",
    className: "image-15",
};

const tomSchneider3Data = {
    name: "Jokes 101",
    className: "tom-schneider-2",
    image4Props: image428Data,
};

const image514Data = {
    className: "image-21",
};

const bobbyMendez23Data = {
    name: "Information Technogy 01",
    className: "bobby-mendez-5",
    image5Props: image514Data,
};

const image515Data = {
    className: "image-41",
};

const search24Data = {
    search1: "/img/path-27-13@1x.png",
    className: "search-28",
};

const text48Data = {
    name: "Sally Akinyi",
    className: "text-34",
};

const image14Data = {
    className: "image-9",
};

const text49Data = {
    name: "Isiah Otieno",
    className: "text-35",
};

const image15Data = {
    className: "image-10",
};

const text410Data = {
    name: "Amayi Barka",
    className: "text-36",
};

const image16Data = {
    className: "image-11",
};

const text13Data = {
    children: "Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam.",
    className: "text-1-2",
};

const text22Data = {
    className: "text-2-2",
};

const text32Data = {
    className: "text-3-2",
};

const image429Data = {
    src: "/img/image-change-here-100@1x.png",
    className: "image-17",
};

const image516Data = {
    className: "image-42",
};

const typing2Data = {
    className: "typing-2",
};

const image517Data = {
    className: "image-43",
};

const communityGroupsData = {
    pexelsTimaMiroshnichenko5198252: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    bg1: "/img/bg-11@1x.png",
    bg2: "/img/bg-10@1x.png",
    image: "/img/image-change-here-100@1x.png",
    baraka: "Baraka",
    path1: "/img/path-1-10@1x.png",
    path2: "/img/path-2-10@1x.png",
    newToActs: "New to ACTS",
    signIn: "Sign in",
    dashboard: "Dashboard",
    resources: "Resources",
    conferencing: "Conferencing",
    community: "Community",
    reports: "Reports",
    wallet: "Wallet",
    setting: "Setting",
    support: "Support",
    studyHub: "Study Hub",
    line11: "/img/line-11-10@1x.png",
    line12: "/img/line-12-10@1x.png",
    line13: "/img/line-13-10@1x.png",
    library: "Library",
    home: "/img/home-12@1x.png",
    book: "/img/book-10@1x.png",
    combinedShape1: "/img/combined-shape-13@1x.png",
    combinedShape2: "/img/combined-shape-14@1x.png",
    search1: "Search",
    search2: "/img/path-27-13@1x.png",
    bg3: "/img/bg-24@1x.png",
    computerLiteracy: "Computer Literacy",
    pleaseLetMeCheckIt: "Please let me check it.",
    computerScience2022: "Computer Science 2022",
    hiDidYouCheckTheFile: "Hi, Did you check the file?",
    recentGroups: "Recent Groups",
    adsHere: "Ads Here",
    akinyiOuruArch172021At239Pm: "Akinyi Ouru - arch 17, 2021  at 2:39 PM",
    name: "Sally Akinyi",
    sundayMarch172021At252Pm: "Sunday, march 17, 2021  at 2:52 PM",
    typing: "Typing",
    tryPremiumProps: tryPremium13Data,
    mainMenuProps: mainMenu13Data,
    dashboardProps: dashboard13Data,
    group2Props: group215Data,
    barChartProps: barChart13Data,
    settingsFilledProps: settingsFilled13Data,
    usersThreeFilled1Props: usersThreeFilled26Data,
    usersThreeFilled2Props: usersThreeFilled27Data,
    group41Props: group4113Data,
    layer13Props: layer137Data,
    text41Props: text47Data,
    optionProps: option13Data,
    image1Props: image13Data,
    andreeaWadeProps: andreeaWade3Data,
    bobbyMendezProps: bobbyMendez4Data,
    tomSchneiderProps: tomSchneider3Data,
    bobbyMendez2Props: bobbyMendez23Data,
    image51Props: image515Data,
    search2Props: search24Data,
    text42Props: text48Data,
    image2Props: image14Data,
    text43Props: text49Data,
    image3Props: image15Data,
    text44Props: text410Data,
    image4Props: image16Data,
    text1Props: text13Data,
    text2Props: text22Data,
    text3Props: text32Data,
    image4Props2: image429Data,
    image52Props: image516Data,
    typingProps: typing2Data,
    image53Props: image517Data,
};

const image518Data = {
    className: "image-22",
};

const image519Data = {
    className: "image-22",
};

const image520Data = {
    className: "image-22",
};

const image521Data = {
    className: "image-22",
};

const image522Data = {
    className: "image-22",
};

const image523Data = {
    className: "image-22",
};

const image524Data = {
    className: "image-22",
};

const image525Data = {
    className: "image-22",
};

const image526Data = {
    className: "image-22",
};

const image527Data = {
    className: "image-22",
};

const image528Data = {
    className: "image-22",
};

const search32Data = {
    search1: "/img/path-27-13@1x.png",
};

const courseData = {
    overlapGroup: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    schoolOfComputing1: "School of Computing",
    bbitBscInformationTechnology1: "(BBIT) BSC.Information Technology",
    accredetion1: "Accredetion",
    commissionForUniversityEducation1: "Commission for university Education",
    durationOfStudy1: "Duration of study",
    address1: "4 Years",
    amount: "Amount",
    price1: "$4,000",
    intakes1: "Intakes",
    hybrid1: "Hybrid",
    schoolOfComputing2: "School of Computing",
    bbitBscInformationTechnology2: "(BBIT) BSC.Information Technology",
    accredetion2: "Accredetion",
    commissionForUniversityEducation2: "Commission for university Education",
    durationOfStudy2: "Duration of study",
    address2: "4 Years",
    cost1: "Cost",
    price2: "$4,000",
    intakes2: "Intakes",
    hybrid2: "Hybrid",
    schoolOfComputing3: "School of Computing",
    bbitBscInformationTechnology3: "(BBIT) BSC.Information Technology",
    accredetion3: "Accredetion",
    commissionForUniversityEducation3: "Commission for university Education",
    durationOfStudy3: "Duration of study",
    address3: "4 Years",
    cost2: "Cost",
    price3: "$4,000",
    intakes3: "Intakes",
    hybrid3: "Hybrid",
    schoolOfComputing4: "School of Computing",
    bbitBscInformationTechnology4: "(BBIT) BSC.Information Technology",
    accredetion4: "Accredetion",
    commissionForUniversityEducation4: "Commission for university Education",
    durationOfStudy4: "Duration of study",
    address4: "4 Years",
    cost3: "Cost",
    price4: "$4,000",
    intakes4: "Intakes",
    hybrid4: "Hybrid",
    schoolOfComputing5: "School of Computing",
    bbitBscInformationTechnology5: "(BBIT) BSC.Information Technology",
    accredetion5: "Accredetion",
    commissionForUniversityEducation5: "Commission for university Education",
    durationOfStudy5: "Duration of study",
    address5: "4 Years",
    cost4: "Cost",
    price5: "$4,000",
    intakes5: "Intakes",
    hybrid5: "Hybrid",
    schoolOfComputing6: "School of Computing",
    bbitBscInformationTechnology6: "(BBIT) BSC.Information Technology",
    accredetion6: "Accredetion",
    commissionForUniversityEducation6: "Commission for university Education",
    durationOfStudy6: "Duration of study",
    address6: "4 Years",
    cost5: "Cost",
    price6: "$4,000",
    intakes6: "Intakes",
    hybrid6: "Hybrid",
    schoolOfComputing7: "School of Computing",
    bbitBscInformationTechnology7: "(BBIT) BSC.Information Technology",
    accredetion7: "Accredetion",
    commissionForUniversityEducation7: "Commission for university Education",
    durationOfStudy7: "Duration of study",
    address7: "4 Years",
    cost6: "Cost",
    price7: "$4,000",
    intakes7: "Intakes",
    hybrid7: "Hybrid",
    schoolOfComputing8: "School of Computing",
    bbitBscInformationTechnology8: "(BBIT) BSC.Information Technology",
    accredetion8: "Accredetion",
    commissionForUniversityEducation8: "Commission for university Education",
    durationOfStudy8: "Duration of study",
    address8: "4 Years",
    cost7: "Cost",
    price8: "$4,000",
    intakes8: "Intakes",
    hybrid8: "Hybrid",
    schoolOfComputing9: "School of Computing",
    bbitBscInformationTechnology9: "(BBIT) BSC.Information Technology",
    accredetion9: "Accredetion",
    commissionForUniversityEducation9: "Commission for university Education",
    durationOfStudy9: "Duration of study",
    address9: "4 Years",
    cost8: "Cost",
    price9: "$4,000",
    intakes9: "Intakes",
    hybrid9: "Hybrid",
    schoolOfComputing10: "School of Computing",
    bbitBscInformationTechnology10: "(BBIT) BSC.Information Technology",
    accredetion10: "Accredetion",
    commissionForUniversityEducation10: "Commission for university Education",
    durationOfStudy10: "Duration of study",
    address10: "4 Years",
    cost9: "Cost",
    price10: "$4,000",
    intakes10: "Intakes",
    hybrid10: "Hybrid",
    schoolOfComputing11: "School of Computing",
    bbitBscInformationTechnology11: "(BBIT) BSC.Information Technology",
    accredetion11: "Accredetion",
    commissionForUniversityEducation11: "Commission for university Education",
    durationOfStudy11: "Duration of study",
    address11: "4 Years",
    cost10: "Cost",
    price11: "$4,000",
    intakes11: "Intakes",
    hybrid11: "Hybrid",
    neverReceivedOrFo1: "Details",
    neverReceivedOrFo2: "Compare",
    neverReceivedOrFo3: "Apply",
    neverReceivedOrFo4: "Details",
    neverReceivedOrFo5: "Compare",
    neverReceivedOrFo6: "Apply",
    neverReceivedOrFo7: "Details",
    neverReceivedOrFo8: "Compare",
    neverReceivedOrFo9: "Apply",
    neverReceivedOrFo10: "Details",
    neverReceivedOrFo11: "Compare",
    neverReceivedOrFo12: "Apply",
    neverReceivedOrFo13: "Details",
    neverReceivedOrFo14: "Compare",
    neverReceivedOrFo15: "Apply",
    neverReceivedOrFo16: "Details",
    neverReceivedOrFo17: "Compare",
    neverReceivedOrFo18: "Apply",
    neverReceivedOrFo19: "Details",
    neverReceivedOrFo20: "Compare",
    neverReceivedOrFo21: "Apply",
    neverReceivedOrFo22: "Details",
    neverReceivedOrFo23: "Compare",
    neverReceivedOrFo24: "Apply",
    neverReceivedOrFo25: "Details",
    neverReceivedOrFo26: "Compare",
    neverReceivedOrFo27: "Apply",
    neverReceivedOrFo28: "Details",
    neverReceivedOrFo29: "Compare",
    neverReceivedOrFo30: "Apply",
    neverReceivedOrFo31: "Details",
    neverReceivedOrFo32: "Compare",
    neverReceivedOrFo33: "Apply",
    admissionRequiremen: <React.Fragment>Admission requirements:<br />Level of Study: Bachelors Degree<br />Area of Study: Engineering<br />Specific Certification: Electirical Engineering; Electronics Engineering; Computer Engineering<br />Major / Specialization: Any<br />Grade/Score: Second Class Upper Division; 4.0 GPA; Mean Grade B; <br /><br /><br />Course Completion requirements:<br />60 core units<br />10 elective units<br />Workshop Pactice Practicals - 1 trimester <br />Industrial Attchment - 1 trimester<br />Passs Mark - 40%<br /><br />Others<br />1<br />2<br />3<br />4<br />5<br />6<br />7</React.Fragment>,
    courseDescription: "Course Description",
    undergraduate: "Undergraduate",
    polygon2: "/img/polygon-10-1@1x.png",
    gis: "GIS",
    polygon9: "/img/polygon-10-1@1x.png",
    levelOfStudy: "Level of study",
    generalAreaOfStudy: "General area of study",
    mapping: "Mapping",
    polygon10: "/img/polygon-10-1@1x.png",
    specificAreaOfStudy: "Specific area of study",
    hybrid12: "Hybrid",
    polygon11: "/img/polygon-10-1@1x.png",
    modeOfStudy: "Mode of study",
    image51Props: image518Data,
    image52Props: image519Data,
    image53Props: image520Data,
    image54Props: image521Data,
    image55Props: image522Data,
    image56Props: image523Data,
    image57Props: image524Data,
    image58Props: image525Data,
    image59Props: image526Data,
    image510Props: image527Data,
    image511Props: image528Data,
    search3Props: search32Data,
};

const group4123Data = {
    className: "group-41-14",
};

const search33Data = {
    search1: "/img/path-27-10@1x.png",
    className: "search-38",
};

const courseDetailsData = {
    overlapGroup: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    levelOfStudy: "Level of study",
    undergraduate: "Undergraduate",
    polygon2: "/img/polygon-10-1@1x.png",
    generalAreaOfStudy: "General area of study",
    specificAreaOfStudy: "Specific area of study",
    modeOfStudy: "Mode of study",
    gis: "GIS",
    polygon9: "/img/polygon-10-1@1x.png",
    mapping: "Mapping",
    polygon10: "/img/polygon-10-1@1x.png",
    hybrid: "Hybrid",
    polygon11: "/img/polygon-10-1@1x.png",
    coreUnitsCode11: <React.Fragment>Core units:<br />CODE 1 - Unit One<br />CODE 2 - Unit two<br />CODE 3 - Unit Three<br />CODE 4 - Unit Four<br />CODE 5 - Unit Five<br />CODE 6 - Unit Six<br />CODE 7 - Unit Seven<br />CODE 8 - Unit Eight<br />CODE 9 - Unit Nine<br />CODE 10 - Unit Ten<br />CODE 11 - Unit Eveven<br />CODE 12 - Unit Twelve<br />CODE 13 - Unit Thirteen<br />CODE 14 - Unit Fourteen<br />CODE 15 - Unit Fifteen<br />CODE 16 - Unit Sixteen<br />CODE 17 - Unit Seventeen<br />CODE 18 - Unit Eighteen<br />CODE 19 - Unit Nineteen<br />CODE 20 - Unit Twenty<br />CODE 21 - Unit  Twentyone<br />CODE 22 - Unit Twentytwo<br />CODE 23 - Unit Twenthythree<br />CODE 24 - Unit TwentyFour<br />CODE 25 - Unit Twentyfive<br />CODE 26 - Unit Twentysix<br />CODE 27 - Unit Twentyseven<br />CODE 28 - Unit TwentyEight<br />CODE 29 - Unit Twentynine<br />CODE 30 - Unit Thirty</React.Fragment>,
    coreUnitsCode12: <React.Fragment>Core units:<br />CODE 1 - Unit One<br />CODE 2 - Unit two<br />CODE 3 - Unit Three<br />CODE 4 - Unit Four<br />CODE 5 - Unit Five<br />CODE 6 - Unit Six<br />CODE 7 - Unit Seven<br />CODE 8 - Unit Eight<br />CODE 9 - Unit Nine<br />CODE 10 - Unit Ten<br />CODE 11 - Unit Eveven<br />CODE 12 - Unit Twelve<br />CODE 13 - Unit Thirteen<br />CODE 14 - Unit Fourteen<br />CODE 15 - Unit Fifteen<br />CODE 16 - Unit Sixteen<br />CODE 17 - Unit Seventeen<br />CODE 18 - Unit Eighteen<br />CODE 19 - Unit Nineteen<br />CODE 20 - Unit Twenty<br />CODE 21 - Unit  Twentyone<br />CODE 22 - Unit Twentytwo<br />CODE 23 - Unit Twenthythree<br />CODE 24 - Unit TwentyFour<br />CODE 25 - Unit Twentyfive<br />CODE 26 - Unit Twentysix<br />CODE 27 - Unit Twentyseven<br />CODE 28 - Unit TwentyEight<br />CODE 29 - Unit Twentynine<br />CODE 30 - Unit Thirty</React.Fragment>,
    coreUnitsCode13: <React.Fragment>Core units:<br />CODE 1 - Unit One<br />CODE 2 - Unit two<br />CODE 3 - Unit Three<br />CODE 4 - Unit Four<br />CODE 5 - Unit Five<br />CODE 6 - Unit Six<br />CODE 7 - Unit Seven<br />CODE 8 - Unit Eight<br />CODE 9 - Unit Nine<br />CODE 10 - Unit Ten<br />CODE 11 - Unit Eveven<br />CODE 12 - Unit Twelve<br />CODE 13 - Unit Thirteen<br />CODE 14 - Unit Fourteen<br />CODE 15 - Unit Fifteen<br />CODE 16 - Unit Sixteen<br />CODE 17 - Unit Seventeen<br />CODE 18 - Unit Eighteen<br />CODE 19 - Unit Nineteen<br />CODE 20 - Unit Twenty<br />CODE 21 - Unit  Twentyone<br />CODE 22 - Unit Twentytwo<br />CODE 23 - Unit Twenthythree<br />CODE 24 - Unit TwentyFour<br />CODE 25 - Unit Twentyfive<br />CODE 26 - Unit Twentysix<br />CODE 27 - Unit Twentyseven<br />CODE 28 - Unit TwentyEight<br />CODE 29 - Unit Twentynine<br />CODE 30 - Unit Thirty</React.Fragment>,
    coreUnitsCode14: <React.Fragment>Core units:<br />CODE 1 - Unit One<br />CODE 2 - Unit two<br />CODE 3 - Unit Three<br />CODE 4 - Unit Four<br />CODE 5 - Unit Five<br />CODE 6 - Unit Six<br />CODE 7 - Unit Seven<br />CODE 8 - Unit Eight<br />CODE 9 - Unit Nine<br />CODE 10 - Unit Ten<br />CODE 11 - Unit Eveven<br />CODE 12 - Unit Twelve<br />CODE 13 - Unit Thirteen<br />CODE 14 - Unit Fourteen<br />CODE 15 - Unit Fifteen<br />CODE 16 - Unit Sixteen<br />CODE 17 - Unit Seventeen<br />CODE 18 - Unit Eighteen<br />CODE 19 - Unit Nineteen<br />CODE 20 - Unit Twenty<br />CODE 21 - Unit  Twentyone<br />CODE 22 - Unit Twentytwo<br />CODE 23 - Unit Twenthythree<br />CODE 24 - Unit TwentyFour<br />CODE 25 - Unit Twentyfive<br />CODE 26 - Unit Twentysix<br />CODE 27 - Unit Twentyseven<br />CODE 28 - Unit TwentyEight<br />CODE 29 - Unit Twentynine<br />CODE 30 - Unit Thirty</React.Fragment>,
    coreUnitsCode15: <React.Fragment>Core units:<br />CODE 1 - Unit One<br />CODE 2 - Unit two<br />CODE 3 - Unit Three<br />CODE 4 - Unit Four<br />CODE 5 - Unit Five<br />CODE 6 - Unit Six<br />CODE 7 - Unit Seven<br />CODE 8 - Unit Eight<br />CODE 9 - Unit Nine<br />CODE 10 - Unit Ten<br />CODE 11 - Unit Eveven<br />CODE 12 - Unit Twelve<br />CODE 13 - Unit Thirteen<br />CODE 14 - Unit Fourteen<br />CODE 15 - Unit Fifteen<br />CODE 16 - Unit Sixteen<br />CODE 17 - Unit Seventeen<br />CODE 18 - Unit Eighteen<br />CODE 19 - Unit Nineteen<br />CODE 20 - Unit Twenty<br />CODE 21 - Unit  Twentyone<br />CODE 22 - Unit Twentytwo<br />CODE 23 - Unit Twenthythree<br />CODE 24 - Unit TwentyFour<br />CODE 25 - Unit Twentyfive<br />CODE 26 - Unit Twentysix<br />CODE 27 - Unit Twentyseven<br />CODE 28 - Unit TwentyEight<br />CODE 29 - Unit Twentynine<br />CODE 30 - Unit Thirty</React.Fragment>,
    coreUnitsCode16: <React.Fragment>Core units:<br />CODE 1 - Unit One<br />CODE 2 - Unit two<br />CODE 3 - Unit Three<br />CODE 4 - Unit Four<br />CODE 5 - Unit Five<br />CODE 6 - Unit Six<br />CODE 7 - Unit Seven<br />CODE 8 - Unit Eight<br />CODE 9 - Unit Nine<br />CODE 10 - Unit Ten<br />CODE 11 - Unit Eveven<br />CODE 12 - Unit Twelve<br />CODE 13 - Unit Thirteen<br />CODE 14 - Unit Fourteen<br />CODE 15 - Unit Fifteen<br />CODE 16 - Unit Sixteen<br />CODE 17 - Unit Seventeen<br />CODE 18 - Unit Eighteen<br />CODE 19 - Unit Nineteen<br />CODE 20 - Unit Twenty<br />CODE 21 - Unit  Twentyone<br />CODE 22 - Unit Twentytwo<br />CODE 23 - Unit Twenthythree<br />CODE 24 - Unit TwentyFour<br />CODE 25 - Unit Twentyfive<br />CODE 26 - Unit Twentysix<br />CODE 27 - Unit Twentyseven<br />CODE 28 - Unit TwentyEight<br />CODE 29 - Unit Twentynine<br />CODE 30 - Unit Thirty</React.Fragment>,
    coreUnitsCode17: <React.Fragment>Core units:<br />CODE 1 - Unit One<br />CODE 2 - Unit two<br />CODE 3 - Unit Three<br />CODE 4 - Unit Four<br />CODE 5 - Unit Five<br />CODE 6 - Unit Six<br />CODE 7 - Unit Seven<br />CODE 8 - Unit Eight<br />CODE 9 - Unit Nine<br />CODE 10 - Unit Ten<br />CODE 11 - Unit Eveven<br />CODE 12 - Unit Twelve<br />CODE 13 - Unit Thirteen<br />CODE 14 - Unit Fourteen<br />CODE 15 - Unit Fifteen<br />CODE 16 - Unit Sixteen<br />CODE 17 - Unit Seventeen<br />CODE 18 - Unit Eighteen<br />CODE 19 - Unit Nineteen<br />CODE 20 - Unit Twenty<br />CODE 21 - Unit  Twentyone<br />CODE 22 - Unit Twentytwo<br />CODE 23 - Unit Twenthythree<br />CODE 24 - Unit TwentyFour<br />CODE 25 - Unit Twentyfive<br />CODE 26 - Unit Twentysix<br />CODE 27 - Unit Twentyseven<br />CODE 28 - Unit TwentyEight<br />CODE 29 - Unit Twentynine<br />CODE 30 - Unit Thirty</React.Fragment>,
    coreUnitsCode18: <React.Fragment>Core units:<br />CODE 1 - Unit One<br />CODE 2 - Unit two<br />CODE 3 - Unit Three<br />CODE 4 - Unit Four<br />CODE 5 - Unit Five<br />CODE 6 - Unit Six<br />CODE 7 - Unit Seven<br />CODE 8 - Unit Eight<br />CODE 9 - Unit Nine<br />CODE 10 - Unit Ten<br />CODE 11 - Unit Eveven<br />CODE 12 - Unit Twelve<br />CODE 13 - Unit Thirteen<br />CODE 14 - Unit Fourteen<br />CODE 15 - Unit Fifteen<br />CODE 16 - Unit Sixteen<br />CODE 17 - Unit Seventeen<br />CODE 18 - Unit Eighteen<br />CODE 19 - Unit Nineteen<br />CODE 20 - Unit Twenty<br />CODE 21 - Unit  Twentyone<br />CODE 22 - Unit Twentytwo<br />CODE 23 - Unit Twenthythree<br />CODE 24 - Unit TwentyFour<br />CODE 25 - Unit Twentyfive<br />CODE 26 - Unit Twentysix<br />CODE 27 - Unit Twentyseven<br />CODE 28 - Unit TwentyEight<br />CODE 29 - Unit Twentynine<br />CODE 30 - Unit Thirty</React.Fragment>,
    coreUnitsCode19: <React.Fragment>Core units:<br />CODE 1 - Unit One<br />CODE 2 - Unit two<br />CODE 3 - Unit Three<br />CODE 4 - Unit Four<br />CODE 5 - Unit Five<br />CODE 6 - Unit Six<br />CODE 7 - Unit Seven<br />CODE 8 - Unit Eight<br />CODE 9 - Unit Nine<br />CODE 10 - Unit Ten<br />CODE 11 - Unit Eveven<br />CODE 12 - Unit Twelve<br />CODE 13 - Unit Thirteen<br />CODE 14 - Unit Fourteen<br />CODE 15 - Unit Fifteen<br />CODE 16 - Unit Sixteen<br />CODE 17 - Unit Seventeen<br />CODE 18 - Unit Eighteen<br />CODE 19 - Unit Nineteen<br />CODE 20 - Unit Twenty<br />CODE 21 - Unit  Twentyone<br />CODE 22 - Unit Twentytwo<br />CODE 23 - Unit Twenthythree<br />CODE 24 - Unit TwentyFour<br />CODE 25 - Unit Twentyfive<br />CODE 26 - Unit Twentysix<br />CODE 27 - Unit Twentyseven<br />CODE 28 - Unit TwentyEight<br />CODE 29 - Unit Twentynine<br />CODE 30 - Unit Thirty</React.Fragment>,
    coreUnitsCode110: <React.Fragment>Core units:<br />CODE 1 - Unit One<br />CODE 2 - Unit two<br />CODE 3 - Unit Three<br />CODE 4 - Unit Four<br />CODE 5 - Unit Five<br />CODE 6 - Unit Six<br />CODE 7 - Unit Seven<br />CODE 8 - Unit Eight<br />CODE 9 - Unit Nine<br />CODE 10 - Unit Ten<br />CODE 11 - Unit Eveven<br />CODE 12 - Unit Twelve<br />CODE 13 - Unit Thirteen<br />CODE 14 - Unit Fourteen<br />CODE 15 - Unit Fifteen<br />CODE 16 - Unit Sixteen<br />CODE 17 - Unit Seventeen<br />CODE 18 - Unit Eighteen<br />CODE 19 - Unit Nineteen<br />CODE 20 - Unit Twenty<br />CODE 21 - Unit  Twentyone<br />CODE 22 - Unit Twentytwo<br />CODE 23 - Unit Twenthythree<br />CODE 24 - Unit TwentyFour<br />CODE 25 - Unit Twentyfive<br />CODE 26 - Unit Twentysix<br />CODE 27 - Unit Twentyseven<br />CODE 28 - Unit TwentyEight<br />CODE 29 - Unit Twentynine<br />CODE 30 - Unit Thirty</React.Fragment>,
    coreUnitsCode111: <React.Fragment>Core units:<br />CODE 1 - Unit One<br />CODE 2 - Unit two<br />CODE 3 - Unit Three<br />CODE 4 - Unit Four<br />CODE 5 - Unit Five<br />CODE 6 - Unit Six<br />CODE 7 - Unit Seven<br />CODE 8 - Unit Eight<br />CODE 9 - Unit Nine<br />CODE 10 - Unit Ten<br />CODE 11 - Unit Eveven<br />CODE 12 - Unit Twelve<br />CODE 13 - Unit Thirteen<br />CODE 14 - Unit Fourteen<br />CODE 15 - Unit Fifteen<br />CODE 16 - Unit Sixteen<br />CODE 17 - Unit Seventeen<br />CODE 18 - Unit Eighteen<br />CODE 19 - Unit Nineteen<br />CODE 20 - Unit Twenty<br />CODE 21 - Unit  Twentyone<br />CODE 22 - Unit Twentytwo<br />CODE 23 - Unit Twenthythree<br />CODE 24 - Unit TwentyFour<br />CODE 25 - Unit Twentyfive<br />CODE 26 - Unit Twentysix<br />CODE 27 - Unit Twentyseven<br />CODE 28 - Unit TwentyEight<br />CODE 29 - Unit Twentynine<br />CODE 30 - Unit Thirty</React.Fragment>,
    coreUnitsCode112: <React.Fragment>Core units:<br />CODE 1 - Unit One<br />CODE 2 - Unit two<br />CODE 3 - Unit Three<br />CODE 4 - Unit Four<br />CODE 5 - Unit Five<br />CODE 6 - Unit Six<br />CODE 7 - Unit Seven<br />CODE 8 - Unit Eight<br />CODE 9 - Unit Nine<br />CODE 10 - Unit Ten<br />CODE 11 - Unit Eveven<br />CODE 12 - Unit Twelve<br />CODE 13 - Unit Thirteen<br />CODE 14 - Unit Fourteen<br />CODE 15 - Unit Fifteen<br />CODE 16 - Unit Sixteen<br />CODE 17 - Unit Seventeen<br />CODE 18 - Unit Eighteen<br />CODE 19 - Unit Nineteen<br />CODE 20 - Unit Twenty<br />CODE 21 - Unit  Twentyone<br />CODE 22 - Unit Twentytwo<br />CODE 23 - Unit Twenthythree<br />CODE 24 - Unit TwentyFour<br />CODE 25 - Unit Twentyfive<br />CODE 26 - Unit Twentysix<br />CODE 27 - Unit Twentyseven<br />CODE 28 - Unit TwentyEight<br />CODE 29 - Unit Twentynine<br />CODE 30 - Unit Thirty</React.Fragment>,
    courseDescription: "Course Description",
    admissionRequiremen: <React.Fragment>Admission requirements:<br />Level of Study: Bachelors Degree<br />Area of Study: Engineering<br />Specific Certification: Electirical Engineering; Electronics Engineering; Computer Engineering<br />Major / Specialization: Any<br />Grade/Score: Second Class Upper Division; 4.0 GPA; Mean Grade B; <br /><br /><br />Course Completion requirements:<br />60 core units<br />10 elective units<br />Workshop Pactice Practicals - 1 trimester <br />Industrial Attchment - 1 trimester<br />Passs Mark - 40%<br /><br />Others<br />1<br />2<br />3<br />4<br />5<br />6<br />7</React.Fragment>,
    courseCompletionRequirements: "Course Completion Requirements",
    address1: <React.Fragment>60 core units<br />10 elective units<br />Workshop Pactice Practicals - 1 trimester <br />Industrial Attchment - 1 trimester<br />Passs Mark - 40%</React.Fragment>,
    otherDetails: "Other Details",
    address2: <React.Fragment>60 core units<br />10 elective units<br />Workshop Pactice Practicals - 1 trimester <br />Industrial Attchment - 1 trimester<br />Passs Mark - 40%</React.Fragment>,
    group412Props: group4123Data,
    search3Props: search33Data,
};

const search34Data = {
    search1: "/img/path-27-10@1x.png",
    className: "search-41",
};

const image529Data = {
    className: "image-23",
};

const image530Data = {
    className: "image-23",
};

const group9661Data = {
    image5Props: image530Data,
};

const image531Data = {
    className: "image-23",
};

const group9662Data = {
    className: "group-967",
    image5Props: image531Data,
};

const image532Data = {
    className: "image-23",
};

const image533Data = {
    className: "image-23",
};

const group9663Data = {
    image5Props: image533Data,
};

const image534Data = {
    className: "image-23",
};

const group9664Data = {
    className: "group-969",
    image5Props: image534Data,
};

const image535Data = {
    className: "image-23",
};

const image536Data = {
    className: "image-23",
};

const group9665Data = {
    image5Props: image536Data,
};

const image537Data = {
    className: "image-23",
};

const group9666Data = {
    className: "group-971",
    image5Props: image537Data,
};

const image538Data = {
    className: "image-23",
};

const image539Data = {
    className: "image-23",
};

const group9667Data = {
    image5Props: image539Data,
};

const image540Data = {
    className: "image-23",
};

const group9668Data = {
    className: "group-973",
    image5Props: image540Data,
};

const applicationFundingData = {
    overlapGroup32: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    typeOfFunding1: "Type of Funding",
    grunt: "Grunt",
    polygon2: "/img/polygon-10-1@1x.png",
    generalAreaOfFunding: "General area of Funding",
    location: "Location",
    eligibility: "Eligibility",
    agriculture: "Agriculture",
    polygon9: "/img/polygon-10-1@1x.png",
    eastAfrica: "East Africa",
    polygon10: "/img/polygon-10-1@1x.png",
    ngos: "NGOs",
    polygon11: "/img/polygon-10-1@1x.png",
    institutionGoFun1: <React.Fragment>Institution - Go Fund Africa<br />Location: Nairobi</React.Fragment>,
    startupFundingOpportunity1: "Startup Funding Opportunity",
    gruntEligibilityEastAfrica1: <React.Fragment>Grunt<br />Eligibility: East Africa</React.Fragment>,
    typeOfFunding2: "Type of Funding",
    september30Th20221: <React.Fragment>September 30th 2022<br />Eligible Entities: NGO</React.Fragment>,
    applicationDeadline1: "Application  Deadline",
    areaOfFundingAgricultur1: "Area of Funding: Agricultur",
    amount100001: "Amount: $10,000",
    neverReceivedOrFo1: "Details",
    neverReceivedOrFo2: "Compare",
    neverReceivedOrFo3: "Apply",
    institutionGoFun2: <React.Fragment>Institution - Go Fund Africa<br />Location: Nairobi</React.Fragment>,
    startupFundingOpportunity2: "Startup Funding Opportunity",
    gruntEligibilityEastAfrica2: <React.Fragment>Grunt<br />Eligibility: East Africa</React.Fragment>,
    typeOfFunding3: "Type of Funding",
    september30Th20222: <React.Fragment>September 30th 2022<br />Eligible Entities: NGO</React.Fragment>,
    applicationDeadline2: "Application  Deadline",
    areaOfFundingAgricultur2: "Area of Funding: Agricultur",
    amount100002: "Amount: $10,000",
    neverReceivedOrFo4: "Details",
    neverReceivedOrFo5: "Compare",
    neverReceivedOrFo6: "Apply",
    institutionGoFun3: <React.Fragment>Institution - Go Fund Africa<br />Location: Nairobi</React.Fragment>,
    startupFundingOpportunity3: "Startup Funding Opportunity",
    gruntEligibilityEastAfrica3: <React.Fragment>Grunt<br />Eligibility: East Africa</React.Fragment>,
    typeOfFunding4: "Type of Funding",
    september30Th20223: <React.Fragment>September 30th 2022<br />Eligible Entities: NGO</React.Fragment>,
    applicationDeadline3: "Application  Deadline",
    areaOfFundingAgricultur3: "Area of Funding: Agricultur",
    amount100003: "Amount: $10,000",
    neverReceivedOrFo7: "Details",
    neverReceivedOrFo8: "Compare",
    neverReceivedOrFo9: "Apply",
    institutionGoFun4: <React.Fragment>Institution - Go Fund Africa<br />Location: Nairobi</React.Fragment>,
    startupFundingOpportunity4: "Startup Funding Opportunity",
    gruntEligibilityEastAfrica4: <React.Fragment>Grunt<br />Eligibility: East Africa</React.Fragment>,
    typeOfFunding5: "Type of Funding",
    september30Th20224: <React.Fragment>September 30th 2022<br />Eligible Entities: NGO</React.Fragment>,
    applicationDeadline4: "Application  Deadline",
    areaOfFundingAgricultur4: "Area of Funding: Agricultur",
    amount100004: "Amount: $10,000",
    neverReceivedOrFo10: "Details",
    neverReceivedOrFo11: "Compare",
    neverReceivedOrFo12: "Apply",
    fundingDetails: "Funding Details",
    search3Props: search34Data,
    image51Props: image529Data,
    group9661Props: group9661Data,
    group9662Props: group9662Data,
    image52Props: image532Data,
    group9663Props: group9663Data,
    group9664Props: group9664Data,
    image53Props: image535Data,
    group9665Props: group9665Data,
    group9666Props: group9666Data,
    image54Props: image538Data,
    group9667Props: group9667Data,
    group9668Props: group9668Data,
};

const search35Data = {
    search1: "/img/path-27-13@1x.png",
    className: "search-44",
};

const image541Data = {
    className: "image-24",
};

const image542Data = {
    className: "image-24",
};

const compareFundingData = {
    overlapGroup: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    startupFundingOpportunity1: "Startup Funding Opportunity",
    institutionGoFun1: <React.Fragment>Institution - Go Fund Africa<br />Location: Nairobi</React.Fragment>,
    startupFundingOpportunity2: "Startup Funding Opportunity",
    institutionGoFun2: <React.Fragment>Institution - Go Fund Africa<br />Location: Nairobi</React.Fragment>,
    adHere: "Ad Here",
    search3Props: search35Data,
    image51Props: image541Data,
    image52Props: image542Data,
};

const group4133Data = {
    className: "group-41-16",
};

const image543Data = {
    className: "image-25",
};

const group525Data = {
    className: "group-44",
};

const search36Data = {
    search1: "/img/path-27-13@1x.png",
    className: "search-47",
};

const image544Data = {
    className: "image-25",
};

const group526Data = {
    className: "group-44",
};

const image545Data = {
    className: "image-26",
};

const group527Data = {
    className: "group-45",
};

const image546Data = {
    className: "image-26",
};

const group528Data = {
    className: "group-45",
};

const image547Data = {
    className: "image-27",
};

const group529Data = {
    className: "group-46",
};

const image548Data = {
    className: "image-27",
};

const group530Data = {
    className: "group-46",
};

const image549Data = {
    className: "image-28",
};

const group531Data = {
    className: "group-47",
};

const image550Data = {
    className: "image-28",
};

const group532Data = {
    className: "group-47",
};

const image551Data = {
    className: "image-29",
};

const group533Data = {
    className: "group-48",
};

const image552Data = {
    className: "image-29",
};

const group534Data = {
    className: "group-48",
};

const image553Data = {
    className: "image-30",
};

const group535Data = {
    className: "group-49",
};

const image554Data = {
    className: "image-30",
};

const group536Data = {
    className: "group-49",
};

const image555Data = {
    className: "image-31",
};

const group537Data = {
    className: "group-50",
};

const image556Data = {
    className: "image-31",
};

const group538Data = {
    className: "group-50",
};

const image557Data = {
    className: "image-32",
};

const group539Data = {
    className: "group-51",
};

const image558Data = {
    className: "image-32",
};

const group540Data = {
    className: "group-51",
};

const image559Data = {
    className: "image-33",
};

const group541Data = {
    className: "group-52",
};

const image560Data = {
    className: "image-33",
};

const group542Data = {
    className: "group-52",
};

const image561Data = {
    className: "image-34",
};

const group543Data = {
    className: "group-53",
};

const image562Data = {
    className: "image-34",
};

const group544Data = {
    className: "group-53",
};

const image563Data = {
    className: "image-35",
};

const group545Data = {
    className: "group-54",
};

const image564Data = {
    className: "image-35",
};

const group546Data = {
    className: "group-54",
};

const image565Data = {
    className: "image-36",
};

const group547Data = {
    className: "group-55",
};

const image566Data = {
    className: "image-36",
};

const group548Data = {
    className: "group-55",
};

const applicationScholarshipData = {
    pexelsTimaMiroshnichenko5198252: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    institutionUnivers1: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation1: "The Chris Boris Foundation",
    partial1: "Partial",
    typeOfFunding1: "Type of Funding",
    september30Th20221: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline1: "Application  Deadline",
    neverReceivedOrFo1: "Details",
    neverReceivedOrFo2: "Compare",
    neverReceivedOrFo3: "Apply",
    scholarshipDetails: "Scholarship Details",
    doctorateAreaOfStudyEngineering1: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy1: "Level of Study",
    undergraduate: "Undergraduate",
    gis: "GIS",
    levelOfStudy2: "Level of study",
    generalAreaOfStudy: "General area of study",
    mapping: "Mapping",
    specificAreaOfStudy: "Specific area of study",
    hybrid: "Hybrid",
    modeOfStudy: "Mode of study",
    institutionUnivers2: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation2: "The Chris Boris Foundation",
    partial2: "Partial",
    typeOfFunding2: "Type of Funding",
    september30Th20222: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline2: "Application  Deadline",
    neverReceivedOrFo4: "Details",
    neverReceivedOrFo5: "Compare",
    neverReceivedOrFo6: "Apply",
    doctorateAreaOfStudyEngineering2: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy3: "Level of Study",
    institutionUnivers3: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation3: "The Chris Boris Foundation",
    partial3: "Partial",
    typeOfFunding3: "Type of Funding",
    september30Th20223: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline3: "Application  Deadline",
    neverReceivedOrFo7: "Details",
    neverReceivedOrFo8: "Compare",
    neverReceivedOrFo9: "Apply",
    doctorateAreaOfStudyEngineering3: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy4: "Level of Study",
    institutionUnivers4: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation4: "The Chris Boris Foundation",
    partial4: "Partial",
    typeOfFunding4: "Type of Funding",
    september30Th20224: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline4: "Application  Deadline",
    neverReceivedOrFo10: "Details",
    neverReceivedOrFo11: "Compare",
    neverReceivedOrFo12: "Apply",
    doctorateAreaOfStudyEngineering4: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy5: "Level of Study",
    institutionUnivers5: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation5: "The Chris Boris Foundation",
    partial5: "Partial",
    typeOfFunding5: "Type of Funding",
    september30Th20225: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline5: "Application  Deadline",
    neverReceivedOrFo13: "Details",
    neverReceivedOrFo14: "Compare",
    neverReceivedOrFo15: "Apply",
    doctorateAreaOfStudyEngineering5: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy6: "Level of Study",
    institutionUnivers6: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation6: "The Chris Boris Foundation",
    partial6: "Partial",
    typeOfFunding6: "Type of Funding",
    september30Th20226: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline6: "Application  Deadline",
    neverReceivedOrFo16: "Details",
    neverReceivedOrFo17: "Compare",
    neverReceivedOrFo18: "Apply",
    doctorateAreaOfStudyEngineering6: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy7: "Level of Study",
    institutionUnivers7: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation7: "The Chris Boris Foundation",
    partial7: "Partial",
    typeOfFunding7: "Type of Funding",
    september30Th20227: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline7: "Application  Deadline",
    neverReceivedOrFo19: "Details",
    neverReceivedOrFo20: "Compare",
    neverReceivedOrFo21: "Apply",
    doctorateAreaOfStudyEngineering7: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy8: "Level of Study",
    institutionUnivers8: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation8: "The Chris Boris Foundation",
    partial8: "Partial",
    typeOfFunding8: "Type of Funding",
    september30Th20228: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline8: "Application  Deadline",
    neverReceivedOrFo22: "Details",
    neverReceivedOrFo23: "Compare",
    neverReceivedOrFo24: "Apply",
    doctorateAreaOfStudyEngineering8: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy9: "Level of Study",
    institutionUnivers9: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation9: "The Chris Boris Foundation",
    partial9: "Partial",
    typeOfFunding9: "Type of Funding",
    september30Th20229: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline9: "Application  Deadline",
    neverReceivedOrFo25: "Compare",
    neverReceivedOrFo26: "Apply",
    doctorateAreaOfStudyEngineering9: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy10: "Level of Study",
    institutionUnivers10: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation10: "The Chris Boris Foundation",
    partial10: "Partial",
    typeOfFunding10: "Type of Funding",
    september30Th202210: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline10: "Application  Deadline",
    neverReceivedOrFo27: "Compare",
    neverReceivedOrFo28: "Apply",
    doctorateAreaOfStudyEngineering10: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy11: "Level of Study",
    institutionUnivers11: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation11: "The Chris Boris Foundation",
    partial11: "Partial",
    typeOfFunding11: "Type of Funding",
    september30Th202211: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline11: "Application  Deadline",
    neverReceivedOrFo29: "Details",
    neverReceivedOrFo30: "Compare",
    neverReceivedOrFo31: "Apply",
    doctorateAreaOfStudyEngineering11: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy12: "Level of Study",
    institutionUnivers12: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation12: "The Chris Boris Foundation",
    partial12: "Partial",
    typeOfFunding12: "Type of Funding",
    september30Th202212: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline12: "Application  Deadline",
    neverReceivedOrFo32: "Details",
    neverReceivedOrFo33: "Compare",
    neverReceivedOrFo34: "Apply",
    doctorateAreaOfStudyEngineering12: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy13: "Level of Study",
    institutionUnivers13: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation13: "The Chris Boris Foundation",
    partial13: "Partial",
    typeOfFunding13: "Type of Funding",
    september30Th202213: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline13: "Application  Deadline",
    neverReceivedOrFo35: "Details",
    neverReceivedOrFo36: "Compare",
    neverReceivedOrFo37: "Apply",
    doctorateAreaOfStudyEngineering13: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy14: "Level of Study",
    institutionUnivers14: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation14: "The Chris Boris Foundation",
    partial14: "Partial",
    typeOfFunding14: "Type of Funding",
    september30Th202214: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline14: "Application  Deadline",
    neverReceivedOrFo38: "Details",
    neverReceivedOrFo39: "Compare",
    neverReceivedOrFo40: "Apply",
    doctorateAreaOfStudyEngineering14: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy15: "Level of Study",
    institutionUnivers15: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation15: "The Chris Boris Foundation",
    partial15: "Partial",
    typeOfFunding15: "Type of Funding",
    september30Th202215: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline15: "Application  Deadline",
    neverReceivedOrFo41: "Details",
    neverReceivedOrFo42: "Compare",
    neverReceivedOrFo43: "Apply",
    doctorateAreaOfStudyEngineering15: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy16: "Level of Study",
    institutionUnivers16: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation16: "The Chris Boris Foundation",
    partial16: "Partial",
    typeOfFunding16: "Type of Funding",
    september30Th202216: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline16: "Application  Deadline",
    neverReceivedOrFo44: "Details",
    neverReceivedOrFo45: "Compare",
    neverReceivedOrFo46: "Apply",
    doctorateAreaOfStudyEngineering16: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy17: "Level of Study",
    institutionUnivers17: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation17: "The Chris Boris Foundation",
    partial17: "Partial",
    typeOfFunding17: "Type of Funding",
    september30Th202217: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline17: "Application  Deadline",
    neverReceivedOrFo47: "Details",
    neverReceivedOrFo48: "Compare",
    neverReceivedOrFo49: "Apply",
    doctorateAreaOfStudyEngineering17: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy18: "Level of Study",
    institutionUnivers18: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation18: "The Chris Boris Foundation",
    partial18: "Partial",
    typeOfFunding18: "Type of Funding",
    september30Th202218: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline18: "Application  Deadline",
    neverReceivedOrFo50: "Details",
    neverReceivedOrFo51: "Compare",
    neverReceivedOrFo52: "Apply",
    doctorateAreaOfStudyEngineering18: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy19: "Level of Study",
    institutionUnivers19: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation19: "The Chris Boris Foundation",
    partial19: "Partial",
    typeOfFunding19: "Type of Funding",
    september30Th202219: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline19: "Application  Deadline",
    neverReceivedOrFo53: "Details",
    neverReceivedOrFo54: "Compare",
    neverReceivedOrFo55: "Apply",
    doctorateAreaOfStudyEngineering19: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy20: "Level of Study",
    institutionUnivers20: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation20: "The Chris Boris Foundation",
    partial20: "Partial",
    typeOfFunding20: "Type of Funding",
    september30Th202220: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline20: "Application  Deadline",
    neverReceivedOrFo56: "Details",
    neverReceivedOrFo57: "Compare",
    neverReceivedOrFo58: "Apply",
    doctorateAreaOfStudyEngineering20: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy21: "Level of Study",
    institutionUnivers21: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation21: "The Chris Boris Foundation",
    partial21: "Partial",
    typeOfFunding21: "Type of Funding",
    september30Th202221: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline21: "Application  Deadline",
    neverReceivedOrFo59: "Details",
    neverReceivedOrFo60: "Compare",
    neverReceivedOrFo61: "Apply",
    doctorateAreaOfStudyEngineering21: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy22: "Level of Study",
    institutionUnivers22: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation22: "The Chris Boris Foundation",
    partial22: "Partial",
    typeOfFunding22: "Type of Funding",
    september30Th202222: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline22: "Application  Deadline",
    neverReceivedOrFo62: "Details",
    neverReceivedOrFo63: "Compare",
    neverReceivedOrFo64: "Apply",
    doctorateAreaOfStudyEngineering22: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy23: "Level of Study",
    institutionUnivers23: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation23: "The Chris Boris Foundation",
    partial23: "Partial",
    typeOfFunding23: "Type of Funding",
    september30Th202223: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline23: "Application  Deadline",
    neverReceivedOrFo65: "Details",
    neverReceivedOrFo66: "Compare",
    neverReceivedOrFo67: "Apply",
    doctorateAreaOfStudyEngineering23: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy24: "Level of Study",
    institutionUnivers24: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation24: "The Chris Boris Foundation",
    partial24: "Partial",
    typeOfFunding24: "Type of Funding",
    september30Th202224: <React.Fragment>September 30th 2022<br />Mode: Online/On Campus</React.Fragment>,
    applicationDeadline24: "Application  Deadline",
    neverReceivedOrFo68: "Details",
    neverReceivedOrFo69: "Compare",
    neverReceivedOrFo70: "Apply",
    doctorateAreaOfStudyEngineering24: <React.Fragment>Doctorate<br />Area of Study: Engineering</React.Fragment>,
    levelOfStudy25: "Level of Study",
    group413Props: group4133Data,
    image51Props: image543Data,
    group51Props: group525Data,
    search3Props: search36Data,
    image52Props: image544Data,
    group52Props: group526Data,
    image53Props: image545Data,
    group53Props: group527Data,
    image54Props: image546Data,
    group54Props: group528Data,
    image55Props: image547Data,
    group55Props: group529Data,
    image56Props: image548Data,
    group56Props: group530Data,
    image57Props: image549Data,
    group57Props: group531Data,
    image58Props: image550Data,
    group58Props: group532Data,
    image59Props: image551Data,
    group59Props: group533Data,
    image510Props: image552Data,
    group510Props: group534Data,
    image511Props: image553Data,
    group511Props: group535Data,
    image512Props: image554Data,
    group512Props: group536Data,
    image513Props: image555Data,
    group513Props: group537Data,
    image514Props: image556Data,
    group514Props: group538Data,
    image515Props: image557Data,
    group515Props: group539Data,
    image516Props: image558Data,
    group516Props: group540Data,
    image517Props: image559Data,
    group517Props: group541Data,
    image518Props: image560Data,
    group518Props: group542Data,
    image519Props: image561Data,
    group519Props: group543Data,
    image520Props: image562Data,
    group520Props: group544Data,
    image521Props: image563Data,
    group521Props: group545Data,
    image522Props: image564Data,
    group522Props: group546Data,
    image523Props: image565Data,
    group523Props: group547Data,
    image524Props: image566Data,
    group524Props: group548Data,
};

const search37Data = {
    search1: "/img/path-27-10@1x.png",
    className: "search-50",
};

const image567Data = {
    className: "image-37",
};

const image568Data = {
    className: "image-37",
};

const compareScholarshipsData = {
    overlapGroup: "/img/pexels-tima-miroshnichenko-5198252-10@1x.png",
    theChrisBorisFoundation1: "The Chris Boris Foundation",
    institutionUnivers1: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    theChrisBorisFoundation2: "The Chris Boris Foundation",
    institutionUnivers2: <React.Fragment>Institution -University of Nairobi<br />Location: Nairobi</React.Fragment>,
    adHere: "Ad Here",
    search3Props: search37Data,
    image51Props: image567Data,
    image52Props: image568Data,
};

