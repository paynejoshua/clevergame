import React from "react";
import Dice from "../dice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function DiceSet(props){

    let dices = props.availableDices

    
    
    return (
        <>
           
            <Row>
                {dices.map((item, index) =>
                    
                    <Col key={index}>
                        <Dice turnState={props.turnState} onDiceSelect={props.onDiceSelect} dice={item}/>
                    </Col>

                    )}
                </Row>
            
        </>
    )
}

export default DiceSet