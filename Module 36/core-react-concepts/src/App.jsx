import './App.css'

function App() {

  return (
    <>
    <h1>REACT CORE CONCEPTS</h1>
     <Person name = "Nidan"></Person>
      <Devloper name ="Nidan" age ="24" tech ="js"></Devloper>
      <Devloper name ="Nur" age ="26" tech ="HTML"></Devloper>
      <Devloper name ="Tanjim" age ="27" tech ="ECO"></Devloper>
    </>
  )
}

function Devloper (props){
  return (
    <>
    <div className='dev'>
    <p>Devloper Name : {props.name}</p>
    <p>Devloper age : {props.age}</p>
    <p>Devloper tech : {props.tech}</p>
    </div>
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
