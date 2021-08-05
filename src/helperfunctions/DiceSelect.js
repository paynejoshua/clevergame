import CountTracker from "../components/CountTracker"

let count = 0

export default function DiceSelect(e){
    count++
    console.log(e.target.getAttribute("dicenumber"), e.target.getAttribute("dicecolor"))
    CountTracker(count)

    if (count === 3){
        count = 0
    }

    
}
