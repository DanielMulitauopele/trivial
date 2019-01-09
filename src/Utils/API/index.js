import { Component } from 'react';

class TriviaJSON extends Component {
  getQuestions = async () => {
    const data = await fetch('https://opentdb.com/api.php?amount=3&category=&difficulty=&type=')
    const response = await data.json()
    return response.results
  }
}

export default TriviaJSON;
