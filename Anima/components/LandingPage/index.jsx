import React from "react";
import Group1 from "../Group1";
import AlignLeft1 from "../AlignLeft1";
import "./LandingPage.css";

function LandingPage(props) {
  const { overlapGroup, acts_Logo } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing-page screen">
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="acts_logo" src={acts_Logo} alt="ACTS_LOGO" />
          <Group1 />
          <AlignLeft1 />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
