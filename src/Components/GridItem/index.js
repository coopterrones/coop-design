import React from "react";
import { Link } from "react-router-dom";
import "./GridItem.scss";

const GridItem = ({ id, name, description, tech, link, image }) => {
  return (
    <Link id={id} to={`/playground/${id}`} className="grid-item-container">
      <div
        className="grid-item-image-container"
        style={{
          backgroundImage: `url(https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg
          )`,
        }}>
        <h3 className="grid-item-title">{name}</h3>
      </div>
    </Link>
  );
};

export default GridItem;
