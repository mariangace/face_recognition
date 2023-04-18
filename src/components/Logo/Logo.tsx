import React from "react";
import "./Logo.css";
import brain from "./brain.png";

function Logo() {
  return (
    <div className="ma4 mt0">
      <div className="Till pa3">
        <img style={{ paddingTop: "5px" }} src={brain} alt="Logo" />
      </div>
    </div>
  );
}

export default Logo;
