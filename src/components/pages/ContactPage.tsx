import { motion } from 'motion/react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-4xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✈️
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-3xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          💌
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-1/4 text-5xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          📮
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 right-10 text-3xl"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          💭
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Have questions, feedback, or just want to say hello? 
            We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-700 mb-2">General inquiries</p>
                <a href="mailto:hello@tidytask.app" className="text-purple-600 hover:text-purple-700 font-semibold">
                  hello@tidytask.app
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🐛</div>
                <h3 className="text-xl font-bold mb-2">Bug Reports</h3>
                <p className="text-gray-700 mb-2">Found an issue?</p>
                <a href="mailto:bugs@tidytask.app" className="text-purple-600 hover:text-purple-700 font-semibold">
                  bugs@tidytask.app
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-2">Feature Requests</h3>
                <p className="text-gray-700 mb-2">Share your ideas</p>
                <a href="mailto:ideas@tidytask.app" className="text-purple-600 hover:text-purple-700 font-semibold">
                  ideas@tidytask.app
                </a>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Response Time</h3>
                <p className="text-gray-700">
                  We typically respond within 24 hours on weekdays. 
                  For urgent issues, please mention "URGENT" in your subject line.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300 peer bg-white"
                        placeholder=" "
                        whileFocus={{ scale: 1.02 }}
                      />
                      <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-purple-600 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-purple-600 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                        Your Name
                      </label>
                    </div>

                    <div className="relative">
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300 peer bg-white"
                        placeholder=" "
                        whileFocus={{ scale: 1.02 }}
                      />
                      <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-purple-600 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-purple-600 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="bug">Bug Report</option>
                      <option value="feature">Feature Request</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300 peer resize-none bg-white"
                      placeholder=" "
                      whileFocus={{ scale: 1.02 }}
                    />
                    <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-purple-600 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-purple-600 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                      Your Message
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitted}
                  >
                    <span className={`transition-opacity duration-300 ${isSubmitted ? 'opacity-0' : 'opacity-100'}`}>
                      Send Message 🚀
                    </span>
                    <motion.span
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isSubmitted ? 'opacity-100' : 'opacity-0'}`}
                      initial={{ scale: 0 }}
                      animate={isSubmitted ? { scale: 1 } : { scale: 0 }}
                    >
                      ✅ Message Sent!
                    </motion.span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What features does TidyTask include?",
                answer: "TidyTask includes task breakdown, AI assistance, visual progress tracking, and smart reminders to help you stay organized and productive."
              },
              {
                question: "How does the AI task breakdown work?",
                answer: "Our AI analyzes your project description and breaks it into manageable steps based on best practices and your personal work patterns."
              },
              {
                question: "Is my data secure?",
                answer: "Absolutely. We use enterprise-grade encryption and never share your personal information with third parties."
              },
              {
                question: "Can I use TidyTask offline?",
                answer: "Yes! TidyTask works offline and syncs your changes when you're back online."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
