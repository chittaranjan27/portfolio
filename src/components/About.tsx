import React from "react";
import { Award, Calendar, MapPin, GraduationCap, Code, BookOpen, FileBadge, Cpu, Layout, Code2, Palette, Sparkles, Rocket, CodeSquare } from "lucide-react";
import { motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";



const About = () => {
  const floatingVariants = {
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateVariants = {
    rotate: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            className="absolute rounded-full bg-gradient-to-r from-indigo-300 to-purple-300"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(40px)"
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block relative"
          >
            <motion.h2
              className="text-5xl font-extrabold text-gray-900 relative inline-block"
            >
              About Me
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-500"
              />
            </motion.h2>
            
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="absolute -top-6 -right-6"
            >
              <Sparkles className="text-yellow-400" size={32} />
            </motion.div>
          </motion.div>
        </div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={pulseVariants}
            animate="pulse"
            className="inline-block mb-6"
          >
            <div className="p-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full shadow-lg">
              <Rocket className="text-indigo-600" size={40} />
            </div>
          </motion.div>
          
          <h3 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500 mb-4">
            Frontend Developer & UI Enthusiast
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            I'm a passionate frontend developer with a strong foundation in <span className="font-bold text-indigo-600">React, Next.js, and Tailwind CSS</span>.
            I specialize in building responsive, high-performance, and visually appealing web applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            { 
              icon: <Layout size={32} />, 
              title: "UI/UX Design", 
              desc: "Creating intuitive interfaces",
              bg: "from-blue-100 to-indigo-100",
              color: "text-blue-600"
            },
            { 
              icon: <CodeSquare size={32} />, 
              title: "Frontend Dev", 
              desc: "React, Next.js, JavaScript",
              bg: "from-purple-100 to-fuchsia-100",
              color: "text-purple-600"
            },
            { 
              icon: <Cpu size={32} />, 
              title: "Performance", 
              desc: "Optimized web experiences",
              bg: "from-emerald-100 to-teal-100",
              color: "text-emerald-600"
            },
            { 
              icon: <MousePointerClick size={32} />, 
              title: "Interactions", 
              desc: "Animations & Micro-interactions",
              bg: "from-amber-100 to-orange-100",
              color: "text-amber-600"
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`p-6 bg-gradient-to-br ${skill.bg} backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 relative overflow-hidden`}
            >
              <motion.div
                variants={rotateVariants}
                animate="rotate"
                className={`absolute -right-6 -bottom-6 text-8xl opacity-10 ${skill.color}`}
              >
                {skill.icon}
              </motion.div>
              <div className={`${skill.color} mb-4`}>{skill.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h4>
              <p className="text-gray-600 relative z-10">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/2 p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 z-0" />
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <motion.div
                  variants={pulseVariants}
                  animate="pulse"
                >
                  <GraduationCap className="text-indigo-600 mr-3" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: <GraduationCap className="text-blue-600" size={24} />, 
                    degree: "Master In Computer and Application", 
                    institution: "Chandigarh University",
                    period: "2023 - 2025",
                    color: "bg-blue-100"
                  },
                  { 
                    icon: <BookOpen className="text-purple-600" size={24} />, 
                    degree: "Bachelor In Commerce", 
                    institution: "Government Autonomous College, Rourkela",
                    period: "2018 - 2021",
                    color: "bg-purple-100"
                  },
                  { 
                    icon: <BookOpen className="text-indigo-600" size={24} />, 
                    degree: "12th Commerce", 
                    institution: "Government Autonomous College, Rourkela",
                    period: "2016 - 2018",
                    color: "bg-indigo-100"
                  },
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    className="flex items-start p-4 rounded-lg hover:bg-white/50 transition-all"
                  >
                    <div className={`p-2 rounded-full ${edu.color} mr-4`}>
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                      <p className="text-indigo-600 font-medium">{edu.institution}</p>
                      <p className="text-gray-500">{edu.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg border border-white/30 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div
                    variants={pulseVariants}
                    animate="pulse"
                  >
                    <Award className="text-purple-600 mr-3" size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { 
                      icon: <Calendar className="text-indigo-600" size={24} />, 
                      text: "1+ Years Experience", 
                      desc: "Building web applications",
                      delay: 0.1
                    },
                    { 
                      icon: <MapPin className="text-purple-600" size={24} />, 
                      text: "Odisha, India", 
                      desc: "Based in Rourkela",
                      delay: 0.2
                    },
                    { 
                      icon: <Code className="text-indigo-600" size={24} />, 
                      text: "10+ Projects", 
                      desc: "Completed successfully",
                      delay: 0.3
                    },
                    { 
                      icon: <FileBadge className="text-purple-600" size={24} />, 
                      text: "5+ Certifications", 
                      desc: "In web technologies",
                      delay: 0.4
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: item.delay, duration: 0.5 }}
                      whileHover={{ scale: 1.03 }}
                      className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center mb-2">
                        <div className="p-2 bg-indigo-100 rounded-full mr-3">
                          {item.icon}
                        </div>
                        <span className="text-gray-900 font-semibold">{item.text}</span>
                      </div>
                      <p className="text-gray-600 text-sm ml-11">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <motion.p
            variants={floatingVariants}
            animate="float"
            className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto relative"
          >
            Interested in working together? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block relative"
          >
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-[length:200%_200%] opacity-70 blur-md -z-10"
            />
            
            <a
              href="#contact"
              className="inline-block px-8 py-4 text-lg font-medium text-white rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 transition-all shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Let's Work Together 
                <motion.span
                  animate={{ 
                    x: [0, 5, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  👨‍💻
                </motion.span>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;