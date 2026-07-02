import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';
import './App.css';

function App() {

  const flag = true;

  if(flag)
  {
    return (
      <div className="App">
        <ListofPlayers />
      </div>
    );
  }
  else
  {
    return (
      <div className="App">
        <IndianPlayers />
      </div>
    );
  }

}

export default App;