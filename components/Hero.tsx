import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import TechOrb from './TechOrb';
import Reveal from './Reveal';

interface HeroProps {
  onNavigate?: (page: string) => void;
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, id }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center py-24 min-h-screen">
      
      {/* Left Column: Text Content */}
      <div className="flex flex-col items-start justify-center space-y-8 z-10 order-2 lg:order-1">
        
        {/* Status Indicator */}
        <Reveal>
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-gray-200 dark:border-dark-accent bg-white/80 dark:bg-white/5 backdrop-blur-sm hover:border-neon-green/30 transition-colors cursor-default shadow-sm dark:shadow-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-300">Available for projects</span>
          </div>
        </Reveal>

        {/* Main Heading */}
        <div className="space-y-2">
          <Reveal delay={200}>
            <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-gray-900 dark:text-white transition-colors">
              RAJA <br />
              <span className="text-neon-green drop-shadow-[0_0_15px_rgba(44,255,5,0.3)]">BEHERA</span>
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <h2 className="font-sans font-light text-2xl md:text-3xl tracking-[0.2em] text-gray-500 dark:text-gray-400 mt-4 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-gray-300 dark:bg-dark-accent"></span>
              UX ENGINEER
            </h2>
          </Reveal>
        </div>

        {/* Tagline */}
        <Reveal delay={600}>
          <p className="max-w-md text-gray-600 dark:text-gray-400 text-lg md:text-xl font-light leading-relaxed border-l-2 border-neon-purple/50 pl-6">
            Crafting Digital Experiences with <span className="text-gray-900 dark:text-white font-medium">Precision</span> & <span className="text-gray-900 dark:text-white font-medium">Emotion</span>.
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={800}>
          <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto">
            <button 
              onClick={() => scrollToSection('work')}
              className="group relative px-8 py-4 bg-transparent overflow-hidden border border-neon-green/80 rounded-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(44,255,5,0.4)]"
            >
              <div className="absolute inset-0 w-0 bg-neon-green transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative flex items-center justify-center gap-3 text-neon-green font-display font-bold tracking-wider uppercase group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                View Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button 
              onClick={() => scrollToSection('about')}
              className="group relative px-8 py-4 bg-transparent border border-gray-300 dark:border-dark-accent rounded-none transition-all duration-300 hover:border-neon-purple hover:shadow-[0_0_15px_rgba(191,0,255,0.2)]"
            >
              <span className="relative flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300 font-display tracking-wider uppercase group-hover:text-neon-purple transition-colors">
                About Me
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </Reveal>

        {/* Tech Decor Elements */}
        <Reveal delay={1000}>
          <div className="pt-12 flex items-center gap-8 opacity-50">
             <div className="flex flex-col gap-1">
               <span className="text-[10px] uppercase text-gray-500 dark:text-gray-600 tracking-widest">System</span>
               <span className="text-xs font-mono text-gray-400">v.4.0.1</span>
             </div>
             <div className="h-8 w-[1px] bg-gray-300 dark:bg-dark-accent"></div>
             <div className="flex flex-col gap-1">
               <span className="text-[10px] uppercase text-gray-500 dark:text-gray-600 tracking-widest">Latency</span>
               <span className="text-xs font-mono text-gray-400">12ms</span>
             </div>
          </div>
        </Reveal>
      </div>

      {/* Right Column: Tech Orb */}
      <div className="relative flex justify-center items-center h-[50vh] lg:h-auto order-1 lg:order-2">
        <Reveal delay={500}>
          <TechOrb />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;