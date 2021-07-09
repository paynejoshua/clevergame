import React, {useState, useEffect} from "react";
import Card from "react-bootstrap/Card";
import DiceSet from "../DiceSet";
import Button from "react-bootstrap/Button"

function DiceRoller(){
    const [isRolled, setIsRolled] = useState(true)

    function rollTheDie(){
        setIsRolled(false)
        
    }
    
    useEffect(() =>{
        if(isRolled === false){
            setIsRolled(true)
        }
    }) 

    return(
        <>
            
            <Card style={{width: "18rem"}}>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-center">How Clever Are You?</Card.Title>
                        <DiceSet rolled={isRolled} />
                    <div className="d-flex justify-content-center">
                        <Button className="mt-2" onClick={rollTheDie}>Roll Dice</Button>
                    </div>

                </Card.Body>
            </Card>
                        

        </>
    )
}

export default DiceRoller