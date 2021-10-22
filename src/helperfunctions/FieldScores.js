import PlayerState from "../models/playerModel"

export const WhiteScore = (field) => {
    switch(field){
        case "Yellow":
            return YellowScore()
        case "Blue":
            return BlueScore()
        case "Green":
            return GreenScore()
        case "Orange":
            return PlayerState.orangeState[PlayerState.orangeState.length -1].number
        case "Purple":
            return PlayerState.purpleState[PlayerState.purpleState.length -1].number
        default:
            return 0
    }
}

export const YellowScore = () => {
    return 0
}




export const BlueScore = () => {
    let count = 0
    for(let i = 0; i < PlayerState.blueState.length; i++){
        if(PlayerState.blueState[i] !== undefined){
            count++
        }
    }
    
    //Blue: 1:1 2:2 3:4 4:7 5:11 6:16 7:22 8:29 9:37 10:46 11:56
    switch(count){
        case 1:
            return 1
        case 2: 
            return 2
        case 3: 
            return 4
        case 4: 
            return 7
        case 5:
            return 11
        case 6:
            return 16
        case 7:
            return 22
        case 8:
            return 29
        case 9:
            return 37
        case 10: 
            return 46
        case 11:
            return 56
        default:
            return 0
            
    }
}

export const GreenScore = () => {
    let count = 0
    for(let i = 0; i < PlayerState.greenState.length; i++){
        if(i !== undefined){
            count++
        }
    }
    
    //Green: 1:1 2:3 3:6 4:10 5:15 6:21 7:28 8:36 9:45 10:55 11:66
    switch(count){
        case 1:
            return 1
        case 2: 
            return 3
        case 3: 
            return 6
        case 4: 
            return 10
        case 5:
            return 15
        case 6:
            return 21
        case 7:
            return 28
        case 8:
            return 36
        case 9:
            return 45
        case 10: 
            return 55
        case 11:
            return 66
        default:
            return 0
            
    }

}