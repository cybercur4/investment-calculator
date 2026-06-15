// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export default function calculateInvestmentResults({
  inputData
}) {
  const initialInvestmentRaw = inputData.initialInvestment;
  const annualInvestmentRaw = inputData.annualInvestment;
  const expectedReturnRaw = inputData.expectedReturn;
  const durationRaw = inputData.duration;

  if (
    initialInvestmentRaw == null || initialInvestmentRaw === "" ||
    annualInvestmentRaw == null || annualInvestmentRaw === "" ||
    expectedReturnRaw == null || expectedReturnRaw === "" ||
    durationRaw == null || durationRaw === ""
  ) {
    return [];
  }

  const initialInvestment = Number(initialInvestmentRaw);
  const annualInvestment = Number(annualInvestmentRaw);
  const expectedReturn = Number(expectedReturnRaw);
  const duration = Number(durationRaw);

  if (
    !Number.isFinite(initialInvestment) ||
    !Number.isFinite(annualInvestment) ||
    !Number.isFinite(expectedReturn) ||
    !Number.isFinite(duration) ||
    duration <= 0
  ) {
    return [];
  }

  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInvestmentThisYear = (annualData[i - 1]?.totalInvestment || initialInvestment) + annualInvestment;
    const totalInterestThisYear = interestEarnedInYear + (annualData[i - 1]?.totalInterest || 0);

    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
      totalInvestment: totalInvestmentThisYear, // total investment made so far (cumulative)
      totalInterest: totalInterestThisYear
    });
  }
  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
