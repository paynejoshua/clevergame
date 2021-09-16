import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DiceShortCut from "../DiceShortCut";
import DiceElement from "../../helperfunctions/dice"


function KeptDice(props){



    return (
        <>
           
            <Row>
                {[...Array(3)].map((item, index) => {
                    return (
                        <Col key={index}>
                            {props.selectedDice.length > index
                                ?
                                <DiceElement dice={props.selectedDice[index]}/>
                                : <div className="gameSquare" style={{ backgroundColor: "white" }}>{}</div>

                            }

                        </Col>
                    )

                })
                }
            </Row>
            

        </>
    )
}

export default KeptDice
