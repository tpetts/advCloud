import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import './App.css';

const App = () => {

  // Create additional state to hold user input for the limit and start properties
  const [input, updateInput] = useState({ limit: 5, start: 0 })

  // Create a new function to allow users to update the input values
function updateInputValues(type, value) {
  updateInput({ ...input, [type]: value })
}


  // Create coins variable ans set to empty array
  const [coins, updateCoins] = useState([])

  // Define function to all API
  const fetchCoins = async() => {
    const { limit, start } = input;
    const data = await API.get('cryptoapi', `/coins?limit=${limit}&start=${start}`);
    updateCoins(data.coins);
  }

  // Define function to all API
  // async function fetchCoins() {
  //   const { limit, start } = input
  //   const data = await API.get('cryptoapi', `/coins?limit=${limit}&start=${start}`)
  //   updateCoins(data.coins)
  // }

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

      {/* Add input fields to the UI for user input */}
      
      <input
        placeholder="start"
        onChange={e => updateInputValues('start', e.target.value)}
      />

      <input
        onChange={e => updateInputValues('limit', e.target.value)}
        placeholder="limit"
      />

      {/* Add button to the UI to give user the option to call the API */}
      <button onClick={fetchCoins}>Fetch Coins</button>


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
