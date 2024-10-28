
import styles from '../styles/CalculatorResult.module.css';

export default function CalculatorResult({ result }) {
  if (!result) return null;

  return (
    <div className={styles.result}>
      <h3>Monthly Payment: ${result.monthlyPayment.toFixed(2)}</h3>
    </div>
  );
}
