import React from 'react';
import styles from '../PortEVLanding.module.css';

const ProductSection = ({ t }) => {
  const components = Object.values(t.product.components).slice(1);
  const icons = ['🔋', '🧠', '🤖', '⚡', '📱', '🔄'];

  return (
    <section id="product" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.product.title}</h2>
        <p className={styles.sectionSubtitle}>{t.product.subtitle}</p>
        
        <div className={styles.productDescription}>
          <p>{t.product.description}</p>
        </div>

        <h3 className={styles.componentsTitle}>
          {t.product.components.title}
        </h3>
        
        <div className={styles.gridContainer}>
          {components.map((component, index) => (
            <div key={component.title} className={styles.card}>
              <div className={styles.cardIcon} style={{background: 'var(--primary-gradient)'}}>
                {icons[index % icons.length]}
              </div>
              <h4 className={styles.cardTitle}>{component.title}</h4>
              <p className={styles.cardDescription}>{component.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;