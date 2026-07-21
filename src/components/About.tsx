const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a passionate <strong>Full Stack Developer</strong> specializing in creating powerful,
              scalable web applications. With expertise in <strong>Laravel</strong> and{' '}
              <strong>Vue.js</strong>, I transform complex requirements into elegant solutions.
            </p>
            <p className="about-paragraph">
              My focus is on building robust RESTful APIs, implementing real-time features with WebSockets,
              and optimizing database performance. I thrive on solving challenging problems and continuously
              learning new technologies to deliver exceptional results.
            </p>
            <p className="about-paragraph">
              I'm a dedicated PHP and Laravel developer specializing in building robust, scalable web applications.
              With a focus on clean, maintainable code and seamless user experiences, I bring ideas to life by
              combining backend efficiency with modern frontend techniques.
            </p>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">14+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">12+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4+</div>
                <div className="stat-label">Years Exp.</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
