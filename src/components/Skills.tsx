import { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      icon: '🚀',
      title: 'Backend Frameworks',
      tags: ['Laravel', 'CodeIgniter', 'Livewire', 'ASP.Net'],
    },
    {
      icon: '⚡',
      title: 'Frontend Technologies',
      tags: ['Vue.js', 'Alpine.js', 'jQuery', 'JavaScript'],
    },
    {
      icon: '💾',
      title: 'Databases',
      tags: ['MySQL', 'MSSQL', 'Redis'],
    },
    {
      icon: '🎨',
      title: 'Styling Frameworks',
      tags: ['Tailwind CSS', 'Bootstrap', 'CSS3', 'HTML5'],
    },
    {
      icon: '🔌',
      title: 'APIs & Real-time',
      tags: ['API Integrations' ,'RESTful API', 'WebSockets', 'Postman', 'OAuth', 'Sanctum', 'Passport'],
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      tags: ['Azure', 'Firebase', 'Git', 'GitHub', 'Gitlab', 'Linux', 'CI/CD'],
    },
    {
      icon: '💻',
      title: 'Languages',
      tags: ['PHP', 'JavaScript', 'ASP.Net', 'C++'],
    },
    {
      icon: '🛡️',
      title: 'Security & Best Practices',
      tags: ['Authentication', 'Authorization', 'OWASP', 'Middlewares', 'Secure Coding'],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const cards = skillsRef.current?.querySelectorAll('.skill-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid" ref={skillsRef}>
          {skillCategories.map((cat, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.tags.map((tag, ti) => (
                  <span className="tag" key={ti}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
