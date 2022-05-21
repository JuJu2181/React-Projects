import React from "react";
import Question from "../components/Question";
import Button from "../components/Button";

function Questions() {
    // state for all questions
    const [questions, setQuestions] = React.useState([]);

    React.useEffect(() => {
        fetchQuestions();
    }, []);

    // fetching the data from api
    const fetchQuestions = async (questionsCount = 5) => {
        // to check if questions have been already fetched in local storage or not
        const checkQuestion = localStorage.getItem("questions");
        if (checkQuestion !== "undefined" && checkQuestion !== null) {
            // this means questions have already been fetched
            setQuestions(JSON.parse(checkQuestion));
        } else {
            // fetch data from the api
            const res = await fetch(
                `https://opentdb.com/api.php?amount=${questionsCount}&type=multiple`
            );
            const data = await res.json();
            console.log(data.results);
            // set the fetched questions
            localStorage.setItem("questions", JSON.stringify(data.results));
            setQuestions(data.results);
        }
    };

    // converting state data to jsx element
    const quizQuestions = questions.map((quizQuestion, index) => {
        return (
            <Question
                question={quizQuestion.question}
                correct_answer={quizQuestion.correct_answer}
                incorrect_answers={quizQuestion.incorrect_answers}
                key={index}
            />
        );
    });

    return (
        <div className="questions-wrapper">
            <div className="question-list">{quizQuestions}</div>
            <Button text="Check Answers" path="/questions"/>
        </div>
    );
}

export default Questions;
