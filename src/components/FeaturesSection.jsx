import React from 'react';
import styles from '../PortEVLanding.module.css';

const FeaturesSection = ({ t, targetAudience, setTargetAudience }) => {
  const features = t.features[targetAudience];
  const icons = {
    residential: ['🔒', '💰', '📉', '☀️', '🚗', '🏠'],
    commercial: ['🏢', '💸', '📈', '🤝', '🌱', '📦']
  };

  return (
    <section id="features" className={`${styles.section} ${styles.featuresSection}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.features.title}</h2>
        <p className={styles.sectionSubtitle}>{t.features.subtitle}</p>
        
        <div className={styles.featureToggleContainer}>
          <button
            onClick={() => setTargetAudience('residential')}
            className={`${styles.toggleButton} ${targetAudience === 'residential' ? styles.active : ''}`}
          >
            {t.features.targetSelector.residential}
          </button>
          <button
            onClick={() => setTargetAudience('commercial')}
            className={`${styles.toggleButton} ${targetAudience === 'commercial' ? styles.active : ''}`}
          >
            {t.features.targetSelector.commercial}
          </button>
        </div>
        
        <div className={styles.gridContainer}>
          {Object.values(features).map((feature, index) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.cardIcon} style={{background: 'var(--success-gradient)'}}>
                {icons[targetAudience][index % icons[targetAudience].length]}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
              <div className={styles.savingsBadge} style={{marginTop: 'auto', paddingTop: '1rem'}}>
                <span className={styles.savingsText}>💡 {feature.savings}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;