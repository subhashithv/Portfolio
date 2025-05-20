import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true 
}) => {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-xl 
        bg-white/5 backdrop-blur-lg 
        border border-white/10 dark:border-gray-800/50
        shadow-lg
        p-6
        ${className}
      `}
      whileHover={hoverEffect ? { 
        y: -5, 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        borderColor: 'rgba(139, 92, 246, 0.3)'
      } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* Optional glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;