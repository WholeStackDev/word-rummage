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

  return (
    <div className="App">
      <InputRow handleGuess={handleGuess} rowColors={rowColors[0]} active={activeRow === 0 ? true : false} />
      <InputRow handleGuess={handleGuess} rowColors={rowColors[1]} active={activeRow === 1 ? true : false}/>
      <InputRow handleGuess={handleGuess} rowColors={rowColors[2]} active={activeRow === 2 ? true : false}/>
      <InputRow handleGuess={handleGuess} rowColors={rowColors[3]} active={activeRow === 3 ? true : false}/>
      <InputRow handleGuess={handleGuess} rowColors={rowColors[4]} active={activeRow === 4 ? true : false}/>
      <InputRow handleGuess={handleGuess} rowColors={rowColors[5]} active={activeRow === 5 ? true : false}/>
    </div>
  );
};

export default App;
