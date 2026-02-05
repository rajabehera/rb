import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { projects } from './projectData';

interface WorkProps {
  onProjectSelect: (id: number) => void;
  id?: string;
}

const Work: React.FC<WorkProps> = ({ onProjectSelect, id }) => {
  return (
    <section id={id} className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 border-t border-black/5 dark:border-white/5 transition-colors">
      
      {/* Header */}
      <div className="mb-20">
        <Reveal>
          <h2 className="text-neon-green font-display font-bold text-5xl md:text-7xl mb-4 tracking-tighter">
            SELECTED <span className="text-gray-900 dark:text-white outline-text transition-colors">WORKS</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="h-1 w-24 bg-neon-purple shadow-[0_0_15px_#bf00ff]"></div>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl text-lg font-light leading-relaxed transition-colors">
            A collection of digital products where <span className="text-gray-900 dark:text-white font-medium">technical complexity</span> meets <span className="text-gray-900 dark:text-white font-medium">aesthetic precision</span>.
          </p>
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Reveal key={project.id} width="100%" delay={index * 150}>
            <button 
              onClick={() => onProjectSelect(project.id)}
              className="group relative bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-dark-accent overflow-hidden hover:border-black/20 dark:hover:border-white/30 transition-all duration-500 h-full w-full text-left focus:outline-none shadow-sm dark:shadow-none"
            >
              {/* Hover Glow Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-transparent to-black dark:to-white`} />
              
              {/* Content Container */}
              <div className="p-8 md:p-12 relative z-10 flex flex-col h-full min-h-[400px]">
                
                {/* Top Meta */}
                <div className="flex justify-between items-start mb-auto">
                  <span className="font-mono text-xs text-neon-green tracking-widest uppercase border border-neon-green/30 px-2 py-1 rounded-sm bg-neon-green/5">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                     <span>VIEW CASE</span>
                     <ArrowUpRight className="text-gray-400 group-hover:text-neon-green transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                {/* Visual Placeholder (Abstract Geometry) */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
                   <div className={`w-64 h-64 rounded-full border-[20px] ${project.color} blur-[50px]`}></div>
                </div>

                {/* Bottom Info */}
                <div className="mt-12 space-y-4">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white group-hover:text-neon-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                        /{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Work;