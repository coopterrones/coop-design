import React from "react";
import "./ProjectFeature.scss";
import { useStore } from "../../store";


const ProjectFeature = ({ id }) => {
  const projects = useStore((state) => state.sandbox);

  const project = projects.find((project) => project.id === parseInt(id));

  return (
    <section className="project-feature-container">
      <h3 className="project-feature-name">{project.name}</h3>
      <img
        className="project-feature-image"
        alt={`${project.name} demo`}
        src={`https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg`}
        height="50%"
      />
      <p className="project-feature-tech">{project.tech}</p>
      <p className="project-feature-description">{project.description}</p>
    </section>
  );
};

export default ProjectFeature;
