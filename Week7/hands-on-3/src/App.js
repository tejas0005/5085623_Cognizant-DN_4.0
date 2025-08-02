import React, { useState } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    console.log("Hello from Tejas!");
  };

  const sayWelcome = (message) => {
    alert(`Message: ${message}`);
  };

  const handleSyntheticEvent = (e) => {
    e.preventDefault(); // synthetic event
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>React Event Handling Lab</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <hr />

      <button onClick={() => sayWelcome("Welcome to React!")}>Say Welcome</button>

      <hr />

      <button onClick={handleSyntheticEvent}>OnPress</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
