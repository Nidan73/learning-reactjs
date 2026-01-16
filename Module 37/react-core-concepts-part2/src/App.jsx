
import './App.css'
import Counter from './counter';
import Batsman from './Batsman';
import Friends from './friends';
import { Suspense } from 'react';
import Show from './show';

 const fetchUsers = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   return res.json();
   }
function App() {
  const friendsPromise = fetchUsers();
  return (
    <>
     <h1>React Core Concepts Part 2 </h1>
     <Show></Show>
     
      {/* <Suspense fallback ={<p>Loading...</p>}>
      <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense> */}
      {/* <Counter></Counter>
      <Batsman></Batsman> */}
    </>
  )
}

export default App
