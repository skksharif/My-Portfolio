import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-[120px] left-1/4 -translate-x-1/2 z-50">
      {/* Desktop Nav (shown only if menu is closed) */}
      {!menuOpen && (
        <ul className="md:hidden md:flex bg-white/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-full px-10 py-3 gap-10 shadow-md">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-base font-medium transition-colors duration-200 hover:text-blue-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Toggle Button (always visible) */}
      <div className="flex items-center justify-center mt-3 md:mt-0">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl bg-white/80 border border-gray-200 dark:border-gray-700 p-3 rounded-full shadow-md"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Menu (on all screen sizes) */}
      {menuOpen && (
        <ul className="absolute top-20 left-1/2 -translate-x-1/2 bg-white/90 border border-gray-200 dark:border-gray-700 rounded-xl py-4 px-8 shadow-lg flex flex-col gap-4 text-center">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-base font-medium transition-colors duration-200 hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
