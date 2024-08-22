//import { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SkillsSection from "./components/SkillsSection"
import WelcomeSection from "./components/WelcomeSection"

function App() {
  
  const navList = ['welcome','skills','projects']

  return (
    <>
     <Navbar tabs={navList} />
      <WelcomeSection id={navList[0]}/>
     <SkillsSection id={navList[1]} />
     <Footer/>
    </>
  )
}

export default App
