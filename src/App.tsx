//import { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SkillsSection from "./components/SkillsSection"
import WelcomeSection from "./components/WelcomeSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import WorkExp from "./components/WorkExp"

function App() {
  
  const navList = ["welcome","skills","jobs","projects","contact"];

  return (
    <>
     <Navbar tabs={navList} />
     <WelcomeSection id={navList[0]}/>
     <SkillsSection id={navList[1]} />
     <WorkExp id={navList[2]} />
     <ProjectsSection id={navList[3]} />
     <ContactSection id={navList[4]} />
     <Footer/>
    </>
  )
}

export default App
