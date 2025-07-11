import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
import ParallaxBackground from './ParallaxBackground';
import MaskEffect from './MaskEffect';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'khasim.sharif@example.com',
      link: 'mailto:khasim.sharif@example.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 9876543210',
      link: 'tel:+919876543210'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Hyderabad, India',
      link: '#'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <ParallaxBackground className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <MaskEffect>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </MaskEffect>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <MaskEffect maskType="slide">
              <div className="space-y-4 lg:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-dancing">
                    Let's Work Together
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question or just want to say hi, I'll try my 
                    best to get back to you!
                  </p>
                </div>

                {contactInfo.map((info, index) => (
                  <GlassCard 
                    key={index}
                    gradient="from-purple-400/20 to-blue-400/20"
                    className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white">
                      <info.icon className="text-base" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-1">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </MaskEffect>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <MaskEffect maskType="slide">
              <GlassCard gradient="from-blue-400/20 to-purple-400/20">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 text-sm bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <FaPaperPlane />
                    Send Message
                  </button>
                </form>
              </GlassCard>
            </MaskEffect>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;