import React, { Component } from 'react';
import logo from './bonsaiblack.png';
import './App.css';
import { fetchQuestions } from "./Utils/API/index.js";
import TriviaJSON from './Utils/API/index.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingsListed: false
    }
  }

  toggleSettings = () => {
    this.setState({
      settingsListed: !this.state.settingsListed
    });
    console.log(this.state)
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Trivial
          </h1>
          <button onClick={this.toggleSettings} className="Start-game">Reach the Top</button>
        </header>
        <TriviaJSON/>
      </div>
    );
  }
}

export default App;
