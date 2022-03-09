import "./App.css";
import GuessRow from "./components/GuessRow/guessRow";
import InputRow from "./components/InputRow/inputRow";

function App() {
  return (
    <div className="App">
      <GuessRow />
      <GuessRow />
      <InputRow />
    </div>
  );
}

export default App;
