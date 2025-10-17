import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

export function LandingPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });
  
  // Parallax effects
  const heroY = useTransform(scrollY, [0, 800], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  const testimonials = [
    {
      text: "TidyTask completely transformed how I manage my coursework. The AI breakdown is like having a personal study coach!",
      author: "Sarah Chen",
      role: "Computer Science Student",
      avatar: "👩‍💻",
      rating: 5
    },
    {
      text: "Finally, a task manager that gets how my ADHD brain works. The visual progress tracking keeps me motivated!",
      author: "Marcus Johnson",
      role: "Psychology Major",
      avatar: "🧠",
      rating: 5
    },
    {
      text: "The gamification features make studying actually fun. I've never been this productive in my life!",
      author: "Emma Rodriguez",
      role: "Biology Student",
      avatar: "🔬",
      rating: 5
    }
  ];

  const features = [
    {
      icon: "🧩",
      title: "AI Task Breakdown",
      description: "Smart AI breaks complex projects into bite-sized, manageable steps",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: "📊",
      title: "Visual Progress",
      description: "Beautiful animated charts that celebrate every achievement",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: "⏰",
      title: "Smart Reminders",
      description: "Context-aware notifications that respect your schedule",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: "🎮",
      title: "Gamification",
      description: "Level up your productivity with XP points and achievements",
      color: "from-yellow-400 to-orange-400"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Students", icon: "🎓" },
    { number: "95%", label: "Improved Grades", icon: "📈" },
    { number: "4.9/5", label: "User Rating", icon: "⭐" },
    { number: "24/7", label: "AI Support", icon: "🤖" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 overflow-hidden">

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 flex items-center overflow-hidden"
      >
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          {/* Floating Task Cards */}
          {[
            { emoji: "📝", text: "Essay", color: "bg-yellow-200", x: 10, y: 20, delay: 0 },
            { emoji: "🧮", text: "Math", color: "bg-pink-200", x: 80, y: 40, delay: 1 },
            { emoji: "📚", text: "Study", color: "bg-blue-200", x: 50, y: 60, delay: 2 },
            { emoji: "✓", text: "Done!", color: "bg-green-200", x: 25, y: 75, delay: 0.5 }
          ].map((card, index) => (
            <motion.div
              key={index}
              className={`absolute w-16 h-12 ${card.color} rounded-xl shadow-lg flex flex-col items-center justify-center text-xs font-medium`}
              style={{ left: `${card.x}%`, top: `${card.y}%` }}
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={isHeroInView ? {
                opacity: 1,
                scale: 1,
                rotate: [0, 5, -5, 0],
                y: [0, -15, 0]
              } : {}}
              transition={{
                duration: 2,
                delay: card.delay,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.2,
                rotate: 0,
                zIndex: 10,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
            >
              <span className="text-lg">{card.emoji}</span>
              <span className="text-[10px]">{card.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
              style={{ fontWeight: "var(--font-weight-medium)" }}
            >
              <motion.span
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Organize Smarter.
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -100 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Study Better.
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{ fontSize: "var(--text-xl)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            The AI-powered task manager designed specifically for students. 
            Transform overwhelming projects into achievable steps with our neurodiversity-friendly approach.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button
              onClick={() => onNavigate('dashboard')}
              className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-medium shadow-2xl overflow-hidden"
              style={{ fontWeight: "var(--font-weight-medium)" }}
              whileHover={{ 
                scale: 1.05,
                y: -3,
                boxShadow: "0 20px 50px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center">
                Get Started
                <motion.span
                  className="ml-2 text-xl"
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🚀
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              onClick={() => onNavigate('features')}
              className="text-gray-700 px-8 py-4 rounded-full border-2 border-gray-300 hover:border-purple-400 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              style={{ fontWeight: "var(--font-weight-medium)" }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderColor: "#8B5CF6"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
                }}
              >
                <motion.div 
                  className="text-3xl mb-2"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-2xl font-bold text-gray-900 mb-1"
                  style={{ fontWeight: "var(--font-weight-medium)" }}
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 1.6 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-700">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section 
        ref={featuresRef}
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.circle
              cx="20" cy="20" r="1"
              fill="currentColor"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0 }}
            />
            <motion.circle
              cx="80" cy="40" r="1"
              fill="currentColor"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
            <motion.circle
              cx="40" cy="80" r="1"
              fill="currentColor"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontWeight: "var(--font-weight-medium)" }}
            >
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Why Students Love TidyTask
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Designed with neurodiversity in mind, featuring clean interfaces and intelligent automation 
              that adapts to how you think and learn.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 80, rotateX: -15 }}
                animate={isFeaturesInView ? { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0 
                } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div 
                  className="text-6xl mb-6 relative z-10"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: index * 0.5
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 15,
                    transition: { duration: 0.3 }
                  }}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-700 relative z-10 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="py-24 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-4xl font-bold mb-20"
            style={{ fontWeight: "var(--font-weight-medium)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              What Students Say
            </motion.span>
          </motion.h2>

          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ 
                  opacity: index === testimonialIndex ? 1 : 0,
                  scale: index === testimonialIndex ? 1 : 0.8,
                  rotateY: index === testimonialIndex ? 0 : 90,
                  z: index === testimonialIndex ? 0 : -100
                }}
                transition={{ 
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Avatar */}
                <motion.div 
                  className="text-8xl mb-6 relative"
                  animate={index === testimonialIndex ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {testimonial.avatar}
                  {/* Glowing Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-purple-400/30"
                    animate={index === testimonialIndex ? {
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.8, 0.3]
                    } : {}}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Stars */}
                <motion.div 
                  className="flex space-x-1 mb-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={index === testimonialIndex ? { 
                    opacity: 1, 
                    scale: 1 
                  } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-yellow-400 text-xl"
                      animate={index === testimonialIndex ? {
                        scale: [1, 1.3, 1],
                        rotate: [0, 360, 0]
                      } : {}}
                      transition={{
                        duration: 1,
                        delay: i * 0.1 + 0.5,
                        repeat: Infinity,
                        repeatDelay: 4
                      }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </motion.div>

                {/* Quote */}
                <motion.blockquote 
                  className="text-xl text-gray-700 mb-6 italic max-w-3xl relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={index === testimonialIndex ? { 
                    opacity: 1, 
                    y: 0 
                  } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    className="absolute -top-4 -left-4 text-4xl text-purple-400 opacity-50"
                    animate={index === testimonialIndex ? {
                      rotate: [0, 10, 0],
                      scale: [1, 1.2, 1]
                    } : {}}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    "
                  </motion.div>
                  {testimonial.text}
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={index === testimonialIndex ? { 
                    opacity: 1, 
                    y: 0 
                  } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 }}
                >
                  <cite className="font-semibold text-gray-900 text-lg block mb-1">
                    {testimonial.author}
                  </cite>
                  <span className="text-gray-600">
                    {testimonial.role}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Pagination */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setTestimonialIndex(index)}
                className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                  index === testimonialIndex 
                    ? 'bg-purple-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                {index === testimonialIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-purple-400"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
            style={{ fontWeight: "var(--font-weight-medium)", textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Study Life?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white mb-12 drop-shadow-md"
            style={{ textShadow: "0 1px 8px rgba(0, 0, 0, 0.3)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of students who've already revolutionized their productivity
          </motion.p>
          
          <motion.button
            onClick={() => onNavigate('dashboard')}
            className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-medium shadow-2xl hover:shadow-3xl transition-all duration-300"
            style={{ fontWeight: "var(--font-weight-medium)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </div>
      </section>
    </div>
  );
}
