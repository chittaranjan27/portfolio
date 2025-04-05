import React from "react";
import { Award, Calendar, MapPin, GraduationCap, Code, BookOpen, FileBadge } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl font-extrabold text-gray-900 relative inline-block"
          >
            About Me
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-500"
            ></motion.span>
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 relative group"
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 bg-black/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <h3 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500 mb-4">
              Frontend Developer & UI Enthusiast
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              I'm a passionate frontend developer with a strong foundation in <span className="font-bold text-indigo-600">React, Next.js, and Tailwind CSS</span>.
              I focus on building responsive, high-performance, and visually appealing web applications.
            </p>

            {/* Education Section */}
            <div className="mb-6 p-6 bg-white/40 backdrop-blur-md rounded-xl shadow-lg">
              <div className="flex items-start mb-4">
                <GraduationCap className="text-blue-600 mt-1 mr-3" size={24} />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Master In Computer and Application</h4>
                  <p className="text-indigo-600 font-medium">Chandigarh University</p>
                  <p className="text-gray-500">2023 - 2025 | CGPA: 7.09</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="text-purple-600 mt-1 mr-3" size={24} />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Bechelor In Commerce</h4>
                  <p className="text-indigo-600 font-medium">Government Autonomous College, Rourkela</p>
                  <p className="text-gray-500">2018 - 2021 | CGPA:6.9 </p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="text-purple-600 mt-1 mr-3" size={24} />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">12th Commerce</h4>
                  <p className="text-indigo-600 font-medium">Government Autonomous College, Rourkela</p>
                  <p className="text-gray-500">2016 - 2018 | CGPA:5.89 </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: <Calendar size={24} />, text: "1+ Years Experience" },
                { icon: <MapPin size={24} />, text: "Odisha, India" },
                { icon: <Award size={24} />, text: "10+ Completed Projects" },
                { icon: <FileBadge size={24} />, text: "5+ Certifications" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="flex items-center p-4 bg-white/40 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <span className="text-indigo-600 mr-3">{item.icon}</span>
                  <span className="text-gray-900 font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              href="#contact"
              className="px-6 py-3 text-lg font-medium text-white rounded-lg bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-purple-500 hover:to-indigo-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
            >
              Let's Work Together 👨‍💻
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;