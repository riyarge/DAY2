import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Records from './components/Records'
import Add from './components/Add'
import {Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
      <h1>Welcome to React session</h1>
      <View/>
      <Routes>
        <Route path='/' element={<Records/>}></Route>
        <Route path='/add' element={<Add person={{fname:"Swathi",department:"English Literature",semester:"S4"}}/>}></Route>
      </Routes>
    </>
  )
}
export default App