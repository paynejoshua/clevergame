import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import {TurnState} from "../../helperfunctions/types"


function ReRollField(props) {

    let reRollCircles = [1,2,3,4,5,6,7]

    const isNextAvailable = (index) =>{
        for(let i = 0; i < props.state.length; i++){
            if(props.state[i] === true){
                return i === index
            }
        }
    }

    const shouldPulse = (index) =>{
        

        if(props.turnState !== TurnState.SelectDie){
            return false
        }

        return props.turnState === TurnState.SelectDie && isNextAvailable(index)
       
    }

    const onReRollClick = (index) =>{

        //pass in roll dice function as props from game card and use call back function here
        //to roll the dice again.
        
        if(isNextAvailable(index)){
            
            props.setRollNumber(prevRollNumber => prevRollNumber - 1)

            props.setTurnState(TurnState.RollDice)

            props.state[index] = false
        }

    }


    return (
        <>
        <Container className="mt-3">
                <Card style={{borderColor: "white", borderWidth: "3px"}}>
                    <Row>
                            <Col className="d-flex align-items-center">
                                <div>ReRoll</div>
                            </Col>       
                            {reRollCircles.map((item, index) => {
                                return(
                                   <Col className="d-flex justify-content-center" key={index}>
                                       {
                                         <div 
                                         onClick={() => onReRollClick(index)} 
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

export default ReRollField