import React, { Component } from 'react';

class TriviaJSON extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    response = fetch('https://opentdb.com/api.php?amount=3&category=&difficulty=&type=')
    const result = await response.json()
    return result
  }

  render() {
    return componentDidMount
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
