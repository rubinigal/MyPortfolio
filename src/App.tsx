//import { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SkillsSection from "./components/SkillsSection"
import WelcomeSection from "./components/WelcomeSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"

function App() {
  
  const navList = ["welcome","skills","projects","contact"]

  return (
    <>
     <Navbar tabs={navList} />
     <WelcomeSection id={navList[0]}/>
     <SkillsSection id={navList[1]} />
     <ProjectsSection id={navList[2]} />
     <ContactSection id={navList[3]} />
     <Footer/>
    </>
  )
}

export default App
