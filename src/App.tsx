//import { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SkillsSection from "./components/SkillsSection"

function App() {
  
  const navList = ['skills','projects']

  return (
    <>
     <Navbar tabs={navList} />
     <SkillsSection id={navList[0]} />
     <Footer/>
    </>
  )
}

export default App
