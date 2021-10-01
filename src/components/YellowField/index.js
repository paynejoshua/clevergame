import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DiceElement from "../../helperfunctions/dice";
import {YellowDiceCheck} from "../../helperfunctions/CheckDice"

function YellowField(props){

    const YellowChoices = [3, 6, 5, "X", 2, 1, "X", 5, 1, "X", 2, 4, "X", 3, 4, 6];

    const handleClick = (item, index, props) => {


        if(YellowDiceCheck(item, props)){
            let setColorOfDice = {...props.lastSelectedDice};
            setColorOfDice.color = "Yellow";
            setColorOfDice.isPlaced = true;
            props.state[index] = setColorOfDice;
            props.onDicePlaced(item);
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
                                onClick={() => handleClick(item, index, props)} 
                                style={{fontSize: "2rem"}} 
                                className={`gameSquare d-flex justify-content-center ${YellowDiceCheck(item, props) ? "selectedPulse yellowBorder" : ""}`}>
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

