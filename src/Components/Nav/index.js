import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import cLogoDark from "../../Assets/c-logo-black.png";
import cLogoLight from "../../Assets/c-logo-light.png";

const Nav = () => {
  const [logo, updateLogo] = useState(cLogoDark);

  return (
    <div className="nav-bar">
      <Link
        to="/"
        className="scroll-link"
        onMouseEnter={() => updateLogo((logo) => (logo = cLogoLight))}
        onMouseLeave={() => updateLogo((logo) => (logo = cLogoDark))}>
        <img src={logo} height="50px" />
        <div className="active-dot-1 hidden"></div>
      </Link>
      <a href="mailto:cooper.terrones@outlook.com?Subject=Hi Coop!">
        get in touch.
      </a>
    </div>
  );
};

export default Nav;
