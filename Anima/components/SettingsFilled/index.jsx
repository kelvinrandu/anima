import React from "react";
import "./SettingsFilled.css";

function SettingsFilled(props) {
  const { className } = props;

  return (
    <div className={`settings-filled ${className || ""}`}>
      <div className="settings-filled-1"></div>
    </div>
  );
}

export default SettingsFilled;
