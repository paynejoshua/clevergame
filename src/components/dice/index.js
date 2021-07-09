import React from "react";

function DiceElement(props){

    return (
        <>
           
                { props.diceResult === 1
                
                ? 
                    <div className="dice first-face" style={{backgroundColor: props.bgColor}}>
                        <span className="dot"></span>
                    </div>

                : props.diceResult === 2 
                
                ?
                    <div className="dice second-face" style={{backgroundColor: props.bgColor}}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                : props.diceResult === 3

                ?
                
                    <div className="dice third-face" style={{backgroundColor: props.bgColor}}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                : props.diceResult === 4

                ?
                
                    <div className="dice fourth-face" style={{backgroundColor: props.bgColor}}>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>

                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>

                : props.diceResult === 5

                ?
               
                    <div className="dice fifth-face" style={{backgroundColor: props.bgColor}}>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>

                        <div className="column">
                            <span className="dot"></span>
                        </div>

                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>

                : props.diceResult === 6

                &&
                
                    <div className="dice sixth-face" style={{backgroundColor: props.bgColor}}>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>

                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                
                    }

        </>
    )
}

export default DiceElement