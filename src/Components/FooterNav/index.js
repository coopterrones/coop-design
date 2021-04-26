import React from "react";
import { Link } from "react-router-dom";
import "./FooterNav.scss";
import {
  showPlaygroundCursor,
  hidePlaygroundCursor,
  showfilmCursor,
  hideFilmCursor,
  showWorkCursor,
  hideWorkCursor,
} from "../../CursorActions/cursorActions";
import { AnimatePresence, motion } from "framer-motion";

const FooterNav = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, translateY: 250 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "tween",
          duration: 2,
        }}
        className="footer-nav-container">
        <Link
          to="/work"
          className="footer-link"
          onMouseEnter={showWorkCursor}
          onMouseLeave={hideWorkCursor}>
          work.
        </Link>
        <Link
          to="/film"
          className="footer-link"
          onMouseEnter={showfilmCursor}
          onMouseLeave={hideFilmCursor}>
          film.
        </Link>
        <Link
          to="/sandbox"
          className="footer-link"
          onMouseEnter={showPlaygroundCursor}
          onMouseLeave={hidePlaygroundCursor}>
          playground.
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default FooterNav;
