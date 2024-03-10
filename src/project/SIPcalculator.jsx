import React, { useState } from 'react';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [annualReturn, setAnnualReturn] = useState('');
  const [investmentDuration, setInvestmentDuration] = useState('');
  const [futureValue, setFutureValue] = useState(null);

  const handleCalculate = () => {
    const monthlyRate = (1 + parseFloat(annualReturn) / 100) ** (1 / 12) - 1;
    const totalMonths = parseFloat(investmentDuration) * 12;

    const futureVal =
      parseFloat(monthlyInvestment) *
      (((1 + monthlyRate) ** totalMonths - 1) / monthlyRate) *
      (1 + monthlyRate);

    setFutureValue(futureVal.toFixed(2));
  };

  return (
    <div>
      <h2 > SIP Calculator</h2>
      <label>
        Monthly Investment:
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
        />
      </label>
      <br />
      <label>
        Annual Return (%):
        <input
          type="number"
          value={annualReturn}
          onChange={(e) => setAnnualReturn(e.target.value)}
        />
      </label>
      <br />
      <label>
        Investment Duration (years):
        <input
          type="number"
          value={investmentDuration}
          onChange={(e) => setInvestmentDuration(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      <br />
      {futureValue !== null && (
        <div>
          <h3>Future Value:</h3>
          <p>{`${futureValue}`}</p>
        </div>
      )}
    </div>
  );
};

export default SIPCalculator;
