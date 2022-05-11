import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne,faDiceTwo,faDiceThree,faDiceFour,faDiceFive,faDiceSix } from '@fortawesome/free-solid-svg-icons'

export default function Dice(props) {

    // const styles = {
    //     backgroundColor: props.isHeld ? "#59E391": "#ffffff"
    // }

    const icons = {
        "1": faDiceOne,
        "2": faDiceTwo,
        "3": faDiceThree,
        "4": faDiceFour,
        "5": faDiceFive,
        "6": faDiceSix
    }

    return <div className={props.isHeld ? "dice-green" : "dice"} onClick={props.holdDice}>
        <FontAwesomeIcon icon={ icons[props.value]} className="dice-icon"/>
    </div>
}
