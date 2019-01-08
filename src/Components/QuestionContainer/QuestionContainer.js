export const QuestionContainer (props) {

  {
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

  return (
    <Question(props)

    />
  )
}
