import React from "react";
import Dice from "../dice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function DiceSet(props){


    const dices = ["Yellow", "Blue", "White", "Green", "Orange", "Purple"]

    
    return (
        <>
            { props.rolled 
             && 
            <Row>
                {dices.map(item =>
                    
                    <Col key={item}>
                        <Dice diceResult={Math.floor(Math.random() * 6) + 1} bgColor={item}/>
                    </Col>

                    )}
                </Row>
            
}
        </>
    )
}

export default DiceSet