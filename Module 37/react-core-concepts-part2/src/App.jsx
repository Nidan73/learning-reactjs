
import './App.css'

function App() {
  const handleclick = (num) => {
    num += 5 ; 
    alert(num)}
  return (
    <>
     <h1>React Core Concepts Part 2 </h1>
      <button onClick={() => handleclick(10)}>Click Me</button>
    </>
  )
}

export default App
