import React from "react";
import Previous from "../Previous";
import "./Pagination.css";

function Pagination(props) {
  const { className, previous1Props, previous2Props } = props;

  return (
    <div className={`pagination ${className || ""}`}>
      <Previous>{previous1Props.children}</Previous>
      <div className="number-2">
        <div className="overlap-group-13">
          <div className="number-3 poppins-normal-white-16px">1</div>
        </div>
        <div className="number-4 poppins-medium-granite-gray-16px">2</div>
        <div className="number-5 poppins-medium-granite-gray-16px">3</div>
        <div className="number-6 poppins-medium-granite-gray-16px">4</div>
      </div>
      <Previous>{previous2Props.children}</Previous>
    </div>
  );
}

export default Pagination;
