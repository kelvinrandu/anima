import React from "react";
import Envelope from "../Envelope";
import "./Email.css";

function Email(props) {
  const { className, envelopeProps } = props;

  return (
    <div className={`email-4-1 ${className || ""}`}>
      <Envelope className={envelopeProps.className} />
      <div className="tomschneidermailcom poppins-normal-suva-gray-14px">tom.schneider@mail.com</div>
    </div>
  );
}

export default Email;
