// src/components/Header.js
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/mortgage-calculator">Mortgage Calculator</Link></li>
          <li><Link href="/start">Get Started</Link></li>
        </ul>
      </nav>
      <div className={styles.signInContainer}>
        
        <div className={styles.signInButton}>Sign in</div>
      </div>
    </header>
  );
}
