import { motion } from 'framer-motion';
import { useState } from 'react';

export function Navbar({ currentPage, onNavigate, onLogin, isLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  if (isLoggedIn) {
    navItems.push({ id: 'dashboard', label: 'Dashboard' });
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        duration: 0.8 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="relative w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mr-3 flex items-center justify-center shadow-lg overflow-hidden"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            >
              <motion.span 
                className="text-white font-bold text-lg relative z-10"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                T
              </motion.span>
              <motion.span 
                className="absolute text-white font-bold text-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                ✨
              </motion.span>
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.div>
            
            <motion.span 
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundPosition: "0% 50%",
                backgroundSize: "200% 200%"
              }}
            >
              TidyTask
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 relative ml-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                {currentPage === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg"
                    layoutId="navbar-active-indicator"
                    initial={false}
                    style={{ zIndex: -1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 380, 
                      damping: 30
                    }}
                  />
                )}
                
                <span className="relative" style={{ zIndex: 1 }}>{item.label}</span>
                
                <motion.div
                  className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  style={{ 
                    width: 0,
                    x: '-50%'
                  }}
                  whileHover={{ 
                    width: '80%'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Auth Buttons on the right */}
          {!isLoggedIn && (
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="/loginpage/login.html"
                className="relative group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-lg overflow-hidden hover-slide-button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background that slides on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-in-out" style={{ zIndex: 0 }} />
                <span className="relative" style={{ zIndex: 1 }}>Login</span>
              </motion.a>

              <motion.a
                href="/loginpage/login.html#register"
                className="relative group bg-white border-2 border-purple-500 text-purple-600 px-6 py-2 rounded-full font-medium shadow-lg overflow-hidden hover-slide-button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 30px rgba(147, 51, 234, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative" style={{ zIndex: 1 }}>Sign Up</span>
              </motion.a>
            </div>
          )}

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-6 h-0.5 bg-gray-600 mb-1 rounded-full"></div>
              <div className="w-6 h-0.5 bg-gray-600 mb-1 rounded-full"></div>
              <div className="w-6 h-0.5 bg-gray-600 rounded-full"></div>
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-purple-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Mobile Login and Signup Buttons */}
            {!isLoggedIn && (
              <div className="space-y-3 mt-4">
                <motion.a
                  href="/loginpage/login.html"
                  className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg text-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? 0 : -20
                  }}
                  transition={{ delay: navItems.length * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login to Dashboard
                </motion.a>
                <motion.a
                  href="/loginpage/login.html#register"
                  className="block w-full bg-white border-2 border-purple-500 text-purple-600 px-6 py-3 rounded-full font-medium shadow-lg text-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? 0 : -20
                  }}
                  transition={{ delay: (navItems.length + 1) * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </motion.a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}