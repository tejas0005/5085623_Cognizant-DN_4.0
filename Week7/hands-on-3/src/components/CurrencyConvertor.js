import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = parseFloat(rupees) / 90;
    setEuros(converted.toFixed(2));
  };

  return (
    <div>
      <h3>Currency Convertor</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
        />
        <button type="submit">Convert to Euro</button>
      </form>
      {euros && <p>Euro: €{euros}</p>}
    </div>
  );
};

export default CurrencyConvertor;
