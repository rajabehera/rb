import React, { useEffect, useRef, useState, useCallback } from 'react';
import { RefreshCw, Play, Trophy } from 'lucide-react';

const SnakeGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Game Constants
  const gridSize = 20;
  const tileCount = 20;
  const speed = 100;

  // Game State Refs (Mutable state to prevent closure staleness in intervals)
  const snake = useRef([{ x: 10, y: 10 }]);
  const food = useRef({ x: 15, y: 15 });
  const velocity = useRef({ x: 1, y: 0 }); // Default moving right
  const gameLoopRef = useRef<number | null>(null);

  // Initialize High Score from Local Storage
  useEffect(() => {
    const savedScore = localStorage.getItem('snake_high_score');
    if (savedScore) {
      setHighScore(parseInt(savedScore, 10));
    }
  }, []);

  // Update High Score whenever Score changes
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('snake_high_score', score.toString());
    }
  }, [score, highScore]);

  const placeFood = () => {
    food.current = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount)
    };
  };

  const drawGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Grid
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 1;
    for(let i=0; i<tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
    }

    // Draw Food
    ctx.fillStyle = '#bf00ff';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#bf00ff';
    ctx.fillRect(food.current.x * gridSize, food.current.y * gridSize, gridSize - 2, gridSize - 2);
    ctx.shadowBlur = 0;

    // Draw Snake
    ctx.fillStyle = '#2cff05';
    snake.current.forEach((part, index) => {
      // Head glow
      if (index === 0) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#2cff05';
      } else {
        ctx.shadowBlur = 0;
      }
      ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize - 2, gridSize - 2);
    });
  }, []);

  const resetGame = () => {
    snake.current = [{ x: 10, y: 10 }];
    velocity.current = { x: 1, y: 0 };
    placeFood();
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    drawGame();
  };

  const handleManualStart = () => {
    resetGame();
    setGameStarted(true);
  };

  const gameStep = useCallback(() => {
    const head = { 
      x: snake.current[0].x + velocity.current.x, 
      y: snake.current[0].y + velocity.current.y 
    };

    // Wall collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
      setGameOver(true);
      setGameStarted(false);
      return;
    }

    // Self collision
    for (let i = 0; i < snake.current.length; i++) {
      if (head.x === snake.current[i].x && head.y === snake.current[i].y) {
        if (gameLoopRef.current) clearInterval(gameLoopRef.current);
        setGameOver(true);
        setGameStarted(false);
        return;
      }
    }

    // Move snake
    snake.current.unshift(head);

    // Eat food
    if (head.x === food.current.x && head.y === food.current.y) {
      setScore(s => s + 1);
      placeFood();
    } else {
      snake.current.pop();
    }

    drawGame();
  }, [drawGame]);

  // EFFECT 1: Game Loop Manager
  // Only restarts the interval if gameStarted changes to TRUE, or unmounts.
  useEffect(() => {
    if (gameStarted && !gameOver) {
      gameLoopRef.current = window.setInterval(gameStep, speed);
    }
    
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [gameStarted, gameOver, gameStep]);

  // EFFECT 2: Input Listener
  // Handles key presses without resetting the game loop
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
      
      if (keys.includes(e.key)) {
        e.preventDefault(); // Prevent scrolling
        
        // Auto-start on arrow key if not started
        if (!gameStarted && !gameOver) {
            setGameStarted(true);
        }
      }

      switch (e.key) {
        case 'ArrowUp':
          if (velocity.current.y === 1) break;
          velocity.current = { x: 0, y: -1 };
          break;
        case 'ArrowDown':
          if (velocity.current.y === -1) break;
          velocity.current = { x: 0, y: 1 };
          break;
        case 'ArrowLeft':
          if (velocity.current.x === 1) break;
          velocity.current = { x: -1, y: 0 };
          break;
        case 'ArrowRight':
          if (velocity.current.x === -1) break;
          velocity.current = { x: 1, y: 0 };
          break;
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [gameStarted, gameOver]);

  // Initial draw
  useEffect(() => {
      drawGame();
  }, [drawGame]);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative group rounded-lg overflow-hidden border border-dark-accent p-1 bg-black shadow-[0_0_20px_rgba(44,255,5,0.1)]">
        <canvas 
          ref={canvasRef} 
          width={400} 
          height={400}
          className="bg-black cursor-none block"
        />
        
        {/* Overlay for Start/Game Over */}
        {(!gameStarted || gameOver) && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm z-10">
            {gameOver ? (
              <>
                <h3 className="text-red-500 font-display text-3xl font-bold mb-2">SYSTEM CRASHED</h3>
                <div className="flex flex-col gap-1 mb-6">
                  <p className="text-gray-400 font-mono">Final Score: <span className="text-white">{score}</span></p>
                  <p className="text-gray-500 font-mono text-xs flex items-center justify-center gap-2">
                    <Trophy size={12} className="text-yellow-500" /> 
                    Best: <span className="text-yellow-500">{highScore}</span>
                  </p>
                </div>
                <button 
                  onClick={handleManualStart}
                  className="flex items-center gap-2 px-6 py-3 bg-neon-green text-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  <RefreshCw size={18} /> Reboot System
                </button>
              </>
            ) : (
              <>
                <h3 className="text-neon-green font-display text-2xl font-bold mb-4">CYBER SNAKE v1.0</h3>
                <p className="text-gray-400 text-sm mb-6 max-w-[200px]">Use Arrow Keys to navigate the grid and collect data packets.</p>
                <button 
                  onClick={handleManualStart}
                  className="flex items-center gap-2 px-6 py-3 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold uppercase tracking-wider transition-all"
                >
                  <Play size={18} /> Initialize
                </button>
              </>
            )}
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-mono text-xs md:text-sm text-gray-500 uppercase tracking-widest">
        <div>Score: <span className="text-white">{score}</span></div>
        <div className="flex items-center gap-1">High Score: <span className="text-neon-purple">{highScore}</span></div>
        <div>Status: <span className={gameOver ? "text-red-500" : "text-neon-green"}>{gameOver ? "OFFLINE" : "ONLINE"}</span></div>
      </div>
    </div>
  );
};

export default SnakeGame;