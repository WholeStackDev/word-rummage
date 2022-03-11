import "./App.css";
import GuessRow from "./components/GuessRow/guessRow";
import InputRow from "./components/InputRow/inputRow";
import { useState } from "react";
import Keyboard from "./components/Keyboard/keyboard";
const wordListJson = require('./words.json');

const App = () => {
  var wordList = wordListJson.data;
  const word = wordList[Math.floor(Math.random() * wordList.length) + 1];

  const [answer, setAnswer] = useState(word.toUpperCase().split(""));
  let numRows = 6;
  const [activeRow, setActiveRow] = useState(0);
  const [rowColors, setRowColors] = useState(Array(numRows).fill(Array(5).fill('empty'))); // "empty", "absent", "misplaced", "correct"


  const handleGuess = (guess) => {
    
    if (!wordList.includes(guess.join("").toLowerCase())) {
      alert('Not a word dummy.');
      return;
    }
    
    const newColors = [];
    for (let i = 0; i < 5; i++) {
      if (guess[i] === answer[i]) {
        newColors.push("correct");
      } else if (answer.includes(guess[i])) {
        newColors.push("misplaced");
      } else {
        newColors.push("absent");
      }
    }
    const newRowColorsArray = [...rowColors];
    newRowColorsArray[activeRow] = newColors;
    setRowColors(() => newRowColorsArray);
    setActiveRow((prev) => prev+1); 
  };

  const rowArr = [...Array(numRows).keys()];

  return (
    <div className="App">
      <div className="Board">
      {rowArr.map((row)=>(
      <InputRow key={row} handleGuess={handleGuess} rowColors={rowColors[row]} active={activeRow === row ? true : false} />
      ))}
      </div>
      <Keyboard />
    </div>
  );
};

export default App;
