
import { useState } from 'react';
import './App.css'
import Counter from './counter';
function App() {
   const [count , setCount]= useState(0)
  return (
    <>
     <h1>React Core Concepts Part 2 </h1>
      <Counter></Counter>
    </>
  )
}

export default App
