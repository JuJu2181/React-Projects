import React from "react";
import Dice from "./components/Dice";
import { nanoid} from "nanoid";


export default function App() { 
    
    // To generate list of 10 random numbers from 0 to 6
    // algorithmic solution 
    // function allNewDiceA() {
    //     const newDice = []
    //     for (let i = 0; i < 10; i++) { 
    //         newDice.push(Math.ceil(Math.random()*6));
    //     }
    //     return newDice;
    // }
    
    // only suitable for array not for dictionary
    
    // helper function to generate single dice randomly
    const generateNewDice = () => ({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
    })
    
    const allNewDice = () => Array(10).fill().map(generateNewDice);

    const [dice, setDice] = React.useState(allNewDice());
    
    const holdDice = (id) => { 
        setDice(oldDice => oldDice.map(
            dice => { 
                return dice.id === id ? { ...dice, isHeld: !dice.isHeld }
                    : dice
            }
        ));
    }

    const diceElements = dice.map(dice => <Dice key={dice.id} value={dice.value} isHeld={dice.isHeld} holdDice={ ()=>holdDice(dice.id) }/>)

    const handleRoll = () => { 
        setDice(oldDice => oldDice.map(
            dice => { 
                return dice.isHeld ? dice : generateNewDice()
            }
        ));
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