import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DiceShortCut from "../DiceShortCut";
import DiceElement from "../../helperfunctions/dice"


function KeptDice(props){



    return (
        <>
           
   
                {[...Array(3)].map((item, index) => {
                    return (
                        <div key={index} >
                            {props.selectedDice.length > index
                                ?
                                <DiceElement dice={props.selectedDice[index]}/>
                                : <div className="gameSquare" style={{ backgroundColor: "white" }}>{}</div>

                            }
                        </div>
                      
                    )

                })
                }
         
            

        </>
    )
}

export default KeptDice
