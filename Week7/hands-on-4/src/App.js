import React, { useState } from 'react';

const GuestPage = () => (
  <div>
    <h2>Welcome, Guest!</h2>
    <p>You can browse available flights.</p>
    <ul>
      <li>✈️ Hyderabad → Bangalore - ₹3,000</li>
      <li>✈️ Delhi → Mumbai - ₹4,500</li>
      <li>✈️ Chennai → Goa - ₹2,800</li>
    </ul>
  </div>
);

const UserPage = () => (
  <div>
    <h2>Welcome, User!</h2>
    <p>You can now book tickets for the available flights below:</p>
    <ul>
      <li>✈️ Hyderabad → Bangalore - <button>Book</button></li>
      <li>✈️ Delhi → Mumbai - <button>Book</button></li>
      <li>✈️ Chennai → Goa - <button>Book</button></li>
    </ul>
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let pageContent;
  if (isLoggedIn) {
    pageContent = <UserPage />;
  } else {
    pageContent = <GuestPage />;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Flight Ticket Booking App</h1>
      <div style={{ marginBottom: "15px" }}>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
      {pageContent}
    </div>
  );
}

export default App;
