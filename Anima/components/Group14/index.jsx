import React from "react";
import "./Group14.css";

function Group14(props) {
  const { className } = props;

  return (
    <div className={`group-14-1 ${className || ""}`}>
      <div className="icon">
        <img className="icon-check_mark" src="/img/shape-1-copy-11-10@1x.png" alt="icon-check_mark" />
      </div>
      <div className="cloud-storage-web-system-copy-5">
        <div className="icon-1">
          <img className="icon-close" src="/img/rounded-rectangle-2-copy-36-10@1x.png" alt="icon-close" />
        </div>
      </div>
    </div>
  );
}

export default Group14;
