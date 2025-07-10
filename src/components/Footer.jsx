import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Logo/Name */}
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Khasim Sharif
          </h3>

          {/* Tagline */}
          <p className="text-gray-300 mb-8 text-lg">
            Building the future, one line of code at a time
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {[
              { icon: FaGithub, href: 'https://github.com/khasim-sharif', color: 'hover:text-gray-400' },
              { icon: SiLeetcode, href: 'https://leetcode.com/khasim-sharif', color: 'hover:text-orange-400' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/khasim-sharif', color: 'hover:text-blue-400' },
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-gray-400 ${color} transition-all duration-300 hover:scale-125 hover:drop-shadow-lg`}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Made with <FaHeart className="text-red-500" /> by Khasim Sharif
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;