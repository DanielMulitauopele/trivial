import React, { Component } from 'react';
import logo from './bonsaiblack.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startedGame: false
    }
  }

  startGame = () => {
    this.setState({
      startedGame: true
    });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Trivial
          </h1>
          <a href={this.startGame} className="Start-game">Reach the Top</a>
        </header>
      </div>
    );
  }
}

export default App;
