import React from 'react';
import styles from '../PortEVLanding.module.css';

const ProblemsSection = ({ t }) => {
  const problems = Object.values(t.problems).slice(2);

  return (
    <section id="problems" className={`${styles.section} ${styles.problemsSection}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.problems.title}</h2>
        <p className={styles.sectionSubtitle}>{t.problems.subtitle}</p>
        
        <div className={styles.gridContainer}>
          {problems.map((problem) => (
            <div key={problem.title} className={styles.card}>
              <div className={`${styles.cardIcon}`} style={{background: 'var(--danger-gradient)'}}>
                ⚠️
              </div>
              <h3 className={styles.cardTitle}>{problem.title}</h3>
              <p className={styles.cardDescription}>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;