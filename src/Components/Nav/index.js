import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import cLogoDark from "../../Assets/c-logo-black.png";
import cLogoLight from "../../Assets/c-logo-light.png";
import { showMailCursor } from "../../CursorActions/cursorActions";
import { hideMailCursor } from "../../CursorActions/cursorActions";

const Nav = () => {
  const [logo, updateLogo] = useState(cLogoDark);

  return (
    <div className="nav-bar">
      <Link
        to="/"
        className="scroll-link"
        onMouseEnter={() => updateLogo((logo) => (logo = cLogoLight))}
        onMouseLeave={() => updateLogo((logo) => (logo = cLogoDark))}>
        <img src={logo} height="50px" alt="c logo nav" />
      </Link>
      <div className="about-me-scroll-container">
        <div className="scroll-text">
          Hello! 👋🏼🖐🏼👋🏼 I'm Coop. Originally from the San Francisco Bay Area.
          Currently loving the Colorado lifestyle in Denver, CO. I am a creative
          front end web developer looking to lend a unique perspective to your
          biz. I love food, clothes, film photo, music, tech, etc... show me
          something cool and I'll probably be interested and dive in. Currently
          looking for my first Junior Role while putting in some time at Canoe
          Club a menswear shop in Boulder, CO... Hope this finds you well. "It's
          not what you don't know that kills you. It's what you know for sure
          that just ain't so..." -Mark Twain ... ♥️♥️♥️
        </div>
      </div>
      <a
        href="mailto:cooper.terrones@outlook.com?Subject=Coop Design - get in touch"
        onMouseEnter={showMailCursor}
        onMouseLeave={hideMailCursor}>
        get in touch.
      </a>
    </div>
  );
};

export default Nav;
