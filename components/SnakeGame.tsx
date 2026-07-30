import React, { useEffect, useRef, useState, useCallback } from 'react';
import { RefreshCw, Play, Trophy, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const gridSize = 20;
  const tileCount = 20;
  const speed = 100;

  const snake = useRef([{ x: 10, y: 10 }]);
  const food = useRef({ x: 15, y: 15 });
  const velocity = useRef({ x: 1, y: 0 });
  const gameLoopRef = useRef(null);
  const gameStartedRef = useRef(false);
  const gameOverRef = useRef(false);
const [isTouchDevice, setIsTouchDevice] = useState(false);

useEffect(() => {
  setIsTouchDevice(
    window.matchMedia("(pointer: coarse)").matches ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
  );
}, []);
  useEffect(() => {
    try {
      const savedScore = localStorage.getItem('snake_high_score');
      if (savedScore) setHighScore(parseInt(savedScore, 10));
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      try { localStorage.setItem('snake_high_score', score.toString()); } catch (e) {}
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

    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 1;
    for (let i = 0; i < tileCount; i++) {
      ctx.beginPath(); ctx.moveTo(i * gridSize, 0); ctx.lineTo(i * gridSize, canvas.height); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i * gridSize); ctx.lineTo(canvas.width, i * gridSize); ctx.stroke();
    }

    ctx.fillStyle = '#bf00ff';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#bf00ff';
    ctx.fillRect(food.current.x * gridSize, food.current.y * gridSize, gridSize - 2, gridSize - 2);
    ctx.shadowBlur = 0;

    snake.current.forEach((part, index) => {
      if (index === 0) { ctx.shadowBlur = 10; ctx.shadowColor = '#2cff05'; }
      else { ctx.shadowBlur = 0; }
      ctx.fillStyle = index === 0 ? '#2cff05' : `hsl(${110 + index * 2}, 100%, ${55 - index * 0.5}%)`;
      ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize - 2, gridSize - 2);
    });
    ctx.shadowBlur = 0;
  }, []);

  const handleManualStart = useCallback(() => {
    snake.current = [{ x: 10, y: 10 }];
    velocity.current = { x: 1, y: 0 };
    placeFood();
    setScore(0);
    setGameOver(false);
    gameOverRef.current = false;
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    setGameStarted(true);
    gameStartedRef.current = true;
    drawGame();
  }, [drawGame]);

  // Haptic helper
  const vibrate = (pattern) => {
    try { if (navigator.vibrate) navigator.vibrate(pattern); } catch (e) {}
  };

  const gameStep = useCallback(() => {
    const head = {
      x: snake.current[0].x + velocity.current.x,
      y: snake.current[0].y + velocity.current.y
    };

  // Wrap around the screen instead of crashing
if (head.x < 0) head.x = tileCount - 1;
if (head.x >= tileCount) head.x = 0;

if (head.y < 0) head.y = tileCount - 1;
if (head.y >= tileCount) head.y = 0;

   for (let i = 1; i < snake.current.length; i++) {
  if (head.x === snake.current[i].x && head.y === snake.current[i].y) {
        if (gameLoopRef.current) clearInterval(gameLoopRef.current);
        vibrate([80, 40, 80]);
        gameOverRef.current = true;
        setGameOver(true);
        setGameStarted(false);
        gameStartedRef.current = false;
        return;
      }
    }

    snake.current.unshift(head);

    if (head.x === food.current.x && head.y === food.current.y) {
      vibrate(40);
      setScore(s => s + 1);
      placeFood();
    } else {
      snake.current.pop();
    }

    drawGame();
  }, [drawGame]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      gameLoopRef.current = window.setInterval(gameStep, speed);
    }
    return () => { if (gameLoopRef.current) clearInterval(gameLoopRef.current); };
  }, [gameStarted, gameOver, gameStep]);

  // Keyboard controls (Arrow + WASD)
  useEffect(() => {
    const handleKey = (e) => {
      const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'];
      if (keys.includes(e.key)) {
        e.preventDefault();
        if (!gameStartedRef.current && !gameOverRef.current) {
          setGameStarted(true);
          gameStartedRef.current = true;
        }
      }
      switch (e.key) {
        case 'ArrowUp':    case 'w': case 'W': if (velocity.current.y !== 1)  velocity.current = { x: 0, y: -1 }; break;
        case 'ArrowDown':  case 's': case 'S': if (velocity.current.y !== -1) velocity.current = { x: 0, y: 1 };  break;
        case 'ArrowLeft':  case 'a': case 'A': if (velocity.current.x !== 1)  velocity.current = { x: -1, y: 0 }; break;
        case 'ArrowRight': case 'd': case 'D': if (velocity.current.x !== -1) velocity.current = { x: 1, y: 0 };  break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Touch swipe on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      const minSwipe = 20;
      if (!gameStartedRef.current && !gameOverRef.current) {
        setGameStarted(true);
        gameStartedRef.current = true;
      }
      if (Math.abs(dx) > Math.abs(dy)) {
        if (Math.abs(dx) > minSwipe) {
          if (dx > 0 && velocity.current.x !== -1) velocity.current = { x: 1, y: 0 };
          else if (dx < 0 && velocity.current.x !== 1) velocity.current = { x: -1, y: 0 };
        }
      } else {
        if (Math.abs(dy) > minSwipe) {
          if (dy > 0 && velocity.current.y !== -1) velocity.current = { x: 0, y: 1 };
          else if (dy < 0 && velocity.current.y !== 1) velocity.current = { x: 0, y: -1 };
        }
      }
      e.preventDefault();
    };

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false });
    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  useEffect(() => { drawGame(); }, [drawGame]);

  // D-pad handler
  const handleDpad = useCallback((dir) => {
    vibrate(25);
    if (!gameStartedRef.current && !gameOverRef.current) {
      setGameStarted(true);
      gameStartedRef.current = true;
    }
    switch (dir) {
      case 'up':    if (velocity.current.y !== 1)  velocity.current = { x: 0, y: -1 }; break;
      case 'down':  if (velocity.current.y !== -1) velocity.current = { x: 0, y: 1 };  break;
      case 'left':  if (velocity.current.x !== 1)  velocity.current = { x: -1, y: 0 }; break;
      case 'right': if (velocity.current.x !== -1) velocity.current = { x: 1, y: 0 };  break;
    }
  }, []);

  const btnStyle = {
    width: 54, height: 54,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: 12,
    border: '1px solid rgba(44,255,5,0.35)',
    background: 'rgba(44,255,5,0.05)',
    color: '#2cff05',
    cursor: 'pointer',
    userSelect: 'none',
    touchAction: 'none',
    WebkitTapHighlightColor: 'transparent',
    boxShadow: '0 0 12px rgba(44,255,5,0.1)',
    flexShrink: 0,
  };

  const DpadBtn = ({ dir, icon: Icon }) => (
    <button
      onPointerDown={(e) => { e.preventDefault(); e.currentTarget.style.transform = 'scale(0.88)'; e.currentTarget.style.background = 'rgba(44,255,5,0.2)'; handleDpad(dir); }}
      onPointerUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(44,255,5,0.05)'; }}
      onPointerLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(44,255,5,0.05)'; }}
      style={{ ...btnStyle, transition: 'transform 0.08s, background 0.08s' }}
    >
      <Icon size={26} strokeWidth={2.5} />
    </button>
  );

  const canvasSize = 'min(400px, 75vw)';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#000',
      fontFamily: "'Courier New', monospace",
      gap: 10,
      padding: 12,
      boxSizing: 'border-box',
      cursor: gameStarted && !gameOver ? 'none' : 'default',
    }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; height: 100%; background: #000; }
        body { display: flex; align-items: center; justify-content: center; }
        * { -webkit-tap-highlight-color: transparent !important; }
        @media (pointer: coarse) { * { cursor: none !important; } }
      `}</style>
      {/* Title */}
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#2cff05', fontSize: 18, fontWeight: 'bold', letterSpacing: '0.3em', textTransform: 'uppercase', textShadow: '0 0 10px #2cff05', margin: 0 }}>
          CYBER SNAKE
        </h1>
        <p style={{ color: '#444', fontSize: 10, letterSpacing: '0.2em', margin: '2px 0 0' }}>v1.0</p>
      </div>

      {/* Score bar */}
      <div style={{ display: 'flex', gap: 20, fontSize: 11, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', alignItems: 'center' }}>
        <span>Score: <span style={{ color: '#fff' }}>{score}</span></span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Trophy size={10} color="#eab308" />
          Best: <span style={{ color: '#eab308' }}>{highScore}</span>
        </span>
        <span>Status: <span style={{ color: gameOver ? '#ef4444' : '#2cff05' }}>{gameOver ? 'OFFLINE' : 'ONLINE'}</span></span>
      </div>

      {/* Canvas */}
      <div style={{
        position: 'relative',
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid rgba(44,255,5,0.2)',
        boxShadow: '0 0 30px rgba(44,255,5,0.08)',
        flexShrink: 0,
      }}>
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          style={{ display: 'block', width: canvasSize, height: canvasSize, imageRendering: 'pixelated' }}
        />

        {(!gameStarted || gameOver) && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: 24,
            backdropFilter: 'blur(4px)',
          }}>
            {gameOver ? (
              <>
                <div style={{ color: '#ef4444', fontSize: 26, fontWeight: 'bold', textShadow: '0 0 20px red', marginBottom: 6 }}>SYSTEM CRASHED</div>
                <div style={{ color: '#888', fontSize: 13, marginBottom: 4 }}>Final Score: <span style={{ color: '#fff', fontWeight: 'bold' }}>{score}</span></div>
                <div style={{ color: '#555', fontSize: 11, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Trophy size={10} color="#eab308" /> Best: <span style={{ color: '#eab308' }}>{highScore}</span>
                </div>
                <button onClick={handleManualStart} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '10px 24px', background: '#2cff05', color: '#000',
                  fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em',
                  border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 13,
                  fontFamily: "'Courier New', monospace",
                }}>
                  <RefreshCw size={15} /> Reboot System
                </button>
              </>
            ) : (
              <>
                <div style={{ color: '#2cff05', fontSize: 22, fontWeight: 'bold', textShadow: '0 0 15px #2cff05', marginBottom: 8 }}>CYBER SNAKE</div>
                <p style={{ color: '#555', fontSize: 11, marginBottom: 4 }}>Arrow keys, WASD, or D-pad to move</p>
                <p style={{ color: '#444', fontSize: 11, marginBottom: 20 }}>Swipe on board to play</p>
                <button onClick={handleManualStart} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '10px 24px', background: 'transparent', color: '#2cff05',
                  fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em',
                  border: '1px solid #2cff05', borderRadius: 6, cursor: 'pointer', fontSize: 13,
                  fontFamily: "'Courier New', monospace",
                }}>
                  <Play size={15} /> Initialize
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* D-Pad */}
    {/* D-Pad (Mobile only) */}
{isTouchDevice && (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      flexShrink: 0,
    }}
  >
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DpadBtn dir="up" icon={ChevronUp} />
    </div>

    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      <DpadBtn dir="left" icon={ChevronLeft} />

      <div
        style={{
          width: 54,
          height: 54,
          borderRadius: 12,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#1a1a1a",
          }}
        />
      </div>

      <DpadBtn dir="right" icon={ChevronRight} />
    </div>

    <div style={{ display: "flex", justifyContent: "center" }}>
      <DpadBtn dir="down" icon={ChevronDown} />
    </div>
  </div>
)}

      {/* Hint */}
      <p
  style={{
    color: "#2a2a2a",
    fontSize: 10,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    margin: 0,
  }}
>
  {isTouchDevice
    ? "Swipe · D-Pad"
    : "Arrow Keys · WASD"}
</p>
    </div>
  );
};

export default SnakeGame;