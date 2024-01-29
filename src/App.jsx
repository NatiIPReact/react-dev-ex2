import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CCCQ1 from '../ClassComponents/CCQ1'
import CCCQ2 from '../ClassComponents/CCQ2'
import CCQ3 from '../ClassComponents/CCQ3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Question 1</h1>
      <CCCQ1 />
      <h1>Question 2</h1>
      <CCCQ2 />
      <h1>Question 3</h1>
      <CCQ3 />
    </>
  )
}

export default App
