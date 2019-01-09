import { Component } from 'react';

class TriviaJSON extends Component {
  getQuestions = async () => {
    const data = await fetch('https://opentdb.com/api.php?amount=50&difficulty=hard&type=multiple')
    const response = await data.json()
    return response.results
  }
}

export default TriviaJSON;
