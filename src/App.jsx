import { useRef, useEffect, useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const sections = useMemo(
    () => ({
      home: homeRef,
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
      contact: contactRef,
    }),
    []
  )

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sections).forEach(([key, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(key)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = sections[sectionId]?.current
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="app">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <div ref={sections.home}>
        <Hero scrollToSection={scrollToSection} />
      </div>
      <div ref={sections.about}>
        <About />
      </div>
      <div ref={sections.experience}>
        <Experience />
      </div>
      <div ref={sections.projects}>
        <Projects />
      </div>
      <div ref={sections.contact}>
        <Contact />
      </div>
    </div>
  )
}

export default App

