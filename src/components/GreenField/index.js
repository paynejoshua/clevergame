import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DiceElement from "../../helperfunctions/dice";
import {GreenDiceCheck} from "../../helperfunctions/CheckDice"

function GreenField(props){

    const GreenSquares = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]


    const handleClick = (item, index, props) => {
        if(GreenDiceCheck(item, index, props)){
            let setColorOfDice = {...props.lastSelectedDice}
            setColorOfDice.color = "Green"
            props.state.push(setColorOfDice)
            props.onDicePlaced()
        }
    }


    return(
        <>
            <Container className="mt-3">
                <Card style={{borderColor: "green", borderWidth: "3px"}}>
                    <Row>
                        <Col className="d-flex justify-content-evenly">                        
                            {GreenSquares.map((item, index) => {
                                return(
                                   <div key={index}>
                                    {
                                        props.state.length > index
                                        ? <DiceElement disabledClick={true} dice={props.state[index]}/>
                                    : <div onClick={() => handleClick(item, index, props)} style={{fontSize: "2rem"}} className={`gameSquare d-inline-block ${GreenDiceCheck(item, index, props) ? "selectedPulse greenBorder" : ""}`}>{item}<span>≥</span></div>
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

export default GreenField