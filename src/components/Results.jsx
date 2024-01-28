import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const result = calculateInvestmentResults(userInput);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intreset (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((year) => {
          const totalInterest =
            year.valueEndOfYear -
            year.annualInvestment * year.year -
            initialInvestment;

          const totalMountInvested = year.valueEndOfYear - totalInterest;

          return (
            <tr key={year.year}>
              <td>{year.year}</td>
              <td>{formatter.format(year.valueEndOfYear)}</td>
              <td>{formatter.format(year.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalMountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
