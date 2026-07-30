import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import TechOrb from './TechOrb';
import Reveal from './Reveal';

interface HeroProps {
  onNavigate?: (page: string) => void;
  id?: string;
}
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
const Hero: React.FC<HeroProps> = ({ onNavigate, id }) => {
  const [latency, setLatency] = useState(12);

  useEffect(() => {
    // Simulate real-time latency updates
    const interval = setInterval(() => {
      // Generate realistic latency between 8-25ms
      const newLatency = Math.floor(Math.random() * 18) + 8;
      setLatency(newLatency);
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center py-24 min-h-screen">

      {/* Left Column: Text Content */}
      <div className="flex flex-col items-start justify-center space-y-10 z-10 order-2 lg:order-1 lg:pl-8 xl:pl-12">

        {/* Status Indicator */}
        <Reveal>
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-gray-200 dark:border-dark-accent bg-white/80 dark:bg-white/5 backdrop-blur-sm hover:border-neon-green/30 transition-colors cursor-default shadow-sm dark:shadow-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-300">Open to Full-time & Contract Opportunities</span>
          </div>
        </Reveal>

        {/* Main Heading */}
        <div className="space-y-2">
          <Reveal delay={200}>
            <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-7xl leading-tight tracking-tight text-gray-900 dark:text-white transition-colors">
              RAJA <br />
              <span className="text-neon-green drop-shadow-[0_0_15px_rgba(44,255,5,0.3)]">BEHERA</span>
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <h2 className="font-sans font-light text-2xl md:text-2xl tracking-[0.2em] text-gray-500 dark:text-gray-400 mt-4 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-gray-300 dark:bg-dark-accent"></span>
              SENIOR PRODUCT DESIGNER
            </h2>
          </Reveal>
         
        </div>

        {/* Tagline */}
        <Reveal delay={600}>
          <p className="max-w-[620px] text-gray-600 dark:text-gray-400 text-lg md:text-xl font-light leading-relaxed border-l-2 border-neon-purple/50 pl-6">
           I design enterprise SaaS products that simplify complex workflows
through research, design systems, and engineering collaboration.

          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={800}>
          <div className="flex flex-col sm:flex-row gap-5 mt-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('work')}
              className="group relative px-8 py-4 bg-transparent overflow-hidden border border-neon-green/80 rounded-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(44,255,5,0.4)]"
            >
              <div className="absolute inset-0 w-0 bg-neon-green transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative flex items-center justify-center gap-3 text-neon-green font-display font-bold tracking-wider uppercase group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                VIEW CASE STUDIES
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

           <a
  href="/resume/Sr_product_designer_Raja.pdf"
  download
  className="group relative px-8 py-4 border border-gray-500/40 rounded-none transition-all duration-300 hover:border-neon-green hover:shadow-[0_0_15px_rgba(44,255,5,0.15)]"
>
              <span className="relative flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300 font-display tracking-wider uppercase group-hover:text-neon-purple transition-colors">
                Download Resume
                <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              </span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={900}>
          <div className="pt-8 grid grid-cols-3 gap-8 border-t border-black/10 dark:border-white/10 transition-colors">
            <div>
              <span className="block text-4xl font-display font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                <CountUp end={8} suffix="+" />
              </span>
              <span className="text-sm text-gray-500 uppercase tracking-widest">Years Experience</span>
            </div>
            <div>
              <span className="block text-4xl font-display font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                <CountUp end={30} suffix="+" />
              </span>
              <span className="text-sm text-gray-500 uppercase tracking-widest">Projects Shipped</span>
            </div>
            <div>
    <span className="block text-4xl font-display font-bold">
        <CountUp end={12} suffix="+" />
    </span>

    <span className="text-sm uppercase tracking-widest">
        Enterprise Products
    </span>
</div>
          </div>
        </Reveal>
        {/* Tech Decor Elements */}
        <Reveal delay={1000}>
          <div className="pt-2 flex items-center gap-8 opacity-50">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase text-gray-200 dark:text-gray-200 tracking-widest">Enterprise SaaS • Healthcare • Education • E-commerce.</span>

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