
import React, { useState } from 'react';

const FDCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateMaturity = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(tenure);

    const maturity = p * Math.pow(1 + r, t);
    setMaturityAmount(maturity.toFixed(2));
  };

  return (
    <div>
      <h2>Fixed Deposit Calculator</h2>
      <div>
        <label>
          Principal Amount: 
          <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Interest Rate (%): 
          <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Tenure (years): 
          <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={calculateMaturity}>Calculate Maturity</button>
      </div>
      {maturityAmount !== null && (
        <div>
          <h3>Maturity Amount: {maturityAmount}</h3>
        </div>
      )}
    </div>
  );
};

export default FDCalculator;
