import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import '../styles/Footer.css'

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a 
              href="https://github.com/yadavkumararjun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/arjun-kumar-yadav-4ab3a2323" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:kumararjunyadav9326@gmail.com"
              className="footer-social"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Tech Stack</h4>
          <p className="tech-list">React • TypeScript • Node.js • MongoDB • Express</p>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>
          Made with <Heart size={16} className="heart-icon" /> by Arjun Kumar Yadav
        </p>
        <p className="footer-year">
          © {currentYear} Arjun Kumar Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
