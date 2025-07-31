// /src/PortEVLanding.jsx

import React, { useState, useEffect } from 'react';
import { translations } from './utils/translations';
import styles from './PortEVLanding.module.css';

// Import sub-components
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemsSection from './components/ProblemsSection';
import ProductSection from './components/ProductSection';
import FeaturesSection from './components/FeaturesSection';
import AdvantagesSection from './components/AdvantagesSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const PortEVLanding = () => {
  const [language, setLanguage] = useState('en');
  const [targetAudience, setTargetAudience] = useState('residential');
  const [scrolled, setScrolled] = useState(false);
  
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.portevApp}>
      <Header
        t={t}
        scrolled={scrolled}
        language={language}
        toggleLanguage={toggleLanguage}
        scrollToSection={scrollToSection}
      />
      <main>
        <Hero t={t} />
        <ProblemsSection t={t} />
        <ProductSection t={t} />
        <FeaturesSection 
          t={t}
          targetAudience={targetAudience}
          setTargetAudience={setTargetAudience}
        />
        <AdvantagesSection t={t} />
        <PricingSection t={t} />
        <CTASection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
};

export default PortEVLanding;