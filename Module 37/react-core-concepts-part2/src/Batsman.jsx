import { useState } from "react"

export default function Batsman(){
const scoreBoard = {
    border : '3px solid white'
} 
const [count , setCount] = useState(0);
const [six , countSix] = useState(0);
const Six = () =>
{
    const scoreSix = count + 6 ; 
    const hitSixes = six + 1 ; 
    countSix(hitSixes);
    setCount(scoreSix);
}
const Four = () =>
{
    const scoreFour = count + 4 ; 
    setCount(scoreFour);
}
const Single = () =>
{
    const scoreOne = count + 1 ; 
    setCount(scoreOne);
}
   return (
    
         <div style={scoreBoard}>
            <h3>Batter's name  : Tamim </h3>
            <p><small>Total six : {six}</small></p>
            { 
            count > 50 && alert("congo you got 50 runs")
            }
            <h3>Score : {count}</h3>
            <button onClick={Six}>Six</button>
            <button onClick={Four}>Four</button>
            <button onClick={Single}>Single</button>
        </div>
    )
}