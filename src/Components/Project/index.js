import React from "react";
import "./Project.scss";
import Nav from "../Nav";
import SocialNav from "../SocialNav";
import FooterNav from "../FooterNav";
import ProjectFeature from "../ProjectFeature";

const Project = ({ match }) => {
  const { id } = match.params;

  return (
    <section className="project-container">
      <Nav />
      <ProjectFeature id={id} />
      <SocialNav />
      <FooterNav />
    </section>
  );
};

export default Project;
