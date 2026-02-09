import React from 'react';
import {Github, LayoutGrid, List, Grid2x2, ExternalLink} from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
   {
    title: "stock-tracker-app",
    description: "A modern web application for tracking stocks, managing watchlists, and receiving personalized market insights via email. Built with Next.js, MongoDB, and TradingView widgets.",
    image: "/stock.png",
    tags: ["Next.js","TypeScript","Tailwind CSS","MongoDB","better-auth","Nodemailer","Finnhub API","Inngest"],
    liveLink: "https://stock-tracker-app-one.vercel.app/sign-in",
    githubLink: "https://github.com/chittaranjan27/stock_tracker_app"
  },
  {
    title: "Real-time Chat App",
    description: "A chat application that allows users to communicate in real-time with features like message history and online status.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Express", "Tailwind CSS","JWT", "Socket.io", "MongoDB", "Cloudinary"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/chittaranjan27/real-time-chat"
  },
  {
    title: "AI Document Understanding Assistant",
    description: "Built an AI-powered assistant that answers user questions from uploaded PDFs using a Retrieval-Augmented Generation (RAG) approach",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Python", "FastAPI", "RAG", "Gemini ai", "Vector DB", "Strimline"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/chittaranjan27/ragAI-app"
  },
  {
    title: "e-comm-Healtcare",
    description: "Developed a full-stack E-commerce platform for healthcare products, search, and purchase medicines, schedule a meeting with specialist and wellness products.",
    image: "/e-com.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS","Zustand", "MongoDB", "Rozorpay","JWT","Google calendar API"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/chittaranjan27/e-comm-healtcare-"
  }
];

const GridViewProjects = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ y: -8 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
      >
        <div className="h-60 overflow-hidden relative">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
          <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index * 0.1) + (tagIndex * 0.05) }}
                className="px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-sm font-semibold rounded-full border border-indigo-100"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            {project.liveLink && project.liveLink !== 'https://example.com' && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </motion.a>
            )}
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} className="mr-2" />
              Source Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

const ListViewProjects = () => (
  <div className="space-y-8">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ x: 8 }}
        className="flex flex-col md:flex-row bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
      >
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        
        <div className="p-6 md:w-2/3">
          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
          <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-sm font-semibold rounded-full border border-indigo-100"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            {project.liveLink && project.liveLink !== 'https://example.com' && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </motion.a>
            )}
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} className="mr-2" />
              Source Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

const CardViewProjects = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        whileHover={{ y: -12, scale: 1.02 }}
        className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100"
      >
        <div className="h-48 overflow-hidden relative">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-xs font-semibold rounded-full border border-indigo-100"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            whileHover={{ x: 4 }}
          >
            <Github size={16} className="mr-1" />
            View Code
          </motion.a>
        </div>
      </motion.div>
    ))}
  </div>
);

const Projects = () => {
  const [viewMode, setViewMode] = React.useState('grid');

  const renderProjects = () => {
    switch(viewMode) {
      case 'grid': return <GridViewProjects />;
      case 'list': return <ListViewProjects />;
      case 'card': return <CardViewProjects />;
      default: return <GridViewProjects />;
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 relative inline-block">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem
            and demonstrates different aspects of my skills and expertise.
          </p>
        </div>
        
        <motion.div
          className="flex justify-end mb-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-xl p-1.5 shadow-lg border border-gray-200">
            <motion.button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
              title="Grid View"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <LayoutGrid size={20} />
            </motion.button>
            <motion.button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-lg transition-all ${
                viewMode === 'list'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
              title="List View"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <List size={20} />
            </motion.button>
            <motion.button
              onClick={() => setViewMode('card')}
              className={`p-2.5 rounded-lg transition-all ${
                viewMode === 'card'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
              title="Card View"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Grid2x2 size={20} />
            </motion.button>
          </div>
        </motion.div>
        
        {renderProjects()}
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="https://github.com/chittaranjan27"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;