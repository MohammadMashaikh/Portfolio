import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const textArray = ['Laravel Expert', 'Vue.js Developer', 'API Architect', 'Full Stack Specialist'];
  const textArrayIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const typeText = () => {
      const currentText = textArray[textArrayIndexRef.current];
      let typingDelay = 100;

      if (isDeletingRef.current) {
        setTypedText(currentText.substring(0, charIndexRef.current - 1));
        charIndexRef.current--;
        typingDelay = 50;
      } else {
        setTypedText(currentText.substring(0, charIndexRef.current + 1));
        charIndexRef.current++;
        typingDelay = 100;
      }

      if (!isDeletingRef.current && charIndexRef.current === currentText.length) {
        typingDelay = 2000;
        isDeletingRef.current = true;
      } else if (isDeletingRef.current && charIndexRef.current === 0) {
        isDeletingRef.current = false;
        textArrayIndexRef.current = (textArrayIndexRef.current + 1) % textArray.length;
        typingDelay = 500;
      }

      timeout = setTimeout(typeText, typingDelay);
    };

    const startTimeout = setTimeout(typeText, 1000);
    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, []);

  // Mouse parallax
  useEffect(() => {
    const hero = document.querySelector('.hero');
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX / window.innerWidth - 0.5) * 20;
      const moveY = (clientY / window.innerHeight - 0.5) * 20;
      const gradientBg = document.querySelector('.gradient-bg') as HTMLElement;
      if (gradientBg) {
        gradientBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    hero?.addEventListener('mousemove', handleMouseMove as EventListener);
    return () => hero?.removeEventListener('mousemove', handleMouseMove as EventListener);
  }, []);

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="gradient-bg" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Mohammad Al-Mashaikh</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer | <span id="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </p>
          <p className="hero-description">
            Crafting robust and scalable full stack solutions with Laravel and Vue.js.
            Passionate about building efficient APIs and seamless user experiences.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={(e) => { handleBtnClick(e); scrollTo('contact'); }}
            >
              Get In Touch
            </button>
            <button
              className="btn btn-secondary"
              onClick={(e) => { handleBtnClick(e); scrollTo('projects'); }}
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse" />
      </div>
    </section>
  );
};

export default Hero;
