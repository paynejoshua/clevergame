import React from "react";
import DiceSelect from "../../helperfunctions/DiceSelect";
import DiceShortCut from "../DiceShortCut"

function DiceElement(props){


    return (
        <>
           
                { props.diceResult === 1
                
                ? 
                    <img src={DiceShortCut.OneDice} className="imgDice" onClick={DiceSelect} dicenumber={1} dicecolor={props.bgColor} style={{backgroundColor: props.bgColor}} />

                : props.diceResult === 2 
                
                ?
                    <img src={DiceShortCut.TwoDice} className="imgDice" onClick={DiceSelect} dicenumber={2} dicecolor={props.bgColor} style={{backgroundColor: props.bgColor}} />

                : props.diceResult === 3

                ?
                    <img src={DiceShortCut.ThreeDice} className="imgDice" onClick={DiceSelect} dicenumber={3} dicecolor={props.bgColor} style={{backgroundColor: props.bgColor}} />

                : props.diceResult === 4

                ?
                    <img src={DiceShortCut.FourDice} className="imgDice" onClick={DiceSelect} dicenumber={4} dicecolor={props.bgColor} style={{backgroundColor: props.bgColor}} />

                : props.diceResult === 5

                ?

                    <img src={DiceShortCut.FiveDice} className="imgDice" onClick={DiceSelect} dicenumber={5} dicecolor={props.bgColor} style={{backgroundColor: props.bgColor}} />

                : props.diceResult === 6

                &&

                    <img src={DiceShortCut.SixDice} className="imgDice" onClick={DiceSelect} dicenumber={6} dicecolor={props.bgColor} style={{backgroundColor: props.bgColor}} />

                    }

        </>
    )
}

export default DiceElement