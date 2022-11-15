import React from "react";
import "./Group102.css";

function Group102(props) {
  const { className } = props;

  return (
    <div className={`group-10-3 poppins-normal-black-20px ${className || ""}`}>
      <div className="anythingdesign-ealimited">
        Anything
        <br />
        Design EA
        <br />
        Limited
      </div>
      <div className="graphics-visual-designer">
        Graphics &amp;
        <br />
        Visual Designer
      </div>
      <div className="technology">Technology</div>
      <div className="design">Design</div>
      <div className="chief-creativeofficer">
        Chief Creative
        <br />
        Officer
      </div>
      <div className="nairobi-kenya">Nairobi Kenya</div>
      <div className="text-7">
        10.02.2002/
        <br />
        10.04.2022
      </div>
    </div>
  );
}

export default Group102;
