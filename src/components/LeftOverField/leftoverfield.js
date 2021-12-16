import React from "react";
import Card from "react-bootstrap/Card";
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

        <Card style={{width: "18rem", height: "6rem"}}>

            <Card.Body>
                <Card.Title>
                    Left Over Dice will go here
                </Card.Title>
                <div className="d-flex flex-row justify-content-around" >
                        {[...Array(5)].map((item, index) => {
                            return (
                                <div xs={2} key={index} >
                                    {props.leftOverDice.length > index
                                        ?
                                        <img src={getDiceImage(props.leftOverDice[index].number)} alt={`${props.leftOverDice[index].number} dice`} className={`dice-small ${props.plusOneActivated ? "selectedPulse": ""}`} style={{backgroundColor: props.leftOverDice[index].color}} /> 
                                        : <div style={{ backgroundColor: "white" }}>{}</div>

                                    }

                                </div>
                            )

                        })
                        }
                    </div>

            </Card.Body>
        </Card>


           
                

        </>
    )
}

export default LeftOverField