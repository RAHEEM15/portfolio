import React, {useState} from 'react'

const Salarycalculator = () => {

    const [hourlyRate, setHourlyRate] = useState('');
  const [hoursWorkedPerWeek, setHoursWorkedPerWeek] = useState(0);
  const [weeksWorkedPerYear, setWeeksWorkedPerYear] = useState(0);
  const [annualSalary, setAnnualSalary] = useState(0);
  const [weeklysalary, setweeklysalary]= useState(0);

  const calculateSalary = () => {
    const calculatedSalary = hourlyRate /12 ;
    setAnnualSalary(calculatedSalary);
};
const weekly = () => {
    const weekly = hourlyRate /52 ;
    setweeklysalary(weekly);
};


  return (
    <div>Salarycalculator
<h2>Annual Salary Calculator</h2>
      <div>
        <label htmlFor="hourlyRate">Hourly Rate:</label>
        <input
          type="number"
          id="hourlyRate"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(parseFloat(e.target.value))}
        />
      </div>

      
      {/* <div>
        <label htmlFor="hoursWorkedPerWeek">Hours Worked Per Week:</label>
        <input
          type="number"
          id="hoursWorkedPerWeek"
          value={hoursWorkedPerWeek}
          onChange={(e) => setHoursWorkedPerWeek(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="weeksWorkedPerYear">Weeks Worked Per Year:</label>
        <input
          type="number"
          id="weeksWorkedPerYear"
          value={weeksWorkedPerYear}
          onChange={(e) => setWeeksWorkedPerYear(parseFloat(e.target.value))}
        />
      </div> */}
      <button onClick={calculateSalary}>Calculate Annual Salary</button>
      <div>
        <h3>monthly Salary: ${annualSalary}</h3>
        <h3>weekly Salary: ${weekly}</h3>
      </div>
    </div>
  )
}

export default Salarycalculator