
"use client"; 
import React, { useState } from 'react';
import styles from '../styles/MortgageForm.module.css';

const MortgageForm = ({ onCalculate }) => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);

  const handleCalculate = () => {
    onCalculate({
      principal: loanAmount,
      interest: interestRate,
      years: loanTerm
    });
  };

  return (
    <div className={styles.formContainer}>
      <label className={styles.label}>Loan Amount:</label>
      <input
        type="number"
        className={styles.input}
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
      />

      <label className={styles.label}>Interest Rate:</label>
      <input
        type="number"
        className={styles.input}
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />

      <label className={styles.label}>Loan Term (years):</label>
      <input
        type="number"
        className={styles.input}
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
      />

      <button className={styles.button} onClick={handleCalculate}>
        Calculate Payment
      </button>
    </div>
  );
};

export default MortgageForm;
