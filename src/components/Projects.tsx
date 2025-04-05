import React from 'react';
import { ExternalLink, Github, LayoutGrid, List, Grid2x2, PanelTop } from 'lucide-react';

const projects = [
  {
    title: "Real-time Chat App",
    description: "A chat application that allows users to communicate in real-time with features like message history and online status.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Express", "Tailwind CSS", "Socket.io", "MongoDB", "Cloudinary"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/chittaranjan27/real-time-chat"
  },
  {
    title: "Employee-Mng-System",
    description: "I build a fully functional website UI and use localStorage for data persistence.",
    image: "https://imgs.search.brave.com/z-zZymUPDihTeKuRAyPMKRQWQAR4HZ8CYsX5_hX2gog/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvb2ZodWIuY29t/L2FydGljbGVzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA3/L0FsbC1pbi1PbmUt/RW1wbG8ucG5n",
    tags: ["React", "Localstorage", "Material UI", "Styled Components"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/chittaranjan27/employee-mng-system"
  },
  {
    title: "Task Management App",
    description: "Stay Organized, Stay Productive! Your Tasks, Your Way – Simplified and Streamlined.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Redux", "Tailwind CSS", "Material UI"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/chittaranjan27/Todos-in-react"
  },
  {
    title: "Animated Website",
    description: "An eye-catching animated website built with modern web technologies to deliver a dynamic and interactive user experience.",
    image: "https://imgs.search.brave.com/fbCYvCRI15IP_3Yvfm8xVq9QCdGZYw8zi-rutf-18Ik/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/OTU5NTc3Mi9maWxl/L3N0aWxsLTVmYzA2/MjYyNGMyNmFjYmM3/MmE5ODBjMDJiNjI0/NzMyLnBuZz9yZXNp/emU9NDAweDA",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/chittaranjan27/Animated_websites"
  }
];

const GridViewProjects = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {projects.map((project, index) => (
      <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <div className="h-60 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex} 
                className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <Github size={18} className="mr-1" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ListViewProjects = () => (
  <div className="space-y-8">
    {projects.map((project, index) => (
      <div key={index} className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        
        <div className="p-6 md:w-2/3">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex} 
                className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <Github size={18} className="mr-1" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const CardViewProjects = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {projects.map((project, index) => (
      <div key={index} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span 
                key={tagIndex} 
                className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <Github size={16} className="mr-1" />
            View Code
          </a>
        </div>
      </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem
            and demonstrates different aspects of my skills and expertise.
          </p>
        </div>
        
        <div className="flex justify-end mb-6">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button 
              onClick={() => setViewMode('grid')} 
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow' : 'text-gray-500'}`}
              title="Grid View"
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')} 
              className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow' : 'text-gray-500'}`}
              title="List View"
            >
              <List size={20} />
            </button>
            <button 
              onClick={() => setViewMode('card')} 
              className={`p-2 rounded-md ${viewMode === 'card' ? 'bg-white shadow' : 'text-gray-500'}`}
              title="Card View"
            >
              <Grid2x2 size={20} />
            </button>
          </div>
        </div>
        
        {renderProjects()}
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/chittaranjan27" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;