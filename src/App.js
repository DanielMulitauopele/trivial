import React, { Component } from 'react';
import logo from './bonsaiblack.png';
import branch from './branch.png';
import './App.css';
import './Components/QuestionContainer/QuestionContainer.css';
import TriviaJSON from './Utils/API/index.js'
import QuestionContainer from './Components/QuestionContainer/QuestionContainer'

const BranchStyle = {
  backgroundImage: `url(${branch})`,
  backgroundSize: 'cover'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsListed: false,
      questions: []
    }
    this.json = new TriviaJSON();
  }


  async componentDidMount() {
    this.setQuestions();
  }

  toggleQuestions = () => {
    this.setState({
      questionsListed: !this.state.questionsListed
    });
    console.log(this.state)
  };

  setQuestions = async () => {
    const questions = await this.json.getQuestions();
    this.setState({questions})
  }

  render() {
    if (this.state.questionsListed === true) {
      return (
        // <header className="Game-header" style={ BranchStyle }>
        //   <button onClick={this.toggleQuestions} className="End-game">Climb Down</button>
        // </header>
        <div>
          <div>
            <QuestionContainer questions={this.state.questions}/>
          </div>
        </div>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
              Trivial
            </h1>
            <button onClick={this.toggleQuestions} className="Start-game">Reach the Top</button>
          </header>
        </div>
      );
    }
  }
}

export default App;
