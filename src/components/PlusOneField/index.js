import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import {TurnState} from "../../helperfunctions/types"


function PlusOneField(props) {

    let plusOneCircles = [1,2,3,4,5,6,7]

    const isNextAvailable = (index) =>{
        for(let i = 0; i < props.state.length; i++){
            if(props.state[i] === true){
                return i === index
            }
        }
    }

    const shouldPulse = (index) =>{
        

        if(props.turnState !== TurnState.RollDice && props.rollNumber !== 3){
            return false
        }
        return props.turnState === TurnState.RollDice && isNextAvailable(index) && props.rollNumber === 3
       
    }

    const onPlusOneClick = (index) =>{

        if(props.rollNumber !== 3){
            return
        }
        
        if(isNextAvailable(index)){
            props.setTurnState(TurnState.SelectDie)
            props.setPlusOneActivated(true)
            props.state[index] = false
        }

    }
    

    return (
        <>
        <Container className="mt-3">
                <Card style={{borderColor: "white", borderWidth: "3px"}}>
                    <Row>
                            <Col className="d-flex align-items-center">
                                <div>Plus One</div>
                            </Col>       
                            {plusOneCircles.map((item, index) => {
                                return(
                                   <Col className="d-flex justify-content-center" key={index}>
                                       {
                                         <div 
                                         onClick={() => onPlusOneClick(index)} 
                                         className={`${shouldPulse(index) ? `selectedPulse` : ""} gameCircle d-flex justify-content-center`}
                                         style={props.state.length > index 
                                            && props.state[index] === true 
                                            ? {backgroundColor: "green"}
                                            : props.state.length > index 
                                            && props.state[index] === false 
                                            ? {backgroundColor: "red"}
                                            : {}
                                            }
                                         >
        
                                        </div>
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

export default PlusOneField