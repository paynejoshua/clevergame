import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DiceShortCut from "../DiceShortCut"


function KeptDice(props){

    function getDiceImage(number){
        switch(number){
            case 1: return DiceShortCut.OneDice
            case 2: return DiceShortCut.TwoDice
            case 3: return DiceShortCut.ThreeDice
            case 4: return DiceShortCut.FourDice
            case 5: return DiceShortCut.FiveDice
            case 6: return DiceShortCut.SixDice
                default: return ""

        }
    }

    return (
        <>
           
            <Row>
                {[...Array(3)].map((item, index) => {
                    return (
                        <Col key={index}>
                            {props.selectedDice.length > index
                                ?
                                <img src={getDiceImage(props.selectedDice[index].number)} alt={`${props.selectedDice[index].number} dice`} className="dice" style={{backgroundColor: props.selectedDice[index].color}} /> 
                                : <div className="gameSquare" style={{ backgroundColor: "white" }}>{}</div>

                            }

                        </Col>
                    )

                })
                }
            </Row>
            

        </>
    )
}

export default KeptDice
