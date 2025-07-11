import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'root' : section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#", id: 'home' },
    { name: "About", href: "#about", id: 'about' },
    { name: "Skills", href: "#skills", id: 'skills' },
    { name: "Experience", href: "#experience", id: 'experience' },
    { name: "Projects", href: "#projects", id: 'projects' },
    { name: "Contact", href: "#contact", id: 'contact' },
  ];

  const scrollToSection = (href, id) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection('home');
      setMenuOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
          transition-all duration-500 ${
            scrolled 
              ? "scale-100 shadow-2xl backdrop-blur-xl bg-white/95" 
              : "scale-105 shadow-lg backdrop-blur-lg bg-white/90"
          } border border-gray-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-3`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="hidden lg:block">
            <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-dancing">
              KS
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href, link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative group ${
                  activeSection === link.id
                    ? "text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                {link.name}
                {activeSection !== link.id && (
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="./assets/mine/sharif-swdev.pdf"
              download
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-dancing">
              Khasim Sharif
            </span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700 hover:text-purple-600 rounded-full transition-all duration-300 hover:bg-purple-50"
            >
              {menuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-20 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-sm transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200/50 p-6 space-y-1">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href, link.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? "text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {link.name}
            </button>
          ))}

          <div className="pt-4 border-t border-gray-200">
            <a
              href="./assets/mine/sharif-swdev.pdf"
              download
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;