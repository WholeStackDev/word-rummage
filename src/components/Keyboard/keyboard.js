import React from 'react';
import styles from "./keyboard.module.css";

const Keyboard = () => {
    
  return (
    <div className={styles.keyboard}>
        <div className= {styles.keyRow}>
            <div className= {styles.key}>Q</div>
            <div className= {styles.key}>W</div>
            <div className= {styles.key}>E</div>
            <div className= {styles.key}>R</div>
            <div className= {styles.key}>T</div>
            <div className= {styles.key}>Y</div>
            <div className= {styles.key}>U</div>
            <div className= {styles.key}>I</div>
            <div className= {styles.key}>O</div>
            <div className= {styles.key}>P</div>
        </div>
        <div className= {styles.keyRow}>
            <div onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: "a" }))} className= {styles.key}>A</div>
            <div className= {styles.key}>S</div>
            <div className= {styles.key}>D</div>
            <div className= {styles.key}>F</div>
            <div className= {styles.key}>G</div>
            <div className= {styles.key}>H</div>
            <div className= {styles.key}>J</div>
            <div className= {styles.key}>K</div>
            <div className= {styles.key}>L</div>
        </div>
        <div className= {styles.keyRow}>
            <div className= {`${styles.key} ${styles.keyWide}`}>ENTER</div>
            <div className= {styles.key}>Z</div>
            <div className= {styles.key}>X</div>
            <div className= {styles.key}>C</div>
            <div className= {styles.key}>V</div>
            <div className= {styles.key}>B</div>
            <div className= {styles.key}>N</div>
            <div className= {styles.key}>M</div>
            <div className= {`${styles.key} ${styles.keyWide}`}>BACK</div>
        </div>
    </div>
  )
}

export default Keyboard;