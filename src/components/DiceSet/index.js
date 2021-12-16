import React from "react";
import Dice from "../../helperfunctions/dice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function DiceSet(props){

    let dices = props.availableDices
        
    return (
        <>
           
            <Row>
                {dices.map((item, index) =>
                    
                    <Col xs={4} key={index}>
                        <div className={`d-flex justify-content-center ${props.plusOneActivated ? 'selectedPulse' : ''}`}>

                            <Dice turnState={props.turnState} onDiceSelect={props.onDiceSelect} dice={item}/>
                        </div>
                    
                    </Col>

                    )}
                </Row>
            
        </>
    )
}

export default DiceSet