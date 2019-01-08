import React, { Component } from 'react';

class TriviaJSON extends Component {
  constructor() {
    super();
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=3&category=&difficulty=&type=')
    .then(results => {
      return results.json();
    }).then(data => {
      let questions = data.results.map((question, index) => {
        return(
          <div key={index}>
          <h3>{question.question}</h3>
          <p>{question.category}</p>
          <p>{question.difficulty}</p>

          <ul>
            <li>{question.correct_answer}</li>
            <li>{question.correct_answer}</li>
            <li>{question.correct_answer}</li>
            <li>{question.correct_answer}</li>
          </ul>
          </div>
        )
      })
      this.setState({questions: questions})
    })
  };

  render() {
    return(
      <div>
        {this.state.questions}
      </div>
    )
  }
}

export default TriviaJSON;


// export const fetchQuestions = async (amount, category, difficulty, type) => {
//   const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
//   const response = await fetch(url, {
//     method: "GET"
//   })
//   const result = await response.json()
//   console.log(result)
//   return result
// }
