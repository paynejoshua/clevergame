import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DiceElement from "../../helperfunctions/dice";
import { CanPlaceYellowDice, YellowChoices } from "../../helperfunctions/CheckDice"
import { propTypes } from "react-bootstrap/esm/Image";
import { BonusType } from "../../helperfunctions/types";


function YellowField(props) {



    const handleClick = (item, index) => {


        if (CanPlaceYellowDice(item, props.turnState, props.lastSelectedDice)) {
            let setColorOfDice = { ...props.lastSelectedDice };
            setColorOfDice.color = "Yellow";
            setColorOfDice.isPlaced = true;
            props.state[index] = setColorOfDice;
            props.onDicePlaced(props.lastSelectedDice, "Yellow");

            //check for bonuses
            if(props.state[0] && props.state[5] && props.state[10] && props.state[15]){
                props.onBonusEarned(BonusType.PlusOne)
            }
            if(props.state[13] && props.state[14] && props.state[15]){
                props.onBonusEarned(BonusType.Fox)
            }
        }
    }

    return (

        <Container onClick={props.onClick} className="mt-3">
            <Card style={{ height: "20rem", borderColor: "#ffd900", borderWidth: "3px" }}>
                <Row>
                    {YellowChoices.map((item, index) => {
                        return (
                            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3} key={index}>
                                <div className="d-flex justify-content-center">

                                    {
                                        props.state.length > index && props.state[index]
                                            ? <DiceElement disabledClick={true} dice={props.state[index]} />
                                            : <div
                                                onClick={() => handleClick(item, index)}
                                                style={{ fontSize: "2rem" }}
                                                className={`gameSquare d-flex justify-content-center ${CanPlaceYellowDice(item, props.turnState, props.lastSelectedDice) ? "selectedPulse yellowBorder" : ""}`}>
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

    )
}

export default YellowField

