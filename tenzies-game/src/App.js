import React from "react";
import Dice from "./components/Dice";


export default function App() { 
    
    // To generate list of 10 random numbers from 0 to 6
    // algorithmic solution 
    function allNewDiceA() {
        const newDice = []
        for (let i = 0; i < 10; i++) { 
            newDice.push(Math.ceil(Math.random()*6));
        }
        return newDice;
    }
    
    const allNewDice = () => Array(10).fill().map(() => Math.ceil(Math.random() * 6));
    
    const [dice, setDice] = React.useState(allNewDice());

    const diceElements = dice.map(dice => <Dice value={ dice}/>)

    const handleRoll = () => { 
        setDice(allNewDice());
    }

    return <div className="main-wrapper">
        <main>
            <h1 className="game-title">Tenzies</h1>
            <p className="game-desc">Roll until all dice are same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-wrapper">
                { diceElements}
            </div>
            <button className="roll-btn" onClick={handleRoll}>Roll</button>
        </main>
    </div>
}