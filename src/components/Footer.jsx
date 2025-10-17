import { motion } from 'motion/react';
import { useState } from 'react';

export function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', href: '#', color: 'from-blue-400 to-blue-600' },
    { name: 'Instagram', icon: '📷', href: '#', color: 'from-pink-400 to-purple-600' },
    { name: 'LinkedIn', icon: '💼', href: '#', color: 'from-blue-600 to-indigo-700' },
    { name: 'GitHub', icon: '💻', href: '#', color: 'from-gray-600 to-gray-800' },
  ];

  const quickLinks = [
    { name: 'Features', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Help Center', href: '#' }
  ];

  const resources = [
    { name: 'Study Tips', href: '#' },
    { name: 'API Documentation', href: '#' },
    { name: 'Student Resources', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Changelog', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${(i * 10) + Math.random() * 20}%`,
              top: `${(i * 10) + Math.random() * 20}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
              y: [0, -50, -100]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl mr-4 flex items-center justify-center text-xl text-white shadow-lg"
                animate={{
                  rotate: [0, 5, -5, 0],
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 30px rgba(147, 51, 234, 0.4)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                T
              </motion.div>
              <motion.span 
                className="text-2xl font-bold text-white"
                style={{ fontWeight: "var(--font-weight-medium)" }}
              >
                TidyTask
              </motion.span>
            </motion.div>
            
            <motion.p 
              className="text-gray-200 mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              AI-powered task management built specifically for students. 
              Organize smarter, study better, and achieve more with our 
              neurodiversity-friendly design approach.
            </motion.p>

            {/* Newsletter Signup */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-white font-semibold mb-3">
                Stay Updated
              </h4>
              <p className="text-gray-200 text-sm mb-4">
                Get study tips and productivity hacks delivered to your inbox
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 block py-1"
                    whileHover={{ x: 5, color: "#ffffff" }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 block py-1"
                    whileHover={{ x: 5, color: "#ffffff" }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media & Copyright */}
        <motion.div 
          className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Social Links */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2,
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setHoveredSocial(social.name)}
                onHoverEnd={() => setHoveredSocial(null)}
              >
                <span className="relative z-10">{social.icon}</span>
                
                {/* Hover Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Ripple Effect */}
                {hoveredSocial === social.name && (
                  <motion.div
                    className="absolute inset-0 border-2 border-white/50 rounded-full"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p 
            className="text-gray-300 text-center md:text-right"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            © 2025 TidyTask. Made with{" "}
            <motion.span
              className="text-red-400 inline-block"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              💜
            </motion.span>
            {" "}for students everywhere.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
        animate={{
          opacity: [0.5, 1, 0.5],
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          backgroundSize: "200% 200%"
        }}
      />
    </footer>
  );
}
