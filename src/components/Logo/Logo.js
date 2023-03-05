import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{
          height: "150px",
          width: "150px",
        }}
      >
        <div className="Till-inner pa3">
          <img style={{ paddingTop: "5px" }} src={brain} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
