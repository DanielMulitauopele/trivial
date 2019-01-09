import React from 'react';
import './Question.css';

const Question = (props, index) => {
  return(
    <div key={index} className="container">
      <h3>{props.question.question}</h3>
      <p>{props.question.category}</p>
      <p>{props.question.difficulty}</p>

      <ul>
        <li>{props.question.correct_answer}</li>
        <li>{props.question.correct_answer}</li>
        <li>{props.question.correct_answer}</li>
        <li>{props.question.correct_answer}</li>
      </ul>
    </div>
  )
}

export default Question;
