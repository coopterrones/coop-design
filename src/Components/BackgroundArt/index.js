import React, { useEffect } from "react";
import "./BackgroundArt.scss";
import logo from "../../Assets/cooplogobg.png";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

const BackgroundArt = () => {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 50, damping: 18 });
  const y = useSpring(rawY, { stiffness: 50, damping: 18 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 40);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "tween", duration: 0.75 }}
        exit={{ opacity: 0 }}
        className="background-container">
        <motion.img
          src={logo}
          height="400px"
          className="background-image"
          alt="coop logo background"
          style={{ x, y }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default BackgroundArt;
