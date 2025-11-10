import { useRef, useEffect, useState, useMemo } from 'react'
import { useScrollAnimation } from './hooks/useScrollAnimation'
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

  // Scroll animations for sections
  const [aboutRefAnim, isAboutVisible] = useScrollAnimation()
  const [experienceRefAnim, isExperienceVisible] = useScrollAnimation()
  const [projectsRefAnim, isProjectsVisible] = useScrollAnimation()
  const [contactRefAnim, isContactVisible] = useScrollAnimation()

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
      <div
        ref={(node) => {
          sections.about.current = node
          aboutRefAnim.current = node
        }}
      >
        <About className={isAboutVisible ? 'visible' : ''} />
      </div>
      <div
        ref={(node) => {
          sections.experience.current = node
          experienceRefAnim.current = node
        }}
      >
        <Experience className={isExperienceVisible ? 'visible' : ''} />
      </div>
      <div
        ref={(node) => {
          sections.projects.current = node
          projectsRefAnim.current = node
        }}
      >
        <Projects className={isProjectsVisible ? 'visible' : ''} />
      </div>
      <div
        ref={(node) => {
          sections.contact.current = node
          contactRefAnim.current = node
        }}
      >
        <Contact className={isContactVisible ? 'visible' : ''} />
      </div>
    </div>
  )
}

export default App

