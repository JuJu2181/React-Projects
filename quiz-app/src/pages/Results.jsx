import React from "react";
import Question from "../components/Question";
import Button from "../components/Button";
import { nanoid} from "nanoid";

function Results() {
    // state for all questions
    const [questions, setQuestions] = React.useState([]);

    React.useEffect(() => {
        fetchQuestions();
    }, []);

    // function to format questions by adding id and isSelected property
    const formatQuestion = (questions) => { 
        const formattedQuestions = questions.map((question) => { 
            return {
                ...question,
                id: nanoid(),
            };
        });
        return formattedQuestions;
    }

    // fetching the data from api
    const fetchQuestions = async (questionsCount = 5) => {

        //fetching in every run
        const res = await fetch(
            `https://opentdb.com/api.php?amount=${questionsCount}&type=multiple`
        );
        const data = await res.json();
        const formattedQuestions = formatQuestion(data.results);
        setQuestions(formattedQuestions);
    };

    // converting state data to jsx element
    const quizQuestions = questions.map((quizQuestion) => {
        return (
            <Question
                question={quizQuestion.question}
                correct_answer={quizQuestion.correct_answer}
                incorrect_answers={quizQuestion.incorrect_answers}
                key={quizQuestion.id}
            />
        );
    });


    return (
        <div className="questions-wrapper">
            <div className="question-list">{quizQuestions}</div>
            <div className="score-container">
                <h3 className="result">You have Scored 5/5 correct answers</h3>
                <Button text="Play Again" path="/questions" />
            </div>
        </div>
    );
}

export default Results
