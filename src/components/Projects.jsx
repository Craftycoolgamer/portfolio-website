import './Projects.css'

const Projects = ({ className = '' }) => {
  const projects = [
    {
      title: 'This Website',
      description:
        'A modern, responsive single-page website built with React and Vite. Features include dark/light mode toggle, smooth scroll animations, interactive navigation, and sections for about, experience, projects, certifications, and contact.',
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Craftycoolgamer/portfolio-website',
      demo: '#',
    },
    {
      title: 'Project One',
      description:
        'A modern web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Project Two',
      description:
        'An e-commerce platform with payment integration and inventory management. Built with modern technologies for optimal performance.',
      technologies: ['React', 'Express', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Project Three',
      description:
        'A data visualization dashboard that displays analytics and insights. Features interactive charts and real-time data updates.',
      technologies: ['React', 'D3.js', 'Python'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Project Four',
      description:
        'A mobile-responsive portfolio website with smooth animations and modern UI design. Showcases projects and skills effectively.',
      technologies: ['React', 'CSS3', 'Vite'],
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section className={`section projects ${className}`.trim()}>
      <h2 className="sectionTitle">Projects</h2>
      <div className="projectsContainer">
        <div className="projectsGrid">
          {projects.map((project, index) => (
            <div key={index} className="projectCard">
              <div className="projectImage">
                <div className="imagePlaceholder">
                  <span>Project Image</span>
                </div>
              </div>
              <div className="projectContent">
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDescription">{project.description}</p>
                <div className="projectTechnologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="techTag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="projectLinks">
                  <a
                    href={project.github}
                    className="projectLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="projectLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

