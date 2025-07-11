import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
import ParallaxBackground from './ParallaxBackground';
import MaskEffect from './MaskEffect';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'khasim.sharif@example.com',
      link: 'mailto:khasim.sharif@example.com',
      description: 'Send me an email anytime'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 9876543210',
      link: 'tel:+919876543210',
      description: 'Call me for urgent matters'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Hyderabad, India',
      link: '#',
      description: 'Available for remote work'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <ParallaxBackground className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <MaskEffect>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>
          </MaskEffect>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <MaskEffect maskType="slide">
              <div className="space-y-6 lg:space-y-8">
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 font-dancing">
                    Let's Work Together
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question, want to discuss a project, or just want to say hi, 
                    I'll try my best to get back to you within 24 hours!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      Available for freelance
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      Remote work
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      Quick response
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <GlassCard 
                      key={index}
                      gradient="from-purple-400/20 to-blue-400/20"
                      className="p-4 sm:p-6 hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <info.icon className="text-white text-lg" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                            {info.title}
                          </h4>
                          <a
                            href={info.link}
                            className="text-sm sm:text-base text-purple-600 hover:text-purple-700 transition-colors duration-200 font-medium block mb-1"
                          >
                            {info.value}
                          </a>
                          <p className="text-xs sm:text-sm text-gray-500">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </MaskEffect>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <MaskEffect maskType="slide">
              <GlassCard gradient="from-blue-400/20 to-purple-400/20" className="p-6 sm:p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheckCircle className="text-green-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 font-dancing">
                        Send Me a Message
                      </h3>
                      <p className="text-sm text-gray-600">
                        Fill out the form below and I'll respond as soon as possible.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 text-sm bg-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-white/80"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 text-sm bg-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-white/80"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-sm bg-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-white/80"
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 text-sm bg-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none hover:bg-white/80"
                          placeholder="Tell me about your project or just say hello..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </GlassCard>
            </MaskEffect>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;