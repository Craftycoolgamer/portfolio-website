import { useState, useRef, useEffect } from 'react'
import './About.css'

const About = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const skillsGridRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState(null)

  useEffect(() => {
    const calculateMaxHeight = () => {
      if (skillsGridRef.current && !isExpanded) {
        const grid = skillsGridRef.current
        const cards = grid.querySelectorAll('.skillCard')
        if (cards.length > 0) {
          // Get computed styles
          const gridStyles = window.getComputedStyle(grid)
          const gap = parseFloat(gridStyles.gap) || 24
          
          // Get the first card position
          const firstCard = cards[0]
          const firstCardRect = firstCard.getBoundingClientRect()
          const firstCardTop = firstCardRect.top
          const firstCardHeight = firstCardRect.height
          
          // Find the first card in the second row
          let secondRowFirstCard = null
          for (let i = 0; i < cards.length; i++) {
            const cardRect = cards[i].getBoundingClientRect()
            // Check if this card is in the second row (top position is significantly different)
            if (Math.abs(cardRect.top - firstCardTop) > firstCardHeight / 2) {
              secondRowFirstCard = cards[i]
              break
            }
          }
          
          if (secondRowFirstCard) {
            const secondRowFirstCardRect = secondRowFirstCard.getBoundingClientRect()
            // Find the last card in the second row
            let secondRowLastCard = secondRowFirstCard
            const secondRowTop = secondRowFirstCardRect.top
            
            for (let i = Array.from(cards).indexOf(secondRowFirstCard) + 1; i < cards.length; i++) {
              const cardRect = cards[i].getBoundingClientRect()
              if (Math.abs(cardRect.top - secondRowTop) > 5) {
                break
              }
              secondRowLastCard = cards[i]
            }
            
            const secondRowLastCardRect = secondRowLastCard.getBoundingClientRect()
            const height = secondRowLastCardRect.bottom - firstCardTop + gap
            setMaxHeight(height)
          } else {
            // Fallback: calculate based on first card height
            setMaxHeight(firstCardHeight * 2 + gap)
          }
        }
      }
    }

    // Calculate on mount and window resize
    if (!isExpanded) {
      // Use requestAnimationFrame to ensure layout is complete
      requestAnimationFrame(() => {
        setTimeout(calculateMaxHeight, 50)
      })
    }
    
    window.addEventListener('resize', calculateMaxHeight)

    return () => {
      window.removeEventListener('resize', calculateMaxHeight)
    }
  }, [isExpanded])

  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'C/C++',
    'Embedded Systems',
    'Git',
    'TypeScript',
    'MySQL',
    'Microcontrollers',
    'Linux',
    'Windows',
    // 'macOS',
    'Android',
    // 'iOS',
    'Web Development',
    'Mobile Development',
    'Desktop Development',
    'Game Development',
    // 'AI',
    // 'Machine Learning',
    // 'Data Science',
    'Cloud Computing',
    // 'DevOps',
    'CI/CD',
    'Docker',
  ]

  return (
    <section className={`section about ${className}`.trim()}>
      <h2 className="sectionTitle">About Me</h2>
      <div className="aboutContainer">
        <div className="aboutContent">
          <div className="aboutText">
            <p>
              I'm a passionate full stack developer with a focus on
              embedded systems. I enjoy building end-to-end solutions that
              bridge the gap between software and hardware, from web applications
              to microcontroller programming.
            </p>
            <p>
              My expertise spans full stack development, creating robust
              applications with modern frameworks, and embedded systems development,
              where I develop firmware and interface with hardware components.
              I thrive on solving complex problems that require both software
              engineering and hardware understanding.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              working on embedded projects, contributing to open source projects,
              rock climbing, or riding motorcycles. I enjoy building personal
              projects that challenge me to grow in both software and hardware
              domains.
            </p>
          </div>
          <div className="aboutImage">
            <div className="imagePlaceholder">
              <span>Profile Image</span>
            </div>
          </div>
        </div>
        <div className="skillsSection">
          <h3 className="skillsTitle">Skills & Technologies</h3>
          <div 
            ref={skillsGridRef}
            className={`skillsGrid ${isExpanded ? 'expanded' : ''}`}
            style={!isExpanded && maxHeight ? { maxHeight: `${maxHeight}px` } : {}}
          >
            {skills.map((skill, index) => (
              <div key={index} className="skillCard">
                {skill}
              </div>
            ))}
          </div>
          {skills.length > 0 && (
            <button
              className="expandButton"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default About

