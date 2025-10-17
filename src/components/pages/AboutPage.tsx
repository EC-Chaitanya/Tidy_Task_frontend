import { motion } from 'motion/react';

export function AboutPage() {
  const skills = [
    { name: 'React & TypeScript', icon: '⚛️', level: 95 },
    { name: 'UI/UX Design', icon: '🎨', level: 90 },
    { name: 'Node.js & APIs', icon: '🚀', level: 88 },
    { name: 'Tailwind CSS', icon: '🎯', level: 95 },
    { name: 'Motion & Animation', icon: '✨', level: 85 },
    { name: 'Database Design', icon: '🗄️', level: 80 }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'The Idea',
      description: 'As a student struggling with ADHD, I realized existing task managers weren\'t built for neurodivergent minds.'
    },
    {
      year: '2024',
      title: 'First Prototype',
      description: 'Started building TidyTask with React, focusing on clean design and intuitive user experience.'
    },
    {
      year: '2025',
      title: 'TidyTask Launch',
      description: 'Launched the full-featured app with AI integration, gamification, and accessibility-first design.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center text-5xl shadow-xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            👨‍💻
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm the Creator
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I'm a solo developer passionate about creating tools that make life easier for students, 
            especially those with neurodivergent minds. TidyTask is my way of solving a problem I faced every day.
          </p>
        </motion.div>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  As a computer science student with ADHD, I struggled with traditional task management apps. 
                  They were either too overwhelming with features I didn't need, or too simple to handle 
                  complex academic projects.
                </p>
                <p>
                  I wanted something that understood how my brain worked - breaking big tasks into smaller ones, 
                  providing gentle reminders without being intrusive, and celebrating small wins to keep me motivated.
                </p>
                <p>
                  After countless late nights coding and iterating, TidyTask was born. It's designed specifically 
                  for students who think differently, with clean interfaces, smart AI assistance, and features 
                  that actually help rather than distract.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold mb-4">Built by a Student, for Students</h3>
                  <p className="text-gray-700">
                    Every feature in TidyTask comes from real student experiences and challenges. 
                    I've lived through the stress of managing multiple assignments, deadlines, and 
                    the unique struggles that come with neurodivergent thinking patterns.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Journey
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-500 h-full"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 px-8">
                  <div className={`bg-white rounded-2xl p-6 shadow-lg ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <div className="text-sm text-purple-600 font-semibold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              The technologies and skills I use to build TidyTask
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{skill.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-700 mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Drives Me
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "Neurodiversity Matters",
                description: "Every feature is designed to support different ways of thinking and learning."
              },
              {
                icon: "🎯",
                title: "Student-First",
                description: "Built by a student who understands the real challenges of academic life."
              },
              {
                icon: "🌈",
                title: "Inclusive Design",
                description: "Creating tools that work for everyone, regardless of how their mind works."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-5xl mb-4 inline-block"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <motion.div 
          className="text-center bg-white rounded-3xl p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Let's Connect!</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            I love hearing from fellow students and developers. Whether you have feedback, 
            feature requests, or just want to chat about code, I'm always happy to connect.
          </p>
          
          <div className="flex justify-center space-x-6">
            <motion.a
              href="mailto:hello@tidytask.app"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              📧 Say Hello
            </motion.a>
            
            <motion.a
              href="#"
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              💻 GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
