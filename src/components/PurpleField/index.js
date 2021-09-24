import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import TurnState from "../../helperfunctions/types";
import DiceElement from "../../helperfunctions/dice";

function PurpleField(props){

    const PurpleSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    const purpleDiceCheck = (item, index) => {
        return (props.turnState === TurnState.PlaceDie 
            && index === props.state.length 
            &&  (props.lastSelectedDice.color === "Purple" || props.lastSelectedDice.color === "White")
            && (props.state.length === 0
            || props.lastSelectedDice.number > props.state[props.state.length -1].number
            || props.state[props.state.length -1].number === 6)

            ) 
    
    }

    const handleClick = (item, index) => {
        if(purpleDiceCheck(item, index)){
            let setColorOfDice = {...props.lastSelectedDice}
            setColorOfDice.color = "Purple"
            props.state.push(setColorOfDice)
            props.onDicePlaced()
        }
    }

    return(
        <>
            <Container className="mt-3">
                <Card style={{borderColor: "purple", borderWidth: "3px"}}>
                    <Row>
                        <Col className="d-flex justify-content-evenly">                        
                            {PurpleSquares.map((item, index) => {
                                return(
                                   <div key={item}>
                                    {
                                        props.state.length > index
                                        ? <DiceElement disabledClick={true} dice={props.state[index]}/>
                                        : <div onClick={() => handleClick(item, index)} style={{fontSize: "2rem", textAlign: "center"}} className={`gameSquare d-inline-block ${purpleDiceCheck(item, index) ? "selectedPulse purpleBorder" : ""}`}>{item === 1 ? "" :  <span>></span>}</div>
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

export default PurpleField