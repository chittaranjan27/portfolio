import React from "react";
import { Layout, Server, Cloud, GitBranch } from "lucide-react";

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
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 relative inline-block">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I specialize in crafting full-stack web applications, deploying scalable solutions, and optimizing user experience across platforms.
          </p>
        </div>

        {/* Scrollable row */}
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="min-w-[320px] bg-white p-6 rounded-xl shadow-md hover:shadow-lg flex-shrink-0">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-2">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
