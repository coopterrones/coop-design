import React from "react";
import "./SocialNav.scss";

const SocialNav = () => {
  return (
    <div className="social-nav-container">
      <a className="social-link" href="https://github.com/coopterrones">
        github
      </a>
      <a
        className="social-link"
        href="https://www.linkedin.com/in/cooper-terrones-39b508185/">
        linked
      </a>
      <a
        className="social-link"
        href="https://www.notion.so/Cooper-Terrones-f35ea597b7b945af861d72fe49e9a0e1">
        resume
      </a>
    </div>
  );
};

export default SocialNav;
