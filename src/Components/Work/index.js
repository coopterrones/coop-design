import React from "react";
import FooterNav from "../FooterNav";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import "./Work.scss";
import SocialNav from "../SocialNav";

const Work = () => {
  return (
    <section className="work-page-container">
      <Nav />
      <div className="work-list-container">
        <ul className="work-list">
          <li className="work-list-item">
            <Link className="list-link" to="/work-canoe-club">
              <span>01.</span>
              <h2>Canoe Club</h2>
            </Link>
          </li>
          <li className="work-list-item">
            <Link className="list-link" to="/work-poppn-co">
              <span>02.</span>
              <h2>Poppn Co.</h2>
            </Link>
          </li>
        </ul>
      </div>
      <SocialNav />
      <FooterNav />
    </section>
  );
};

export default Work;
