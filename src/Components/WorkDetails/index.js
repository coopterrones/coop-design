import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import SocialNav from "../SocialNav";
import FooterNav from "../FooterNav";
import { useStore } from "../../store";
import "./WorkDetails.scss";
import youtubeIcon from "../../Assets/youtube-icon.png";
import instagramIcon from "../../Assets/insta-icon.png";
import youtubeNotAvailable from "../../Assets/youtube-inactive.png";
import instagramNotAvailable from "../../Assets/instagram-inactive.png";

const WorkDetails = ({ name }) => {
  const workQuery = useStore((state) => state.work);
  const [link, setLink] = useState(null);
  const [instagramLink, setInstagramLink] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState(null);

  const correctWork = workQuery.find((job) => {
    return job.name.includes(name);
  });

  useEffect(() => {
    console.log(correctWork);
    if (correctWork.link) {
      setLink(correctWork.link);
    }

    if (correctWork.instagram) {
      setInstagramLink(
        <a href={correctWork.instagram}>
          <img
            className="instagram-icon-link"
            src={instagramIcon}
            height="25px"
            alt="instagram icon link"
          />
        </a>
      );
    } else {
      setInstagramLink(
        <img
          className="instagram-icon-not-available"
          src={instagramNotAvailable}
          height="25px"
          alt="instagram icon link"
        />
      );
    }

    if (correctWork.youtube) {
      setYoutubeLink(
        <a href={correctWork.youtube}>
          <img
            className="youtube-icon-link"
            src={youtubeIcon}
            height="25px"
            alt="youtube icon link"
          />
        </a>
      );
    } else {
      setYoutubeLink(
        <img
          className="youtube-icon-not-available"
          src={youtubeNotAvailable}
          height="25px"
          alt="youtube icon link"
        />
      );
    }
  }, [correctWork]);

  return (
    <section className="work-details-wrapper">
      <Nav />
      <div className="work-details-container">
        <h1 className="work-details-title">{correctWork.name}</h1>
          <video
            className="work-details-gif"
            autoPlay
            loop
            muted
            playsInline
            src={correctWork.image}></video>
        <a href={link}>
          <h3 className="work-link">Link.</h3>
        </a>
        <div className="social-links">
          {instagramLink}
          {youtubeLink}
        </div>
        <div className="the-problem-wrapper">
          <span className="problem-span">
            <h2 className="the-problem-the">The</h2>
            <h2 className="the-problem-title">Problem.</h2>
          </span>
          <p className="the-problem-description">{correctWork.theProblem}</p>
        </div>
        <div className="the-solution-wrapper">
          <span className="solution-span">
            <h2 className="the-solution-the">The</h2>
            <h2 className="the-solution-title">Solution.</h2>
          </span>
          <p className="the-solution-contents">{correctWork.methodology}</p>
        </div>
        <div className="the-details-wrapper">
          <span className="details-span">
            <h2 className="the-details-the">The</h2>
            <h2 className="the-details-title">Details.</h2>
          </span>
          <p className="the-details-contents">{correctWork.description}</p>
        </div>
        <div className="my-responsibilities-wrapper">
          <h2 className="my-responsibilites-header">My Responsibilities.</h2>
          <p className="my-responsibilities-contents">{correctWork.services}</p>
        </div>
      </div>
      <SocialNav></SocialNav>
      <FooterNav></FooterNav>
    </section>
  );
};

export default WorkDetails;
