import React from 'react';
import styles from '../PortEVLanding.module.css';

const CTASection = ({ t }) => (
  <section id="cta" className={`${styles.section} ${styles.ctaSection}`}>
    <div className={styles.container}>
      <h2 className={styles.ctaTitle}>{t.cta.title}</h2>
      <p className={styles.ctaSubtitle}>{t.cta.subtitle}</p>
      <p className={styles.cardDescription} style={{color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2.5rem auto'}}>
        {t.cta.description}
      </p>
      <a href="mailto:contact@portev.pt" className={styles.buttonPrimary}>
        {t.cta.button}
      </a>
    </div>
  </section>
);

export default CTASection;