import React, { useState } from "react";
import Logo from "@/assets/logo.png"; // adjust path if different

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth scroll with custom duration
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const top = targetElement.getBoundingClientRect().top + window.scrollY - 60; // offset for navbar

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    } else if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#0f172a] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
         <div className="flex items-center space-x-2">
            <img
                src={Logo}
                alt="MA Logo"
                className="w-40 h-20 rounded-full object-contain"
            />
            {/* Optional text label */}
            {/* <span className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Mohammad
            </span> */}
            </div>
        </div>

        <div className="hidden md:flex space-x-8 text-base font-semibold">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="relative hover:text-cyan-400 transition-colors after:block after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:via-purple-500 after:to-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-300 hover:text-cyan-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#0f172a] text-lg font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="block py-2 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
