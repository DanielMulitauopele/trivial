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
          <a>Reach the Top</a>
        </header>
      </div>
    );
  }
}

export default App;
