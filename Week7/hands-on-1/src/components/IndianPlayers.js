import React from 'react';

const IndianPlayers = () => {
  const allIndianPlayers = [
    "Virat", "Rohit", "Dhoni", "Gill", "Jadeja",
    "Shami", "Bumrah", "Pant", "Hardik", "Rahul", "Sundar"
  ];

  const oddTeam = allIndianPlayers.filter((_, idx) => idx % 2 === 0);   // 0,2,4...
  const evenTeam = allIndianPlayers.filter((_, idx) => idx % 2 !== 0);  // 1,3,5...

  return (
    <div>
      <h2>Odd Team Players:</h2>
      <ul>
        {oddTeam.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players:</h2>
      <ul>
        {evenTeam.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
