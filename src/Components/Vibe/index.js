import React, { useState } from 'react';
import Nav from '../Nav';
import SocialNav from '../SocialNav';
import FooterNav from '../FooterNav';
import LeftNav from '../LeftNav';
import VibeItem from './VibeItem';
import { testItems } from './vibeItems';
import './Vibe.scss';

function generateLayout(count) {
  return Array.from({ length: count }, () => ({
    cx: 0.06 + Math.random() * 0.88,
    cy: 0.06 + Math.random() * 0.80,
    rotation: Math.random() * 150 - 75,
  }));
}

const Vibe = () => {
  const [layout] = useState(() => generateLayout(testItems.length));

  return (
    <section className="vibe-page-container">
      <Nav />
      <div className="vibe-scroll-area">
        <div className="vibe-canvas">
          {testItems.map((item, i) => (
            <VibeItem key={item.id} item={item} layout={layout[i]} />
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
