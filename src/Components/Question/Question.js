import React from 'react';
import './Question.css';

const Question = (props, index) => {
  return(
    <div key={index} className="container">
      <h3 className="question">{props.question.question}</h3>
      <p className="category">{props.question.category}</p>
      <p className="difficulty">{props.question.difficulty}</p>

      <ul className="answers">
        <li>{props.question.correct_answer}</li>
        <li>{props.question.correct_answer}</li>
        <li>{props.question.correct_answer}</li>
        <li>{props.question.correct_answer}</li>
      </ul>
    </div>
  )
}

export default Question;
