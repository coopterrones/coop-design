import React from "react";
import Nav from "../Nav";
import SocialNav from "../SocialNav";
import FooterNav from "../FooterNav";
import GridItem from "../GridItem";
import "./Grid.scss";

const Grid = ({ header, subheader, items }) => {
  return (
    <section className="grid-container">
      <Nav />
      <h2 className="header-description">{header}</h2>
      <h3 className="sub-header-description">{subheader}</h3>
      <div className="grid-items-container">
        {items.map((item, i) => {
          return (
            <GridItem
              key={i}
              id={item.id}
              name={item.name}
              description={item.description}
              tech={item.tech}
              link={item.link}
              gif={item.gif}
            />
          );
        })}
      </div>
      <SocialNav></SocialNav>
      <FooterNav></FooterNav>
    </section>
  );
};

export default Grid;
