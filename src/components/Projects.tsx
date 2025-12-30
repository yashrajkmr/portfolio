import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Featured Projects</h2>
        <p className="text-gray-400 text-center mb-12">From Code to Deployment - 3 Live Projects</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all hover:scale-[1.02] group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <IconComponent className="text-purple-400" size={24} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-300 border border-green-500/50' : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/50'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-500/20 rounded-full text-xs border border-purple-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4 mb-4">
                  <p className="text-xs text-gray-400 mb-2">Key Highlights:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-xs flex-1 justify-center"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.live && project.live !== '#' && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-all border border-purple-400/30 text-xs flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;