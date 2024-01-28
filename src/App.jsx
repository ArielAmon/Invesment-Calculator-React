import Input from "./components/Input";
import Results from "./components/Results";
import { useState } from "react";

const INPUT_DEF = [
  { label: "Initial Investment", type: "number" },
  { label: "Annual Investment", type: "text" },
  { label: "Expected Return", type: "text" },
  { label: "Duration", type: "text" },
];

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(keyIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [keyIdentifier]: +newValue };
    });
  }
  return (
    <main>
      <Input onChange={handleInputChange} userInput={userInput} />;
      {!inputIsValid && <p className="center">Please enter duration greater than 0!</p>}
      {inputIsValid && <Results userInput={userInput}></Results>}
    </main>
  );
}

export default App;
