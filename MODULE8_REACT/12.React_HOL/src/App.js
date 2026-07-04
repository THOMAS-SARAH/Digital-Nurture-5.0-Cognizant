import React, { useState } from "react";
import FlightDetails from "./components/FlightDetails";
import GuestPage from "./components/GuestPage";
import UserPage from "./components/UserPage";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <h1>Flight Ticket Booking App</h1>

      <FlightDetails />

      {isLoggedIn ? <UserPage /> : <GuestPage />}

      {isLoggedIn ? (
        <LogoutButton logout={logout} />
      ) : (
        <LoginButton login={login} />
      )}
    </div>
  );
}

export default App;