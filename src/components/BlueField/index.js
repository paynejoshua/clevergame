import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BlueWhite from "../../assets/BlueWhiteCombo.svg";
import { CanPlaceBlueDice, BlueChoices } from "../../helperfunctions/CheckDice"
import { BonusType } from "../../helperfunctions/types";

function BlueField(props) {


    const handleClick = (item, index, props) => {
    //when testing turn line 15 on and turn line 16 off
        // if (CanPlaceBlueDice(item, props.lastSelectedDice, props.whiteDice, props.whiteDice, props.turnState)) {
        if (CanPlaceBlueDice(item, props.lastSelectedDice, props.blueDice, props.whiteDice, props.turnState)) {
            let setColorOfDice = { ...props.lastSelectedDice }
            setColorOfDice.color = "Blue"
            setColorOfDice.index = index
            props.state[index] = setColorOfDice
            props.onDicePlaced(props.lastSelectedDice, "Blue")

            //check bonuses
            if(props.state[4] && props.state[8]){
                props.onBonusEarned(BonusType.ReRoll)
            }

        }
    }

    return (
        <>
            <Container className="mt-3">
                <Card style={{ height: "20rem", borderColor: "#0af", borderWidth: "3px" }}>
                    <Row>
                        {BlueChoices.map((item, index) => {
                            return (

                                <Col xs={3} key={item}>
                                    <div className="d-flex justify-content-center">
                                        {
                                            item === 1
                                                ? <img alt="blue and white dice only in this field" src={BlueWhite} />



                                                : props.state.length > index && props.state[index]
                                                    ? <div className="gameSquare d-flex justify-content-center" style={{ backgroundColor: "blue", color: "white", fontSize: "2rem" }}>{item}</div>
                                                    : <div onClick={() => handleClick(item, index, props)} style={{ fontSize: "2rem" }} className={`gameSquare d-flex justify-content-center ${CanPlaceBlueDice(item, props.lastSelectedDice, props.blueDice, props.whiteDice, props.turnState) ? "selectedPulse blueBorder" : ""}`}>
                                                        {item}
                                                    </div>

                                        }
                                    </div>


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