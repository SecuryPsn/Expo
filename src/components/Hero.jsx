// /src/components/Hero.jsx

import React from 'react';
import styles from '../PortEVLanding.module.css';

const Hero = ({ t }) => {
  // A helper function to scroll to the CTA section smoothly
  const scrollToCTA = (e) => {
    e.preventDefault();
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={`${styles.container} ${styles.heroContent}`}>
        <h1 className={styles.heroTitle}>{t.hero.title}</h1>
        <p className={styles.heroSubtitle}>{t.hero.subtitle}</p>
        
        {/* IMPORTANT: Added the main CTA button here for immediate impact */}
        <a href="#cta" onClick={scrollToCTA} className={styles.buttonPrimary}>
          {t.cta.button}
        </a>
      </div>
    </section>
  );
};

export default Hero;