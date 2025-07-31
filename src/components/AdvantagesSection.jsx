import React from 'react';
import styles from '../PortEVLanding.module.css';

const AdvantagesSection = ({ t }) => {
  const advantages = Object.values(t.advantages).slice(2);
  const icons = ['💰', '🤖', '🔗', '🌱', '🇵🇹', '✅'];

  return (
    <section id="advantages" className={`${styles.section} ${styles.advantagesSection}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.advantages.title}</h2>
        <p className={styles.sectionSubtitle}>{t.advantages.subtitle}</p>
        
        <div className={styles.gridContainer}>
          {advantages.map((advantage, index) => (
            <div key={advantage.title} className={styles.card}>
              <div className={styles.cardIcon} style={{background: 'var(--primary-gradient)'}}>
                {icons[index % icons.length]}
              </div>
              <h3 className={styles.cardTitle}>{advantage.title}</h3>
              <p className={styles.cardDescription}>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;