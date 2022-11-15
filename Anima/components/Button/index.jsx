import React from "react";
import Message from "../Message";
import "./Button.css";

function Button(props) {
  const { className, messageProps } = props;

  return (
    <div className={`button-1-1 ${className || ""}`}>
      <Message>{messageProps.children}</Message>
      <div className="view-profile-4">
        <div className="view-profile-5 poppins-normal-unmellow-yellow-16px">View Profile</div>
      </div>
    </div>
  );
}

export default Button;
