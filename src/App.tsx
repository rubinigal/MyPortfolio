//import { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
//import './App.css'

function App() {
  
  const navList = ['skills','projects']

  return (
    <>
     <Navbar tabs={navList} />
     <Footer/>
    </>
  )
}

export default App
