import React, { useState } from 'react';
import './MultiplicationTable.css';

const MultiplicationTable = () => {
  const [size, setSize] = useState(5); // Initial size of the table

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setSize(newSize || 0);
  };

  const generateTable = () => {
    const table = [];
    for (let i = 1; i <= size; i++) {
      const row = [];
      for (let j = 1; j <= size; j++) {
        row.push(<td key={j}>{i * j}</td>);
      }
      table.push(<tr key={i}>{row}</tr>);
    }
    return table;
  };

  return (
    <div>
      <label>
        Table Size:
        <input type="number" value={size} onChange={handleSizeChange} />
      </label>
      <table>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default MultiplicationTable;
