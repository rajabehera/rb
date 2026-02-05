import React from 'react';

const TechOrb: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center select-none pointer-events-none animate-float">
      
      {/* Core Glow - Purple Ambient */}
      <div className="absolute inset-0 bg-neon-purple/20 rounded-full blur-[60px] animate-pulse-fast" />
      
      {/* Outer Rotating Ring - Dashed */}
      <div className="absolute inset-4 rounded-full border border-dashed border-dark-accent/60 animate-spin-slow" 
           style={{ borderSpacing: '20px' }} />

      {/* Outer Ring - Thin Green Accent */}
      <div className="absolute inset-0 rounded-full border border-neon-green/10 animate-spin-reverse-slow" />
      
      {/* Tech Markers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-neon-green/80 shadow-[0_0_10px_#2cff05]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-neon-purple/80 shadow-[0_0_10px_#bf00ff]" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-dark-accent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-dark-accent" />

      {/* Inner Rotating Ring - Gradient Border */}
      <div className="absolute inset-12 md:inset-20 rounded-full border-2 border-transparent border-t-neon-green/50 border-r-neon-purple/50 border-b-transparent border-l-transparent animate-spin-slow shadow-[0_0_15px_rgba(0,0,0,0.5)]" />

      {/* Inner Circle Background */}
      <div className="absolute inset-16 md:inset-28 bg-black rounded-full border border-dark-accent shadow-inner flex items-center justify-center overflow-hidden">
        
        {/* Grid Background Effect */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: `linear-gradient(#2d2d2d 1px, transparent 1px), linear-gradient(90deg, #2d2d2d 1px, transparent 1px)`, 
               backgroundSize: '20px 20px' 
             }} 
        />
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/5 to-transparent h-[200%] w-full animate-[scan_3s_linear_infinite]" />

        {/* Initials */}
        <div className="relative z-10 font-display font-bold text-6xl md:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-500 group">
          <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">RB</span>
          
          {/* Text Glitch/Outline effect */}
          <span className="absolute inset-0 text-neon-green opacity-30 blur-[2px] animate-pulse">RB</span>
          <span className="absolute -inset-[2px] text-neon-purple opacity-20 blur-[4px] animate-pulse" style={{ animationDelay: '0.5s' }}>RB</span>
        </div>
      </div>

      {/* Floating Particles/Decorations */}
      <div className="absolute top-[20%] right-[15%] w-2 h-2 bg-neon-green rounded-full shadow-[0_0_5px_#2cff05] animate-ping" />
      <div className="absolute bottom-[25%] left-[15%] w-1.5 h-1.5 bg-neon-purple rounded-full shadow-[0_0_5px_#bf00ff] animate-bounce" />

      {/* Connectors */}
      <svg className="absolute inset-0 w-full h-full rotate-45 opacity-30" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" stroke="#2d2d2d" strokeWidth="0.5" fill="none" />
        <path d="M 50 2 A 48 48 0 0 1 98 50" stroke="#bf00ff" strokeWidth="1" fill="none" strokeDasharray="4 4" />
      </svg>
    </div>
  );
};

export default TechOrb;