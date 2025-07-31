import React from 'react';
import styles from '../PortEVLanding.module.css';

const Hero = ({ t }) => (
  <section id="home" className={styles.hero}>
    <div className={styles.heroOverlay}></div>
    <div className={`${styles.container} ${styles.heroContent}`}>
      <h1 className={styles.heroTitle}>{t.hero.title}</h1>
      <p className={styles.heroSubtitle}>{t.hero.subtitle}</p>
      <div className={styles.heroImagePlaceholder}>
        {t.hero.imageAlt}
      </div>
    </div>
  </section>
);

export default Hero;