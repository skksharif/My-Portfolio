import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-12 w-32 h-32 md:w-44 md:h-44 bg-emerald-200/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-24 right-20 w-28 h-28 md:w-40 md:h-40 bg-rose-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/3 w-24 h-24 md:w-36 md:h-36 bg-amber-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 font-dancing">
                  Let's Work Together
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I'll try my 
                  best to get back to you!
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <GlassCard 
                  key={index}
                  gradient="from-purple-400/20 to-blue-400/20"
                  className="flex items-center gap-4 hover:scale-105 transition-transform duration-300"
                >
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white">
                    <info.icon className="text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                      {info.title}
                    </h4>
                    <a
                      href={info.link}
                      className="text-sm sm:text-base text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </GlassCard>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <GlassCard gradient="from-blue-400/20 to-purple-400/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;