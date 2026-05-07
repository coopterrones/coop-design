import React, { useRef, useState } from "react";
import FooterNav from "../FooterNav";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import "./Work.scss";
import SocialNav from "../SocialNav";
import LeftNav from "../LeftNav";

const Work = ({ workItems }) => {
  const [previewLeftContent, setPreviewLeftContent] = useState(null);
  const [previewRightContent, setPreviewRightContent] = useState(null);
  const previewLeft = useRef(null);
  const previewRight = useRef(null);

  const displayWorkPreviewLeft = (item) => {
    setPreviewLeftContent(
      <div className="preview-wrapper">
        <img
          className="work-preview-gif-left"
          src={item.image}
          alt={item.name}
        />
      </div>
    );
  };

  const displayWorkPreviewRight = (item) => {
    setPreviewRightContent(
      <div className="preview-wrapper">
        <img
          className="work-preview-gif-right"
          src={item.image}
          alt={item.name}
        />
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
                      displayWorkPreviewLeft(item);
                    } else {
                      displayWorkPreviewRight(item);
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
      <LeftNav />
      <SocialNav />
      <FooterNav />
    </section>
  );
};

export default Work;
