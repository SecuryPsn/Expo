import React, { useState } from 'react';
import styles from '../PortEVLanding.module.css';
import logo from '../assets/logo1.png'; // Make sure your logo is in /src/assets/logo1.png

const Header = ({ t, scrolled, language, toggleLanguage, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollAndClose = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', text: t.nav.home },
    { id: 'problems', text: t.nav.problems },
    { id: 'product', text: t.nav.product },
    { id: 'features', text: t.nav.features },
    { id: 'advantages', text: t.nav.advantages },
    { id: 'pricing', text: t.nav.pricing },
  ];

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className={styles.logoContainer}>
          <img src={logo} alt="PortEV Logo" className={styles.logoImage} />
          <span className={styles.logoText}>PortEV</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map(link => (
            <a key={link.id} onClick={() => scrollToSection(link.id)} className={styles.navLink}>
              {link.text}
            </a>
          ))}
        </nav>

        <div className={styles.navControls}>
          <button onClick={toggleLanguage} className={styles.languageToggle}>
            {language === 'en' ? 'PT' : 'EN'}
          </button>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={styles.mobileMenuButton} aria-label="Toggle menu">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        {navLinks.map(link => (
            <a key={link.id} onClick={() => handleScrollAndClose(link.id)} className={styles.mobileNavLink}>
              {link.text}
            </a>
          ))}
      </div>
    </header>
  );
};

export default Header;