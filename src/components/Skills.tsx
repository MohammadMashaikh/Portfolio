
import { Database, Globe, Palette, Server, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Angular", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: ["Node.js", "Python", "PHP", "Express.js", "Django", "Laravel", "REST APIs", "GraphQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-8 h-8" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Git", "Docker", "AWS", "Firebase"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["React Native", "Flutter", "Ionic", "Progressive Web Apps", "Mobile-First Design"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Design & UX",
      icon: <Palette className="w-8 h-8" />,
      skills: ["UI/UX Design", "Figma", "Adobe XD", "Responsive Design", "Accessibility", "User Research"],
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Performance & DevOps",
      icon: <Zap className="w-8 h-8" />,
      skills: ["Optimization", "CI/CD", "Testing", "Monitoring", "Performance Tuning", "Security"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800 transition-all duration-300 group">
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-slate-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
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
