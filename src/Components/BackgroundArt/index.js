import React from "react";
import "./BackgroundArt.scss";
import logo from "../../Assets/cooplogobg.png";

const BackgroundArt = () => {
  return (
    <div className="background-container">
      <img src={logo} height="400px" className="background-image" />
    </div>
  );
};

export default BackgroundArt;
