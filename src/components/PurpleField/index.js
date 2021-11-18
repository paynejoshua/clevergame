import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DiceElement from "../../helperfunctions/dice";
import {CanPlacePurpleDice, PurpleSquares} from "../../helperfunctions/CheckDice"

function PurpleField(props){

    


    const handleClick = (index) => {
        if(CanPlacePurpleDice(props.lastSelectedDice, props.turnState, props.state, index)){
            let setColorOfDice = {...props.lastSelectedDice}
            setColorOfDice.color = "Purple"
            props.state.push(setColorOfDice)
            props.onDicePlaced(props.lastSelectedDice, "Purple")
        }
    }

    return(
        <>
            <Container className="mt-3">
                <Card style={{borderColor: "purple", borderWidth: "3px"}}>
                    <Row>
                            {PurpleSquares.map((item, index) => {
                                return(
                                   <Col xs={3} md={2} lg={1} key={item}>
                                    {
                                        props.state.length > index
                                        ? <DiceElement disabledClick={true} dice={props.state[index]}/>
                                        : <div onClick={() => handleClick(index)} style={{fontSize: "2rem", textAlign: "center"}} className={`gameSquare d-inline-block ${CanPlacePurpleDice(props.lastSelectedDice, props.turnState, props.state, index) ? "selectedPulse purpleBorder" : ""}`}>{item === 1 ? "" :  <span>></span>}</div>
                                   }
                                        
                                    
                                    </Col>
                                    
                                   
                                )
                                
                            })}
                            
                      

                    </Row>

                </Card>
            </Container>
        </>
    )
}

export default PurpleField