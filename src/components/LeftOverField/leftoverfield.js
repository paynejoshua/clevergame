import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DiceShortCut from "../../components/DiceShortCut";

function LeftOverField(props){

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

        <Card style={{width: "18rem"}}>

            <Card.Body>
                <Card.Title>
                    Left Overs:
                </Card.Title>
                <Row>
                        {[...Array(5)].map((item, index) => {
                            return (
                                <Col key={index}>
                                    {props.leftOverDice.length > index
                                        ?
                                        <img src={getDiceImage(props.leftOverDice[index].number)} alt={`${props.leftOverDice[index].number} dice`} className="dice" style={{backgroundColor: props.leftOverDice[index].color}} /> 
                                        : <div className="gameSquare" style={{ backgroundColor: "white" }}>{}</div>

                                    }

                                </Col>
                            )

                        })
                        }
                    </Row>

            </Card.Body>
        </Card>


           
                

        </>
    )
}

export default LeftOverField