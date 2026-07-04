import React from "react";
import "./App.css";
import officeImage from "./office.jpg";

function App() {
  const office = {
    name: "Tech Park",
    rent: 55000,
    address: "Bangalore"
  };

  const officeList = [
    {
      name: "Tech Park",
      rent: 55000,
      address: "Bangalore"
    },
    {
      name: "Business Hub",
      rent: 75000,
      address: "Hyderabad"
    },
    {
      name: "Corporate Tower",
      rent: 65000,
      address: "Chennai"
    }
  ];

  return (
    <div className="container">
      <h1>Office Space Rental App</h1>

      <img src={officeImage} alt="Office Space" width="400" height="250" />

      <h2>Office Details</h2>

      <p><strong>Name:</strong> {office.name}</p>

      <p>
        <strong>Rent:</strong>{" "}
        <span style={{ color: office.rent < 60000 ? "red" : "green" }}>
          ₹{office.rent}
        </span>
      </p>

      <p><strong>Address:</strong> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item, index) => (
        <div key={index} className="card">
          <p><strong>Name:</strong> {item.name}</p>

          <p>
            <strong>Rent:</strong>{" "}
            <span style={{ color: item.rent < 60000 ? "red" : "green" }}>
              ₹{item.rent}
            </span>
          </p>

          <p><strong>Address:</strong> {item.address}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;