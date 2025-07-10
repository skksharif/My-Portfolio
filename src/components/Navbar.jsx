import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-dancing">
            KS
          </div>

      {/* Desktop Nav (shown only if menu is closed) */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm lg:text-base text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
              >
                {link.name}
                </button>
            </li>
          ))}
        </ul>

      {/* Toggle Button (always visible) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl sm:text-2xl text-gray-700 hover:text-purple-600 transition-colors duration-200 p-2"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu (on all screen sizes) */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <ul className="px-4 sm:px-6 py-4 space-y-2">
          {links.map((link) => (
            <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
              >
                {link.name}
                </button>
            </li>
          ))}
        </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
