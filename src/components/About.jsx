import { useState } from 'react'
import './About.css'

const About = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false)
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
          <div className={`skillsGrid ${isExpanded ? 'expanded' : ''}`}>
            {skills.map((skill, index) => {
              // Show first 12 skills (approximately 2 rows) when not expanded
              if (!isExpanded && index >= 10) {
                return null
              }
              return (
                <div key={index} className="skillCard">
                  {skill}
                </div>
              )
            })}
          </div>
          {skills.length > 10 && (
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

