//the following is a map of the ies for the yellow field that needs to be met for points
//0,4,8 (10) | 1,5,13 (14)| 2,10,14 (16)| 7,11,15 (20)

const YellowScore = (yellowState) => {
    let tempYellowScore = 0;
    if(
        yellowState[0] !== undefined 
        && yellowState[4] !== undefined
        && yellowState[8] !== undefined ){
            tempYellowScore += 10
        } 
    if (
            yellowState[1] !== undefined 
            && yellowState[5] !== undefined
            && yellowState[13] !== undefined
        ) {
            tempYellowScore += 14
        } 
   if(
            yellowState[2] !== undefined 
            && yellowState[10] !== undefined
            && yellowState[14] !== undefined
        ){
            tempYellowScore += 16
        } 
        
    if(
            yellowState[7] !== undefined 
            && yellowState[11] !== undefined
            && yellowState[15] !== undefined
        ){
            tempYellowScore += 20
        } 

    console.log("yellow", tempYellowScore)
    return tempYellowScore
}




const BlueScore = (blueState) => {
    let count = 0
    for(let i = 0; i < blueState.length; i++){
        if(blueState[i] !== undefined){
            count++
        }
    }
    
    //Blue: 1:1 2:2 3:4 4:7 5:11 6:16 7:22 8:29 9:37 10:46 11:56
    // Follows triangular sequence. Increment by 1 since we aren't starting at i 0.
    
    
    if(count === 0){
        return 0
    } else{
        const n = count - 1;
        console.log("blue", (n * (n +1 ) / 2) + 1)
    return ((n * (n+1)) / 2) + 1;}
}

const GreenScore = (greenState) => {
    let count = 0
    for(let i = 0; i < greenState.length; i++){
        if(i !== undefined){
            count++
        }
    }
    
    //Green: 1:1 2:3 3:6 4:10 5:15 6:21 7:28 8:36 9:45 10:55 11:66
    //Follows triangular sequence.

    console.log("green", count * (count +1 ) / 2)
    
    return (count * (count +1 ) / 2)

}

const OrangeScore = (orangeState) =>{

    
    let tempOrangeScore = 0;

    for(let i = 0; i < orangeState.length; i++){
        if(orangeState[i] === undefined){
            break
        }
        if(i === 3 || i === 6 || i === 8){
            tempOrangeScore += orangeState[i].number * 2
        } else if(i === 10){
            tempOrangeScore += orangeState[i].number * 3
        } else {
            tempOrangeScore += orangeState[i].number
        }
    }

    console.log("orange", tempOrangeScore)

    return tempOrangeScore;
    
}

const PurpleScore = (purpleScore) => {
    
    let tempPurpleScore = 0;

    for(let i = 0; i < purpleScore.length; i++){
        if(purpleScore[i] === undefined){
            break;
        }
        tempPurpleScore += purpleScore[i].number
    }

    console.log("purple", tempPurpleScore)

    return tempPurpleScore;
}

export const CalculateScore = (playerState) =>{
    return(
        YellowScore(playerState.yellowState) + 
        BlueScore(playerState.blueState) + 
        GreenScore(playerState.greenState) + 
        OrangeScore(playerState.orangeState) + 
        PurpleScore(playerState.purpleState))
}