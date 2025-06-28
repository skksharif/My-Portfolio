import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#resume' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/skksharif', 
      icon: './assets/icons/github.png' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/skksharif', 
      icon: './assets/icons/linkedin.png' 
    },
    { 
      name: 'GeeksforGeeks', 
      url: 'https://www.geeksforgeeks.org/user/khasimsh52bi/', 
      icon: './assets/icons/gfg.png' 
    }
  ];

  return (
    <footer className={`relative py-16 px-4 transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-gray-900/50 border-t border-gray-800/50' 
        : 'bg-gray-50/50 border-t border-gray-200/50'
    }`}>
      {/* Background Elements */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 ${
        isDarkMode ? 'opacity-20' : 'opacity-15'
      }`}>
        <div className={`absolute w-96 h-96 rounded-full blur-3xl -top-20 left-1/2 transform -translate-x-1/2 transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-600/10 to-blue-600/10' 
            : 'bg-gradient-to-r from-blue-400/15 to-purple-400/15'
        }`}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className={`text-2xl font-bold font-dancing transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Shaik Khasim Sharif
            </h3>
            <p className={`text-base leading-relaxed transition-colors duration-500 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Full-Stack Developer passionate about creating innovative web solutions 
              and bringing ideas to life through clean, efficient code.
            </p>
            <div className={`inline-block px-4 py-2 rounded-lg transition-colors duration-500 ${
              isDarkMode 
                ? 'bg-purple-600/20 text-purple-300 border border-purple-600/30' 
                : 'bg-blue-500/20 text-blue-700 border border-blue-500/30'
            }`}>
              <span className="text-sm font-medium">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className={`text-lg font-semibold transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-base transition-all duration-300 hover:translate-x-2 inline-block ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-purple-300' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className={`text-lg font-semibold transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Get In Touch
            </h4>
            
            <div className="space-y-3">
              <a
                href="mailto:khasimsh52@gmail.com"
                className={`text-base transition-colors duration-300 block ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-purple-300' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                khasimsh52@gmail.com
              </a>
              <a
                href="tel:+919392847052"
                className={`text-base transition-colors duration-300 block ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-purple-300' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                +91 9392847052
              </a>
              <p className={`text-base transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Andhra Pradesh, India
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800/40 hover:bg-gray-700/60' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                >
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className={`pt-8 border-t text-center transition-colors duration-500 ${
            isDarkMode ? 'border-gray-800/50' : 'border-gray-200/50'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm transition-colors duration-500 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              © {currentYear} Shaik Khasim Sharif. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <p className={`text-sm transition-colors duration-500 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Built with React & ❤️
              </p>
              
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="text-lg"
              >
                🚀
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;