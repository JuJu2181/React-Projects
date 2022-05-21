import React from "react";

function Answer({ answer, isCorrect,isSelected, selectAnswer}) {
    return <div className={`answer ${isSelected ? "selected-answer" : ""}`} dangerouslySetInnerHTML={{ __html: answer }} onClick={ selectAnswer}></div>;
}

export default Answer;
