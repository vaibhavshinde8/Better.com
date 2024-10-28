

"use client";

import { useState } from 'react';
import styles from '../../styles/MortgageForm.module.css';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(445000);
  const [downPayment, setDownPayment] = useState(89000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment;
    const monthlyInterest = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = 
      (principal * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
    return monthlyPayment.toFixed(2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <h1 className={styles.title}>Mortgage Calculator</h1>
        <p className={styles.description}>
          Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI).
        </p>

        <div className={styles.grid}>
          <div>
            <label className={styles.label}>Home price</label>
            <input
              type="number"
              className={styles.input}
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
            />
          </div>

          <div>
            <label className={styles.label}>Down payment</label>
            <input
              type="number"
              className={styles.input}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
          </div>

          <div>
            <label className={styles.label}>Interest rate (%)</label>
            <input
              type="number"
              step="0.01"
              className={styles.input}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>

          <div>
            <label className={styles.label}>Loan term (years)</label>
            <select
              className={styles.input}
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
            >
              <option value={15}>15 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>
        </div>

        <div className={styles.result}>
          Monthly payment: ${calculateMonthlyPayment()} /mo
        </div>

        <button className={styles.button}>
          Get pre-approved
        </button>
      </div>
    </div>
  );
};

export default MortgageCalculator;
