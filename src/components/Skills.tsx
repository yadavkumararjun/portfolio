import '../styles/Skills.css'

interface Skill {
  category: string
  skills: Array<{
    name: string
    level: number
    icon: string
  }>
}

interface SkillsProps {
  id?: string
}

export default function Skills({ id }: SkillsProps): JSX.Element {
  const skillsData: Skill[] = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'HTML5', level: 95, icon: '🏗️' },
        { name: 'CSS5', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 92, icon: '✨' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, icon: '📱' },
        { name: 'Express.js', level: 85, icon: '🚀' },
        { name: 'MongoDB', level: 82, icon: '🗄️' },
        { name: 'RESTful APIs', level: 88, icon: '🔗' },
      ]
    },
    {
      category: 'Languages',
      skills: [
        { name: 'JavaScript', level: 92, icon: '🟨' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'C++', level: 75, icon: '⚙️' },
        { name: 'Java', level: 78, icon: '☕' },
        { name: 'C', level: 72, icon: '©️' },
      ]
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 88, icon: '🔧' },
        { name: 'VS Code', level: 92, icon: '💻' },
        { name: 'npm & yarn', level: 85, icon: '📦' },
        { name: 'Postman', level: 85, icon: '📮' },
      ]
    }
  ]

  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>

      <div className="skills-container">
        {skillsData.map((category) => (
          <div key={category.category} className="skill-category fade-in">
            <h3>{category.category}</h3>
            <div className="skill-items">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-summary">
        <div className="summary-card">
          <h4>Key Competencies</h4>
          <div className="competencies">
            {[
              'Full Stack Development',
              'MERN Stack',
              'REST APIs',
              'Database Design',
              'Problem Solving',
              'Clean Code',
              'Git Workflows',
              'Responsive Design'
            ].map((comp) => (
              <span key={comp} className="badge">{comp}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
