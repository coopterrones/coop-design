import React from "react";
import Nav from "../Nav";
import SocialNav from "../SocialNav";
import FooterNav from "../FooterNav";
import "./Grid.scss";

const Grid = ({ header, subheader, items }) => {
  return (
    <section className="grid-container">
      <Nav />
      <h2 className="header-description">{header}</h2>
      <h3 className="sub-header-description">{subheader}</h3>
      <div className="grid-items-container"></div>
      <SocialNav></SocialNav>
      <FooterNav></FooterNav>
    </section>
  );
};

export default Grid;
