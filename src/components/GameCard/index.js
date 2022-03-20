import React, { useState, useEffect } from "react";
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
import { TurnState, Color, BonusType } from "../../helperfunctions/types";
import PlayerState from "../../models/playerModel";
import { CanSelectDice } from "../../helperfunctions/CheckDice";
import { CalculateScore, LowestScore } from "../../helperfunctions/FieldScores";
import { ToastContainer, toast } from 'react-toastify';
import ReRollField from "../ReRollField";
import PlusOneField from "../PlusOneField"
import 'react-toastify/dist/ReactToastify.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"


function GameCard() {

    const [turnState, setTurnState] = useState(TurnState.RollDice)
    const [availableDices, setAvailableDices] = useState([])
    const [selectedDice, setSelectedDice] = useState([])
    const [leftOverDice, setLeftOverDice] = useState([])
    const [playerState, setPlayerState] = useState(PlayerState)
    const [wildDice, setWildDice] = useState()
    const [blueDice, setBlueDice] = useState()
    const [confirmDiceChoice, setConfirmDiceChoice] = useState()
    const [rollNumber, setRollNumber] = useState(0)
    const [round, setRound] = useState(0)
    const [playerScore, setPlayerScore] = useState(0)
    const [thisGamesRounds, setThisGamesRounds] = useState()
    const [plusOneActivated, setPlusOneActivated] = useState(false)
    const [lowestScore, setLowestScore] = useState()
    const [foxes, setFoxes] = useState(0)

    const onDiceRoll = () => {
        if (turnState !== TurnState.RollDice) {
            return
        }

        setRollNumber(prevRollNumber => prevRollNumber + 1)

        newDice()
        setTurnState(TurnState.SelectDie)

    }

    const onDiceConfirm = () => {
        let updatedSelectedDice = [...selectedDice]
        updatedSelectedDice.push(confirmDiceChoice)
        setSelectedDice(updatedSelectedDice)
        let updatedAvailableDices = availableDices.filter(d => d.color !== confirmDiceChoice.color)


        setAvailableDices(updatedAvailableDices)

        moveDiceToPlatter(confirmDiceChoice, updatedAvailableDices)

        setTurnState(TurnState.RollDice)
        setConfirmDiceChoice(undefined)
    }

    const onDiceReject = () => {
        setConfirmDiceChoice(undefined)
    }

    const onDiceSelect = (dice) => {

        // TODO: Consolidate duplicate code between SelectDie and PlaceDie []

        console.log("heres your dice", dice)

        if (turnState === TurnState.SelectDie) {

            if (CanSelectDice(dice, blueDice, wildDice, playerState)) {

                let updatedSelectedDice = [...selectedDice]

                updatedSelectedDice.push(dice)

                setSelectedDice(updatedSelectedDice)
                let updatedAvailableDices = availableDices.filter(d => d.color !== dice.color)

                setAvailableDices(updatedAvailableDices)

                markDiceForPlatter(dice, updatedAvailableDices)

                setTurnState(TurnState.PlaceDie)
            } else {
                setConfirmDiceChoice(dice)

            }


        } else if (turnState === TurnState.PlaceDie) {

            if(dice === selectedDice[selectedDice.length -1]){
                return
            }

            //this means the player is swapping out the last chosen die for a different die

            // Undo previous selected die
            let previousDie = selectedDice[selectedDice.length - 1]
            let tempSelectedDie = selectedDice.filter(d => d.color !== previousDie.color)

            //the selected dice can never be marked for platter
            dice.markedForPlatter = false;


            // Select the new die instead
            if (CanSelectDice(dice, blueDice, wildDice, playerState)) {

                tempSelectedDie.push(dice)

                setSelectedDice(tempSelectedDie)

                let tempAvailableDice = availableDices.filter(d => d.color !== dice.color)
                tempAvailableDice.push(previousDie)


                setAvailableDices(tempAvailableDice)


                markDiceForPlatter(dice, tempAvailableDice)
            } else {
                console.log("here bae 2")
                setConfirmDiceChoice(dice)

            }

        } else if(turnState === TurnState.RollDice && !plusOneActivated){
            return
        }


    }

    const markDiceForPlatter = (newSelectedDice, newAvailableDice) => {

        let tempAvailableDice = [...newAvailableDice]

        let count = 0

        for (let i = 0; i < tempAvailableDice.length; i++) {

            if (newSelectedDice.number > tempAvailableDice[i].number) {
                tempAvailableDice[i].markedForPlatter = true
                count++
            } else {
                tempAvailableDice[i].markedForPlatter = false
            }

        }


        if (count > 0) {
            toast("Just be aware that the dice in red will be moved " +
                "to the left over pile. You can still select these dice as " +
                "your choice if you want. Just make sure to make the " +
                "most clever choice.")
        }


        setAvailableDices(tempAvailableDice)
    }

    const moveDiceToPlatter = (selectedDice, newAvailableDice) => {

        //here I am seeing if the selected dice(s) have a number that is greater than the ones still available [X]Done
        //if so then I am disabling the available dice which will be placed in the left over pile for other players to use. [X]Done
        //note: the current player should be able to take a dice out of the leftover pile when they are on this step but the leftover 
        //dice should be locked once the player moves past this step. []Done


        let newLeftOverDice = [...leftOverDice];


        for (let i = 0; i < newAvailableDice.length; i++) {

            if (selectedDice.number > newAvailableDice[i].number) {
                newLeftOverDice.push(newAvailableDice[i]);
            }

        }



        setLeftOverDice(newLeftOverDice);

        let tempAvailableDice = [...newAvailableDice];

        tempAvailableDice = tempAvailableDice.filter(d => !newLeftOverDice.includes(d))

        setAvailableDices(tempAvailableDice)

    }


    const newDice = () => {
        let tempArr = []

        for (let i = 0; i < availableDices.length; i++) {
            let die = availableDices[i]
            die.number = Math.floor(Math.random() * 6) + 1
            tempArr.push(die)
            if (die.color === "White") {
                setWildDice(die)
            } else if (die.color === "Blue") {
                setBlueDice(die)
            }


        }

        setAvailableDices(tempArr)

    }


    const handleDicePlace = (dice, field, index) => {

        setPlayerScore(CalculateScore(playerState))
        setLowestScore(LowestScore(playerState))
        moveDiceToPlatter(dice, availableDices)
        setTurnState(TurnState.RollDice)

        if(round > thisGamesRounds){
            setPlayerScore(score => score + (foxes * lowestScore))
        }

        console.log("lowest score", lowestScore)

    }

    const startNewGame = () =>{
        const newTurnNumber = round + 1
     
        setRollNumber(0)
        setRound(newTurnNumber)


        setLeftOverDice([])
        setSelectedDice([])

        diceReset()

        if(newTurnNumber === 1 || newTurnNumber === 3){
            onBonusEarned(BonusType.ReRoll)
        } else if(newTurnNumber === 2){
            onBonusEarned(BonusType.PlusOne)
        }

    }

    const diceReset = () => {
    //for testing purposes turn this on and also turn testing on in the blueField and checkDice helper const: 
        // const availableColors = [Color.White, Color.White, Color.White, Color.White, Color.White, Color.White]

        //when done testing turn this back on and turn testing off in blueField and checkDice helper const:
        const availableColors = [Color.White, Color.Yellow, Color.Blue, Color.Green, Color.Orange, Color.Purple]
        let tempArr = []
        for (let i = 0; i < availableColors.length; i++) {
            tempArr.push({
                color: availableColors[i],
                number: Math.floor(Math.random() * 6) + 1,
            })
        }
        setAvailableDices(tempArr)
        
    }

    const resetGame = () => {
        window.location.reload(false)
    }

    const initRounds = () => {
        setThisGamesRounds(6)
    }

    const onBonusEarned = (bonusType, color, number) => {

        if(bonusType === BonusType.ReRoll){
            //created a nested if statement here for the toast because I want the rest of this part of the if statetment to run even if it is round 1. 
           if(round > 1){toast(`Congratulations you have earned a reroll bonus!`)}
        let tempPlayerState = playerState
        tempPlayerState.reRollState.push(true)
        setPlayerState(tempPlayerState)
        } else if(bonusType === BonusType.PlusOne){
            toast(`Congratulations you have earned a plus one bonus!`)
            let tempPlayerState = playerState
            tempPlayerState.plusOneState.push(true)
            setPlayerState(tempPlayerState)
            
        } else if(bonusType === BonusType.ExtraDie){
            
        } else if(bonusType === BonusType.Fox){
            toast('Congratulations you have earned a fox bonus!')
            setFoxes(fox => fox +1)
        }
    }
    

    useEffect(() => {
        initRounds()
        startNewGame()

    }, [])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                pauseOnHover
                closeOnClick
            />

            <Card style={{ background: "rgba(255, 255, 255, 0.25)", width: "100%", height: "auto" }} >

                <Row>
                    <Col xs={11}>
                        <Card.Title className="text-center" style={{ color: "white", fontSize: "4rem" }}>Clever Game</Card.Title>
                        <Card.Title style={{ color: "white" }}>Score: {playerScore}</Card.Title>
                        <Card.Title style={{ color: "white" }}>Round: {round} / {thisGamesRounds}</Card.Title>
                    </Col>
                    <Col xs={1}>
                        <FontAwesomeIcon size="5x" color="white" icon={faBars} />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={12} lg={5} >
                        <ReRollField
                            state={playerState.reRollState}
                            turnState={turnState}
                            setTurnState={setTurnState}
                            onDiceRoll={onDiceRoll}
                            setRollNumber={setRollNumber}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={12} lg={5}>
                        <PlusOneField 
                            state={playerState.plusOneState}
                            turnState={turnState}
                            setTurnState={setTurnState}
                            rollNumber={rollNumber}
                            setPlusOneActivated={setPlusOneActivated}
                           
                        />
                    </Col>
                </Row>

                <Row className="mt-5 mb-5">

                    <Col xs={12} md={6} lg={6} className="d-flex flex-row">

                        <div>
                            <KeptDice onDiceSelect={onDiceSelect} selectedDice={selectedDice} plusOneActivated={plusOneActivated} setPlusOneActivated={setPlusOneActivated} />
                        </div>

                        <DiceRoller plusOneActivated={plusOneActivated} turnState={turnState} onRoll={onDiceRoll} onTurnComplete={startNewGame} rollNumber={rollNumber} round={round} availableDices={availableDices} onDiceSelect={onDiceSelect} />


                    </Col>

                    <Col xs={12} md={6} lg={6} className="d-flex justify-content-center">
                        <LeftOverField onDiceSelect={onDiceSelect}  leftOverDice={leftOverDice} plusOneActivated={plusOneActivated} setPlusOneActivated={setPlusOneActivated} />

                    </Col>

                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <YellowField onBonusEarned={onBonusEarned} turnState={turnState} lastSelectedDice={selectedDice[selectedDice.length - 1]} state={playerState.yellowState} onDicePlaced={handleDicePlace} />
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>

                        <BlueField onBonusEarned={onBonusEarned} whiteDice={wildDice} blueDice={blueDice} turnState={turnState} lastSelectedDice={selectedDice[selectedDice.length - 1]} state={playerState.blueState} onDicePlaced={handleDicePlace} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>

                        <GreenField onBonusEarned={onBonusEarned} turnState={turnState} lastSelectedDice={selectedDice[selectedDice.length - 1]} state={playerState.greenState} onDicePlaced={handleDicePlace} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>

                        <OrangeField onBonusEarned={onBonusEarned} turnState={turnState} lastSelectedDice={selectedDice[selectedDice.length - 1]} state={playerState.orangeState} onDicePlaced={handleDicePlace} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>

                        <PurpleField onBonusEarned={onBonusEarned} turnState={turnState} lastSelectedDice={selectedDice[selectedDice.length - 1]} state={playerState.purpleState} onDicePlaced={handleDicePlace} />
                    </Col>

                </Row>
            </Card>

            <Modal show={confirmDiceChoice !== undefined} onHide={() => onDiceReject()}>
                {/* <Modal show={confirmDiceChoice !== undefined} onHide={() => console.log()}> */}
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

            <Modal show={round > thisGamesRounds} >
                <Modal.Title>Game Over</Modal.Title>
                <Modal.Body>
                    Great Game! You scored: {playerScore} points
                </Modal.Body>
                <Button onClick={resetGame}>Play Again!</Button>
            </Modal>

        </>
    )
}

export default GameCard