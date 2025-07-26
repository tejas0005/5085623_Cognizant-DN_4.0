import React from 'react';
import '../Stylesheets/mystyles.css';

function CalculateScore(props) {
  const average = props.total / props.goal;

  return (
    <div className="score-box">
      <h2>Student Score Details</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>College:</strong> {props.school}</p>
      <p><strong>Total Score:</strong> {props.total}</p>
      <p><strong>Number of Subjects:</strong> {props.goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}</p>
    </div>
  );
}

export default CalculateScore;
