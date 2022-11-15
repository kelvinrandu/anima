import React from "react";
import Image42 from "../Image42";
import "./AndreeaWade.css";

function AndreeaWade(props) {
  const { andreeaWade, className, image4Props } = props;

  return (
    <div className={`andreea-wade-1 ${className || ""}`}>
      <Image42 src={image4Props.src} className={image4Props.className} />
      <div className="text-21">
        <div className="andreea-wade-2 poppins-semi-bold-white-18px">{andreeaWade}</div>
        <p className="looks-great-lets-finished-it poppins-normal-white-14px">Looks great. Let&#39;s finished it.</p>
      </div>
    </div>
  );
}

export default AndreeaWade;
