import React from "react";
import Nav from "../Nav";
import SocialNav from "../SocialNav";
import FooterNav from "../FooterNav";
import LeftNav from "../LeftNav";
import { useStore } from "../../store";
import "./WorkDetails.scss";

const WorkDetails = ({ name }) => {
  const workQuery = useStore((state) => state.work);
  const work = workQuery.find((job) => job.name.includes(name));

  return (
    <section className="work-details-wrapper">
      <Nav />
      <div className="work-details-scroll-area">
        <div className="work-details-container">
          <h1 className="work-details-title">{work.name}</h1>
          <div className="work-details-meta">
            <span className="work-details-role">{work.title}</span>
            <span className="work-details-team">{work.team}</span>
          </div>
          <p className="work-details-tagline">{work.tagline}</p>
          <div className="work-details-body">
            {work.descriptions.map((text, i) => (
              <p key={i} className="work-details-paragraph">{text}</p>
            ))}
          </div>
        </div>
      </div>
      <LeftNav />
      <SocialNav />
      <FooterNav />
    </section>
  );
};

export default WorkDetails;
