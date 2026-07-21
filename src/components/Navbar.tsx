import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.pageYOffset >= el.offsetTop - 200) {
          current = el.getAttribute('id') || '';
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 100;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleClick(e, '#home')}>MA</a>
        <ul className="nav-menu">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`nav-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
