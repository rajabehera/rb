import React, { useEffect, useState, useRef } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  // Use refs for the trailing cursor to avoid re-renders on every frame
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  
  // Track mouse position directly in refs for animation loop
  const mousePos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('cursor-pointer');
        
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Animation loop for smooth trailing
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      // Linear interpolation for smooth trailing
      const ease = 0.15;
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * ease;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
      
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      {/* Main Dot Cursor */}
      <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 w-3 h-3 bg-neon-green rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center`}
        style={{ marginTop: '-6px', marginLeft: '-6px' }} // Center adjustment
      >
        {/* Click Ripple */}
        <div className={`absolute inset-0 rounded-full bg-neon-green opacity-50 animate-ping ${isClicking ? 'block' : 'hidden'}`} />
      </div>

      {/* Trailing Ring */}
      <div 
        ref={trailRef}
        className={`fixed top-0 left-0 border border-neon-purple rounded-full pointer-events-none z-[99] transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2`}
        style={{ 
          width: isHovering ? '60px' : '30px', 
          height: isHovering ? '60px' : '30px',
          marginTop: isHovering ? '-30px' : '-15px',
          marginLeft: isHovering ? '-30px' : '-15px',
          backgroundColor: isHovering ? 'rgba(191, 0, 255, 0.1)' : 'transparent',
          borderColor: isHovering ? '#2cff05' : '#bf00ff',
          opacity: 0.7
        }}
      />
    </>
  );
};

export default Cursor;