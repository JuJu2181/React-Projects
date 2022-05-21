import React from "react";
import Button from "../components/Button";


function Home() {
    return (
        <div className="home">
            <h2 className="home-title">Quizzy</h2>
            <p className="home-desc">A simple react quiz game</p>
            <Button text="Start Quiz" path="/questions"/>
        </div>
    );
}

export default Home;
