import TurnState from "../helperfunctions/types"

export const YellowDiceCheck = (item, props) => {
    return (props.turnState === TurnState.PlaceDie 
        &&  props.lastSelectedDice.number === item 
        && (props.lastSelectedDice.color === "Yellow" || props.lastSelectedDice.color === "White")
        ) 
}

export const BlueDiceCheck = (item, props) => {
    return (props.turnState === TurnState.PlaceDie 
        &&  props.blueDice.number + props.whiteDice.number === item 
        && (props.lastSelectedDice.color === "Blue" || props.lastSelectedDice.color === "White")
        ) 
}

export const  GreenDiceCheck = (item, index, props) => {
    return (props.turnState === TurnState.PlaceDie 
        && index === props.state.length 
        && (props.lastSelectedDice.color === "Green" || props.lastSelectedDice.color === "White")
        && (props.lastSelectedDice.number >= item || props.lastSelectedDice.number >= props.state[props.state.length -1].number)

        ) 
}

export const OrangeDiceCheck = (item, index, props) => {
    return (props.turnState === TurnState.PlaceDie 
        && index === props.state.length 
        &&  (props.lastSelectedDice.color === "Orange" || props.lastSelectedDice.color === "White")

        ) 
}

export const PurpleDiceCheck = (item, index, props) => {
    return (props.turnState === TurnState.PlaceDie 
        && index === props.state.length 
        &&  (props.lastSelectedDice.color === "Purple" || props.lastSelectedDice.color === "White")
        && (props.state.length === 0
        || props.lastSelectedDice.number > props.state[props.state.length -1].number
        || props.state[props.state.length -1].number === 6)

        ) 
}

