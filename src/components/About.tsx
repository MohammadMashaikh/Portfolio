
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
             I'm a dedicated PHP and Laravel developer specializing in building robust, scalable web applications.  
             With a focus on clean, maintainable code and seamless user experiences, I bring ideas to life by combining backend efficiency with modern frontend techniques.  
             I enjoy tackling complex challenges and continuously learning to stay ahead in the fast-evolving web development landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg">
              I specialize in building modern, 
              responsive applications using cutting-edge technologies. I believe in writing clean, 
              maintainable code and creating user experiences that are both beautiful and functional.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              My approach combines technical expertise with creative problem-solving, ensuring that 
              every project I work on meets both user needs and business objectives. I'm always 
              excited to take on new challenges and learn emerging technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">30+</div>
                <div className="text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
                <div className="text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-700/50 p-6 rounded-xl text-center hover:bg-slate-700 transition-colors">
              <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Clean Code</h3>
              <p className="text-slate-400 text-sm">Writing maintainable and scalable code</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl text-center hover:bg-slate-700 transition-colors">
              <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Innovation</h3>
              <p className="text-slate-400 text-sm">Creative solutions to complex problems</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl text-center hover:bg-slate-700 transition-colors">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Collaboration</h3>
              <p className="text-slate-400 text-sm">Working effectively with teams</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl text-center hover:bg-slate-700 transition-colors">
              <Coffee className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Dedication</h3>
              <p className="text-slate-400 text-sm">Committed to delivering excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
