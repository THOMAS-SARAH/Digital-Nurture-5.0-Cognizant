import React from "react";

function FlightDetails() {
  return (
    <div className="card">
      <h2>Available Flights</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI-101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>₹4500</td>
          </tr>

          <tr>
            <td>AI-205</td>
            <td>Chennai</td>
            <td>Bangalore</td>
            <td>₹2800</td>
          </tr>

          <tr>
            <td>AI-350</td>
            <td>Hyderabad</td>
            <td>Kolkata</td>
            <td>₹5200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FlightDetails;