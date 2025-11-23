import './Projects.css'

const Projects = ({ className = '' }) => {
  const projects = [
    {
      title: 'Discount Program Enrollment Portal',
      description:
        'Created a responsive React HIPAA compliant interface for digital discount card enrollment and download. Integrated AdvancedMD APIs for automatic user profile updates',
      technologies: ['React', 'CSS', 'Node.js', 'Python', 'MySQL', 'AWS', 'REST APIs'],
      image: 'Discount Program Enrollment Portal.png',
      github: '',
      demo: 'https://portal.mysimplerx.com',
    },
    {
      title: 'Full-Stack Identity Verification System',
      description:
        'Designed and developed a web application that verifies resumes via USPS and QR codes. Built secure RESTful APIs and file upload pipelines handling 50 MB+ documents with validation. Implemented persistent backend storage using SQLite and C#.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Node.js', 'C#', 'SQLite', 'REST APIs'],
      // image: 'Full-Stack Identity Verification System.png',
      github: 'https://github.com/Craftycoolgamer/IdentityQRVerificationV2',
      demo: '#',
    },
    {
      title: 'Media Server Platform',
      description:
        'Engineered a containerized media server automating video storage and playback across 4+ sites. Leveraged Docker for scalable deployment and simplified maintenance.',
      technologies: ['Docker', 'Linux', 'Nginx'],
      image: 'Media Server Platform.png',
      github: '',
      demo: '',
    },
    {
      title: 'Hand Tracking Input System',
      description:
        'Developed real-time 1080p, 60 fps hand-tracking for gesture-based controls. Achieved accurate detection up to 5 ft using consumer-grade cameras.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
      // image: 'Hand Tracking Input System.png',
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive single-page website built with React and Vite. Features include dark/light mode toggle, smooth scroll animations, interactive navigation, and sections for about, experience, projects, certifications, and contact.',
      technologies: ['React', 'Vite', 'CSS', 'JavaScript'],
      image: 'Portfolio Website.png',
      github: 'https://github.com/Craftycoolgamer/portfolio-website',
      demo: '#',
    },
  ]

  return (
    <section className={`section projects ${className}`.trim()}>
      <h2 className="sectionTitle">Projects</h2>
      <div className="projectsContainer">
        <div className="projectsList">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`projectItem ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{
                '--delay': `${index * 0.1}s`,
              }}
            >
              <div className="projectVisual">
                <div className="projectImageBox">
                  {project.image && <img src={`${import.meta.env.BASE_URL}images/projects/${project.image}`} alt={project.title} className="projectImage" />}
                  {!project.image && <div className="imagePattern" />}
                  <div className="imageOverlay" />
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="liveButton"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <div className="projectInfo">
                <div className="projectMeta">
                  <span className="projectIndex">0{index + 1}</span>
                  <div className="projectTitleWrapper">
                    <h3 className="projectTitle">{project.title}</h3>
                    {project.github && (
                      <a
                        href={project.github}
                        className="githubButton"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <div className="projectDescriptionWrapper">
                  <p className="projectDescription">{project.description}</p>
                </div>
                <div className="projectTechnologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="techTag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


