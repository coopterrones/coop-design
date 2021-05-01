import React, { useRef, useState } from "react";
import FooterNav from "../FooterNav";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import "./Work.scss";
import SocialNav from "../SocialNav";

const Work = () => {
  const [previewLeftContent, setPreviewLeftContent] = useState(null);
  const [previewRightContent, setPreviewRightContent] = useState(null);
  const previewLeft = useRef(null);
  const previewRight = useRef(null);

  const displayWorkPreviewLeft = () => {
    setPreviewLeftContent(<p> Hi </p>);
  };

  const displayWorkPreviewRight = () => {
    setPreviewRightContent(<p>Hi</p>);
  };

  return (
    <section className="work-page-container">
      <Nav />
      <div className="work-preview-container">
        <div className="work-preview-left" ref={previewLeft}>
          {previewLeftContent}
        </div>
        <div className="work-preview-right" ref={previewRight}>
          {previewRightContent}
        </div>
      </div>
      <div className="work-list-container">
        <ul className="work-list">
          <li className="work-list-item">
            <Link
              className="list-link"
              to="/work-canoe-club"
              onMouseOver={displayWorkPreviewLeft}>
              <span>01.</span>
              <h2>Canoe Club</h2>
            </Link>
          </li>
          <li className="work-list-item">
            <Link
              className="list-link"
              to="/work-poppn-co"
              onMouseOver={displayWorkPreviewRight}>
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
