import React from 'react';
import { Award, CheckCircle, ExternalLink, Shield } from 'lucide-react';
import Reveal from './Reveal';

const certifications = [
  {
    title: "Digital Skills: User Experience",
    issuer: "Accenture",
    platform: "FutureLearn",
    date: "August 2025",
    id: "pxr0f1l",
    url: "https://futurelearn.com/certificates/pxr0f1l",
    skills: ["User Journeys", "Information Architecture", "Prototyping", "Usability Testing"],
    description: "A comprehensive deep-dive into the foundations of UX design, covering the entire product lifecycle from research to release and validation."
  },
  {
    title: "React JS",
    issuer: "Scaler",
    platform: "Moonshot",
    date: "November 2025",
    id: "BWv9Gk2XKs?_gl=1*1ba5lbi*_gcl_au*MTYyNjI0NDc0Ny4xNzY0MzM1MTMx*FPAU*MzM0NDcwMDg4LjE3NjQzMzUxMzI.*_ga*MTk3MjY1NDUzOC4xNzY0MzM1MTMx*_ga_53S71ZZG1X*czE3NjQ0MDkxNTIkbzckZzEkdDE3NjQ0MTAwNjgkajEkbDAkaDE5MDM1MjQ0NDQ.",
    url: "https://moonshot.scaler.com/s/sl/BWv9Gk2XKs?_gl=1*1ba5lbi*_gcl_au*MTYyNjI0NDc0Ny4xNzY0MzM1MTMx*FPAU*MzM0NDcwMDg4LjE3NjQzMzUxMzI.*_ga*MTk3MjY1NDUzOC4xNzY0MzM1MTMx*_ga_53S71ZZG1X*czE3NjQ0MDkxNTIkbzckZzEkdDE3NjQ0MTAwNjgkajEkbDAkaDE5MDM1MjQ0NDQ.",
    skills: ["Component Architecture and JSX", "State Events and Forms", "Context API", "React Hooks"],
    description: "An immersive look at React JS, exploring everything from crafting dynamic components to shipping polished, production-ready apps"
  },
  {
    title: "AI Agents for Beginners",
    issuer: "Google",
    platform: "Google Cloud",
    date: "December 2025",
    id: "9649336",
    url: "https://simpli-web.app.link/e/lsuokxbqK0b",
    skills: ["AI Agents", "LLM Fundamentals", "Agent Architectures", "Tool Use"],
    description: "An introductory program covering the core concepts behind AI agents, their design patterns, and how they reason and act autonomously."
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Google",
    platform: "Google Cloud",
    date: "December 2025",
    id: "9649880",
    url: "https://simpli-web.app.link/e/WYzs7J7pK0b",
    skills: ["Generative AI", "Vertex AI", "Prompt Design", "Model Tuning"],
    description: "Hands-on exploration of Google Cloud’s Generative AI Studio, covering foundational GenAI concepts, practical tooling, and real-world use cases."
  },
  {
    title: "Startup School: Prompt to Prototype",
    issuer: "Google",
    platform: "Google for Startups",
    date: "December 2025",
    id: "GFS-P2P-2025",
    url: "/images/prompt_to_prototype_certificate_raja_behera.pdf",
    skills: ["Prompt Engineering", "Rapid Prototyping", "AI Product Design", "Startup Thinking"],
    description: "A Google for Startups program focused on turning ideas into AI-powered prototypes through structured prompting & iterative design."
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24 border-t border-black/5 dark:border-white/5 transition-colors">
      
      {/* Header */}
      <div className="mb-16">
        <Reveal width="100%">
          <h2 className="flex gap-3 text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 tracking-tighter transition-colors">
            CREDENTIALS <span className="text-gray-400 dark:text-gray-600 font-light"> & AUTH</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl text-lg font-light leading-relaxed transition-colors">
            Proving technical expertise through industry standards, with a commitment to continuous learning in a fast-evolving digital world.
          </p>
        </Reveal>
      </div>

      {/* Grid — 3 columns */}
      <div className="grid grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <Reveal key={index} width="100%" delay={index * 150}>
            <div className="group relative bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-dark-accent p-8 overflow-hidden transition-all duration-300 hover:border-neon-purple/50 shadow-sm dark:shadow-none rounded-sm h-full">
              
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Award size={120} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                
                {/* Top Row: Issuer & Date */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/10 text-neon-purple font-bold text-lg">
                      {cert.issuer.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">{cert.issuer}</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{cert.platform}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-gray-400 dark:text-gray-500 font-mono mb-1">ISSUED</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{cert.date}</span>
                  </div>
                </div>

                {/* Title & Desc */}
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white group-hover:text-neon-purple transition-colors mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
                    {cert.description}
                  </p>
                </div>

                {/* Score & ID */}
                <div className="flex items-center gap-6 py-4 border-y border-dashed border-gray-200 dark:border-white/10">
                  
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1">Credential ID</span>
                    <span className="text-sm font-mono text-gray-600 dark:text-gray-300">{String(cert.id).slice(0, 10)}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 text-[10px] uppercase tracking-wider border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 rounded-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verification Link */}
                <div className="pt-2">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-neon-purple transition-colors"
                  >
                    Verify Credential <ExternalLink size={12} />
                  </a>
                </div>

              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neon-purple/20 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-bl-full"></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Certifications;