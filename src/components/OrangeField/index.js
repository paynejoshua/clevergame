import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DiceElement from "../../helperfunctions/dice"; 
import {OrangeDiceCheck} from "../../helperfunctions/CheckDice"

function OrangeField(props){
    
    const OrangeSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    const handleClick = (item, index, props) => {
        if(OrangeDiceCheck(item, index, props)){
            let setColorOfDice = {...props.lastSelectedDice}
            setColorOfDice.color = "Orange"
            props.state.push(setColorOfDice)
            props.onDicePlaced()
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
                                        : <div onClick={() => handleClick(item, index, props)} className={`gameSquare d-inline-block ${OrangeDiceCheck(item, index, props) ? "selectedPulse orangeBorder" : ""}`}></div>
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