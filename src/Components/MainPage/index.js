import React from "react";
import Nav from "../Nav/index";
import FooterNav from "../FooterNav/index";
import "./MainPage.scss";
import BackgroundArt from "../BackgroundArt/index";
import SocialNav from "../SocialNav/index";

const MainPage = () => {
  return (
    <section name="main" className="main-page-wrapper">
      <Nav />
      <BackgroundArt />
      <SocialNav></SocialNav>
      <FooterNav></FooterNav>
    </section>
  );
};

export default MainPage;
