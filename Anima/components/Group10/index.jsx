import React from "react";
import "./Group10.css";

function Group10(props) {
  const { className } = props;

  return (
    <div className={`group-10-1 poppins-normal-black-20px ${className || ""}`}>
      <div className="acts-schoolof-computing-as">
        Acts school
        <br />
        of Computing
        <br />
        &amp; AS
      </div>
      <div className="computerscience">
        Computer
        <br />
        Science
      </div>
      <div className="a9052">A/90%/5.2</div>
      <div className="undergraduate">Undergraduate</div>
      <div className="degree">Degree</div>
      <div className="ethical-hacking">Ethical Hacking</div>
      <div className="hybrid">Hybrid</div>
    </div>
  );
}

export default Group10;
