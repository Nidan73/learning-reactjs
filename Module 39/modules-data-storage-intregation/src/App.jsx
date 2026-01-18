
import './App.css'
import {jog} from './math/math'
import { Suspense } from 'react';
import Bottles from './components/bottles/bottles';
function App() {
   
   const add = jog(5,2);
   const fetchBottles = fetch('./bottles.json')
   .then(res => res.json());
  return (
    <>
      <h1>{add}</h1>
     <h1>Practice</h1>
     <Suspense fallback = { <h3>Bottles are loading</h3> }>
     <Bottles fetchBottles = {fetchBottles}></Bottles>
     </Suspense>
    </>
  )
}

export default App
