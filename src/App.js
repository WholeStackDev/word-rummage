import "./App.css";
import GuessRow from "./components/GuessRow/guessRow";
import InputRow from "./components/InputRow/inputRow";
import { useState } from "react";

const App = () => {
  const [answer, setAnswer] = useState(["B", "A", "C", "O", "N"]);
  const [rowColors, setRowColors] = useState(["empty", "empty", "empty", "empty", "empty"]); // "empty", "absent", "misplaced", "correct"

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
    setRowColors(() => newColors);
  };

  return (
    <div className="App">
      <GuessRow />
      <GuessRow />
      <InputRow handleGuess={handleGuess} rowColors={rowColors} />
    </div>
  );
};

export default App;
