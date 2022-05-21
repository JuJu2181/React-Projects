import React from "react";

function Answer({ answer, isCorrect }) {
    return <div className="answer" dangerouslySetInnerHTML={{ __html: answer} }></div>;
}

export default Answer;
