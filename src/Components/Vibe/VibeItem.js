import React, { useState } from 'react';

const VibeItem = ({ item, layout }) => {
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
    <div
      className="vibe-item-anchor"
      style={anchorStyle}
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
          {item.label || item.content}
        </a>
      ) : (
        <div className={itemClass}>{item.content}</div>
      )}
    </div>
  );
};

export default VibeItem;
