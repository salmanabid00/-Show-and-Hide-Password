import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [pstatus, setPatus] = useState(false)
  return (
   <div>
   <input type={pstatus? 'text' : 'password'} /> <button onClick={()=>setPatus(!pstatus)} >{pstatus? 'hide' : 'show '}</button>
   </div>
  )
}

export default App
