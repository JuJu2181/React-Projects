import React from "react";
import Question from "../components/Question";
import Button from "../components/Button";
import { nanoid} from "nanoid";

function Questions() {
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
        // using local storage
        // to check if questions have been already fetched in local storage or not
        // const checkQuestion = localStorage.getItem("questions");
        // if (checkQuestion !== "undefined" && checkQuestion !== null) {
        //     // this means questions have already been fetched
        //     setQuestions(JSON.parse(checkQuestion));
        // } else {
        //     // fetch data from the api
        //     const res = await fetch(
        //         `https://opentdb.com/api.php?amount=${questionsCount}&type=multiple`
        //     );
        //     const data = await res.json();
        //     const formattedQuestions = formatQuestion(data.results);
        //     console.log(formattedQuestions);
        //     // set the fetched questions
        //     // localStorage.setItem("questions", JSON.stringify(data.results));
        //     // setQuestions(data.results);
        // }

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
            <Button text="Check Answers" path="/questions"/>
        </div>
    );
}

export default Questions;
