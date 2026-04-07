import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import '../styles/Hero.css'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps): JSX.Element {
  return (
    <section className="hero" id="home">
      <div className="hero-content fade-in">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="gradient-text">Arjun Kumar Yadav</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer | Backend Enthusiast | MERN Stack</p>
          <p className="hero-description">
            I build scalable web applications with modern technologies. Passionate about clean code, 
            problem-solving, and continuously learning new technologies. Currently exploring cloud 
            architecture and microservices.
          </p>

          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => setActiveSection('projects')}
            >
              View My Work
              <ArrowRight size={20} />
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => setActiveSection('contact')}
            >
              Get In Touch
            </button>
          </div>

          <div className="hero-socials">
            <a 
              href="https://github.com/arjunky" 
              target="_blank" 
              rel="noopener noreferrer"
              title="GitHub"
              className="social-btn"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/arjun-kumar-yadav-4ab3a2323" 
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn"
              className="social-btn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:kumararjunyadav9326@gmail.com"
              title="Email"
              className="social-btn"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-visual slide-in-right">
          <div className="floating-card">
            <div className="card-item">
              <span className="card-label">Tech Stack</span>
              <div className="tech-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
              </div>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="card-item">
              <span className="card-label">Currently Learning</span>
              <div className="tech-tags">
                <span>TypeScript</span>
                <span>Docker</span>
                <span>AWS</span>
              </div>
            </div>
          </div>
          <div className="floating-card card-3">
            <span className="card-emoji">💻</span>
            <span className="card-text">Full Stack Developer</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}
