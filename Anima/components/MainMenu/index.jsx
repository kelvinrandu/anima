import React from "react";
import "./MainMenu.css";

function MainMenu(props) {
  const { className } = props;

  return (
    <div className={`main-menu ${className || ""}`}>
      <div className="main-menu-1 poppins-normal-star-dust-18px">Main Menu</div>
      <img className="line-3" src="/img/line-3-10@1x.png" alt="Line 3" />
    </div>
  );
}

export default MainMenu;
