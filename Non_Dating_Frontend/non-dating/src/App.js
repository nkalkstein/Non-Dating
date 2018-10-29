import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Display many different, very specific "make or break" attributes (physical, personality, or other).
//Weigh matching attributes against non-matching and product a score?
// Specify the matching and non-matcbing attributes?
// No photos necessary?
// Anonymously show photos and have attractiveness (maybe different qualitites?) voted on, for final score.
// Separately, actual "profile" will show no photo, but will show 'objective' attractiveness score.
// Combined with make or break attributes, importance of physical appearance (subdivided?) will determine final compatibility score.

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Non-Dating App
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
