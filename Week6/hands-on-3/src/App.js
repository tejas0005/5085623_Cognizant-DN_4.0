import React from 'react';
import './App.css';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore name="Tejas" school="KL University" total={450} goal={5} />
    </div>
  );
}

export default App;
