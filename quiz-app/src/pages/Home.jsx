import React from "react";
import Button from "../components/Button";
import TopBlob from "../components/TopBlob";
import BottomBlob from "../components/BottomBlob";

function Home() {
    return (
        <div className="home">
            <TopBlob/>
            <h2 className="home-title">Quizzical</h2>
            <p className="home-desc">A simple react quiz game</p>
            <Button text="Start Quiz" />
            <BottomBlob />
        </div>
    );
}

export default Home;
