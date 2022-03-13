import "./App.css";
import InputRow from "./components/InputRow/inputRow";
import { useState, useEffect } from "react";
import Keyboard from "./components/Keyboard/keyboard";
const wordListJson = require("./words.json");

const App = () => {
  var wordList = wordListJson.data;
  const word = wordList[Math.floor(Math.random() * wordList.length) + 1];

  const [answer, setAnswer] = useState(word.toUpperCase().split(""));
  let numRows = 6;
  const [activeRow, setActiveRow] = useState(0);
  const [rowColors, setRowColors] = useState(Array(numRows).fill(Array(5).fill("empty"))); // "empty", "absent", "misplaced", "correct"

  const [keyStatus, setKeyStatus] = useState({
    A: "empty",
    B: "empty",
    C: "empty",
    D: "empty",
    E: "empty",
    F: "empty",
    G: "empty",
    H: "empty",
    I: "empty",
    J: "empty",
    K: "empty",
    L: "empty",
    M: "empty",
    N: "empty",
    O: "empty",
    P: "empty",
    Q: "empty",
    R: "empty",
    S: "empty",
    T: "empty",
    U: "empty",
    V: "empty",
    W: "empty",
    X: "empty",
    Y: "empty",
    Z: "empty",
  });

  const handleGuess = (guess) => {
    if (!wordList.includes(guess.join("").toLowerCase())) {
      alert("Not a word dummy.");

      return;
    }

    const newColors = [];
    // const newKeyStatus =
    for (let i = 0; i < 5; i++) {
      if (guess[i] === answer[i]) {
        newColors.push("correct");
        setKeyStatus((keys) => {
          return {
            ...keys,
            [guess[i]]: "correct",
          };
        });
      } else if (answer.includes(guess[i])) {
        newColors.push("misplaced");
        if (keyStatus[guess[i]] != "correct") {
          setKeyStatus((keys) => {
            return {
              ...keys,
              [guess[i]]: "misplaced",
            };
          });
        }
      } else {
        newColors.push("absent");
        setKeyStatus((keys) => {
          return {
            ...keys,
            [guess[i]]: "absent",
          };
        });
      }
    }
    const newRowColorsArray = [...rowColors];
    newRowColorsArray[activeRow] = newColors;
    setRowColors(() => newRowColorsArray);
    setActiveRow((prev) => prev + 1);
    if (guess.join("") === answer.join("")) {
      alert("Congratulations! You correctly answered: " + answer.join("") + "!");
    } else if (activeRow === 5) {
      alert("You failed! You are terrible at life! The answer was: " + answer.join("") + "!");
    }
  };

  const rowArr = [...Array(numRows).keys()];

  return (
    <div className="App">
      <h1>WORD RUMMAGE</h1>
      <div className="Board">
        {rowArr.map((row) => (
          <InputRow key={row} handleGuess={handleGuess} rowColors={rowColors[row]} active={activeRow === row ? true : false} />
        ))}
      </div>
      <Keyboard keyStatus={keyStatus} />
      <h1 style={{ color: "white" }}>{answer}</h1>
    </div>
  );
};

export default App;
