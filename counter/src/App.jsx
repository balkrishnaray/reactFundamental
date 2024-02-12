import { useState } from 'react';
import './App.css'

function App() {

let [count,setcount] =useState(10)
// let [decrease,decreasecount] =useState(10)
const addvalue = ()=>{
  if(count >=0 && count <20){
    setcount(count+1);
    
  }
}
const removevalue = () => {
  console.log("value removed")
  // decreasecount(decrease-1);
  if(count >0){
    setcount(count-1);
  }

}
  return (
    <>
      <h1>coding from sagarmatha boys hostel</h1>
      <h2>counter value: {count}</h2>
      <button onClick={addvalue}>add value{count}</button><br />
      <button onClick={removevalue}>remove value{count}</button>
      <button onClick={removevalue}>remove value{count}</button>
    </>
  )
}

export default App
