import { motion } from "framer-motion";
import { ArrowDown, CodeSquare, Linkedin, Mail, MousePointer, Github } from "lucide-react";


const Hero = () => {
  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative py-28 md:py-36 bg-gradient-to-br from-indigo-100 via-white to-blue-100 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100 * (i % 2 === 0 ? 1 : -1)],
              y: [0, 50 * (i % 3 === 0 ? 1 : -1)],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            className="absolute rounded-full bg-gradient-to-r from-indigo-200 to-purple-200"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(60px)"
            }}
          />
        ))}
      </motion.div>

      {/* Decorative background blobs */}
      <motion.div
        className="absolute -top-24 -left-20 w-96 h-96 bg-purple-300 opacity-20 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-24 w-96 h-96 bg-indigo-300 opacity-20 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated Welcome Badge */}
          <motion.div
            className="px-5 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold shadow mb-6 flex items-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-2"
            >
              👋
            </motion.span>
            Welcome to my portfolio
          </motion.div>

          {/* Name & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
            >
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Chitta Ranjan</span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-gray-600 font-medium mb-6 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                variants={floatingVariants}
                animate="float"
                className="mr-3"
              >
                <CodeSquare className="text-indigo-500" size={24} />
              </motion.span>
              React & Next.js Developer • UI Enthusiast
            </motion.h2>
          </motion.div>

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
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center">
                Contact Me 
                <motion.span
                  className="ml-1"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="#projects"
              className="px-6 py-3 bg-white border border-indigo-200 text-indigo-600 font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center">
                View Projects 
                <motion.span
                  className="ml-1"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                >
                  →
                </motion.span>
              </span>
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
                animation: { rotate: [0, 10, -10, 0] }
              },
              {
                href: "https://www.linkedin.com/in/chitta-ranjan-a72164250/",
                icon: <Linkedin size={20} />,
                label: "LinkedIn",
                color: "hover:bg-blue-100 hover:text-blue-700",
                animation: { y: [0, -5, 0] }
              },
              {
                href: "mailto:your-email@example.com",
                icon: <Mail size={20} />,
                label: "Email",
                color: "hover:bg-red-100 hover:text-red-600",
                animation: { scale: [1, 1.1, 1] }
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
                <motion.span
                  animate={social.animation}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {social.icon}
                </motion.span>
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
            <motion.span 
              className="text-sm text-gray-500 mb-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll down
            </motion.span>
            <a href="#about">
              <motion.div
                variants={floatingVariants}
                animate="float"
              >
                <ArrowDown className="text-indigo-500" size={28} />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;