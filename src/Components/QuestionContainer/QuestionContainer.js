import React, { Component } from 'react';

class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  displayQuestions = () => {
    let questions = this.props.questions.results.map((question, index) => {
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
  }

  render(){
    return (
      <div>
        {this.state.questions}
      </div>
    )
  }
}

export default QuestionContainer;
// export const QuestionContainer (props) {
//
//   {
//  return results.json();
// }).then(data => {
//  let questions = data.results.map((question, index) => {
//    return(
//      <div key={index}>
//      <h3>{question.question}</h3>
//      <p>{question.category}</p>
//      <p>{question.difficulty}</p>
//
//      <ul>
//        <li>{question.correct_answer}</li>
//        <li>{question.correct_answer}</li>
//        <li>{question.correct_answer}</li>
//        <li>{question.correct_answer}</li>
//      </ul>
//      </div>
//    )
//  })
//  this.setState({questions: questions})
// })
// };
//
//   return (
//     <Question(props)
//
//     />
//   )
// }
