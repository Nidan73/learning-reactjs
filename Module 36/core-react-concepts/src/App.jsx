import './App.css'

function App() {

  return (
    <>
    <h1>REACT CORE CONCEPTS</h1>
     <Person name = "Nidan"></Person>
    </>
  )
}
function Person(props){
  const age = 17;
   const design = {
    color : 'red', 
    fontSize : '120px' 
   } 
  return (
    <p style={design} >I am person : {props.name}</p>
  ) 
}

export default App
