import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  active: boolean;
}

const MatrixRain: React.FC<MatrixRainProps> = ({ active }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!active || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix characters
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersArray = characters.split('');
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Drop positions for each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }
    
    // Drawing the characters
    const draw = () => {
      // Semi-transparent black background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Green text
      ctx.fillStyle = '#0f0';
      ctx.font = fontSize + 'px monospace';
      
      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
        
        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Random reset for some drops
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Increment y coordinate
        drops[i]++;
      }
    };
    
    // Animation loop
    const interval = setInterval(draw, 33);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [active]);
  
  if (!active) return null;
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  );
};

export default MatrixRain;