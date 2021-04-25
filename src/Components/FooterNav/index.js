import React from "react";
import { Link } from "react-router-dom";
import "./FooterNav.scss";

const FooterNav = () => {
  return (
    <div className="footer-nav-container">
      <Link to="/work" className="footer-link">
        work.
      </Link>
      <Link to="/film" className="footer-link">
        film.
      </Link>
      <Link to="/sandbox" className="footer-link">
        sandbox.
      </Link>
    </div>
  );
};

export default FooterNav;
