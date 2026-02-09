import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState<{ name: string; email: string; subject: string; message: string }>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ text: string; isError: boolean }>({ text: '', isError: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ text: '', isError: false });

    // EmailJS configuration - Replace these with your actual EmailJS credentials
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

    // Check if EmailJS is properly configured
    if (SERVICE_ID === 'your_service_id' || TEMPLATE_ID === 'your_template_id' || PUBLIC_KEY === 'your_public_key') {
      setIsSubmitting(false);
      setSubmitMessage({
        text: 'Email service is not configured. Please set up EmailJS credentials in environment variables.',
        isError: true
      });
      setTimeout(() => {
        setSubmitMessage({ text: '', isError: false });
      }, 5000);
      return;
    }

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'kchittaranjandora@gmail.com', // Your email address
      };

      // Send email using EmailJS
      // The public key is passed as the 4th parameter
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // Success
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
    } catch (error) {
      // Error handling
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
      setSubmitMessage({
        text: 'Failed to send message. Please try again later or contact me directly at kchittaranjandora@gmail.com',
        isError: true
      });
      setTimeout(() => {
        setSubmitMessage({ text: '', isError: false });
      }, 5000);
    }
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
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 pb-4 border-b border-gray-200">Contact Information</h3>
              <div className="space-y-8">
                <motion.div 
                  className="flex items-start group p-4 rounded-xl hover:bg-indigo-50/50 transition-all"
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  <motion.div
                    className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl mr-4 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all shadow-md"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Mail size={22} className="text-indigo-600" />
                  </motion.div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Email</h4>
                    <a 
                      href="mailto:kchittaranjandora@gmail.com" 
                      className="text-gray-800 hover:text-indigo-600 transition-colors text-lg font-semibold"
                    >
                      kchittaranjandora@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group p-4 rounded-xl hover:bg-indigo-50/50 transition-all"
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  <motion.div
                    className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl mr-4 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all shadow-md"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Phone size={22} className="text-indigo-600" />
                  </motion.div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Phone</h4>
                    <a 
                      href="tel:+919090923746" 
                      className="text-gray-800 hover:text-indigo-600 transition-colors text-lg font-semibold"
                    >
                      +91 9090923746
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group p-4 rounded-xl hover:bg-indigo-50/50 transition-all"
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  <motion.div
                    className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl mr-4 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all shadow-md"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <MapPin size={22} className="text-indigo-600" />
                  </motion.div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-gray-800 text-lg font-semibold">Bengaluru, INDIA</p>
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
                        className="p-3 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl hover:from-indigo-100 hover:to-purple-100 transition-all shadow-md hover:shadow-lg border border-gray-200"
                        whileHover={{ y: -5, scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {React.cloneElement(social.icon, { className: 'text-gray-700 group-hover:text-indigo-600 transition-colors' })}
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
            <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 pb-4 border-b border-gray-200">Send Me a Message</h3>
              
              {submitMessage.text && (
                <motion.div 
                  className={`mb-6 p-4 rounded-xl shadow-md border ${
                    submitMessage.isError 
                      ? 'bg-gradient-to-r from-red-50 to-red-100 text-red-700 border-red-200' 
                      : 'bg-gradient-to-r from-green-50 to-emerald-100 text-green-700 border-green-200'
                  }`}
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <div className="flex items-center gap-2">
                    {submitMessage.isError ? (
                      <span className="text-xl">⚠️</span>
                    ) : (
                      <span className="text-xl">✓</span>
                    )}
                    <span className="font-medium">{submitMessage.text}</span>
                  </div>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">Your Name</label>
                  <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.02 }}>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all bg-white hover:border-indigo-300 shadow-sm" 
                      placeholder="Enter your name" 
                    />
                  </motion.div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">Your Email</label>
                  <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.02 }}>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all bg-white hover:border-indigo-300 shadow-sm" 
                      placeholder="Enter your email" 
                    />
                  </motion.div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">Subject</label>
                <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.02 }}>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all bg-white hover:border-indigo-300 shadow-sm" 
                    placeholder="Project Inquiry" 
                  />
                </motion.div>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">Message</label>
                <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.02 }}>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={6} 
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all bg-white hover:border-indigo-300 shadow-sm resize-none" 
                    placeholder="Tell me about your project..." 
                  />
                </motion.div>
              </div>
              
              <motion.button 
                type="submit" 
                disabled={isSubmitting} 
                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg ${
                  isSubmitting 
                    ? 'bg-indigo-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-2xl'
                }`}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <Send size={20} className="text-white" />
                )}
                <span className="text-white font-semibold text-lg">
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