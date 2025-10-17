import { motion } from 'motion/react';
import { useState } from 'react';

export function FeaturesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: "🧩",
      title: "AI Task Breakdown",
      description: "Transform overwhelming projects into manageable steps with our intelligent AI assistant.",
      details: [
        "Automatically breaks down complex assignments",
        "Suggests optimal task ordering",
        "Estimates time requirements",
        "Adapts to your learning style"
      ],
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: "📊",
      title: "Visual Progress Tracking",
      description: "Stay motivated with beautiful, animated progress indicators that celebrate your achievements.",
      details: [
        "Real-time progress visualization",
        "Animated completion celebrations",
        "Weekly and monthly insights",
        "Streak tracking for consistency"
      ],
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: "⏰",
      title: "Smart Reminders",
      description: "Get notified at the perfect time with context-aware reminders that understand your schedule.",
      details: [
        "Learns your optimal work times",
        "Considers deadlines and priorities",
        "Gentle, non-intrusive notifications",
        "Customizable reminder styles"
      ],
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: "🎮",
      title: "Gamification System",
      description: "Level up your productivity with XP points, achievements, and friendly competition.",
      details: [
        "Earn XP for completed tasks",
        "Unlock achievement badges",
        "Weekly challenges",
        "Compare progress with friends"
      ],
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: "🎨",
      title: "Neurodiversity-Friendly Design",
      description: "Clean, accessible interface designed to reduce overwhelm and support different learning styles.",
      details: [
        "High contrast, readable fonts",
        "Customizable color themes",
        "Reduced visual clutter",
        "Multiple view options"
      ],
      color: "from-indigo-400 to-blue-400"
    },
    {
      icon: "📚",
      title: "Study Session Integration",
      description: "Seamlessly integrate your tasks with focused study sessions and break reminders.",
      details: [
        "Pomodoro timer integration",
        "Focus mode with distractions blocked",
        "Break reminders and suggestions",
        "Study session analytics"
      ],
      color: "from-rose-400 to-pink-400"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg mb-8"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-6xl">✨</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Powerful Features
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover how TidyTask's intelligent features work together to transform 
            your productivity and make studying more enjoyable than ever before.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 h-full"
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <motion.div 
                  className="text-6xl mb-6 inline-block"
                  animate={hoveredCard === index ? {
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detailIndex}
                      className="flex items-start text-sm text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: (index * 0.1) + (detailIndex * 0.1) + 0.3
                      }}
                      viewport={{ once: true }}
                    >
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now ✨
          </motion.button>
          <p className="text-gray-700 mt-4">
            Start organizing your tasks today
          </p>
        </motion.div>
      </div>
    </div>
  );
}
