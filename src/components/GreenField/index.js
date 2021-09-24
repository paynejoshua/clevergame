import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import TurnState from "../../helperfunctions/types";
import DiceElement from "../../helperfunctions/dice";

function GreenField(props){

    const GreenSquares = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]

    const greenDiceCheck = (item, index) => {
        return (props.turnState === TurnState.PlaceDie 
            && index === props.state.length 
            && (props.lastSelectedDice.color === "Green" || props.lastSelectedDice.color === "White")
            && (props.lastSelectedDice.number >= item || props.lastSelectedDice.number >= props.state[props.state.length -1].number)

            ) 
    
    }

    const handleClick = (item, index) => {
        if(greenDiceCheck(item, index)){
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
                                    : <div onClick={() => handleClick(item, index)} style={{fontSize: "2rem"}} className={`gameSquare d-inline-block ${greenDiceCheck(item, index) ? "selectedPulse greenBorder" : ""}`}>{item}<span>≥</span></div>
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