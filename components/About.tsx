import React, { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';
import UXEngineerSkills from './Skills';

interface AboutProps {
  id?: string;
}

const skills = [
  { name: "UX Strategy", level: 95, color: "bg-neon-green" },
  { name: "UI Design", level: 90, color: "bg-neon-purple" },
  { name: "Frontend Dev", level: 85, color: "bg-blue-500" },
  { name: "Motion", level: 80, color: "bg-pink-500" },
];

const CountUp: React.FC<{ end: number, duration?: number, suffix?: string }> = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const SkillBar: React.FC<{ level: number, color: string, delay: number }> = ({ level, color, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-1 w-full bg-gray-200 dark:bg-dark-accent overflow-hidden relative">
      <div 
        className={`h-full ${color} shadow-[0_0_10px_currentColor] transition-all duration-1000 ease-out`} 
        style={{ 
          width: isVisible ? `${level}%` : '0%',
          transitionDelay: `${delay}ms`
        }}
      />
    </div>
  );
};

const About: React.FC<AboutProps> = ({ id }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id={id} className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 flex flex-col md:flex-row gap-16 items-center border-t border-black/5 dark:border-white/5 transition-colors">
      
      {/* Left Column: Bio & Stats */}
      <div className="w-full md:w-1/2 space-y-8">
        <Reveal>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white leading-none transition-colors">
            PRODUCT
 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-purple">
              ARCHITECT
            </span>
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light transition-colors">
            <p>
              With 8+ years of experience designing and building digital products, I combine UX strategy, interaction design, and frontend engineering to create scalable enterprise experiences. My strength lies in bridging business goals, user needs, and technical feasibility.
            </p>
            <p>
             Throughout my career, I've collaborated with cross-functional teams to transform complex workflows into intuitive products across healthcare, education, enterprise SaaS, and e-commerce. From research and wireframes to production-ready implementation, I focus on creating experiences that are both usable and measurable..
            </p>
             <p>
Core Expertise            </p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
              <li className="flex items-center gap-2"><span className="text-neon-green">▹</span> UX Research</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">▹</span> Interaction Design</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">▹</span> Design Systems</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">▹</span> Information Architecture</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">▹</span> Accessibility</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">▹</span> Figma</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">▹</span> React</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">▹</span> Design QA</li>
            </ul>
          </div>
        </Reveal>
{/* UX Research

Interaction Design

Design Systems

Information Architecture

Figma

Accessibility

React

Design QA */}
     
      </div>

      {/* Right Column: Photo & Skills */}
      <div className="w-full md:w-1/2 flex flex-col gap-8">
        
        {/* Photo Placeholder */}
        {/* <Reveal delay={300} width="100%">
          <div className="relative w-full h-[300px] bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-dark-accent rounded-lg overflow-hidden group transition-colors">
            
             <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-neon-green z-20"></div>
             <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-neon-purple z-20"></div>
             
             
             <div className="absolute inset-2 bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden transition-colors">
               
               
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-300 dark:text-gray-700 font-display text-4xl font-bold uppercase opacity-60 group-hover:opacity-90 transition-opacity">
                    <img src="/images/RB.png" alt="Raja Behera"  />
                  </span>
               </div>

            
               <img 
                 src="/images/profile.jpg" 
                 alt="Raja Behera" 
                 className={`relative z-10 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ${imageError ? 'hidden' : 'block'}`}
                 onError={() => setImageError(true)}
               />
               
              
               <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/5 dark:via-white/5 to-transparent h-[200%] w-full animate-[scan_4s_linear_infinite] pointer-events-none" />
             </div>
          </div>
        </Reveal> */}

        {/* Skills System */}
        <Reveal delay={500} width="100%">
          <UXEngineerSkills/>
          {/* <div className="bg-white/50 dark:bg-black/40 backdrop-blur-md border border-gray-200 dark:border-dark-accent p-8 relative overflow-hidden transition-colors shadow-sm dark:shadow-none">
            <h3 className="text-xl font-display tracking-widest text-gray-900 dark:text-white mb-8 border-b border-black/5 dark:border-white/10 pb-4 flex justify-between">
              <span>SYSTEM PARAMETERS</span>
              <span className="text-neon-green text-xs animate-pulse">● LIVE</span>
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">{skill.name}</span>
                    <span className="font-mono text-sm text-neon-green">{skill.level}%</span>
                  </div>
                  <SkillBar level={skill.level} color={skill.color} delay={index * 150} />
                </div>
              ))}
            </div>
          </div> */}
        </Reveal>
      </div>
    </section>
  );
};

export default About;