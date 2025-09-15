import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground'
import { Navbar } from '../components/Navbar'
import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'


function Home() {
  return (
    <div className="min-h-screen  bg-background text-foreground overflow-x-flow">
    
        {/*Theme Toggle  */}
        <ThemeToggle /> 
        {/* Background Effects */}
        <StarBackground />
        {/*Navbar  */}
        <Navbar />
        {/* Main content */}
          <main>
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          </main>
        {/* Footer */}
        <Footer />
 </div>
  )
}


export default Home