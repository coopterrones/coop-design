import React from "react";
import "./SocialNav.scss";
import { AnimatePresence, motion } from "framer-motion";

const SocialNav = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, translateX: 250 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ type: "tween", duration: 3, }}
        className="social-nav-container">
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
      </motion.div>
    </AnimatePresence>
  );
};

export default SocialNav;
