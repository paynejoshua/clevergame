import React from "react";
import number6 from "../../attributes/number6.png"

function DiceElement(props){

    function diceSelect(e){
        console.log(e.target.getAttribute("dicenumber"))
    }

    return (
        <>
           
                { props.diceResult === 1
                
                ? 
                    <div onClick={diceSelect} dicenumber={1} className="dice first-face" style={{backgroundColor: props.bgColor}}>
                        <span className="dot"></span>
                    </div>

                : props.diceResult === 2 
                
                ?
                    <div onClick={diceSelect} dicenumber={2} className="dice second-face" style={{backgroundColor: props.bgColor}}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                : props.diceResult === 3

                ?
                
                    <div onClick={diceSelect} dicenumber={3} className="dice third-face" style={{backgroundColor: props.bgColor}}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                : props.diceResult === 4

                ?
                
                    <div onClick={diceSelect} dicenumber={4} className="dice fourth-face" style={{backgroundColor: props.bgColor}}>
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
               
                    <div onClick={diceSelect} dicenumber={5} className="dice fifth-face" style={{backgroundColor: props.bgColor}}>
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
                
                   
                    <div onClick={diceSelect} dicenumber={6} className="dice sixth-face" style={{backgroundColor: props.bgColor}}>
                        <div className="column">
                            <span className="dot"></span>
                            <span  className="dot"></span>
                            <span  className="dot"></span>
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