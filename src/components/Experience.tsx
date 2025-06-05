import React from "react";
import { Briefcase, GraduationCap, Code, ArrowRight } from "lucide-react";

const Experience = () => {
  // Replace with your Google Drive shareable link
  const resumeUrl = "https://drive.google.com/file/d/1LkPrZtIZLsLtzpDbihOLE0mWuF4tvOXT/view?usp=sharing";

  const experiences = [
    {
      icon: <Briefcase className="text-indigo-600" size={20} />,
      title: "Software Developer Intern",
      company: "EOXS",
      period: "Mar 2025 - Present",
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
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 relative inline-block">
            Experience
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-500"></span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-300 before:to-transparent">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 group">
                <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg border-2 border-indigo-100 group-hover:border-indigo-300 transition-all">
                  {exp.icon}
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <span className="hidden md:block">•</span>
                    <span className="text-indigo-600 font-medium">{exp.company}</span>
                    <span className="hidden md:block">•</span>
                    <span className="text-gray-500">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-sm rounded-full bg-indigo-50 text-indigo-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white rounded-lg bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-purple-500 hover:to-indigo-600 transition-all hover:scale-105 shadow-lg"
            >
              View Full Résumé <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;