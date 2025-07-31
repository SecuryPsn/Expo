import React, { useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const PortEVLanding = () => {
  const [language, setLanguage] = useState('en');
  const [targetAudience, setTargetAudience] = useState('residential');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Mobile-first responsive styles
  const styles = {
    // Navigation Styles
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(37, 99, 235, 0.1)',
      padding: '0.75rem 0',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    logoPlaceholder: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1rem'
    },
    logoText: {
      fontSize: '1.5rem',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    // Desktop Navigation
    desktopNav: {
      display: 'none',
      listStyle: 'none',
      gap: '1.5rem',
      alignItems: 'center',
      margin: 0,
      padding: 0
    },
    navLink: {
      textDecoration: 'none',
      color: '#1f2937',
      fontWeight: '500',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '8px',
      transition: 'all 0.3s ease'
    },
    languageToggle: {
      background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease'
    },
    // Mobile Navigation
    mobileMenuButton: {
      display: 'flex',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      color: '#1f2937'
    },
    mobileMenu: {
      position: 'fixed',
      top: '70px',
      left: 0,
      right: 0,
      background: 'white',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      padding: '1rem',
      transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
      opacity: mobileMenuOpen ? 1 : 0,
      visibility: mobileMenuOpen ? 'visible' : 'hidden',
      transition: 'all 0.3s ease',
      zIndex: 999
    },
    mobileNavLink: {
      display: 'block',
      padding: '1rem',
      textDecoration: 'none',
      color: '#1f2937',
      fontWeight: '500',
      borderBottom: '1px solid #f3f4f6',
      cursor: 'pointer'
    },
    // Hero Section
    hero: {
      background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
      color: 'white',
      padding: '100px 0 60px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.1,
      zIndex: 0
    },
    heroContent: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    heroTitle: {
      fontSize: 'clamp(1.8rem, 6vw, 4rem)',
      fontWeight: '700',
      marginBottom: '1rem',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.5rem)',
      marginBottom: '2rem',
      opacity: '0.9',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: '1.5'
    },
    heroImagePlaceholder: {
      width: '100%',
      maxWidth: '800px',
      height: 'clamp(200px, 50vw, 400px)',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      margin: '2rem auto 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
      border: '2px dashed rgba(255, 255, 255, 0.3)'
    },
    // Container
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    // Section Styles
    section: {
      padding: 'clamp(40px, 8vw, 80px) 0'
    },
    sectionTitle: {
      fontSize: 'clamp(1.8rem, 5vw, 3rem)',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: '1.2'
    },
    sectionSubtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
      textAlign: 'center',
      color: '#6b7280',
      marginBottom: 'clamp(2rem, 6vw, 4rem)',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: '1.6'
    },
    // Grid Layouts
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'clamp(1rem, 3vw, 2rem)',
      marginBottom: '2rem'
    },
    // Card Styles
    card: {
      background: 'white',
      padding: 'clamp(1.5rem, 4vw, 2rem)',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(37, 99, 235, 0.1)'
    },
    cardIcon: {
      width: 'clamp(50px, 12vw, 60px)',
      height: 'clamp(50px, 12vw, 60px)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      fontSize: 'clamp(1.2rem, 3vw, 1.5rem)'
    },
    cardTitle: {
      fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#1f2937',
      lineHeight: '1.3'
    },
    cardDescription: {
      color: '#6b7280',
      lineHeight: '1.6',
      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
    },
    // Button Styles
    buttonPrimary: {
      background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
      color: 'white',
      border: 'none',
      padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 3rem)',
      borderRadius: '50px',
      fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    },
    buttonSecondary: {
      padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
      borderRadius: '50px',
      border: 'none',
      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
    },
    // Feature Toggle Buttons
    featureToggleContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'clamp(0.5rem, 2vw, 1rem)',
      marginBottom: 'clamp(2rem, 5vw, 4rem)',
      flexWrap: 'wrap'
    },
    // Savings Badge
    savingsBadge: {
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))',
      padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 3vw, 1rem)',
      borderRadius: '10px',
      border: '1px solid rgba(16, 185, 129, 0.2)',
      marginTop: '1rem'
    },
    savingsText: {
      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
      fontWeight: '600',
      color: '#059669'
    },
    // Pricing Cards
    pricingCard: {
      background: 'white',
      padding: 'clamp(1.5rem, 4vw, 2rem)',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(37, 99, 235, 0.1)',
      position: 'relative',
      transition: 'all 0.3s ease'
    },
    pricingCardFeatured: {
      background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
      color: 'white',
      transform: 'scale(1.02)',
      border: 'none'
    },
    pricingBadge: {
      position: 'absolute',
      top: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#10b981',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
      fontWeight: '600'
    },
    priceText: {
      fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '1rem'
    },
    // Footer
    footer: {
      background: '#1f2937',
      color: 'white',
      padding: 'clamp(2rem, 5vw, 3rem) 0 clamp(1rem, 3vw, 2rem)',
      textAlign: 'center'
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    // Media Queries via JavaScript
    '@media (min-width: 768px)': {
      desktopNav: {
        display: 'flex'
      },
      mobileMenuButton: {
        display: 'none'
      },
      logoPlaceholder: {
        width: '50px',
        height: '50px',
        fontSize: '1.2rem'
      },
      logoText: {
        fontSize: '1.8rem'
      },
      nav: {
        padding: '1rem 0'
      },
      navContainer: {
        padding: '0 2rem'
      },
      container: {
        padding: '0 2rem'
      },
      hero: {
        padding: '120px 0 80px'
      },
      heroContent: {
        padding: '0 2rem'
      },
      gridContainer: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
      }
    }
  };

  // Apply responsive styles based on screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", lineHeight: '1.6', color: '#1f2937' }}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
        <div style={styles.logoContainer}>
            <img 
              src="/logo1.png" 
              alt="PortEV Logo" 
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px'
              }}
            />
            <div style={styles.logoText}>
              PortEV
            </div>
          </div>
          {/* Desktop Navigation */}
          <div style={isMobile ? {display: 'none'} : {...styles.desktopNav, display: 'flex'}}>
            <a onClick={() => scrollToSection('home')} style={styles.navLink}>{t.nav.home}</a>
            <a onClick={() => scrollToSection('problems')} style={styles.navLink}>{t.nav.problems}</a>
            <a onClick={() => scrollToSection('product')} style={styles.navLink}>{t.nav.product}</a>
            <a onClick={() => scrollToSection('features')} style={styles.navLink}>{t.nav.features}</a>
            <a onClick={() => scrollToSection('advantages')} style={styles.navLink}>{t.nav.advantages}</a>
            <a onClick={() => scrollToSection('pricing')} style={styles.navLink}>{t.nav.pricing}</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <button onClick={toggleLanguage} style={styles.languageToggle}>
              {language === 'en' ? 'PT' : 'EN'}
            </button>
            
            {isMobile && (
              <button onClick={toggleMobileMenu} style={styles.mobileMenuButton}>
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && (
          <div style={styles.mobileMenu}>
            <a onClick={() => scrollToSection('home')} style={styles.mobileNavLink}>{t.nav.home}</a>
            <a onClick={() => scrollToSection('problems')} style={styles.mobileNavLink}>{t.nav.problems}</a>
            <a onClick={() => scrollToSection('product')} style={styles.mobileNavLink}>{t.nav.product}</a>
            <a onClick={() => scrollToSection('features')} style={styles.mobileNavLink}>{t.nav.features}</a>
            <a onClick={() => scrollToSection('advantages')} style={styles.mobileNavLink}>{t.nav.advantages}</a>
            <a onClick={() => scrollToSection('pricing')} style={styles.mobileNavLink}>{t.nav.pricing}</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            {t.hero.title}
          </h1>
          <p style={styles.heroSubtitle}>
            {t.hero.subtitle}
          </p>
          <div style={styles.heroImagePlaceholder}>
            {t.hero.imageAlt}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" style={{...styles.section, backgroundColor: '#f8fafc'}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            {t.problems.title}
          </h2>
          <p style={styles.sectionSubtitle}>
            {t.problems.subtitle}
          </p>
          
          <div style={styles.gridContainer}>
            {Object.entries(t.problems).slice(2).map(([key, problem], index) => (
              <div key={key} style={styles.card}>
                <div style={{
                  ...styles.cardIcon,
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                }}>
                  ⚠️
                </div>
                <h3 style={styles.cardTitle}>
                  {problem.title}
                </h3>
                <p style={styles.cardDescription}>
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" style={{...styles.section, backgroundColor: 'white'}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            {t.product.title}
          </h2>
          <p style={styles.sectionSubtitle}>
            {t.product.subtitle}
          </p>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(59, 130, 246, 0.05))',
            padding: 'clamp(2rem, 5vw, 3rem)',
            borderRadius: '20px',
            marginBottom: 'clamp(2rem, 5vw, 4rem)',
            border: '1px solid rgba(37, 99, 235, 0.1)'
          }}>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              lineHeight: '1.8',
              color: '#1f2937',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {t.product.description}
            </p>
          </div>

          <div style={{
            width: '100%',
            height: 'clamp(200px, 40vw, 300px)',
            background: 'rgba(37, 99, 235, 0.1)',
            borderRadius: '15px',
            margin: '2rem auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            border: '2px dashed rgba(37, 99, 235, 0.3)',
            color: '#2563eb'
          }}>
            Product Image Placeholder
          </div>

          <h3 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: 'clamp(2rem, 5vw, 3rem)',
            color: '#1f2937'
          }}>
            {t.product.components.title}
          </h3>
          
          <div style={styles.gridContainer}>
            {Object.entries(t.product.components).slice(1).map(([key, component], index) => {
              const icons = ['🔋', '🧠', '🤖', '⚡', '📱', '🔄'];
              return (
                <div key={key} style={styles.card}>
                  <div style={{
                    ...styles.cardIcon,
                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)'
                  }}>
                    {icons[index]}
                  </div>
                  <h4 style={styles.cardTitle}>
                    {component.title}
                  </h4>
                  <p style={styles.cardDescription}>
                    {component.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{...styles.section, backgroundColor: '#f8fafc'}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            {t.features.title}
          </h2>
          <p style={styles.sectionSubtitle}>
            {t.features.subtitle}
          </p>
          
          <div style={styles.featureToggleContainer}>
            <button
              onClick={() => setTargetAudience('residential')}
              style={{
                ...styles.buttonSecondary,
                background: targetAudience === 'residential' 
                  ? 'linear-gradient(135deg, #2563eb, #3b82f6)' 
                  : 'white',
                color: targetAudience === 'residential' ? 'white' : '#2563eb'
              }}
            >
              {t.features.targetSelector.residential}
            </button>
            <button
              onClick={() => setTargetAudience('commercial')}
              style={{
                ...styles.buttonSecondary,
                background: targetAudience === 'commercial' 
                  ? 'linear-gradient(135deg, #2563eb, #3b82f6)' 
                  : 'white',
                color: targetAudience === 'commercial' ? 'white' : '#2563eb'
              }}
            >
              {t.features.targetSelector.commercial}
            </button>
          </div>
          
          <div style={styles.gridContainer}>
            {Object.entries(t.features[targetAudience]).map(([key, feature], index) => {
              const icons = ['🔒', '💰', '📉', '☀️', '🚗', '🏠'];
              return (
                <div key={key} style={styles.card}>
                  <div style={{
                    ...styles.cardIcon,
                    background: 'linear-gradient(135deg, #10b981, #059669)'
                  }}>
                    {icons[index % icons.length]}
                  </div>
                  <h3 style={styles.cardTitle}>
                    {feature.title}
                  </h3>
                  <p style={{...styles.cardDescription, marginBottom: '1rem'}}>
                    {feature.description}
                  </p>
                  <div style={styles.savingsBadge}>
                    <span style={styles.savingsText}>
                      💡 {feature.savings}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" style={{...styles.section, backgroundColor: 'white'}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            {t.advantages.title}
          </h2>
          <p style={styles.sectionSubtitle}>
            {t.advantages.subtitle}
          </p>
          
          <div style={styles.gridContainer}>
            {Object.entries(t.advantages).slice(2).map(([key, advantage], index) => {
              const icons = ['💰', '🤖', '🔗', '🌱', '🇵🇹', '✅'];
              return (
                <div key={key} style={{
                  ...styles.card,
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(59, 130, 246, 0.05))'
                }}>
                  <div style={{
                    ...styles.cardIcon,
                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)'
                  }}>
                    {icons[index]}
                  </div>
                  <h3 style={styles.cardTitle}>
                    {advantage.title}
                  </h3>
                  <p style={styles.cardDescription}>
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{...styles.section, backgroundColor: '#f8fafc'}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            {t.pricing.title}
          </h2>
          <p style={styles.sectionSubtitle}>
            {t.pricing.subtitle}
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(1rem, 3vw, 2rem)',
            marginBottom: 'clamp(2rem, 5vw, 4rem)'
          }}>
            {Object.entries(t.pricing.comparison).map(([key, product], index) => (
              <div key={key} style={
                key === 'portev' 
                  ? {...styles.pricingCard, ...styles.pricingCardFeatured}
                  : styles.pricingCard
              }>
                {key === 'portev' && (
                  <div style={styles.pricingBadge}>
                    {t.pricing.ourSolution}
                  </div>
                )}
                
                <h3 style={{
                  ...styles.cardTitle,
                  textAlign: 'center',
                  color: key === 'portev' ? 'white' : '#1f2937'
                }}>
                  {product.title}
                </h3>
                
                <div style={{
                  ...styles.priceText,
                  color: key === 'portev' ? 'white' : '#1f2937'
                }}>
                  {product.price}
                </div>
                
                <div style={{
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  textAlign: 'center',
                  marginBottom: '2rem',
                  opacity: 0.8,
                  color: key === 'portev' ? 'white' : '#1f2937'
                }}>
                  {product.capacity}
                </div>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {product.features.map((feature, idx) => (
                    <li key={idx} style={{
                      padding: '0.5rem 0',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      lineHeight: '1.4',
                      color: key === 'portev' ? 'white' : '#1f2937'
                    }}>
                      <span style={{ 
                        color: key === 'portev' ? '#60a5fa' : '#10b981',
                        fontSize: '0.9rem',
                        marginTop: '0.1rem'
                      }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Savings and ROI Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: 'clamp(2rem, 5vw, 3rem)'
          }}>
            <div style={styles.card}>
              <h3 style={{
                ...styles.cardTitle,
                fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                {t.pricing.savings.title}
              </h3>
              <p style={{...styles.cardDescription, marginBottom: '1.5rem'}}>
                {t.pricing.savings.description}
              </p>
              
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#2563eb'
                }}>
                  {t.features.targetSelector.residential}:
                </h4>
                <ul style={{listStyle: 'none', padding: 0}}>
                  {t.pricing.savings.residential.map((saving, idx) => (
                    <li key={idx} style={{
                      padding: '0.5rem 0',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      lineHeight: '1.4'
                    }}>
                      <span style={{color: '#10b981', marginTop: '0.1rem'}}>💰</span>
                      {saving}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#2563eb'
                }}>
                  {t.features.targetSelector.commercial}:
                </h4>
                <ul style={{listStyle: 'none', padding: 0}}>
                  {t.pricing.savings.commercial.map((saving, idx) => (
                    <li key={idx} style={{
                      padding: '0.5rem 0',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      lineHeight: '1.4'
                    }}>
                      <span style={{color: '#10b981', marginTop: '0.1rem'}}>💰</span>
                      {saving}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{
              ...styles.card,
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
              <h3 style={{
                ...styles.cardTitle,
                fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                {t.pricing.payback.title}
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                <div style={{
                  background: 'white',
                  padding: 'clamp(1rem, 3vw, 1.5rem)',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                    fontWeight: '600',
                    color: '#2563eb',
                    marginBottom: '0.5rem'
                  }}>
                    {t.features.targetSelector.residential}
                  </div>
                  <div style={{
                    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                    fontWeight: '700',
                    color: '#059669'
                  }}>
                    {t.pricing.payback.residential}
                  </div>
                </div>
                
                <div style={{
                  background: 'white',
                  padding: 'clamp(1rem, 3vw, 1.5rem)',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                    fontWeight: '600',
                    color: '#2563eb',
                    marginBottom: '0.5rem'
                  }}>
                    {t.features.targetSelector.commercial}
                  </div>
                  <div style={{
                    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                    fontWeight: '700',
                    color: '#059669'
                  }}>
                    {t.pricing.payback.commercial}
                  </div>
                </div>
              </div>
              
              <p style={{
                ...styles.cardDescription,
                textAlign: 'center',
                lineHeight: '1.6'
              }}>
                {t.pricing.payback.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: 'clamp(40px, 8vw, 80px) 0',
        background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            {t.cta.title}
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            marginBottom: '2rem',
            opacity: '0.9',
            lineHeight: '1.5'
          }}>
            {t.cta.subtitle}
          </p>
          <p style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
            marginBottom: '3rem',
            opacity: '0.8',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            {t.cta.description}
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <button style={styles.buttonPrimary}>
              {t.cta.button}
            </button>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
            }}>
              <div style={{
                width: 'clamp(30px, 6vw, 40px)',
                height: 'clamp(30px, 6vw, 40px)',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)'
              }}>
                📷
              </div>
              <span>{t.cta.instagram}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: 'clamp(35px, 8vw, 40px)',
              height: 'clamp(35px, 8vw, 40px)',
              background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)'
            }}>
              [LOGO]
            </div>
            <div style={{
              fontSize: 'clamp(1.3rem, 4vw, 1.5rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              PortEV
            </div>
          </div>
          
          <p style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
            color: '#9ca3af',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            {t.footer.slogan}
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid #374151',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
          }}>
            <p style={{
              color: '#9ca3af',
              margin: 0
            }}>
              {t.footer.rights}
            </p>
            <p style={{
              color: '#9ca3af',
              margin: 0
            }}>
              {t.footer.madein}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortEVLanding;