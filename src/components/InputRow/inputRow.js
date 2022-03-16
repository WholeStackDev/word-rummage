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
      } else if (e.keyCode === 13 && inputRef.current.length === 5 && !inputRef.current.includes(" ")) {
        props.handleGuess(inputRef.current);
      } else if (inputRef.current.length < 5 && e.keyCode > 64 && e.keyCode < 91) {
        setInput((prev) => [...prev, e.key.toUpperCase()]);
      } else if (inputRef.current.length < 5 && e.keyCode === 32) {
        setInput((prev) => [...prev, e.key]);
      }
    }
    if (props.active) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [props]);

  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles.letterBox} ${styles[props.rowColors[0]]} ${
            inputRef.current.length > 0 ? styles.filled : ""
          }`}
        >
          {input[0]}
        </div>
        <div
          className={`${styles.letterBox} ${styles[props.rowColors[1]]} ${
            inputRef.current.length > 1 ? styles.filled : ""
          }`}
        >
          {input[1]}
        </div>
        <div
          className={`${styles.letterBox} ${styles[props.rowColors[2]]} ${
            inputRef.current.length > 2 ? styles.filled : ""
          }`}
        >
          {input[2]}
        </div>
        <div
          className={`${styles.letterBox} ${styles[props.rowColors[3]]} ${
            inputRef.current.length > 3 ? styles.filled : ""
          }`}
        >
          {input[3]}
        </div>
        <div
          className={`${styles.letterBox} ${styles[props.rowColors[4]]} ${
            inputRef.current.length > 4 ? styles.filled : ""
          }`}
        >
          {input[4]}
        </div>
      </div>
    </>
  );
};

export default InputRow;
