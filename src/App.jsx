import Grid from "./components/Grid/Grid"
import Header from "./components/Header/Header"
import InputGroup from "./components/InputGroup/InputGroup"

function App() {

  const tBodyData = [{
    year: "1",
    valueEndOfYear: "16725",
    interest: "825",
    totalInterest: "825",
    annualInvestment: "900",
    totalInvestment: "15900",
  }, {
    year: "2",
    valueEndOfYear: "18545",
    interest: "920",
    totalInterest: "1745",
    annualInvestment: "900",
    totalInvestment: "16800",
  }];




  return (
    <>
      <Header />
      <InputGroup />
      <Grid tBodyData={tBodyData} />
    </>
  )
}

export default App
