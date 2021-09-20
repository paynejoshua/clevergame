import React from "react";
import Card from "react-bootstrap/Card";
import DiceSet from "../DiceSet";
import Button from "react-bootstrap/Button"
import TurnState from "../../helperfunctions/types"

function DiceRoller(props){
    
    return(
        <>
            
            <Card style={{width: "18rem"}}>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-center">How Clever Are You?</Card.Title>
                        <DiceSet turnState={props.turnState} availableDices={props.availableDices} onDiceSelect={props.onDiceSelect} />
                    <div className="d-flex justify-content-center">
                        <Button disabled={props.turnState !== TurnState.RollDice} className={`mt-2 ${props.turnState === TurnState.RollDice ? "selectedPulse" : ""}`} onClick={props.turn === 3 ? props.onDiceReset : props.onRoll}>{props.turn === 3 ? "Reset Dice" : "Roll Dice"}</Button>
                    </div>

                </Card.Body>
            </Card>
                        

        </>
    )
}

export default DiceRoller

