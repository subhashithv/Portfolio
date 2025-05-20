import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background particles/grid effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0,rgba(0,0,0,0)_100%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.4))]"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
            variants={item}
          >
            Hi, I'm SubhashIth 
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-3xl font-semibold mb-6 text-gray-200"
            variants={item}
          >
            ML Engineer & Educator
          </motion.h2>
          
          <motion.div
            className="mb-12"
            variants={item}
          >
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Building intelligent systems that solve real-world problems and sharing knowledge to empower others.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                See My Work
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={handleScrollToAbout}
      >
        <ArrowDown className="text-white/60 hover:text-white transition-colors" size={24} />
      </motion.div>
    </motion.div>
  );
};

export default Hero;