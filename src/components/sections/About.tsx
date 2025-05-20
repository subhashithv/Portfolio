import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Brain, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      } 
    }
  };

  const iconWrapperStyles = "w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg mb-4";
  
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          className="col-span-1 md:col-span-2 text-lg text-gray-300 dark:text-gray-300"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
          }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">ML Engineer & Educator with a passion for AI</h3>
          
          <p className="mb-4">
            With over 5 years of experience in machine learning and artificial intelligence, 
            I specialize in developing cutting-edge solutions that merge theoretical research with 
            practical applications. My expertise spans computer vision, natural language processing, 
            and reinforcement learning.
          </p>
          
          <p className="mb-6">
            As an educator, I'm committed to demystifying complex AI concepts and empowering the next 
            generation of engineers. I believe in responsible AI development that prioritizes ethics 
            and accessibility.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <motion.div className="mx-auto flex justify-center" variants={iconVariants}>
                <div className={iconWrapperStyles}>
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h4 className="font-bold text-white">ML Research</h4>
              <p className="text-sm mt-2">Creating novel algorithms that push the boundaries of AI</p>
            </div>
            
            <div className="text-center">
              <motion.div className="mx-auto flex justify-center" variants={iconVariants}>
                <div className={iconWrapperStyles}>
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h4 className="font-bold text-white">Problem Solving</h4>
              <p className="text-sm mt-2">Turning complex challenges into elegant solutions</p>
            </div>
            
            <div className="text-center">
              <motion.div className="mx-auto flex justify-center" variants={iconVariants}>
                <div className={iconWrapperStyles}>
                  <Users className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h4 className="font-bold text-white">Knowledge Sharing</h4>
              <p className="text-sm mt-2">Making advanced ML concepts accessible to everyone</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
          }}
        >
          <div className="aspect-square overflow-hidden rounded-2xl relative">
            {/* Profile image with futuristic overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 z-10"></div>
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
              alt="Ash - ML Engineer" 
              className="w-full h-full object-cover"
            />
            
            {/* Animated border effect */}
            <div className="absolute inset-0 border-2 border-blue-400/30 rounded-2xl z-20 overflow-hidden">
              <motion.div 
                className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-20"
                animate={{ left: ['100%', '-100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;