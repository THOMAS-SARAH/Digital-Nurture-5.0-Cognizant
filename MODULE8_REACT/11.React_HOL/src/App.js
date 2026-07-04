import React from "react";
import Counter from "./components/Counter";
import Welcome from "./components/Welcome";
import SyntheticEventDemo from "./components/SyntheticEventDemo";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Event Examples</h1>

      <Counter />
      <hr />

      <Welcome />
      <hr />

      <SyntheticEventDemo />
      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;