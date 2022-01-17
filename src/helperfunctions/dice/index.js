import React from "react";
import DiceShortCut from "../../components/DiceShortCut";
import {TurnState} from "../types";


function DiceElement(props){


    function getDiceImage(){
        
            switch(props.dice.number){
                case 1: return DiceShortCut.OneDice
                case 2: return DiceShortCut.TwoDice
                case 3: return DiceShortCut.ThreeDice
                case 4: return DiceShortCut.FourDice
                case 5: return DiceShortCut.FiveDice
                case 6: return DiceShortCut.SixDice
                    default: return ""
    
            }
        
        
    }


    const handleClick = (dice) => {
        if(props.plusOneActivated){
            props.setPlusOneActivated(false)
        }

        props.onDiceSelect(dice)
    }

    return (
        <>
        {
        
        <img 
        src={getDiceImage()} 
        alt={`${props.dice.number} dice`} 
        className={`dice ${props.dice.markedForPlatter ? 'markForPlatter' : 'diceBorder'}  ${props.turnState === TurnState.SelectDie ? 'selectedPulse': ""} ${props.disabledClick ? 'nonSelectable' : ''}`} 
        onClick={() => handleClick(props.dice)} 
        style={{backgroundColor: props.dice.color}} />
           }
                

        </>
    )
}

export default DiceElement