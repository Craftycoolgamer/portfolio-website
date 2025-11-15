import './About.css'

const About = ({ className = '' }) => {
  return (
    <section className={`section about ${className}`.trim()}>
      <h2 className="sectionTitle">About Me</h2>
      <div className="aboutContainer">
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
      </div>
    </section>
  )
}

export default About

