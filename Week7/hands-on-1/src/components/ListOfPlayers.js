
import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: "Virat", score: 90 },
    { name: "Rohit", score: 45 },
    { name: "Dhoni", score: 100 },
    { name: "Rahul", score: 30 },
    { name: "Jadeja", score: 80 },
    { name: "Shami", score: 55 },
    { name: "Bumrah", score: 65 },
    { name: "Gill", score: 92 },
    { name: "Kohli", score: 60 },
    { name: "Pant", score: 40 },
    { name: "Hardik", score: 85 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70:</h2>
      <ul>
        {filteredPlayers.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
