import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
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
import LeftOverField from "../LeftOverField/leftoverfield.js";
import TurnState from "../../helperfunctions/types";
import PlayerState from "../../models/playerModel";
import {CanSelectDice} from "../../helperfunctions/CheckDice"


function GameCard(){   

    const [turnState, setTurnState] = useState(TurnState.RollDice)
    const [availableDices, setAvailableDices] = useState([]) 
    const [selectedDice, setSelectedDice] = useState([])
    const [leftOverDice, setLeftOverDice] = useState([])
    const [playerState, setPlayerState] = useState(PlayerState)
    const [wildDice, setWildDice] = useState()
    const [blueDice, setBlueDice] = useState()
    const [confirmDiceChoice, setConfirmDiceChoice] = useState()

    // This is tracking how many times the player has rolled the dice
    const [rollNumber, setRollNumber] = useState()
    // This is tracking how many rounds have been played. Once a certain amount of rounds is reached the game is over. 
    const [round, setRound] = useState()


   
    
    function onDiceRoll(){
        if(turnState !== TurnState.RollDice){
            return
        }
        newDice()
        setTurnState(TurnState.SelectDie)
    }

    function onDiceConfirm(){
        let updatedSelectedDice = [...selectedDice]
        updatedSelectedDice.push(confirmDiceChoice)
        setSelectedDice(updatedSelectedDice)
        let updatedAvailableDices = availableDices.filter(d => d.color !== confirmDiceChoice.color)


        setAvailableDices(updatedAvailableDices)

        let actionState = 1

        moveDiceToPlatter(confirmDiceChoice, updatedAvailableDices, actionState)
        
        setTurnState(TurnState.RollDice)
        setConfirmDiceChoice(undefined)
    }

    function onDiceReject(){
        setConfirmDiceChoice(undefined)
    }

    function onDiceSelect(dice){

        if(turnState === TurnState.SelectDie){
            
            if(CanSelectDice(dice, blueDice, wildDice, playerState)){

                let updatedSelectedDice = [...selectedDice]
                updatedSelectedDice.push(dice)
                setSelectedDice(updatedSelectedDice)
                let updatedAvailableDices = availableDices.filter(d => d.color !== dice.color)


                setAvailableDices(updatedAvailableDices)

                let actionState = 1

                moveDiceToPlatter(dice, updatedAvailableDices, actionState)
                
                setTurnState(TurnState.PlaceDie)
            } else{
                setConfirmDiceChoice(dice)
                console.log("cant place");
            }
            
            
        } else if (turnState === TurnState.PlaceDie || turnState === TurnState.RollDice){
                //this means the player is swapping out the last chosen die for a different die
                console.log("leftover turn state", turnState)

                let previousDie = selectedDice[selectedDice.length - 1]


                let tempSelectedDie = selectedDice.filter(d => d.color !== previousDie.color)

                
                tempSelectedDie.push(dice)


                setSelectedDice(tempSelectedDie)

                let tempAvailableDice = availableDices.filter(d => d.color !== dice.color)
                tempAvailableDice.push(previousDie)


                setAvailableDices(tempAvailableDice)

                let actionState;

                if(turnState === TurnState.RollDice){
                    actionState = 3
                } else if(turnState === TurnState.PlaceDice){
                    actionState = 1
                }

                
                moveDiceToPlatter(dice, tempAvailableDice, actionState)

        }

       
    }

    function moveDiceToPlatter(selectedDice, newAvailableDice, action){

        //here I am seeing if the selected dice(s) have a number that is greater than the ones still available [X]Done
                //if so then I am disabling the available dice which will be placed in the left over pile for other players to use. [X]Done
                //note: the current player should be able to take a dice out of the leftover pile when they are on this step but the leftover 
                    //dice should be locked once the player moves past this step. []Done
        
        
        let newLeftOverDice = [...leftOverDice];

        
        for(let i = 0; i < newAvailableDice.length; i++){
           
                if(selectedDice.number > newAvailableDice[i].number){
                    newLeftOverDice.push(newAvailableDice[i]);
                }
                
            }
            
        setLeftOverDice(newLeftOverDice);

        let tempAvailableDice = [...newAvailableDice];
        
        tempAvailableDice = tempAvailableDice.filter(d => !newLeftOverDice.includes(d)) 

        setAvailableDices(tempAvailableDice)

        if(action === 1){

            setTurnState(TurnState.RollDice);
        } else if(action === 3){
            setTurnState(TurnState.PlaceDie)
        }

          
        
    }


    function newDice(){
        let tempArr = []
       
        for(let i=0; i < availableDices.length; i++){
            let die = availableDices[i]
            die.number = Math.floor(Math.random() * 6) + 1
            tempArr.push(die)
            if(die.color === "White"){
                setWildDice(die)
            } else if(die.color === "Blue"){
                setBlueDice(die)
            }

           
        }

        setAvailableDices(tempArr)
        
    }


    const handleDicePlace = (dice) => {

        setTurnState(TurnState.RollDice)
        PlayerState.rounds += 1
    }


    const diceReset = () => {

        PlayerState.rounds = 0
        setLeftOverDice([])
        setSelectedDice([])

        const availableColors = ["Yellow", "Blue", "White", "Green", "Orange", "Purple"]
        let tempArr = []
        for(let i = 0; i < availableColors.length; i++){
            tempArr.push({
                color: availableColors[i],
                number: Math.floor(Math.random() * 6) + 1,
            })
        }
        setAvailableDices(tempArr)
    }


    useEffect(()=>{
        
        diceReset()
        
    }, [])
   
    return (
        <>
             
            <Container className="d-flex justify-content-center mt-5" >
                <Card style={{background: "rgba(255, 255, 255, 0.25)"}} >

                
                <Row className="mt-5 mb-5">
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className="d-flex justify-content-center" >
                                <KeptDice selectedDice={selectedDice} />
                                <DiceRoller turnState={turnState} onRoll={onDiceRoll} onDiceReset={diceReset} turn={PlayerState.rounds} availableDices={availableDices} onDiceSelect={onDiceSelect} />
                    </Col>
                    

                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className="d-flex justify-content-center">
                                <LeftOverField leftOverDice={leftOverDice} />
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                <YellowField turnState={turnState} lastSelectedDice={selectedDice[selectedDice.length -1]} state={playerState.yellowState} onDicePlaced={handleDicePlace}/>
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                    
                                <BlueField whiteDice={wildDice} blueDice={blueDice} turnState={turnState} lastSelectedDice={selectedDice[selectedDice.length -1]} state={playerState.blueState} onDicePlaced={handleDicePlace} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    
                                <GreenField turnState={turnState} lastSelectedDice={selectedDice[selectedDice.length -1]} state={playerState.greenState} onDicePlaced={handleDicePlace} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    
                                <OrangeField turnState={turnState} lastSelectedDice={selectedDice[selectedDice.length -1]} state={playerState.orangeState} onDicePlaced={handleDicePlace} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    
                                <PurpleField turnState={turnState} lastSelectedDice={selectedDice[selectedDice.length -1]} state={playerState.purpleState} onDicePlaced={handleDicePlace}/>
                    </Col>

                </Row>
                </Card>
            </Container>

            <Modal show={confirmDiceChoice !== undefined} onHide={() => console.log()}>
                <Modal.Body>

                    Do you want to select this dice? There is no place to put it
                </Modal.Body>
                <Button onClick={() => onDiceConfirm()}>
                    Yes
                </Button>
                <Button onClick={() => onDiceReject()}>
                    No
                </Button>
                </Modal>
        
        </>
    )
}

export default GameCard