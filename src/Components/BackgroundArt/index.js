import React from "react";
import "./BackgroundArt.scss";
import logo from "../../Assets/cooplogobg.png";
import { AnimatePresence, motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.1, 0.9, 0.1, 0.9] };

const BackgroundArt = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ transition }}
        exit={{ opacity: 0 }}
        className="background-container">
        <img
          src={logo}
          height="400px"
          className="background-image"
          alt="coop logo background"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default BackgroundArt;
