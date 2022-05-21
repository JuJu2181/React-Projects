import React from "react";
import Answer from "./Answer";

function Question({ question, correct_answer, incorrect_answers }) {
  // list of all 4 answers 
  const allAnswers = [...incorrect_answers, correct_answer];
  
  const options = allAnswers.map((option, index) => (
    <Answer answer={option} isCorrect={option === correct_answer} key={ index}/>
  ));

  return (
    <div className="question">
      <h2 className="question-title" dangerouslySetInnerHTML={{ __html: question} }></h2>
      <div className="answers-list">
        {options}
        </div>
        </div>
    );
}

export default Question;
