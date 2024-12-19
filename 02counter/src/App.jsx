import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  let [counter, setCounter] = useState(5)

  //let counter = 5

  const addValue = () => {
    if(counter < 20) {
    counter = counter + 1
    setCounter(counter) 
    console.log("value added ", counter);
    }else{
      alert("You can't add and value after it reaches to 20")
    }
  }
  const removeValue = () => {
    if(counter >= 1){
    setCounter(counter - 1)
    }else{
      alert("value can't go to nagative")
    }
  }

  return (
    <>
      <h1>chai aur jeel</h1>
      <h3>counter value: {counter}</h3>

      <button
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
