
import React, { useLayoutEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Layers, Code, Zap, Layout, Workflow, Image as ImageIcon, CheckCircle, Target, Users, PenTool, Smartphone } from 'lucide-react';
import Reveal from './Reveal';
import { projects } from './projectData';

interface ProjectDetailProps {
  projectId: number;
  onBack: () => void;
  onNavigate: (id: number) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack, onNavigate }) => {
 const [imgError, setImgError] = useState(false);
  
  const currentIndex = projects.findIndex(p => p.id === projectId);
  const project = projects[currentIndex];

  // Calculate Next and Previous Projects (Circular)
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;
  
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  // Use useLayoutEffect to ensure scroll happens before paint
  // This prevents the "jerk" where users see the previous scroll position
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  if (!project) return null;

  // Gallery Fallback items if project.gallery is empty
  const defaultGallery = [
    { url: undefined, caption: 'Login & Auth' },
    { url: undefined, caption: 'Service Dashboard' },
    { url: undefined, caption: 'Booking Flow' },
    { url: undefined, caption: 'Confirmation' }
  ];

  const galleryItems = project.gallery && project.gallery.length > 0 ? project.gallery : defaultGallery;

  return (
     <div className="w-full font-sans bg-light-bg dark:bg-dark-bg transition-colors min-h-screen overflow-x-hidden">
      
      {/* 1. Contained Top Section - Increased padding-top to clear fixed navbar */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-12">
      {/* Navigation */}
      <Reveal>
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Index
        </button>
      </Reveal>

      {/* Hero Header */}
      <header className="mb-20">
        <Reveal delay={100}>
           <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-1 border rounded-full text-xs font-mono uppercase tracking-wider ${project.color} ${project.accentColor} bg-opacity-10`}>
                {project.category}
              </span>
              <span className="h-[1px] w-12 bg-gray-300 dark:bg-gray-700"></span>
              <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">{project.year}</span>
           </div>
        </Reveal>
        
        <Reveal delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gray-900 dark:text-white mb-8 leading-tight transition-colors">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-y border-black/10 dark:border-white/10 py-8 transition-colors">
            <div>
              <span className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Role</span>
              <span className="text-gray-900 dark:text-white">{project.role}</span>
            </div>
            <div>
              <span className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Client</span>
              <span className="text-gray-900 dark:text-white">{project.client}</span>
            </div>
            <div className="col-span-1 md:col-span-2">
              <span className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Tech / Tools</span>
              <div className="flex flex-wrap gap-3">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-white/5 text-xs text-gray-600 dark:text-gray-300 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column (Main Narrative) */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Overview */}
          <Reveal delay={350}>
             <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-light leading-relaxed">
               {project.description}
             </p>
          </Reveal>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal delay={400}>
              <section>
                <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3 transition-colors uppercase tracking-widest">
                  <Target className={project.accentColor} size={20} />
                  The Challenge
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light border-l-2 border-gray-200 dark:border-gray-800 pl-4 transition-colors">
                  {project.challenge}
                </p>
              </section>
            </Reveal>

            <Reveal delay={450}>
              <section>
                <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3 transition-colors uppercase tracking-widest">
                  <Zap className={project.accentColor} size={20} />
                  The Solution
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light transition-colors">
                  {project.solution}
                </p>
              </section>
            </Reveal>
          </div>

          {/* Impact - New Section */}
          {project.impact && (
             <Reveal delay={500}>
               <div className={`bg-gray-50 dark:bg-white/5 border-l-4 ${project.color} p-8 rounded-r-sm`}>
                 <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-widest">
                   The Impact
                 </h3>
                 <p className="text-lg text-gray-700 dark:text-gray-300 italic font-light">
                   "{project.impact}"
                 </p>
               </div>
             </Reveal>
          )}

          {/* Detailed Features Grid */}
          {project.detailedFeatures && (
            <Reveal delay={550}>
              <section className="pt-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <Smartphone className={project.accentColor} size={24} />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.detailedFeatures.map((feature, i) => (
                    <div key={i} className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 p-6 hover:border-black/30 dark:hover:border-white/30 transition-colors shadow-sm dark:shadow-none group">
                      <div className="mb-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                        <span className="font-display font-bold text-sm">0{i+1}</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          )}

          {/* Design Process - Timeline */}
          {project.processSteps && (
            <Reveal delay={600}>
              <section className="pt-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <Workflow className={project.accentColor} size={24} />
                  Design Process
                </h3>
                <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-12">
                  {project.processSteps.map((step, i) => (
                    <div key={i} className="relative pl-12">
                      {/* Timeline Dot */}
                      <div className={`absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-black ${i === 0 ? 'bg-neon-green' : i === project.processSteps!.length -1 ? 'bg-neon-purple' : 'bg-gray-400 dark:bg-gray-600'} shadow-sm`}></div>
                      
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          )}

           {/* Outcomes */}
           {project.outcomes && (
             <Reveal delay={650}>
               <section className="pt-8">
                 <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                   <CheckCircle className={project.accentColor} size={24} />
                   Outcomes
                 </h3>
                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-light">
                   {project.outcomes}
                 </p>
               </section>
             </Reveal>
           )}
        </div>

        {/* Right Column (Visuals & Artifacts) */}
        <div className="lg:col-span-4 space-y-8">
           
           {/* Main Image Card */}
           <Reveal delay={500} width="100%">
             <div className="w-full aspect-[4/5] bg-white dark:bg-[#050505] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden relative group transition-colors shadow-sm dark:shadow-none">
                
                {/* Real Image Render */}
                {project.image && !imgError ? (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={() => setImgError(true)}
                    />
                     {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  </>
                ) : (
                  <>
                    {/* Fallback Abstract UI */}
                    <div className="absolute inset-0 bg-gray-50 dark:bg-[#0a0a0a]"></div>
                    <div className="absolute inset-0 opacity-20" 
                         style={{ 
                           backgroundImage: `linear-gradient(#2d2d2d 1px, transparent 1px), linear-gradient(90deg, #2d2d2d 1px, transparent 1px)`, 
                           backgroundSize: '20px 20px' 
                         }} 
                    />
                    
                    {/* Glowing Elements */}
                    <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-${project.accentColor.split('-')[1]}-500/20 to-transparent`}></div>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 ${project.accentColor.replace('text', 'bg')}/20 blur-3xl rounded-full`}></div>
                    
                    {/* Mockup Placeholder Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                         <h4 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                         <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">High Fidelity Mockup</p>
                    </div>
                  </>
                )}
                
                {/* <div className="absolute bottom-6 left-6 right-6">
                   <div className="flex items-center gap-3 p-3 bg-white/90 dark:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-sm">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-xs font-mono text-gray-600 dark:text-gray-300 uppercase">V.1.0</span>
                   </div>
                </div> */}
             </div>
           </Reveal>

           {/* Design System Artifact */}
           <Reveal delay={700}>
              <div className="p-6 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0a0a0a] transition-colors rounded-sm">
                 <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                   <Layout size={14} /> Design System
                 </h4>
                 <div className="space-y-4">
                    <div className="flex gap-3">
                       {/* Primary Color */}
                       <div className={`w-10 h-10 rounded-full border border-black/10 dark:border-white/10 ${project.accentColor.replace('text', 'bg')}`}></div>
                       
                       {/* Secondary Color (if available) */}
                       {project.secondaryColor && (
                          <div className={`w-10 h-10 rounded-full border border-black/10 dark:border-white/10 ${project.secondaryColor}`}></div>
                       )}
                       
                       <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-white"></div>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 mb-1">Typography</div>
                        <div className={`text-xl text-gray-900 dark:text-white ${project.font}`}>Aa Bb Cc</div>
                    </div>
                 </div>
              </div>
           </Reveal>

           {/* Quick Stats or Meta */}
           <Reveal delay={800}>
              <div className="p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] transition-colors rounded-sm">
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Project Meta</h4>
                  <ul className="space-y-3">
                      <li className="flex justify-between text-sm border-b border-dashed border-gray-200 dark:border-gray-800 pb-2">
                          <span className="text-gray-600 dark:text-gray-400">Timeline</span>
                          <span className="font-mono text-gray-900 dark:text-white">{project.meta?.timeline || "4 Weeks"}</span>
                      </li>
                      <li className="flex justify-between text-sm border-b border-dashed border-gray-200 dark:border-gray-800 pb-2">
                          <span className="text-gray-600 dark:text-gray-400">Team</span>
                          <span className="font-mono text-gray-900 dark:text-white">{project.meta?.team || "Solo Design"}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Status</span>
                          <span className="font-mono text-neon-green">{project.meta?.status || "Shipped"}</span>
                      </li>
                  </ul>
              </div>
           </Reveal>
        </div>
      </div>

      {/* Interface Gallery / Mockups */}
      <Reveal delay={800}  width="100%">
         <section className="mt-24 pt-12 border-t border-black/5 dark:border-white/5">
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3 transition-colors">
               <ImageIcon className={project.accentColor} size={24} />
               Interface Gallery
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
               {galleryItems.map((item, i) => (
                  <div key={i} className="aspect-video bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 relative group overflow-hidden rounded-sm transition-colors hover:border-black/30 dark:hover:border-white/30">
                     
                     {/* Image (If available) */}
                     {item.url ? (
                        <img 
                          src={item.url} 
                          alt={item.caption}
                          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 transform"
                        />
                     ) : (
                       /* Placeholder Content */
                       <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                          <span className="text-gray-400 dark:text-gray-600 mb-2"><ImageIcon size={32} /></span>
                          <span className="text-gray-500 dark:text-gray-500 font-mono text-xs uppercase tracking-widest">{item.caption}</span>
                       </div>
                     )}

                     {/* Overlay / Caption on Hover */}
                     <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6`}>
                         <span className="text-white font-mono text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.caption}</span>
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </Reveal>

      {/* Footer Navigation */}
     <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <Reveal delay={900} width="100%">
            <div className="py-24 border-t border-black/5 dark:border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
               {/* Previous Project */}
               <button 
                 onClick={() => onNavigate(prevProject.id)}
                 className="flex flex-col items-start text-left group transition-all"
               >
                 <span className="flex items-center gap-3 text-sm font-mono text-gray-500 uppercase tracking-widest mb-2 group-hover:text-neon-green transition-colors">
                   <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                   Previous Project
                 </span>
                 <span className="text-2xl md:text-4xl font-display font-bold text-gray-900 dark:text-white group-hover:opacity-70 transition-opacity">
                   {prevProject.title}
                 </span>
               </button>

               {/* Next Project */}
               <button 
                 onClick={() => onNavigate(nextProject.id)}
                 className="flex flex-col items-start md:items-end text-left md:text-right group transition-all"
               >
                 <span className="flex items-center gap-3 text-sm font-mono text-gray-500 uppercase tracking-widest mb-2 group-hover:text-neon-green transition-colors">
                   Next Project
                   <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </span>
                 <span className="text-2xl md:text-4xl font-display font-bold text-gray-900 dark:text-white group-hover:opacity-70 transition-opacity">
                   {nextProject.title}
                 </span>
               </button>
            </div>
        </Reveal>
      </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
