import React from "react";
import styles from "./keyboard.module.css";

const Keyboard = ({ keyStatus }) => {
  const press = (keyCode, key) => {
    var event = new KeyboardEvent("keydown", { keyCode, key });
    document.dispatchEvent(event);
  };

  return (
    <div className={styles.keyboard}>
      <div className={styles.keyRow}>
        <div onClick={() => press(81, "q")} className={`${styles.key} ${styles[keyStatus.Q]}`}>
          Q
        </div>
        <div onClick={() => press(87, "w")} className={`${styles.key} ${styles[keyStatus.W]}`}>
          W
        </div>
        <div onClick={() => press(69, "e")} className={`${styles.key} ${styles[keyStatus.E]}`}>
          E
        </div>
        <div onClick={() => press(82, "r")} className={`${styles.key} ${styles[keyStatus.R]}`}>
          R
        </div>
        <div onClick={() => press(84, "t")} className={`${styles.key} ${styles[keyStatus.T]}`}>
          T
        </div>
        <div onClick={() => press(89, "y")} className={`${styles.key} ${styles[keyStatus.Y]}`}>
          Y
        </div>
        <div onClick={() => press(85, "u")} className={`${styles.key} ${styles[keyStatus.U]}`}>
          U
        </div>
        <div onClick={() => press(73, "i")} className={`${styles.key} ${styles[keyStatus.I]}`}>
          I
        </div>
        <div onClick={() => press(79, "o")} className={`${styles.key} ${styles[keyStatus.O]}`}>
          O
        </div>
        <div onClick={() => press(80, "p")} className={`${styles.key} ${styles[keyStatus.P]}`}>
          P
        </div>
      </div>
      <div className={styles.keyRow}>
        <div onClick={() => press(65, "a")} className={`${styles.key} ${styles[keyStatus.A]}`}>
          A
        </div>
        <div onClick={() => press(83, "s")} className={`${styles.key} ${styles[keyStatus.S]}`}>
          S
        </div>
        <div onClick={() => press(68, "d")} className={`${styles.key} ${styles[keyStatus.D]}`}>
          D
        </div>
        <div onClick={() => press(70, "f")} className={`${styles.key} ${styles[keyStatus.F]}`}>
          F
        </div>
        <div onClick={() => press(71, "g")} className={`${styles.key} ${styles[keyStatus.G]}`}>
          G
        </div>
        <div onClick={() => press(72, "h")} className={`${styles.key} ${styles[keyStatus.H]}`}>
          H
        </div>
        <div onClick={() => press(74, "j")} className={`${styles.key} ${styles[keyStatus.J]}`}>
          J
        </div>
        <div onClick={() => press(75, "k")} className={`${styles.key} ${styles[keyStatus.K]}`}>
          K
        </div>
        <div onClick={() => press(76, "l")} className={`${styles.key} ${styles[keyStatus.L]}`}>
          L
        </div>
      </div>
      <div className={styles.keyRow}>
        <div onClick={() => press(13, "enter")} className={`${styles.key} ${styles.keyWide}`}>
          ENTER
        </div>
        <div onClick={() => press(90, "z")} className={`${styles.key} ${styles[keyStatus.Z]}`}>
          Z
        </div>
        <div onClick={() => press(88, "x")} className={`${styles.key} ${styles[keyStatus.X]}`}>
          X
        </div>
        <div onClick={() => press(67, "c")} className={`${styles.key} ${styles[keyStatus.C]}`}>
          C
        </div>
        <div onClick={() => press(86, "v")} className={`${styles.key} ${styles[keyStatus.V]}`}>
          V
        </div>
        <div onClick={() => press(66, "b")} className={`${styles.key} ${styles[keyStatus.B]}`}>
          B
        </div>
        <div onClick={() => press(78, "n")} className={`${styles.key} ${styles[keyStatus.N]}`}>
          N
        </div>
        <div onClick={() => press(77, "m")} className={`${styles.key} ${styles[keyStatus.M]}`}>
          M
        </div>
        <div onClick={() => press(8, "backspace")} className={`${styles.key} ${styles.keyWide}`}>
          BACK
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
