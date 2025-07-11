import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import AnimatedCounter from "./AnimatedCounter";
import ParallaxBackground from "./ParallaxBackground";
import MaskEffect from "./MaskEffect";

const AboutSection = () => {
  const stats = [
    { number: 3, suffix: "+", label: "Years Experience" },
    { number: 15, suffix: "+", label: "Projects Completed" },
    { number: 5, suffix: "+", label: "Technologies Mastered" },
    { number: 100, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <ParallaxBackground className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <MaskEffect>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>
          </MaskEffect>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <ScrollReveal direction="left">
            <MaskEffect maskType="slide">
              <GlassCard gradient="from-purple-400/20 to-blue-400/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 font-dancing">
                  Passionate Developer
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                  I'm a dedicated full-stack developer with a passion for creating
                  innovative web solutions. With expertise in modern technologies
                  like React, Node.js, and cloud platforms, I bring ideas to life
                  through clean, efficient code.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Currently pursuing my B.Tech in Computer Science Engineering at
                  Lakireddy Bali Reddy College of Engineering, I combine
                  academic knowledge with practical experience to deliver
                  exceptional results.
                </p>
              </GlassCard>
            </MaskEffect>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <MaskEffect maskType="slide">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <GlassCard
                    key={index}
                    gradient="from-pink-400/20 to-orange-400/20"
                    className="text-center"
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600 mb-1 font-dancing">
                      <AnimatedCounter
                        end={stat.number}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </MaskEffect>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
