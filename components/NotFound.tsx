import React from 'react';
import { AlertTriangle, Home } from 'lucide-react';
import SnakeGame from './SnakeGame';
import Reveal from './Reveal';

interface NotFoundProps {
  onReturn: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onReturn }) => {
  return (
    <div className="min-h-screen w-full  flex flex-col items-center justify-center p-6 bg-black text-white relative overflow-hidden">

      {/* Background Glitch Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-red-500/20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-red-500/20 animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-red-500/10 -translate-y-1/2"></div>
      </div>

<div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 lg:translate-x-8">        {/* Text Content */}
        <div className="text-left space-y-6 lg:pl-8 xl:pl-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-900 bg-red-900/10 text-red-500 text-xs font-mono uppercase tracking-widest mb-4">
              <AlertTriangle size={14} />
              <span>404 Error // Signal Lost</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-none">
              SYSTEM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">FAILURE</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-gray-400 text-lg border-l-2 border-red-500/30 pl-4">
              The requested directory could not be located in the neural network. You may have drifted into uncharted data sectors.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="pt-4">
              <button
                onClick={onReturn}
                className="group flex items-center gap-3 text-white font-display uppercase tracking-widest hover:text-neon-green transition-colors"
              >
                <div className="p-2 border border-white/20 group-hover:border-neon-green rounded-full transition-colors">
                  <Home size={18} />
                </div>
                Return to Base
              </button>
            </div>
          </Reveal>
        </div>

        {/* Game Container */}
        <Reveal delay={400} className="w-full flex justify-center mx-auto">
          <SnakeGame />
        </Reveal>
      </div>

      {/* Footer System Code */}
      <div className="absolute bottom-8 text-center w-full">
        <p className="font-mono text-xs text-gray-800">ERR_CODE: 0x0000404 // MEMORY_DUMP_INITIATED</p>
      </div>
    </div>
  );
};

export default NotFound;