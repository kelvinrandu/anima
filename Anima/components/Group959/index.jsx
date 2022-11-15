import React from "react";
import Expand22 from "../Expand22";
import "./Group959.css";

function Group959(props) {
  const { expand21Props, expand22Props } = props;

  return (
    <div className="group-9-1">
      <Expand22 path2={expand21Props.path2} path3={expand21Props.path3} path4={expand21Props.path4} />
      <Expand22
        path2={expand22Props.path2}
        path3={expand22Props.path3}
        path4={expand22Props.path4}
        className={expand22Props.className}
      />
    </div>
  );
}

export default Group959;
