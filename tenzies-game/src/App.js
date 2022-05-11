import React from "react";
import Dice from "./components/Dice";
import { nanoid} from "nanoid";
import Confetti from "react-confetti";

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
    
    //* to check if the item called best_rolls exists previously in localstorage or not 
    // if (!localStorage.getItem("best_rolls")) { 
    //     localStorage.setItem("best_rolls",99);
    // }
    
    // * For Endgame we create a new state called tenzies and use useEffect hook 
    const [tenzies, setTenzies] = React.useState(false);

    //  to record number of rolls needed to finish game 
    const [rollsCount, setRollsCount] = React.useState(0);

    const [bestRolls, setBestRolls] = React.useState(localStorage.getItem("best_rolls") || 99);

    
    
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
    
    const handleRoll = (tenzies) => { 

        if (tenzies) { 
            if (rollsCount < bestRolls) { 
                setBestRolls(rollsCount);
                localStorage.setItem("best_rolls",rollsCount);
            }
            setRollsCount(0);
            setTenzies(false);
            setDice(allNewDice());
        } else {
            setRollsCount(prevCount => prevCount + 1);
            setDice(oldDice => oldDice.map(
                dice => { 
                    return dice.isHeld ? dice : generateNewDice()
                }
                ));
        }
        }
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value 
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) { 
            setTenzies(true);
            console.log("You Won");
        }
    }, [dice]);


        
    return <div className="main-wrapper">
        {tenzies && <Confetti />}
        <section className="scores">
            <div className="best">Best Roll: {bestRolls}</div>
            <div className="current">Current Roll: { rollsCount}</div>
        </section>
        <main>
            <h1 className="game-title">Tenzies</h1>
            <p className="game-desc">Roll until all dice are same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-wrapper">
                { diceElements}
            </div>
            <button className="roll-btn" onClick={()=>handleRoll(tenzies)}>{ tenzies ? "New Game":"Roll"}</button>
        </main>
    </div>
}