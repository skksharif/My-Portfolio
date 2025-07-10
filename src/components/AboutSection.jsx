import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';

const AboutSection = () => {
  const stats = [
    { number: 3, suffix: '+', label: 'Years Experience' },
    { number: 15, suffix: '+', label: 'Projects Completed' },
    { number: 5, suffix: '+', label: 'Technologies Mastered' },
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 md:w-32 md:h-32 bg-blue-200/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 left-10 w-28 h-28 md:w-36 md:h-36 bg-purple-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 md:w-28 md:h-28 bg-pink-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <ScrollReveal direction="left">
            <GlassCard gradient="from-purple-400/20 to-blue-400/20">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 font-dancing">
                Passionate Developer
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                I'm a dedicated full-stack developer with a passion for creating innovative 
                web solutions. With expertise in modern technologies like React, Node.js, 
                and cloud platforms, I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Currently pursuing my B.Tech in Computer Science Engineering at 
                Malla Reddy College of Engineering and Technology, I combine academic 
                knowledge with practical experience to deliver exceptional results.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <GlassCard 
                  key={index}
                  gradient="from-pink-400/20 to-yellow-400/20"
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-1 sm:mb-2 font-dancing">
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </GlassCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;