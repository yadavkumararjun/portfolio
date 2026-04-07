import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'
import '../styles/Contact.css'

interface ContactProps {
  id?: string
  setActiveSection: (section: string) => void
}

export default function Contact({ id }: ContactProps): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="contact" id={id}>
      <h2>Let's Connect</h2>

      <div className="contact-content">
        <div className="contact-info slide-in-left">
          <p className="contact-intro">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out to me through any of these channels!
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <Mail className="method-icon" />
              <div className="method-content">
                <h4>Email</h4>
                <a href="mailto:kumararjunyadav9326@gmail.com">
                  kumararjunyadav9326@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-method">
              <Phone className="method-icon" />
              <div className="method-content">
                <h4>Phone</h4>
                <a href="tel:+918779474566">+91 8779474566</a>
              </div>
            </div>

            <div className="contact-method">
              <MapPin className="method-icon" />
              <div className="method-content">
                <h4>Location</h4>
                <p>Mumbai, India</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a 
              href="https://github.com/yadavkumararjun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/arjun-kumar-yadav-4ab3a2323" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="quick-response">
            <div className="response-item">
              <span className="response-icon">⚡</span>
              <p><strong>Quick Response:</strong> I typically reply within 24 hours</p>
            </div>
            <div className="response-item">
              <span className="response-icon">💼</span>
              <p><strong>Open to:</strong> Freelance projects, collaborations, and internships</p>
            </div>
          </div>
        </div>

        <div className="contact-form slide-in-right">
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. I'll get back to you soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-submit">
                <Send size={18} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
