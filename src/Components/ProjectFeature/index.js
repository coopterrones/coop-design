import React from "react";
import "./ProjectFeature.scss";
import { useStore } from "../../store";
import GithubLogo from "../../Assets/Github-Logo.png";

const ProjectFeature = ({ id }) => {
  const projects = useStore((state) => state.sandbox);

  const project = projects.find((project) => project.id === parseInt(id));

  return (
    <section className="project-feature-container">
      <h3 className="project-feature-name">{project.name}</h3>
      <video
        className="project-feature-gif"
        autoPlay
        loop
        muted
        playsInline
        src={project.gif}
        height="50%"></video>
      <a href={project.link}>
        <img
          src={GithubLogo}
          height="35px"
          className="github-link-logo"
          alt="github logo"
        />
      </a>
      <p className="project-feature-tech">{project.tech}</p>
      <p className="project-feature-description">{project.description}</p>
    </section>
  );
};

export default ProjectFeature;
