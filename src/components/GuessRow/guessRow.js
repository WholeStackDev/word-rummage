import styles from "./guessRow.module.css";

const GuessRow = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.letterBox} ${styles.letterAbsent}`}>T</div>
      <div className={`${styles.letterBox} ${styles.letterMisplaced}`}>E</div>
      <div className={`${styles.letterBox} ${styles.letterCorrect}`}>S</div>
      <div className={`${styles.letterBox} ${styles.letterAbsent}`}>T</div>
      <div className={`${styles.letterBox} ${styles.letterAbsent}`}>S</div>
    </div>
  );
};

export default GuessRow;
