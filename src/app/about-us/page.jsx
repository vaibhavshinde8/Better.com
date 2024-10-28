// src/components/AboutUs.js
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mission}>Our Mission</h1>
      <p className={styles.missionStatement}>
        We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
      </p>

      <div className={styles.flexContainer}>
        <p className={styles.additionalText}>
          The status quo is broken. The traditional processes around homeownership are opaque and stressful.
          Fees aren’t transparent, and some are simply outrageous in size. Traditional mortgage lending is 
          rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders 
          — not you. Better.com CEO, Vishal Garg, set out to change that.
        </p>
        <img src="/vishal-mission.jpg" alt="Vishal Garg" className={styles.image} />
      </div>

      {/* Company Timeline */}
      <div className={styles.timeline}>
        <h2 className={styles.timelineTitle}>Company Timeline</h2>
        <ul className={styles.timelineList}>
          <li>
            <span className={styles.year}>2014</span>
            <p>
              After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.
            </p>
          </li>
          <li>
            <span className={styles.year}>2015</span>
            <p>
              Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).
            </p>
          </li>
          <li>
            <span className={styles.year}>2016</span>
            <p>
              Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.
            </p>
          </li>
          <li>
            <span className={styles.year}>2017</span>
            <p>
              Better expands into the real estate market with Better Real Estate.
            </p>
          </li>
          <li>
            <span className={styles.year}>2018</span>
            <p>
              Better Mortgage partners with Ally Bank to build Ally powered by Better.
            </p>
          </li>
          <li>
            <span className={styles.year}>2019</span>
            <p>
              Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.
            </p>
          </li>
          <li>
            <span className={styles.year}>2021</span>
            <p>
              Better acquires Trussle — The UK’s most innovative online mortgage broker.
            </p>
          </li>
          <li>
            <span className={styles.year}>2022</span>
            <p>
              Better Mortgage becomes the first fintech to fund $100B home loans entirely online.
            </p>
          </li>
          <li>
            <span className={styles.year}>2023</span>
            <p>
              Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.
              <br />
              Better Mortgage launches the fully digital 3-day HELOC².
              <br />
              Better Mortgage launches One Day Verified Approval Letter.
            </p>
          </li>
          <li>
            <span className={styles.year}>Today</span>
            <p>
              You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
