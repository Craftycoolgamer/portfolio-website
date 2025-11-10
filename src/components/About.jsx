import './About.css'

const About = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'HTML/CSS',
    'Git',
    'TypeScript',
    'MongoDB',
  ]

  return (
    <section className="section about">
      <h2 className="sectionTitle">About Me</h2>
      <div className="aboutContainer">
        <div className="aboutContent">
          <div className="aboutText">
            <p>
              I'm a passionate full stack developer with a love for creating
              beautiful and functional web applications. I enjoy solving complex
              problems and turning ideas into reality through code.
            </p>
            <p>
              My journey in web development started with a curiosity about how
              websites work, and it has evolved into a career focused on
              building user-centric applications that make a difference.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or working on personal
              projects that challenge me to grow.
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
          <div className="skillsGrid">
            {skills.map((skill, index) => (
              <div key={index} className="skillCard">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

