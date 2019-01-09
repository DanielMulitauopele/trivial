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
