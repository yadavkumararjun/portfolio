import { Calendar, Award, BookOpen } from 'lucide-react'
import '../styles/Experience.css'

interface TimelineItem {
  type: 'education' | 'achievement' | 'project'
  title: string
  subtitle: string
  description: string
  date: string
  icon: React.ReactNode
}

interface ExperienceProps {
  id?: string
}

export default function Experience({ id }: ExperienceProps): JSX.Element {
  const timeline: TimelineItem[] = [
    {
      type: 'education',
      title: 'BTech Computer Science',
      subtitle: 'VIT Mumbai',
      description: 'Currently in 2nd Year, Semester 4. Building strong foundations in DSA, database systems, and web technologies. CGPA: 8.2+',
      date: '2023 - Present',
      icon: <BookOpen size={24} />
    },
    {
      type: 'achievement',
      title: 'Smart India Hackathon 2024',
      subtitle: 'College Level Participation',
      description: 'Participated in SIH hackathon representing the college. Worked on an innovative project but disqualified in the first round due to technical issues.',
      date: '2024',
      icon: <Award size={24} />
    },
    {
      type: 'project',
      title: 'Full Stack Projects',
      subtitle: 'Personal & College Projects',
      description: 'Developed multiple websites and applications for college assignments and personal learning. Built E-commerce systems, Chat applications, and Admin panels using MERN stack.',
      date: '2023 - Present',
      icon: <Calendar size={24} />
    },
  ]

  return (
    <section className="experience" id="experience">
      <h2>Experience & Timeline</h2>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item fade-in">
            <div className="timeline-marker">
              <div className="timeline-icon">
                {item.icon}
              </div>
            </div>

            <div className="timeline-content card">
              <div className="timeline-header">
                <h3>{item.title}</h3>
                <span className={`timeline-type type-${item.type}`}>{item.type}</span>
              </div>

              <p className="timeline-subtitle">{item.subtitle}</p>
              <p className="timeline-date">
                <Calendar size={16} />
                {item.date}
              </p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="achievements-grid">
        <div className="achievement-card">
          <div className="achievement-number">5+</div>
          <div className="achievement-label">Projects Completed</div>
          <div className="achievement-desc">Full stack applications built</div>
        </div>

        <div className="achievement-card">
          <div className="achievement-number">30+</div>
          <div className="achievement-label">Technologies</div>
          <div className="achievement-desc">Across multiple domains</div>
        </div>

        <div className="achievement-card">
          <div className="achievement-number">8.2+</div>
          <div className="achievement-label">CGPA</div>
          <div className="achievement-desc">Academic Excellence</div>
        </div>

        <div className="achievement-card">
          <div className="achievement-number">100%</div>
          <div className="achievement-label">Dedication</div>
          <div className="achievement-desc">To learning and growth</div>
        </div>
      </div>
    </section>
  )
}
