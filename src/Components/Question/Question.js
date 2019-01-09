import React from 'react';
import './Question.css';

const Question = (props, index) => {
  return(
    <div key={index} className="container">
      <h3 className="question">{props.question.question}</h3>
      <p className="category">Category: {props.question.category}</p>
      <p className="difficulty">Difficulty: {props.question.difficulty}</p>

      <form action="" className="answers">
        <ul>
          <li><input type="radio" name="choice" value="answer-1" />{props.question.correct_answer}</li>
          <li><input type="radio" name="choice" value="answer-2" />{props.question.incorrect_answers[0]}</li>
          <li><input type="radio" name="choice" value="answer-3" />{props.question.incorrect_answers[1]}</li>
          <li><input type="radio" name="choice" value="answer-4" />{props.question.incorrect_answers[2]}</li>
        </ul>
      </form>
    </div>
  )
}

export default Question;
