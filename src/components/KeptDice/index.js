import React from "react";
import DiceElement from "../../helperfunctions/dice"


function KeptDice(props){

    return (
        <>
           
   
                {[...Array(3)].map((item, index) => {
                    return (
                        <div key={index} >
                            {props.selectedDice.length > index
                                ?
                                <div className={`${props.plusOneActivated ? "selectedPulse": ""}`}>
                                    <DiceElement
                                    onDiceSelect={props.onDiceSelect}
                                    plusOneActivated={props.plusOneActivated}
                                    setPlusOneActivated={props.setPlusOneActivated} 
                                    dice={props.selectedDice[index]}/>
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
