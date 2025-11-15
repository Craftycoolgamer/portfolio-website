import { useState, useRef, useEffect } from 'react'
import './Experience.css'

const Experience = ({ className = '' }) => {
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

  const experiences = [
    {
      company: 'Buzz Financial (Expitrans)',
      role: 'Full Stack Developer',
      period: 'Jun 2025 - Present',
      description:
        'Led development of multiple projects using a variety of technologies including AWS, React, Node.js, PHP, Python, and more. Collaborated with cross-functional teams to deliver high-quality software solutions. Integrated with various APIs and databases to deliver seamless user experiences.',
    },
  ]

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
    <section className={`section experience ${className}`.trim()}>
      <h2 className="sectionTitle">Experience</h2>
      <div className="experienceContainer">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timelineItem">
              <div className="timelineMarker"></div>
              <div className="timelineContent">
                <div className="experienceCard">
                  <div className="experienceHeader">
                    <h3 className="experienceRole">{exp.role}</h3>
                    <span className="experienceCompany">{exp.company}</span>
                  </div>
                  <span className="experiencePeriod">{exp.period}</span>
                  <p className="experienceDescription">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
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

export default Experience

