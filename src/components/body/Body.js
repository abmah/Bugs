import React from "react";
import "./body.css";
import CaterPiller from "./../../images/caterpillar.jpg";
export default function Body() {
  return (
    <div className="body">
      <div>
        <img className="cater-image" src={CaterPiller} alt="caterpillar" />
      </div>
    </div>
  );
}
