import React, { useState, useEffect } from 'react';
import MatrixRain from './MatrixRain';

const EasterEggs: React.FC = () => {
  const [showMatrixRain, setShowMatrixRain] = useState(false);
  
  useEffect(() => {
    // Konami Code sequence
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 
      'ArrowDown', 'ArrowDown', 
      'ArrowLeft', 'ArrowRight', 
      'ArrowLeft', 'ArrowRight', 
      'b', 'a'
    ];
    let konamiIndex = 0;
    
    // Console Easter Egg
    console.log(
      '%c👋 Welcome to my portfolio!',
      'font-size: 20px; font-weight: bold; color: #6366f1;'
    );
    console.log(
      '%cLooks like you found one of the easter eggs! Try the Konami code: ↑↑↓↓←→←→BA',
      'color: #14b8a6;'
    );
    
    // Matrix Mode - Konami Code
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
          setShowMatrixRain(true);
          konamiIndex = 0;
          
          // Turn off Matrix rain after 10 seconds
          setTimeout(() => {
            setShowMatrixRain(false);
          }, 10000);
        }
      } else {
        konamiIndex = 0;
      }
    };
    
    window.addEventListener('keydown', handleKeydown);
    
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);
  
  // Additional secret console message
  useEffect(() => {
    // Custom console styles
    const styles = [
      'font-family: monospace',
      'font-size: 16px',
      'background: linear-gradient(to right, #8b5cf6, #3b82f6)',
      'color: white',
      'padding: 8px 16px',
      'border-radius: 4px'
    ].join(';');
    
    // Hiring message
    console.log('%cInterested in ML collaborations? Send me a message!', styles);
  }, []);
  
  return (
    <>
      <MatrixRain active={showMatrixRain} />
      {/* Other easter eggs can be added here */}
    </>
  );
};

export default EasterEggs;