import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', isError: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        text: 'Thank you! Your message has been sent successfully.',
        isError: false
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitMessage({ text: '', isError: false });
      }, 5000);
    }, 1500);
  };

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/chittaranjan27' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/chitta-ranjan-a72164250/' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/yourhandle' }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Let's Connect</h2>
          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-100">Contact Information</h3>
              <div className="space-y-8">
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-indigo-50 rounded-lg mr-4 group-hover:bg-indigo-100 transition-colors">
                    <Mail size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Email</h4>
                    <a 
                      href="mailto:contact@example.com" 
                      className="text-gray-800 hover:text-indigo-600 transition-colors text-lg font-medium"
                    >
                      kchittaranjandora@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-indigo-50 rounded-lg mr-4 group-hover:bg-indigo-100 transition-colors">
                    <Phone size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Phone</h4>
                    <a 
                      href="tel:+11234567890" 
                      className="text-gray-800 hover:text-indigo-600 transition-colors text-lg font-medium"
                    >
                      +91 9090923746
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-indigo-50 rounded-lg mr-4 group-hover:bg-indigo-100 transition-colors">
                    <MapPin size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-gray-800 text-lg font-medium">Odisha, INDIA</p>
                  </div>
                </motion.div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <h4 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 rounded-lg hover:bg-indigo-100 transition-colors"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {React.cloneElement(social.icon, { className: 'text-gray-700 hover:text-indigo-600' })}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-100">Send Me a Message</h3>
              
              {submitMessage.text && (
                <motion.div 
                  className={`mb-6 p-4 rounded-lg ${submitMessage.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitMessage.text}
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">Your Name</label>
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-all bg-gray-50" 
                      placeholder="Enter your name" 
                    />
                  </motion.div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">Your Email</label>
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-all bg-gray-50" 
                      placeholder="Enter your email" 
                    />
                  </motion.div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">Subject</label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-all bg-gray-50" 
                    placeholder="Project Inquiry" 
                  />
                </motion.div>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">Message</label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={6} 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-all bg-gray-50" 
                    placeholder="Tell me about your project..." 
                  />
                </motion.div>
              </div>
              
              <motion.button 
                type="submit" 
                disabled={isSubmitting} 
                whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.3)' }} 
                whileTap={{ scale: 0.98 }} 
                className={`w-full px-6 py-4 rounded-lg flex items-center justify-center space-x-2 transition-all ${
                  isSubmitting 
                    ? 'bg-indigo-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                }`}
              >
                <Send size={20} className="text-white" />
                <span className="text-white font-medium text-lg">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;