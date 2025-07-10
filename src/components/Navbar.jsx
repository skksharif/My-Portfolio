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
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
          flex items-center justify-between px-4 py-2 
          backdrop-blur-xl bg-white/90 shadow-lg border border-gray-200 
          rounded-full transition-all duration-500 ${
            scrolled ? "scale-105" : "scale-100"
          }`}
      >


        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 px-4">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* CTA - CV Button */}
        <div className="hidden lg:flex">
          <a
            href="./assets/mine/sharif-swdev.pdf"
            download
            className="ml-4 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-full font-semibold hover:scale-105 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden px-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-700 hover:text-purple-600 rounded-full transition-all"
          >
            {menuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-1/2 transform -translate-x-1/2 z-40 w-[85%] max-w-md transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl shadow-xl rounded-xl border border-gray-200 px-6 py-4 space-y-3">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left text-gray-700 hover:text-purple-600 py-2 font-medium"
            >
              {link.name}
            </button>
          ))}

          <a
            href="./assets/mine/sharif-swdev.pdf"
            download
            className="block w-full text-center mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
