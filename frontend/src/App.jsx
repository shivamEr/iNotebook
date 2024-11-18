import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const handleCount = ()=>{
    setCount(count+1);
   }
  return (
    <>
      <button onClick={handleCount}>Count</button>
      <p className="read-the-docs">Count : {count}</p>
    </>
  )
}

export default App
