import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KeptDice from "../KeptDice";
import DiceRoller from "../DiceRoller"
import YellowField from "../YellowField";
import BlueField from "../BlueField";
import GreenField from "../GreenField"
import OrangeField from "../OrangeField"
import PurpleField from "../PurpleField";
import TurnState from "../../helperfunctions/types"


function GameCard(){   

    

    const [diceCount, setDiceCount] = useState(0)
    const [turnState, setTurnState] = useState(TurnState.RollDice)
    const [availabeDices, setAvailableDices] = useState([]) 
    const [selectedDice, setSelectedDice] = useState([])
    
    function onDiceRoll(){
        if(turnState !== TurnState.RollDice){
            return
        }
        newDice()
        setTurnState(TurnState.SelectDie)
    }

    function onDiceSelect(dice){
        if(turnState === TurnState.SelectDie){
            
            
            let updatedSelectedDice = [...selectedDice]
            updatedSelectedDice.push(dice)
            setSelectedDice(updatedSelectedDice)
            let updatedAvailableDices = availabeDices.filter(d => d.color !== dice.color)
            console.log(updatedAvailableDices)
            setAvailableDices(updatedAvailableDices)
            
            setTurnState(TurnState.PlaceDie)
        } else if (turnState === TurnState.PlaceDie){
                //this means the player is swapping out the last chosen die for a different die

                let previousDie = selectedDice[selectedDice.length - 1]


                let tempSelectedDie = selectedDice.filter(d => d.color !== previousDie.color)

                
                tempSelectedDie.push(dice)


                setSelectedDice(tempSelectedDie)

                let tempAvailableDice = availabeDices.filter(d => d.color !== dice.color)
                tempAvailableDice.push(previousDie)


                setAvailableDices(tempAvailableDice)

        }
    }

    function newDice(){
        let tempArr = []
        for(let i=0; i < availabeDices.length; i++){
            let die = availabeDices[i]
            die.number = Math.floor(Math.random() * 6) + 1
            tempArr.push(die)
        }

        setAvailableDices(tempArr)
    }

    function onYellowClick(){

        //left off here. Going to create a loop of available die to disable die with number that is lower than the previously selected die
        setTurnState(TurnState.RollDice)
    }

    useEffect(()=>{
        const availableColors = ["Yellow", "Blue", "White", "Green", "Orange", "Purple"]
        let tempArr = []
        for(let i = 0; i < availableColors.length; i++){
            tempArr.push({
                color: availableColors[i],
                number: Math.floor(Math.random() * 6) + 1
            })
        }
        setAvailableDices(tempArr)
    }, [])

    return (
        <>
            <Container className="d-flex justify-content-center mt-5" >
                <Card style={{background: "rgba(255, 255, 255, 0.25)"}}>

                
                <Row className="mt-5 mb-5">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center" >
                                <KeptDice selectedDice={selectedDice} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center" >
                                <DiceRoller turnState={turnState} onRoll={onDiceRoll} availableDices={availabeDices} onDiceSelect={onDiceSelect} />
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                    
                                <YellowField onClick={onYellowClick} />
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                    
                                <BlueField  />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    
                                <GreenField  />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    
                                <OrangeField  />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    
                                <PurpleField  />
                    </Col>

                </Row>
                </Card>
            </Container>
        </>
    )
}

export default GameCard