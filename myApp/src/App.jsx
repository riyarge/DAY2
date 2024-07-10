import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Records from './components/Records'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to React session</h1>
      <View/>
      <Records/>
      <Add/>
    </>
  )
}

export default App
