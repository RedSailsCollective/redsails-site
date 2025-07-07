// src/components/CodeRain.jsx
import { useRef, useEffect } from 'react';

export default function CodeRain({
  speed = 30,         // frames per second
  fontSize = 16,
  fadeOpacity = 0.02, // trails linger
  className = '',
  chars = '01{}[]();<>/.,:;+-*'.split('')
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // initialize full-screen
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    let cols = Math.floor(w / fontSize);
    const drops = Array(cols).fill(0);

    let then = performance.now();
    let lastDrawTime = then;
    const interval = 1000 / speed;
    const idleThreshold = 2000; // ms before a full clear

    function drawFrame() {
      const now = performance.now();
      const idle = now - lastDrawTime > idleThreshold;

      // if idle, wipe solid; else gently fade
      ctx.fillStyle = idle
        ? 'rgba(0,0,0,1)'
        : `rgba(0,0,0,${fadeOpacity})`;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#ff3c78'; // neon-pink
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);
        lastDrawTime = now;

        // reset drop randomly once off-screen
        if (y > h && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }
    }

    function loop(now) {
      requestAnimationFrame(loop);
      const delta = now - then;
      if (delta > interval) {
        then = now - (delta % interval);
        drawFrame();
      }
    }
    requestAnimationFrame(loop);

    // handle viewport resizing
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;

      cols = Math.floor(w / fontSize);
      drops.length = cols;
      drops.fill(0);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [speed, fontSize, fadeOpacity, chars]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
