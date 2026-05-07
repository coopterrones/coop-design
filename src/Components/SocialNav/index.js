import React from "react";
import "./SocialNav.scss";
import { AnimatePresence, motion } from "framer-motion";

const SocialNav = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, translateX: 250 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ type: "tween", duration: 2 }}
        className="social-nav-container">
        <a
          className="social-link"
          href="/cooper-terrones-resume.pdf"
          download>
          resume
        </a>
      </motion.div>
    </AnimatePresence>
  );
};

export default SocialNav;
