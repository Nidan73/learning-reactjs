import axios from 'axios'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import MarksChart from './components/MarksChart/MarksChart'
import Nav from './components/Navbar/Nav'
import ResultChart from './components/ResultChart/ResultChart'
import { Suspense } from 'react'


const marksPromise = axios.get('marksData.json');
function App() {

  return (
    <> 
       {/* <DaisyNav></DaisyNav> */}
       <Nav></Nav>
       <ResultChart></ResultChart>
       <Suspense fallback ={"Loading"}> 
        <MarksChart marksPromise = {marksPromise}></MarksChart>
       </Suspense>

    </>
  )
}

export default App
