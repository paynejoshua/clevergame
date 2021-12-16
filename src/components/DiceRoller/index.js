import React from "react";
import Card from "react-bootstrap/Card";
import DiceSet from "../DiceSet";
import Button from "react-bootstrap/Button"
import {TurnState} from "../../helperfunctions/types"

function DiceRoller(props){
    
    const canRoll = () => {
        return(props.availableDices.length > 0 && props.rollNumber < 3)
    }

    return(
        <>
            
            <Card>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-center">How Clever Are You?</Card.Title>
                        <DiceSet plusOneActivated={props.plusOneActivated} turnState={props.turnState} availableDices={props.availableDices} onDiceSelect={props.onDiceSelect} />
                    <div className="d-flex justify-content-center">
                        <Button 
                        disabled={props.turnState !== TurnState.RollDice} 
                        className={`mt-2 ${props.turnState === TurnState.RollDice ? "selectedPulse" : ""}`} 
                        onClick={canRoll() ? props.onRoll  : props.onTurnComplete}>{canRoll() ? "Roll Dice"  : "Reset Dice"}</Button>
                    </div>

                </Card.Body>
            </Card>
                        

        </>
    )
}

export default DiceRoller

