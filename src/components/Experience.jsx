import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Company Name',
      role: 'Senior Developer',
      period: '2022 - Present',
      description:
        'Led development of multiple web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    },
    {
      company: 'Previous Company',
      role: 'Full Stack Developer',
      period: '2020 - 2022',
      description:
        'Developed and maintained web applications, implemented new features, and optimized performance. Worked with modern JavaScript frameworks and RESTful APIs.',
    },
    {
      company: 'Another Company',
      role: 'Junior Developer',
      period: '2018 - 2020',
      description:
        'Started my professional journey, learning best practices and contributing to various projects. Gained experience in frontend and backend development.',
    },
  ]

  return (
    <section className="section experience">
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
      </div>
    </section>
  )
}

export default Experience

