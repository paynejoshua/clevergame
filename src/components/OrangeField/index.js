import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DiceElement from "../../helperfunctions/dice"; 
import {CanPlaceOrangeDice, OrangeSquares} from "../../helperfunctions/CheckDice"

function OrangeField(props){
    
    

    const handleClick = (index) => {
        if(CanPlaceOrangeDice(props.lastSelectedDice, props.turnState, props.state, index)){
            let setColorOfDice = {...props.lastSelectedDice}
            setColorOfDice.color = "Orange"
            props.state.push(setColorOfDice)
            props.onDicePlaced(props.lastSelectedDice, "Orange", index)
        }
    }

    return(
        <>
            <Container className="mt-3">
                <Card style={{borderColor: "orange", borderWidth: "3px"}}>
                    <Row>
                        <Col className="d-flex justify-content-evenly">                        
                            {OrangeSquares.map((item, index) => {
                                return(
                                   <div key={index}>
                                       {
                                        props.state.length > index
                                        ? <DiceElement disabledClick={true} dice={props.state[index]}/>
                                        : <div
                                            onClick={() => handleClick(index)} 
                                            className={`gameSquare d-inline-block ${CanPlaceOrangeDice(props.lastSelectedDice, props.turnState, props.state, index) ? "selectedPulse orangeBorder" : ""}`}
                                            style={{textAlign: "center", fontSize: "2rem", color: "orange", fontWeight: "bold"}} >
                                                {
                                                index === 3 ? "x2"
                                                : index === 6 ? "x2"
                                                : index === 8 ? "x2"
                                                : index === 10 ? "x3" : "" } 
                                            </div>
                                        }
                                    </div>
                                   
                                )
                            })}
                        </Col>

                    </Row>

                </Card>
            </Container>
        </>
    )
}

export default OrangeField