import styles from "./inputRow.module.css";
import { useState, useEffect, useRef } from "react";

const InputRow = (props) => {
  const [input, setInput] = useState([]);
  const inputRef = useRef();

  inputRef.current = input;

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 8) {
        const newInputArray = inputRef.current.slice(0, inputRef.current.length - 1);
        setInput(() => newInputArray);
      } else if (e.keyCode === 13 && inputRef.current.length === 5) {
        props.handleGuess(inputRef.current);
      } else if (inputRef.current.length < 5) {
        setInput((prev) => [...prev, e.key.toUpperCase()]);
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.letterBox} ${styles[props.rowColors[0]]}`}>{input[0]}</div>
        <div className={`${styles.letterBox} ${styles[props.rowColors[1]]}`}>{input[1]}</div>
        <div className={`${styles.letterBox} ${styles[props.rowColors[2]]}`}>{input[2]}</div>
        <div className={`${styles.letterBox} ${styles[props.rowColors[3]]}`}>{input[3]}</div>
        <div className={`${styles.letterBox} ${styles[props.rowColors[4]]}`}>{input[4]}</div>
      </div>
    </>
  );
};

export default InputRow;
