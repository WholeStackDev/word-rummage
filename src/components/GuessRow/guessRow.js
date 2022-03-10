import styles from "./guessRow.module.css";

const GuessRow = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.letterBox} ${styles.absent}`}>T</div>
      <div className={`${styles.letterBox} ${styles.misplaced}`}>E</div>
      <div className={`${styles.letterBox} ${styles.correct}`}>S</div>
      <div className={`${styles.letterBox} ${styles.absent}`}>T</div>
      <div className={`${styles.letterBox} ${styles.absent}`}>S</div>
    </div>
  );
};

export default GuessRow;
