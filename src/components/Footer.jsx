import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
    
      <div className={styles.socialIconsSection}>
        <a href="#" className={styles.icon}><i className="fab fa-facebook-f"></i></a>
        <a href="#" className={styles.icon}><i className="fab fa-instagram"></i></a>
        <a href="#" className={styles.icon}><i className="fab fa-linkedin-in"></i></a>
      </div>


      <div className={styles.footnotesSection}>
        <p className={styles.footnote}>
          <sup>1</sup>Better Mortgage's One Day Mortgage™ promotion offers qualified customers...
        </p>
     
      </div>


      <div className={styles.foot}>
        <div className={styles.footerSection}>
          <h2 className={styles.footerLogo}>Better</h2>
          <p>Better is a family of companies serving all your homeownership needs.</p>
        </div>

  
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Resources</h3>
          <ul className={styles.footerList}>
            <li>Home affordability calculator</li>
            <li>Mortgage calculator</li>
            <li>Free mortgage calculator</li>
            <li>Mortgage calculator with taxes</li>
          </ul>
        </div>

   
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Company</h3>
          <ul className={styles.footerList}>
            <li>About Us</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Partner With Us</li>
          </ul>
        </div>

   
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
          <p className={styles.contactInfo}>hello@better.com</p>
          <p className={styles.contactInfo}>415-523-8837</p>
          <ul className={styles.footerList}>
            <li>FAQ</li>
            <li>Glossary</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
