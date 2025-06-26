
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with PHP Laravel, Javascript, and MySQL. Features include user authentication, permissions, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500",
      technologies: ["Laravel", "Javascript", "jQuery", "CSS",  "Bootstrap", "Spatie Media", "Spatie Permissions", "MySQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, file sharing, and team communication features built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather application with location-based forecasts, historical data visualization, and responsive design for all devices.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with real-time data processing and interactive visualizations.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Restaurant Ordering System",
      description: "A mobile-first ordering platform for restaurants with menu management, order tracking, and payment integration.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500",
      technologies: ["React Native", "Express", "MySQL", "PayPal API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course creation, progress tracking, and interactive learning tools for students and instructors.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors group"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
