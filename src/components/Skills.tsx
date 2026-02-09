import React from "react";
import { Layout, Server, Cloud, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout size={24} className="text-indigo-600" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "HTML5 / CSS3", level: 90 }
      ]
    },
    {
      title: "Backend & API Development",
      icon: <Server size={24} className="text-indigo-600" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 },
        { name: "RESTful APIs", level: 80 }
      ]
    },
    {
      title: "DevOps & Deployment",
      icon: <Cloud size={24} className="text-indigo-600" />,
      skills: [
        { name: "CI/CD Pipelines", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Nginx & Ansible", level: 70 },
        { name: "AWS (Basics)", level: 60 },
        { name: "GitHub Actions / Bitbucket Pipelines", level: 80 }
      ]
    },
    {
      title: "Tools & Testing",
      icon: <GitBranch size={24} className="text-indigo-600" />,
      skills: [
        { name: "Git / GitHub / Bitbucket", level: 85 },
        { name: "Jest / React Testing Library", level: 75 },
        { name: "Webpack / Vite", level: 70 },
        { name: "Figma / UI Collaboration", level: 65 },
        { name: "Performance Optimization", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 relative inline-block mb-4">
            My Skills
            <motion.span
              className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-6">
            I specialize in crafting full-stack web applications, deploying scalable solutions, and optimizing user experience across platforms.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl flex-shrink-0 border border-gray-100 relative overflow-hidden group"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 ml-3">{category.title}</h3>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (i * 0.05) }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-semibold text-sm">{skill.name}</span>
                        <span className="text-indigo-600 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden shadow-inner">
                        <motion.div
                          className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (index * 0.1) + (i * 0.1), ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
