import './App.css';
import ToDo from './ToDo';
import Singer from './singer';
function App() {
  const singers = [{ name : "Nidan" , age : 24 },{ name : "Tanjim" , age : 26 },
    { name : "Nur" , age : 26 }];
  return (
    <>
    <h1>REACT CORE CONCEPTS</h1>
     {/* <Person name = "Nidan"></Person>
      <Devloper name ="Nidan" age ="24" tech ="js"></Devloper>
      <Devloper name ="Nur" age ="26" tech ="HTML"></Devloper>
      <Devloper name ="Tanjim" age ="27" tech ="ECO"></Devloper>
      <ToDo tech ="js" isDone = {true}></ToDo>
      <ToDo tech ="css" isDone = {true}></ToDo>
      <ToDo tech ="html" isDone = {false}></ToDo> */}
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
    </>
  )
}


function Devloper ({name , age = 0, tech}){
  return (
    <>
    <div className='dev'>
    <p>Devloper Name : {name}</p>
    <p>Devloper age : {age}</p>
    <p>Devloper tech : {tech}</p>
    </div>
    </>
  )
} 
function Person(props){
   const design = {
    color : 'red', 
    fontSize : '120px' 
   } 
  return (
    <p style={design} >I am person : {props.name}</p>
  ) 
}

export default App
