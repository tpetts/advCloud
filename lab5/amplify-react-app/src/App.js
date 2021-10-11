import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import './App.css';

function App() {

  // Create coins variable ans set to empty array
  const [coins, updateCoins] = useState([])

  // Define function to all API
  async function fetchCoins() {
    const data = await API.get('cryptoapi', '/coins')
    updateCoins(data.coins)
  }

  // Call fetchCoins function when the component loads
  useEffect(() => {
    fetchCoins()
  }, [])

  return (
    <div className="App">

      {
        coins.map((coin, index) => (
          <div key={index}>
          <h2>{coin.name} - {coin.symbol}</h2>
          <h5>${coin.price_usd}</h5>
          </div>
        ))
      }

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
