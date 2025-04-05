import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative py-28 md:py-36 bg-gradient-to-br from-indigo-100 via-white to-blue-100 overflow-hidden"
    >
      {/* Decorative background blobs */}
      <motion.div
        className="absolute -top-24 -left-20 w-96 h-96 bg-purple-300 opacity-20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-24 w-96 h-96 bg-indigo-300 opacity-20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated Welcome Badge */}
          <motion.div
            className="px-5 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold shadow mb-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            👋 Welcome to my portfolio
          </motion.div>

          {/* Name & Tagline */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Chitta Ranjan</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-gray-600 font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            React & Next.js Developer • UI Enthusiast
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I specialize in building performant, elegant, and accessible web interfaces that deliver amazing user experiences using modern frontend stacks.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me <span className="ml-1 group-hover:ml-2 transition-all">→</span>
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-white border border-indigo-200 text-indigo-600 font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects <span className="ml-1 group-hover:ml-2 transition-all">→</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              {
                href: "https://github.com/chittaranjan27",
                icon: <Github size={20} />,
                label: "GitHub",
                color: "hover:bg-gray-100 hover:text-black",
              },
              {
                href: "https://www.linkedin.com/in/chitta-ranjan-a72164250/",
                icon: <Linkedin size={20} />,
                label: "LinkedIn",
                color: "hover:bg-blue-100 hover:text-blue-700",
              },
              {
                href: "mailto:your-email@example.com",
                icon: <Mail size={20} />,
                label: "Email",
                color: "hover:bg-red-100 hover:text-red-600",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition-all ${social.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-20 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="text-sm text-gray-500 mb-2">Scroll down</span>
            <a href="#about">
              <ArrowDown className="text-indigo-500 animate-bounce" size={28} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
