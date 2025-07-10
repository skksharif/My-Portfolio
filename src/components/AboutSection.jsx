import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import AnimatedCounter from "./AnimatedCounter";

const AboutSection = () => {
  const stats = [
    { number: 3, suffix: "+", label: "Years Experience" },
    { number: 15, suffix: "+", label: "Projects Completed" },
    { number: 5, suffix: "+", label: "Technologies Mastered" },
    { number: 100, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="absolute inset-0">
          {/* Parallax background elements */}
          <div
            className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div
            className="absolute top-1/4 right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-pink-200 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-36 h-36 sm:w-52 sm:h-52 md:w-80 md:h-80 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-28 h-28 sm:w-44 sm:h-44 md:w-60 md:h-60 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse delay-500"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-pink-300 rounded-full blur-3xl opacity-15 animate-pulse delay-1500"
            style={{
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px)`,
            }}
          ></div>
        </div>
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
                I'm a dedicated full-stack developer with a passion for creating
                innovative web solutions. With expertise in modern technologies
                like React, Node.js, and cloud platforms, I bring ideas to life
                through clean, efficient code.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Currently pursuing my B.Tech in Computer Science Engineering at
                Malla Reddy College of Engineering and Technology, I combine
                academic knowledge with practical experience to deliver
                exceptional results.
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
