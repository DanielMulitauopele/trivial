import React, { Component } from 'react';
import logo from './bonsaiblack.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Trivial
          </h1>
          <p>Reach the Top</p>
        </header>
      </div>
    );
  }
}

export default App;
