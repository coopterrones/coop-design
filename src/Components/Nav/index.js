import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import cLogoDark from "../../Assets/c-logo-black.png";
import cLogoLight from "../../Assets/c-logo-light.png";
import { showMailCursor } from "../../CursorActions/cursorActions";
import { hideMailCursor } from "../../CursorActions/cursorActions";
import { AnimatePresence, motion } from "framer-motion";
const Nav = () => {
  const [logo, updateLogo] = useState(cLogoDark);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0, translateY: -250 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "tween", duration: 2 }}
        exit={{ opacity: 0, translateY: -250 }}
        className="nav-bar">
        <Link
          to="/"
          className="scroll-link"
          onMouseEnter={() => updateLogo((logo) => (logo = cLogoLight))}
          onMouseLeave={() => updateLogo((logo) => (logo = cLogoDark))}>
          <img src={logo} height="50px" alt="c logo nav" />
        </Link>
        <div className="about-me-scroll-container">
          <div className="scroll-text">
            Hello! 👋🏼🖐🏼👋🏼 I'm Coop. Senior Engineer for 💰. Photos, Clothes, Food, and Travel for ❤️. 
          </div>
        </div>
        <a
          href="mailto:cooper.terrones@outlook.com?Subject=Coop Design - get in touch"
          onMouseEnter={showMailCursor}
          onMouseLeave={hideMailCursor}
          className="mail-to-link">
          get in touch.
        </a>
      </motion.div>
    </AnimatePresence>
  );
};

export default Nav;
