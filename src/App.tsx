import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/App.css'

function App(): JSX.Element {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About id="about" />
        <Skills id="skills" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Contact id="contact" setActiveSection={setActiveSection} />
      </main>
      <Footer />
    </div>
  )
}

export default App
