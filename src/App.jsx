import Grid from "./components/Grid/Grid"
import Header from "./components/Header/Header"
import InputGroup from "./components/InputGroup/InputGroup"
import calculateInvestmentResults from "./util/investment"
import { useState } from "react"

function App() {
  console.log("App component rendered");
  const tBodayData = [];
  const [inputData, setInputData] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
    tBodayData: tBodayData
  });

  function handleInputChange(event) {
    const { id, value } = event.target;
    const numericValue = value === "" ? null : Number(value);
    console.log(`Input Changed - ID: ${id}, Value: ${value}, Numeric Value: ${numericValue}`);
    const newInputData = { ...inputData };

    if (id === "initial-investment") {
      newInputData.initialInvestment = numericValue;
    } else if (id === "annual-investment") {
      newInputData.annualInvestment = numericValue;
    } else if (id === "expected-return") {
      newInputData.expectedReturn = numericValue;
    } else if (id === "duration") {
      newInputData.duration = numericValue;
    }

    newInputData.tBodayData = calculateInvestmentResults({ inputData: newInputData });
    setInputData(newInputData);
  }

  return (
    <>
      <Header />
      <InputGroup handleInputChange={handleInputChange} />
      <Grid tBodyData={inputData.tBodayData} />
    </>
  )
}

export default App
