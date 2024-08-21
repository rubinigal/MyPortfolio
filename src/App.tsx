//import { useState } from 'react'
import Navbar from "./components/Navbar"
//import './App.css'

function App() {
  
  const navList = ['Skills','Projects']

  return (
    <>
     <Navbar tabs={navList} />
    </>
  )
}

export default App
