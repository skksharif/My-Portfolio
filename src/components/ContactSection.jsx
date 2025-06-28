import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'khasimsh52@gmail.com',
      link: 'mailto:khasimsh52@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9392847052',
      link: 'tel:+919392847052'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Andhra Pradesh, India',
      link: null
    }
  ];

  return (
    <section className="py-20 px-4 relative" id="contact">
      {/* Background Elements */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 ${
        isDarkMode ? 'opacity-30' : 'opacity-20'
      }`}>
        <div className={`absolute w-96 h-96 rounded-full blur-3xl top-10 -left-20 transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20' 
            : 'bg-gradient-to-r from-blue-400/30 to-purple-400/30'
        }`}></div>
        <div className={`absolute w-80 h-80 rounded-full blur-3xl bottom-10 -right-20 transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-l from-blue-600/20 to-indigo-600/20' 
            : 'bg-gradient-to-l from-pink-400/30 to-blue-400/30'
        }`}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 font-dancing transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-semibold mb-6 transition-colors duration-500 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Let's Connect
              </h3>
              <p className={`text-base leading-relaxed mb-8 transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm always excited to discuss new opportunities, innovative projects, or just have a chat about technology and development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-800/30 border-gray-700/30 hover:bg-gray-800/50' 
                      : 'bg-white/30 border-white/30 hover:bg-white/50'
                  }`}
                >
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="flex items-center space-x-4 group"
                    >
                      <div className={`text-2xl p-3 rounded-lg transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-purple-600/20 group-hover:bg-purple-600/30' 
                          : 'bg-blue-500/20 group-hover:bg-blue-500/30'
                      }`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className={`text-sm font-medium transition-colors duration-500 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {info.label}
                        </p>
                        <p className={`text-base font-semibold transition-colors duration-500 ${
                          isDarkMode ? 'text-white group-hover:text-purple-300' : 'text-gray-800 group-hover:text-blue-600'
                        }`}>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <div className={`text-2xl p-3 rounded-lg transition-colors duration-300 ${
                        isDarkMode ? 'bg-purple-600/20' : 'bg-blue-500/20'
                      }`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className={`text-sm font-medium transition-colors duration-500 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {info.label}
                        </p>
                        <p className={`text-base font-semibold transition-colors duration-500 ${
                          isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <p className={`text-sm font-medium mb-4 transition-colors duration-500 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Follow me on
              </p>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', url: 'https://github.com/skksharif', icon: './assets/icons/github.png' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/skksharif', icon: './assets/icons/linkedin.png' },
                  { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/khasimsh52bi/', icon: './assets/icons/gfg.png' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
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
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
              isDarkMode 
                ? 'bg-gray-800/20 border-gray-700/30' 
                : 'bg-white/20 border-white/30'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-opacity-50 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600/30 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500' 
                      : 'bg-white/50 border-gray-300/30 text-gray-800 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-opacity-50 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600/30 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500' 
                      : 'bg-white/50 border-gray-300/30 text-gray-800 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-opacity-50 resize-none ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600/30 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500' 
                      : 'bg-white/50 border-gray-300/30 text-gray-800 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white'
                } shadow-lg`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-green-900/20 border-green-700/30 text-green-300' 
                      : 'bg-green-100/80 border-green-300/30 text-green-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">✅</span>
                    <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;