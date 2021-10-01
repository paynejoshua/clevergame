import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DiceElement from "../../helperfunctions/dice";
import {PurpleDiceCheck} from "../../helperfunctions/CheckDice"

function PurpleField(props){

    const PurpleSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


    const handleClick = (item, index, props) => {
        if(PurpleDiceCheck(item, index, props)){
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
                                        : <div onClick={() => handleClick(item, index, props)} style={{fontSize: "2rem", textAlign: "center"}} className={`gameSquare d-inline-block ${PurpleDiceCheck(item, index, props) ? "selectedPulse purpleBorder" : ""}`}>{item === 1 ? "" :  <span>></span>}</div>
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