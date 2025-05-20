import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      onClick={toggleTheme}
      className="w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 p-1 flex items-center justify-start dark:justify-end transition-colors"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      initial={false}
      animate={{ backgroundColor: theme === 'dark' ? '#374151' : '#E5E7EB' }}
    >
      <motion.div
        className="w-4 h-4 rounded-full flex items-center justify-center"
        initial={false}
        animate={{ 
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-yellow-300" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;