import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import '../styles/Navbar.css'

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="gradient-text">AKY</span>
        </div>

        <button 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.label} className="nav-item">
              <a
                href={item.href}
                className={`nav-link ${activeSection === item.label.toLowerCase() ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(item.label.toLowerCase())
                  setIsOpen(false)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a 
              href="https://github.com/arjunky" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link nav-button"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
