import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('INITIALIZING');

  const loadingTexts = [
    'LOADING ASSETS',
    'CONNECTING TO SERVER',
    'DECRYPTING DATA',
    'ESTABLISHING UPLINK',
    'RENDERING UI',
    'SYSTEM READY'
  ];

  useEffect(() => {
    // Progress timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment for realistic feel
        const increment = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Text cycle timer
    const textInterval = setInterval(() => {
      const index = Math.min(Math.floor(progress / 20), loadingTexts.length - 1);
      setText(loadingTexts[index]);
    }, 200);

    if (progress === 100) {
      setTimeout(onComplete, 500); // Small delay before unmounting
    }

    return () => clearInterval(textInterval);
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-display">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#2d2d2d 1px, transparent 1px), linear-gradient(90deg, #2d2d2d 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="relative z-10 w-full max-w-md px-8">
        {/* Top Tech Markers */}
        <div className="flex justify-between text-xs text-gray-500 font-mono mb-2">
           <span>SYS.V.4.0</span>
           <span>SECURE</span>
        </div>

        {/* Counter */}
        <div className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tighter">
          {progress}<span className="text-neon-green">%</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-dark-accent mb-4 overflow-hidden relative">
          <div 
            className="h-full bg-neon-green shadow-[0_0_10px_#2cff05] transition-all duration-75 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text */}
        <div className="flex justify-between items-center">
          <span className="text-neon-purple font-mono text-sm tracking-widest animate-pulse">
            {text}
            <span className="animate-pulse">_</span>
          </span>
          <span className="text-xs text-gray-600 font-mono">
             {progress < 100 ? 'LOADING...' : 'COMPLETE'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;