import React from "react";
import Arrow from "../Arrow";
import "./ToCompleteYourProfile.css";

function ToCompleteYourProfile(props) {
  const { tryPremiumContainer, title, completeYourProfile, arrowProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="to-complete-your-profile screen">
        <div className="try-premium-container" style={{ backgroundImage: `url(${tryPremiumContainer})` }}>
          <div className="try-premium-14">
            <p className="we-would-like-to-know-you poppins-normal-eden-100px">{title}</p>
          </div>
          <div className="try-premium-15">
            <div className="complete-your-profile">{completeYourProfile}</div>
            <Arrow
              line11={arrowProps.line11}
              line12={arrowProps.line12}
              line13={arrowProps.line13}
              className={arrowProps.className}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToCompleteYourProfile;
