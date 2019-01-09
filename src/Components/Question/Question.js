import React from 'react';

const Question = (props, index) => {
  return(
    <div key={index}>
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
