import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DiceElement from "../../helperfunctions/dice";
import {CanPlaceGreenDice, GreenSquares} from "../../helperfunctions/CheckDice"

function GreenField(props){

    


    const handleClick = (item, index, props) => {
        if(CanPlaceGreenDice(item, props.lastSelectedDice, props.turnState, props.state, index)){
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
                                    : <div onClick={() => handleClick(item, index, props)} style={{fontSize: "2rem"}} className={`gameSquare d-inline-block ${CanPlaceGreenDice(item, props.lastSelectedDice, props.turnState, props.state, index) ? "selectedPulse greenBorder" : ""}`}>{item}<span>≥</span></div>
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