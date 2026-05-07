import React, { useState } from 'react';
import Nav from '../Nav';
import SocialNav from '../SocialNav';
import FooterNav from '../FooterNav';
import LeftNav from '../LeftNav';
import VibeItem from './VibeItem';
import { vibeItems } from './vibeItems';
import './Vibe.scss';

function generateLayout(count) {
  const COLS = 11;
  const ROWS = 7;
  const PADDING = 0.18;

  const cells = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      cells.push({ c, r });
    }
  }
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cells[i], cells[j]] = [cells[j], cells[i]];
  }

  return Array.from({ length: count }, (_, i) => {
    const { c, r } = cells[i % cells.length];
    return {
      cx: (c + PADDING + Math.random() * (1 - 2 * PADDING)) / COLS,
      cy: (r + PADDING + Math.random() * (1 - 2 * PADDING)) / ROWS,
      rotation: Math.random() * 150 - 75,
    };
  });
}

const Vibe = () => {
  const [layout] = useState(() => generateLayout(vibeItems.length));

  return (
    <section className="vibe-page-container">
      <Nav />
      <div className="vibe-scroll-area">
        <div className="vibe-canvas">
          {vibeItems.map((item, i) => (
            <VibeItem key={i} index={i} item={item} layout={layout[i]} />
          ))}
        </div>
      </div>
      <LeftNav />
      <SocialNav />
      <FooterNav />
    </section>
  );
};

export default Vibe;
