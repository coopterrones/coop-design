import React from "react";
import { Link } from "react-router-dom";
import "./GridItem.scss";
import graniteTexture from "../../Assets/white-granite-texture.jpg";

const GridItem = ({ id, name, gif }) => {
  return (
    <Link id={id} to={`/playground/${id}`} className="grid-item-container">
      <div
        id={"grid-item-image-container"}
        className="grid-item-image-container">
        <div
          className="grid-item-container-background"
          style={{
            background: `url('${graniteTexture}')`,
          }}>
          <h3 className="grid-item-title">{name}</h3>
        </div>
        <video
          className="background-gif-video"
          autoPlay
          loop
          muted
          playsInline
          src={gif}></video>
      </div>
    </Link>
  );
};

export default GridItem;
