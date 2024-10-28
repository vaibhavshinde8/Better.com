

import Image from 'next/image';
import styles from '../../styles/StartPage.module.css';


const StartPage = () => {
  return (
    <div className={styles.container}>
    
      <header className={styles.header}>
        <h1 className={styles.logo}>Better <span className="font-normal">Mortgage</span></h1>
        <p className={styles.helpText}>
          Need help? <span className={styles.phone}>Call (415) 523 8837</span>
        </p>
      </header>


      <main className={styles.mainContent}>
        <Image
          src="/profile-pic.png"
          width={60}
          height={60}
          alt="Profile picture"
          className={styles.profileImage}
        />
        <h2 className={styles.greeting}>Hi, I'm Betsy!</h2>
        <p className={styles.subGreeting}>What can I help you with?</p>

 
        <div className={styles.buttonGroup}>
          <button className={styles.button}>
            <span className={styles.buttonText}>
              <Image src="/home-icon.svg" alt="Home icon" width={24} height={24} className={styles.icon} />
              <span>Buying a home</span>
            </span>
          </button>
          <button className={styles.button}>
            <span className={styles.buttonText}>
              <Image src="/refinance-icon.svg" alt="Refinance icon" width={24} height={24} className={styles.icon} />
              <span>Refinance my mortgage</span>
            </span>
          </button>
          <button className={styles.button}>
            <span className={styles.buttonText}>
              <Image src="/cash-icon.svg" alt="Cash icon" width={24} height={24} className={styles.icon} />
              <span>Get cash from my home</span>
            </span>
          </button>
        </div>


        <div className={styles.stats}>
          <div>
            <p className={styles.statNumber}>$100B</p>
            <p>home loans funded entirely online</p>
          </div>
          <div>
            <p className={styles.statNumber}>400K</p>
            <p>Customers who chose a Better Mortgage</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartPage;
