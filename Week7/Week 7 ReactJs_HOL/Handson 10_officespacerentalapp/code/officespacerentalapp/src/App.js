import React from "react";
import officeImage from "./images/office.jpg"; // 🔁 import the image

function App() {
  const office = {
    name: "Global Tech Park",
    rent: 55000,
    address: "Whitefield, Bangalore",
    image: officeImage
  };

  const rentStyle = {
    color: office.rent < 60000 ? "red" : "green"
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h1>Office Space Rental</h1>
      <div style={{ border: "1px solid gray", padding: "10px", width: "400px" }}>
        <img
          src={office.image}
          alt={office.name}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <h2>{office.name}</h2>
        <p style={rentStyle}>Rent: ₹{office.rent}</p>
        <p>Address: {office.address}</p>
      </div>
    </div>
  );
}

export default App;
