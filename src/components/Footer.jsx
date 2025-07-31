import React from 'react';
import styles from '../PortEVLanding.module.css';
import logo from '../assets/logo1.png';

const Footer = ({ t }) => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.logoContainer} style={{justifyContent: 'center', marginBottom: '2rem'}}>
        <img src={logo} alt="PortEV Logo" className={styles.logoImage} />
        <span className={styles.logoText} style={{background: 'var(--primary-gradient)'}}>PortEV</span>
      </div>
      <p className={styles.footerSlogan}>{t.footer.slogan}</p>
      <div className={styles.footerBottom}>
        <span>{t.footer.rights}</span>
        <span>{t.footer.madein}</span>
      </div>
    </div>
  </footer>
);

export default Footer;