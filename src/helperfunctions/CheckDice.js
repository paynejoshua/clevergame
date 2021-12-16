import {TurnState} from "../helperfunctions/types"

export const YellowChoices = [3, 6, 5, "X", 2, 1, "X", 5, 1, "X", 2, 4, "X", 3, 4, 6];
export const BlueChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const GreenSquares = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]
export const OrangeSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
export const PurpleSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


export const CanSelectDice = (dice, blue, white, playerState) =>{
    return (CanSelectYellowDice(dice, playerState.yellowState)
    || CanSelectBlueDice(dice, blue, white, playerState.blueState) 
    || CanSelectGreenDice(dice, playerState.greenState)
    || CanSelectOrangeDice(dice, playerState.orangeState)
    || CanSelectPurpleDice(dice, playerState.purpleState)
    )
}

export const CanPlaceYellowDice = (item, turnState, dice) => {
    return (turnState === TurnState.PlaceDie 
        &&  DoesYellowDiceMatch(item, dice)
        ) 
}

const CanSelectYellowDice = (dice, yellowState) => {
    for(let i = 0; i < YellowChoices.length; i++){
        if(DoesYellowDiceMatch(YellowChoices[i], dice) && yellowState[i] === undefined){
            return true
        }
    }

    return false
}

const DoesYellowDiceMatch = (item, dice) => {
    return(dice.number === item 
        && (dice.color === "Yellow" || dice.color === "White"))
}


export const CanPlaceBlueDice = (item, dice, blue, white, turnState) => {
    return (turnState === TurnState.PlaceDie 
        && DoesBlueDiceMatch(item, dice, blue, white)
        ) 
}

const CanSelectBlueDice = (dice, blue, white, blueState) => {
    for(let i = 0; i < BlueChoices.length; i++){
        if(DoesBlueDiceMatch(BlueChoices[i], dice, blue, white) && blueState[i] === undefined){
            return true
        }
    }

    return false
}

const DoesBlueDiceMatch = (item, dice, blue, white) => {
//turn lines 59/60 on when testing
    // return (white.number === item 
    //     && (dice.color === "White"))
        //turn lines 62/63 off when testing
        return (blue.number + white.number === item 
        && (dice.color === "Blue" || dice.color === "White"))
}

export const CanPlaceGreenDice = (item, dice, turnState, greenState, index) => {
    let nextIndex = greenState.length
    return (turnState === TurnState.PlaceDie
        && index === nextIndex 
        && DoesGreenDiceMatch(item, dice)
        ) 
}

const CanSelectGreenDice = (dice, greenState) => {
        let nextIndex = greenState.length
        if(nextIndex < GreenSquares.length && DoesGreenDiceMatch(GreenSquares[nextIndex], dice)){
            return true
        }
    

    return false
}

const DoesGreenDiceMatch = (item, dice) => {
    return (dice.color === "Green" || dice.color === "White")
    && (dice.number >= item)
}

export const CanPlaceOrangeDice = (dice, turnState, orangeState, index) => {
    let nextIndex = orangeState.length
    return (turnState === TurnState.PlaceDie 
        && index === nextIndex 
        && DoesOrangeDiceMatch(dice)
        ) 
}

const CanSelectOrangeDice = (dice, orangeState) => {
        let nextIndex = orangeState.length
        if(nextIndex < OrangeSquares.length && DoesOrangeDiceMatch(dice)){
            return true
        }
    return false
}

const DoesOrangeDiceMatch = (dice) => {
    return (dice.color === "Orange" || dice.color === "White")
}


export const CanPlacePurpleDice = (dice, turnState, purpleState, index) => {
    let nextIndex = purpleState.length
    return (turnState === TurnState.PlaceDie 
        && index === nextIndex 
        && DoesPurpleDiceMatch(dice, purpleState)
        ) 
}

const CanSelectPurpleDice = (dice, purpleState) => {
        let nextIndex = purpleState.length
        if(nextIndex < PurpleSquares.length && DoesPurpleDiceMatch(dice, purpleState)){
            return true
        }
    return false
}

const DoesPurpleDiceMatch = (dice, purpleState) => {
    return (dice.color === "Purple" || dice.color === "White") 
    && (purpleState.length === 0
    || dice.number > purpleState[purpleState.length -1].number
    || purpleState[purpleState.length -1].number === 6)
}


