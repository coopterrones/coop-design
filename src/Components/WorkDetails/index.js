import React from "react";
import Nav from "../Nav";
import SocialNav from "../SocialNav";
import FooterNav from "../FooterNav";
import { useStore } from "../../store";
import "./WorkDetails.scss";

const WorkDetails = ({ name }) => {
  const workQuery = useStore((state) => state.work);

  const correctWork = workQuery.find((job) => {
    return job.name === name;
  });

  console.log(correctWork, workQuery);
  return (
    <section className="work-details-wrapper">
      <Nav />
      <div className="work-details-container"></div>
      <SocialNav></SocialNav>
      <FooterNav></FooterNav>
    </section>
  );
};

export default WorkDetails;
