import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VibeItem = ({ item, layout, index }) => {
  const { cx, cy, rotation } = layout;
  const [held, setHeld] = useState(false);

  // Lift happens before rotate so it's always "up" in world space
  const anchorStyle = {
    left: `${cx * 100}%`,
    top: `${cy * 100}%`,
    transform: `translate(-50%, -50%) translateY(${held ? '-14px' : '0px'}) rotate(${rotation}deg)`,
    zIndex: held ? 100 : 1,
    transition: held
      ? 'transform 0.14s cubic-bezier(0.34, 1.56, 0.64, 1)'
      : 'transform 0.28s cubic-bezier(0.4, 0, 1, 1)',
  };

  const itemClass = `vibe-item vibe-item--${item.type}${held ? ' vibe-item--held' : ''}`;

  return (
    <motion.div
      className="vibe-item-anchor"
      style={anchorStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'tween', duration: 2, delay: index * 0.015 }}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
    >
      {item.type === 'image' ? (
        <img
          className={itemClass}
          src={item.content}
          alt={item.label || ''}
          draggable={false}
        />
      ) : item.type === 'link' ? (
        <a
          href={item.content}
          target="_blank"
          rel="noreferrer"
          className={itemClass}
        >
          <img
            src={`https://www.google.com/s2/favicons?domain=${new URL(item.content).hostname}&sz=16`}
            alt=""
            className="vibe-favicon"
          />
          {item.content}
        </a>
      ) : (
        <div className={itemClass}>{item.content}</div>
      )}
    </motion.div>
  );
};

export default VibeItem;
