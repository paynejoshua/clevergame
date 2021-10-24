import PlayerState from "../models/playerModel"

let roundsPowerUps = ["ReRoll", "plusOne", "ReRoll", "XorSix"]

export const YellowPowers = () => {
    if(
        PlayerState.yellowState[0] !== undefined
        && PlayerState.yellowState[1] !== undefined
        && PlayerState.yellowState[2] !== undefined
        ){
            return "Blue X"
        } 
    if(
        PlayerState.yellowState[4] !== undefined
        && PlayerState.yellowState[5] !== undefined
        && PlayerState.yellowState[7] !== undefined
        ){
            return "Orange four"
        } 
    if(
        PlayerState.yellowState[8] !== undefined
        && PlayerState.yellowState[10] !== undefined
        && PlayerState.yellowState[11] !== undefined
        ) {
            return "Green X"
        } 
    if(
        PlayerState.yellowState[13] !== undefined
        && PlayerState.yellowState[14] !== undefined
        && PlayerState.yellowState[15] !== undefined
        ){
            return "Fox"
        } 
    if(
        PlayerState.yellowState[0] !== undefined
        && PlayerState.yellowState[5] !== undefined
        && PlayerState.yellowState[10] !== undefined
        && PlayerState.yellowState[15] !== undefined
        ){
            return "Plus One"
        } 

}

export const BluePowers = () => {
    if(
        PlayerState.blueState[1] !== undefined
        && PlayerState.blueState[2] !== undefined
        && PlayerState.blueState[3] !== undefined
        ){
            return "Orange Five"
        } 
    if (
        PlayerState.blueState[4] !== undefined
        && PlayerState.blueState[5] !== undefined
        && PlayerState.blueState[6] !== undefined
        && PlayerState.blueState[7] !== undefined
        ){
            return "Yellow X"
        } 
    if(
        PlayerState.blueState[8] !== undefined
        && PlayerState.blueState[9] !== undefined
        && PlayerState.blueState[10] !== undefined
        && PlayerState.blueState[11] !== undefined
        ){
            return "Fox"
        }
}

export const GreenPowers = () => {
    if(PlayerState.greenState[3] !== undefined) return "Plus One"
    if(PlayerState.greenState[5] !== undefined) return "Blue X"
    if(PlayerState.greenState[6] !== undefined) return "Fox"
    if(PlayerState.greenState[8] !== undefined) return "Purple Six"
    if(PlayerState.greenState[9] !== undefined) return "ReRoll"
}

export const OrangePowers = () => {
    if(PlayerState.orangeState[2] !== undefined) return "ReRoll"
    if(PlayerState.orangeState[4] !== undefined) return "Yellow X"
    if(PlayerState.orangeState[5] !== undefined) return "Plus One"
    if(PlayerState.orangeState[7] !== undefined) return "Fox"
    if(PlayerState.orangeState[9] !== undefined) return "Purple Six"
}

export const PurplePowers = () => {
    if(PlayerState.purpleState[2] !== undefined) return "ReRoll"
    if(PlayerState.purpleState[3] !== undefined) return "Blue X"
    if(PlayerState.purpleState[4] !== undefined) return "Plus One"
    if(PlayerState.purpleState[5] !== undefined) return "Yellow X"
    if(PlayerState.purpleState[6] !== undefined) return "Fox"
    if(PlayerState.purpleState[7] !== undefined) return "ReRoll"
    if(PlayerState.purpleState[8] !== undefined) return "Green X"
    if(PlayerState.purpleState[9] !== undefined) return "Orange Six"
    if(PlayerState.purpleState[10] !== undefined) return "Plus One"
}