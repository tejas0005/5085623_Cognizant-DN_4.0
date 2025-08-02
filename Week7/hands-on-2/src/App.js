import React from 'react';

const App = () => {
  const officeList = [
    {
      name: "TechPark One",
      rent: 55000,
      address: "Kondapur, Hyderabad",
      image: ""
    },
    {
      name: "Innovate Hub",
      rent: 75000,
      address: "MG Road, Bengaluru",
      image: ""
    },
    {
      name: "SmartSpace",
      rent: 60000,
      address: "Whitefield, Bengaluru",
      image: ""
    }
  ];

  const getRentStyle = (rent) => ({
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Office Space Rental App</h1>

      {officeList.map((office, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <img src={office.image} alt={office.name} style={{ width: "200px", height: "120px" }} />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p><strong>Rent:</strong> <span style={getRentStyle(office.rent)}>₹{office.rent}</span></p>
        </div>
      ))}
    </div>
  );
};

export default App;
