import React from "react";
import DiceSelect from "../../helperfunctions/DiceSelect";
import DiceShortCut from "../DiceShortCut"

function DiceElement(props){


    return (
        <>
           
                { props.diceResult === 1
                
                ? 
                    <img src={DiceShortCut.OneDice} alt="1 dice" className="dice" onClick={DiceSelect} dicenumber={1} dicecolor={props.bgColor} style={{backgroundColor: props.bgColor}} />

                : props.diceResult === 2 
                
                ?
                    <img src={DiceShortCut.TwoDice} alt="2 dice" className="dice" onClick={DiceSelect} dicenumber={2} dicecolor={props.bgColor} style={{backgroundColor: props.bgColor}} />

                : props.diceResult === 3

                ?
                    <img src={DiceShortCut.ThreeDice} alt="3 dice" className="dice" onClick={DiceSelect} dicenumber={3} dicecolor={props.bgColor} style={{backgroundColor: props.bgColor}} />

                : props.diceResult === 4

                ?
                    <img src={DiceShortCut.FourDice} alt="4 dice" className="dice" onClick={DiceSelect} dicenumber={4} dicecolor={props.bgColor} style={{backgroundColor: props.bgColor}} />

                : props.diceResult === 5

                ?

                    <img src={DiceShortCut.FiveDice} alt="5 dice" className="dice" onClick={DiceSelect} dicenumber={5} dicecolor={props.bgColor} style={{backgroundColor: props.bgColor}} />

                : props.diceResult === 6

                &&

                    <img src={DiceShortCut.SixDice} alt="6 dice" className="dice" onClick={DiceSelect} dicenumber={6} dicecolor={props.bgColor} style={{backgroundColor: props.bgColor}} />

                    }

        </>
    )
}

export default DiceElement