import React, { Component } from 'react';

class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  render(){
    let questions = this.props.questions.map((question) => {
      <Question question={question}/>
    })

    return (
      <div>
        {questions}
      </div>
    )
  }
}

export default QuestionContainer;
