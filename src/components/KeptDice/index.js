import React from "react";
import DiceElement from "../../helperfunctions/dice"


function KeptDice(props){

    console.log(props.plusOneActivated)
    return (
        <>
           
   
                {[...Array(3)].map((item, index) => {
                    return (
                        <div key={index} >
                            {props.selectedDice.length > index
                                ?
                                <div className={`${props.plusOneActivated ? "selectedPulse": ""}`}>
                                    <DiceElement dice={props.selectedDice[index]}/>
                                </div>
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
