import styles from "./inputRow.module.css";

const InputRow = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.letterBox} ${styles.letterEmpty}`}>T</div>
      <div className={`${styles.letterBox} ${styles.letterEmpty}`}>E</div>
      <div className={`${styles.letterBox} ${styles.letterEmpty}`}>S</div>
      <div className={`${styles.letterBox} ${styles.letterEmpty}`}>T</div>
      <div className={`${styles.letterBox} ${styles.letterEmpty}`}>S</div>
    </div>
  );
};

export default InputRow;
