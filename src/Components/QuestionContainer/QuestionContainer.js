import React, { Component } from 'react';
import Question from '../Question/Question.js'

class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  render(){
    const questions = this.props.questions.map((question, index) => {
      return <Question key={index} question={question}/>
    })

    return (
      <div>
        {questions}
      </div>
    )
  }
}

export default QuestionContainer;
