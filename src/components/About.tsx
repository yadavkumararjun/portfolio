import { Book, Briefcase, Award, MapPin, Phone, Mail as MailIcon, Linkedin } from 'lucide-react'
import '../styles/About.css'

interface AboutProps {
  id?: string
}

export default function About({ id }: AboutProps): JSX.Element {
  return (
    <section className="about" id={id}>
      <h2>About Me</h2>

      <div className="about-content">
        <div className="about-intro slide-in-left">
          <p>
            I'm a passionate full-stack developer from Mumbai, India, currently pursuing a BTech in Computer Science 
            at VIT (Vellore Institute of Technology). I love building scalable web applications and solving complex problems 
            with clean, efficient code.
          </p>
          <p>
            My journey in tech started with curiosity about how websites work. Now, I specialize in MERN stack development 
            with a strong preference for backend architecture. I believe in continuous learning and staying updated with 
            the latest technologies.
          </p>
          <p>
            Beyond coding, I enjoy cooking, playing cricket, and reading tech articles. I'm always open to collaborating 
            on interesting projects and learning from the community.
          </p>
        </div>

        <div className="about-info slide-in-right">
          <div className="info-grid">
            <div className="info-card">
              <MapPin className="info-icon" />
              <div className="info-content">
                <h4>Location</h4>
                <p>Mumbai, India</p>
              </div>
            </div>

            <div className="info-card">
              <Phone className="info-icon" />
              <div className="info-content">
                <h4>Phone</h4>
                <p>+91 8779474566</p>
              </div>
            </div>

            <div className="info-card">
              <MailIcon className="info-icon" />
              <div className="info-content">
                <h4>Email</h4>
                <a href="mailto:kumararjunyadav9326@gmail.com">kumararjunyadav9326@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <Linkedin className="info-icon" />
              <div className="info-content">
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/arjun-kumar-yadav-4ab3a2323" target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </div>
            </div>
          </div>

          <div className="quick-facts">
            <div className="fact">
              <Book className="fact-icon" />
              <div>
                <h4>Education</h4>
                <p>BTech, Computer Science</p>
                <span>VIT Mumbai, 2nd Year</span>
              </div>
            </div>

            <div className="fact">
              <Briefcase className="fact-icon" />
              <div>
                <h4>Experience</h4>
                <p>Full Stack Development</p>
                <span>Building real-world projects</span>
              </div>
            </div>

            <div className="fact">
              <Award className="fact-icon" />
              <div>
                <h4>Achievements</h4>
                <p>Smart India Hackathon 2024</p>
                <span>College Level Participation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
