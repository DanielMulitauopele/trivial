import React, { Component } from 'react';
import logo from './bonsaiblack.png';
import './App.css';
import TriviaJSON from './Utils/API/index.js'
import QuestionContainer from './Components/QuestionContainer/QuestionContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingsListed: false,
      questions: []
    }
    this.json = new TriviaJSON();
  }

  async componentDidMount() {
    this.setQuestions();
  }

  toggleSettings = () => {
    this.setState({
      settingsListed: !this.state.settingsListed
    });
    console.log(this.state)
  };

  setQuestions = async () => {
    const questions = await this.json.getQuestions();
    this.setState({questions: questions})
    debugger;
  }

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
        <div>
          <QuestionContainer
          questions={questions}/>
        </div>
      </div>
    );
  }
}

export default App;
