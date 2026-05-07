import React from "react";
import "./LeftNav.scss";
import { AnimatePresence, motion } from "framer-motion";

const LeftNav = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, translateX: -250 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ type: "tween", duration: 2 }}
        className="left-nav-container">
        <a
          className="left-nav-link"
          href="https://www.linkedin.com/in/cooper-terrones-39b508185/"
          target="_blank"
          rel="noreferrer">
          linkedin
        </a>
      </motion.div>
    </AnimatePresence>
  );
};

export default LeftNav;
