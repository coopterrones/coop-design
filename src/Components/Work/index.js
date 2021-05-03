import React, { useRef, useState } from "react";
import FooterNav from "../FooterNav";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import "./Work.scss";
import SocialNav from "../SocialNav";

const Work = ({ workItems }) => {
  const [previewLeftContent, setPreviewLeftContent] = useState(null);
  const [previewRightContent, setPreviewRightContent] = useState(null);
  const previewLeft = useRef(null);
  const previewRight = useRef(null);

  const displayWorkPreviewLeft = (image) => {
    if (image) {
      setPreviewLeftContent(
        <div className="preview-wrapper">
          <video
            className="work-preview-gif-left"
            autoPlay
            loop
            muted
            playsInline
            src={image}></video>
        </div>
      );
    } else {
      setPreviewLeftContent(
        <div className="preview-wrapper">
          <h2 className="preview-holder">Preview Coming Soon!</h2>
        </div>
      );
    }
  };

  const displayWorkPreviewRight = (image) => {
    setPreviewRightContent(
      <div className="preview-wrapper">
        <video
          className="work-preview-gif-right"
          autoPlay
          loop
          muted
          playsInline
          src={image}></video>
      </div>
    );
  };

  const hideWorkPreviewLeft = () => {
    setPreviewLeftContent(null);
  };

  const hideWorkPreviewRight = () => {
    setPreviewRightContent(null);
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
          {workItems.map((item, i) => {
            return (
              <li className="work-list-item" key={i}>
                <Link
                  className="list-link"
                  to={`/work-${item.slug}`}
                  onMouseOver={() => {
                    if (i % 2 === 0) {
                      displayWorkPreviewLeft(item.image);
                    } else {
                      displayWorkPreviewRight(item.image);
                    }
                  }}
                  onMouseLeave={() => {
                    if (i % 2 === 0) {
                      hideWorkPreviewLeft();
                    } else {
                      hideWorkPreviewRight();
                    }
                  }}>
                  <span>{`0${item.id}.`}</span>
                  <h2>{item.name}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <SocialNav />
      <FooterNav />
    </section>
  );
};

export default Work;
