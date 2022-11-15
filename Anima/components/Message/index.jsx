import React from "react";
import "./Message.css";

function Message(props) {
  const { children, className } = props;

  return (
    <div className={`message-9-1 ${className || ""}`}>
      <div className="message-10 poppins-normal-white-16px">{children}</div>
    </div>
  );
}

export default Message;
