import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import AnimatedCounter from "./AnimatedCounter";
import ParallaxBackground from "./ParallaxBackground";
import MaskEffect from "./MaskEffect";

const AboutSection = () => {
  const stats = [
    { number: 3, suffix: "+", label: "Years Experience" },
    { number: 15, suffix: "+", label: "Projects Completed" },
    { number: 8, suffix: "+", label: "Technologies" },
    { number: 100, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <ParallaxBackground className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <MaskEffect>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            </div>
          </MaskEffect>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-20">
          <ScrollReveal direction="left">
            <MaskEffect maskType="slide">
              <div className="space-y-6">
                <GlassCard gradient="from-purple-400/20 to-blue-400/20" className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 font-dancing">
                    Passionate Developer
                  </h3>
                  <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    <p>
                      I'm a dedicated full-stack developer with a passion for creating
                      innovative web solutions. With expertise in modern technologies
                      like React, Node.js, and cloud platforms, I bring ideas to life
                      through clean, efficient code.
                    </p>
                    <p>
                      Currently pursuing my B.Tech in Computer Science Engineering at
                      Lakireddy Bali Reddy College of Engineering, I combine
                      academic knowledge with practical experience to deliver
                      exceptional results.
                    </p>
                    <p>
                      I believe in continuous learning and staying updated with the latest
                      technologies to create solutions that make a real impact.
                    </p>
                  </div>
                </GlassCard>
              </div>
            </MaskEffect>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <MaskEffect maskType="slide">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <GlassCard
                    key={index}
                    gradient="from-pink-400/20 to-orange-400/20"
                    className="text-center p-4 sm:p-6 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2 font-dancing">
                      <AnimatedCounter
                        end={stat.number}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </MaskEffect>
          </ScrollReveal>
        </div>

        {/* Additional Info Cards */}
        <ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <MaskEffect maskType="slide">
              <GlassCard gradient="from-blue-400/20 to-cyan-400/20" className="text-center p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">💻</span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Clean Code</h4>
                <p className="text-sm text-gray-600">Writing maintainable, scalable, and efficient code following best practices.</p>
              </GlassCard>
            </MaskEffect>

            <MaskEffect maskType="slide">
              <GlassCard gradient="from-green-400/20 to-emerald-400/20" className="text-center p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">🚀</span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Fast Delivery</h4>
                <p className="text-sm text-gray-600">Delivering projects on time without compromising on quality and performance.</p>
              </GlassCard>
            </MaskEffect>

            <MaskEffect maskType="slide">
              <GlassCard gradient="from-purple-400/20 to-pink-400/20" className="text-center p-6 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">🎯</span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Problem Solver</h4>
                <p className="text-sm text-gray-600">Analyzing complex problems and creating innovative solutions that work.</p>
              </GlassCard>
            </MaskEffect>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;