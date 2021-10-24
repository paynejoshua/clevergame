import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DiceElement from "../../helperfunctions/dice";
import {CanPlaceYellowDice, YellowChoices} from "../../helperfunctions/CheckDice"


function YellowField(props){

    

    const handleClick = (item, index) => {


        if(CanPlaceYellowDice(item, props.turnState, props.lastSelectedDice)){
            let setColorOfDice = {...props.lastSelectedDice};
            setColorOfDice.color = "Yellow";
            setColorOfDice.isPlaced = true;
            props.state[index] = setColorOfDice;
            props.onDicePlaced(props.lastSelectedDice, "Yellow");
        }
    }

    return(
        
            <Container onClick={props.onClick} className="mt-3">
                <Card style={{width: "25rem", borderColor: "#ffd900", borderWidth: "3px"}}>
                    <Row>
                        {YellowChoices.map((item, index) =>{
                            return(
                            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3} key={index}>
                               
                               {
                                props.state.length > index && props.state[index]
                                ?  <DiceElement disabledClick={true} dice={props.state[index]} />
                                : <div
                                onClick={() => handleClick(item, index)} 
                                style={{fontSize: "2rem"}} 
                                className={`gameSquare d-flex justify-content-center ${CanPlaceYellowDice(item, props.turnState, props.lastSelectedDice) ? "selectedPulse yellowBorder" : ""}`}>
                                {item}
                               </div>  
                                
                                  
                               }

                            </Col>
                            )
                        })}
                    </Row>
                </Card>
            </Container>
       
    )
}

export default YellowField

