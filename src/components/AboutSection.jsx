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
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <GlassCard gradient="from-purple-400/20 to-blue-400/20">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Passionate Developer
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm a dedicated full-stack developer with a passion for creating innovative 
                web solutions. With expertise in modern technologies like React, Node.js, 
                and cloud platforms, I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently pursuing my B.Tech in Computer Science Engineering at 
                Malla Reddy College of Engineering and Technology, I combine academic 
                knowledge with practical experience to deliver exceptional results.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <GlassCard 
                  key={index}
                  gradient="from-pink-400/20 to-yellow-400/20"
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                  <div className="text-gray-600 font-medium">
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