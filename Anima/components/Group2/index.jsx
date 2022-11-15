import React from "react";
import User from "../User";
import "./Group2.css";

function Group2(props) {
  const { className, user1Props, user2Props } = props;

  return (
    <div className={`group-2 ${className || ""}`}>
      <div className="group-3">
        <User path9={user1Props.path9} path10={user1Props.path10} className={user1Props.className} />
        <User path9={user2Props.path9} path10={user2Props.path10} className={user2Props.className} />
      </div>
    </div>
  );
}

export default Group2;
