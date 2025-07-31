import React from 'react';
import styles from '../PortEVLanding.module.css';

const PricingCard = ({ product, isFeatured, badgeText }) => (
  <div className={`${styles.pricingCard} ${isFeatured ? styles.featured : ''}`}>
    {isFeatured && <div className={styles.pricingBadge}>{badgeText}</div>}
    <h3 className={styles.cardTitle}>{product.title}</h3>
    <p className={styles.priceText}>{product.price}</p>
    <p className={styles.priceCapacity}>{product.capacity}</p>
    <ul className={styles.featuresList}>
      {product.check?.map(feature => (
        <li key={feature} className={styles.featureItem}>
          <span className={`${styles.featureIcon} ${styles.check}`}>✓</span>
          <span>{feature}</span>
        </li>
      ))}
      {product.cross?.map(feature => (
        <li key={feature} className={styles.featureItem}>
          <span className={`${styles.featureIcon} ${styles.cross}`}>❌</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const PricingSection = ({ t }) => {
  return (
    <section id="pricing" className={`${styles.section} ${styles.pricingSection}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.pricing.title}</h2>
        <p className={styles.sectionSubtitle}>{t.pricing.subtitle}</p>
        
        <div className={styles.gridContainer}>
          {Object.entries(t.pricing.comparison).map(([key, product]) => (
            <PricingCard 
              key={key}
              product={product}
              isFeatured={key === 'portev'}
              badgeText={t.pricing.ourSolution}
            />
          ))}
        </div>

        <div className={styles.roiGrid}>
          <div className={styles.card}>
            <h3 className={styles.roiTitle}>{t.pricing.savings.title}</h3>
            <p className={styles.cardDescription}>{t.pricing.savings.description}</p>
            <div>
              <h4 className={styles.roiCategory}>{t.features.targetSelector.residential}</h4>
              <ul className={styles.featuresList}>
                {t.pricing.savings.residential.map(item => <li key={item} className={styles.featureItem}><span className={`${styles.featureIcon} ${styles.check}`}>💰</span>{item}</li>)}
              </ul>
            </div>
            <div style={{marginTop: '1.5rem'}}>
              <h4 className={styles.roiCategory}>{t.features.targetSelector.commercial}</h4>
              <ul className={styles.featuresList}>
                {t.pricing.savings.commercial.map(item => <li key={item} className={styles.featureItem}><span className={`${styles.featureIcon} ${styles.check}`}>💰</span>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className={styles.roiCard}>
            <h3 className={styles.roiTitle}>{t.pricing.payback.title}</h3>
            <div className={styles.roiItem}>
              <p className={styles.roiCategory}>{t.features.targetSelector.residential}</p>
              <p className={styles.roiPeriod}>{t.pricing.payback.residential}</p>
            </div>
            <div className={styles.roiItem}>
              <p className={styles.roiCategory}>{t.features.targetSelector.commercial}</p>
              <p className={styles.roiPeriod}>{t.pricing.payback.commercial}</p>
            </div>
            <p className={styles.cardDescription}>{t.pricing.payback.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;