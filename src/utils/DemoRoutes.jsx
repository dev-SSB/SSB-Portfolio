import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/02-Home-Section/Home.jsx'
import SkillsExperience from "../components/03-Skills-Exper-Section/SkillsExperience.jsx"
import Projects from "../components/04-Project-Section/Projects.jsx"
import CertificationsEdu from "../components/05-Certi-Edu-Section/CertificationsEdu.jsx"
import Contact from "../components/06-Contact-Section/Contact.jsx"

const DemoRoutes = () => {
  return (
    <main className='flex-grow pt-5'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/experience' element={<SkillsExperience/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<CertificationsEdu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default DemoRoutes;
