import React from "react";
import "./BackgroundArt.scss";
import logo from "../../Assets/cooplogobg.png";
import { AnimatePresence, motion } from "framer-motion";

const BackgroundArt = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "tween", duration: 2 }}
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
