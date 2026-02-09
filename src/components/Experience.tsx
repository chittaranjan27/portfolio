import React from "react";
import { Briefcase, GraduationCap, Code, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  // Replace with your Google Drive shareable link
  const resumeUrl = "https://drive.google.com/file/d/1mX7I__1d2bBse0zdmsDvjzL4-atdEyvp/view?usp=sharing";

  const experiences = [
    {
      icon: <Briefcase className="text-indigo-600" size={20} />,
      title: "Software Developer Intern",
      company: "EOXS",
      period: "Mar 2025 - MAY 2025",
      description: "Handling API development and integration and Managing DevOps workflows, automating CI/CD pipelines, and optimizing cloud infrastructure for seamless deployment.",
      skills: ["Python", "Odoo", "Bitbucket", "XML", "PostgreSQL"]
    },
    {
      icon: <Briefcase className="text-purple-600" size={20} />,
      title: "React JS Developer Intern",
      company: "THE ENTREPRENEURSHIP NETWORK",
      period: "Jan 2025 - Mar 2025",
      description: "Developed dynamic and responsive web applications using React.js. Integrated APIs, improved performance, and ensured cross-platform compatibility to enhance the platform's scalability and engagement.",
      skills: ["JavaScript", "React.js", "SCSS", "REST APIs", "Tailwind", "Node.js", "MongoDB"]
    },
    {
      icon: <Briefcase className="text-blue-600" size={20} />,
      title: "Web Developer Intern",
      company: "CodeSoft",
      period: "Jun 2024 - Jul 2024",
      description: "Building responsive and interactive web applications using HTML, CSS, JavaScript, and React.js.",
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 relative inline-block mb-4">
            Experience
            <motion.span
              className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-indigo-300 before:via-purple-300 before:to-transparent before:rounded-full">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-12 group"
              >
                <motion.div
                  className="absolute left-0 top-1 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-xl border-2 border-indigo-200 group-hover:border-indigo-400 transition-all z-10"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {exp.icon}
                </motion.div>
                
                <motion.div
                  className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{exp.title}</h3>
                    <span className="hidden md:block text-gray-400">•</span>
                    <span className="text-indigo-600 font-semibold">{exp.company}</span>
                    <span className="hidden md:block text-gray-400">•</span>
                    <span className="text-gray-500 font-medium">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-5 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.2) + (i * 0.05) }}
                        className="px-3 py-1.5 text-sm font-semibold rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-100"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Résumé
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2" size={20} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;