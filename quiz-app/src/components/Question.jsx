import React from "react";
import Answer from "./Answer";
import { nanoid} from 'nanoid';

function Question({ question, correct_answer, incorrect_answers }) {

  const allAnswers = [...incorrect_answers, correct_answer];
  const formattedAnswers = allAnswers.map(answer => { 
    return {
      id: nanoid(),
      answer: answer,
      isSelected: false
    }
  });
  // list of all 4 answers 
  const [answers, setAnswers] = React.useState(formattedAnswers);
  
  // function to hold selected answer 
  const holdSelectedAnswer = (id) => {
    setAnswers(oldAnswers => oldAnswers.map(
      oldAnswer => { 
        return oldAnswer.id === id ? {...oldAnswer, isSelected: !oldAnswer.isSelected}:oldAnswer
      }
    ));
  }
  
  const options = answers.map((option) => (
    <Answer answer={option.answer} isCorrect={option === correct_answer} key={option.id} isSelected={option.isSelected} selectAnswer={()=>holdSelectedAnswer(option.id)}/>
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
