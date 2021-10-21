import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BlueWhite from "../../assets/BlueWhiteCombo.svg";
import {CanPlaceBlueDice, BlueChoices} from "../../helperfunctions/CheckDice"

function BlueField(props){


    const handleClick = (item, index, props) => {

        if(CanPlaceBlueDice(item, props.lastSelectedDice, props.blueDice, props.whiteDice, props.turnState)){
            let setColorOfDice = {...props.lastSelectedDice}
            setColorOfDice.color = "Blue"
            setColorOfDice.index = index
            props.state[index] = setColorOfDice
            props.onDicePlaced()
        }
    }

    return(
        <>
            <Container className="mt-3">
                <Card style={{width: "25rem", height: "15rem", borderColor: "#0af", borderWidth: "3px"}}>
                    <Row>
                        {BlueChoices.map((item, index) =>{
                            return(
                            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3} key={item}>
                               {
                                item === 1 
                                ? <img alt="blue and white dice only in this field" src={BlueWhite} />
                                
                          

                                :  props.state.length > index && props.state[index]
                                ?  <div className="gameSquare d-flex justify-content-center" style={{backgroundColor: "blue", color: "white", fontSize:"2rem"}}>{item}</div>
                                : <div onClick={() => handleClick(item, index, props)} style={{fontSize: "2rem"}} className={`gameSquare d-flex justify-content-center ${CanPlaceBlueDice(item, props.lastSelectedDice, props.blueDice, props.whiteDice, props.turnState) ? "selectedPulse blueBorder" : ""}`}>
                                {item}
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

export default BlueField