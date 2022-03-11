import "./App.css";
import GuessRow from "./components/GuessRow/guessRow";
import InputRow from "./components/InputRow/inputRow";
import { useState } from "react";

const App = () => {
  const [answer, setAnswer] = useState(["B", "A", "C", "O", "N"]);
  const [activeRow, setActiveRow] = useState(0);
  const [rowColors, setRowColors] = useState([["empty", "empty", "empty", "empty", "empty"],["empty", "empty", "empty", "empty", "empty"],["empty", "empty", "empty", "empty", "empty"],["empty", "empty", "empty", "empty", "empty"],["empty", "empty", "empty", "empty", "empty"],["empty", "empty", "empty", "empty", "empty"]]); // "empty", "absent", "misplaced", "correct"

  const handleGuess = (guess) => {
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

  const rowArr = [...Array(6).keys()];

  return (
    <div className="App">
      {rowArr.map((row)=>(
      <InputRow key={row} handleGuess={handleGuess} rowColors={rowColors[row]} active={activeRow === row ? true : false} />
      ))}
    </div>      
  );
};

export default App;
