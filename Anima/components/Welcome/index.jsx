import React from "react";
import "./Welcome.css";

function Welcome(props) {
  const { overlapGroup, acts_Logo, welcomeToActsAcademy } = props;

  return (
    <div className="container-center-horizontal">
      <div className="welcome screen">
        <div className="overlap-group-2" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="acts_logo-2" src={acts_Logo} alt="ACTS_LOGO" />
          <div className="try-premium-13">
            <h1 className="title poppins-normal-eden-100px">{welcomeToActsAcademy}</h1>
          </div>
          <div className="group-9">
            <div className="ellipse"></div>
            <div className="ellipse"></div>
            <div className="ellipse"></div>
            <div className="ellipse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
