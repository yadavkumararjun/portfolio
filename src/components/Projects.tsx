import { Github, ExternalLink } from 'lucide-react'
import '../styles/Projects.css'

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  github?: string
  demo?: string
  featured: boolean
}

interface ProjectsProps {
  id?: string
}

export default function Projects({ id }: ProjectsProps): JSX.Element {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with MERN stack. Features include product catalog, shopping cart, user authentication, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      image: '🛒',
      featured: true,
      github: 'https://github.com/yadavkumararjun',
      demo: '#'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'A real-time chat application with WebSocket integration. Users can create rooms, send messages, and see typing indicators.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      image: '💬',
      featured: true,
      github: 'https://github.com/yadavkumararjun',
    },
    {
      title: 'Task Management Dashboard',
      description: 'A comprehensive task management system with drag-and-drop functionality, user roles, and real-time updates.',
      technologies: ['React', 'TypeScript', 'REST API', 'MongoDB'],
      image: '📋',
      featured: false,
      github: 'https://github.com/yadavkumararjun',
    },
    {
      title: 'Weather App',
      description: 'A weather application that fetches real-time weather data with a beautiful UI and detailed forecasts.',
      technologies: ['React', 'TypeScript', 'Open Weather API', 'CSS3'],
      image: '🌤️',
      featured: false,
      demo: '#'
    },
    {
      title: 'Personal Blog',
      description: 'A blog platform with markdown support, categories, and search functionality. Built with Node.js backend.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '📝',
      featured: false,
    },
    {
      title: 'Code Learning Platform',
      description: 'An interactive platform for learning programming with tutorials, exercises, and real-time code editor.',
      technologies: ['React', 'Node.js', 'Python Backend', 'Docker'],
      image: '💡',
      featured: false,
      github: 'https://github.com/yadavkumararjun',
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>

      <div className="featured-projects">
        {featuredProjects.map((project) => (
          <div key={project.title} className="featured-project-card card fade-in">
            <div className="project-image">
              <span className="project-emoji">{project.image}</span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn"
                    title="View on GitHub"
                  >
                    <Github size={18} />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn"
                    title="View Live Demo"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {otherProjects.length > 0 && (
        <>
          <h2 style={{ marginTop: '4rem' }}>Other Projects</h2>
          <div className="projects-grid">
            {otherProjects.map((project) => (
              <div key={project.title} className="project-card card fade-in">
                <div className="project-header">
                  <span className="project-emoji">{project.image}</span>
                  <h3>{project.title}</h3>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn small"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn small"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="projects-cta">
        <p>Interested in my work?</p>
        <a href="https://github.com/yadavkumararjun" target="_blank" rel="noopener noreferrer" className="btn">
          View More on GitHub
        </a>
      </div>
    </section>
  )
}
