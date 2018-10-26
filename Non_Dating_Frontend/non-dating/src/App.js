import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Display many different, very specific "make or break" attributes (physical, personality, or other).
//Weigh matching attributes against non-matching and product a score?
// Specify the matching and non-matcbing attributes?


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    );
  }
}

export default App;
