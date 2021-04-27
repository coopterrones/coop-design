import React from "react";
import "./ProjectFeature.scss";
import { useStore } from "../../store";

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
      <p className="project-feature-tech">{project.tech}</p>
      <p className="project-feature-description">{project.description}</p>
    </section>
  );
};

export default ProjectFeature;
