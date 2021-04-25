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

const FooterNav = () => {
  return (
    <div className="footer-nav-container">
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
    </div>
  );
};

export default FooterNav;
