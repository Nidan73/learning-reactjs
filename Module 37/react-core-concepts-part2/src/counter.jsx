import { useState } from 'react';

export default function Counter(){

    const counterStyle = {
        margin : '10px', 
        border : '2px solid red'
    }
    const [count , setCount]= useState(0);
   const handleClicked =() => {
    const newCount = count + 5 ;
    setCount(newCount);
   }
    return(
        <div style={counterStyle}>
            <h3>counter : {count}</h3>
            <button onClick={handleClicked}>Add</button>
        </div>
    )
}