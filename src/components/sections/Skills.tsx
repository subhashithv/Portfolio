import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  // Group skills by category
  const categories = {
    'machine-learning': 'Machine Learning',
    'programming': 'Programming',
    'frameworks': 'Frameworks',
    'tools': 'Tools'
  };
  
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  const getRandomColor = (index: number) => {
    // Assign colors based on category or index
    const colors = [
      'from-purple-500 to-blue-500',
      'from-blue-500 to-cyan-400',
      'from-cyan-400 to-teal-500',
      'from-rose-500 to-orange-400'
    ];
    
    return colors[index % colors.length];
  };

  return (
    <Section id="skills" title="Skills & Expertise">
      <div className="space-y-10">
        {Object.entries(categories).map(([category, label], categoryIndex) => (
          <motion.div 
            key={category}
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">{label}</h3>
            
            <div className="flex flex-wrap gap-3">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    className={`
                      px-4 py-2 rounded-full 
                      bg-gradient-to-r ${getRandomColor(categoryIndex)}
                      text-white font-medium text-sm 
                      shadow-lg shadow-purple-500/10
                      border border-white/10
                      flex items-center
                    `}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)',
                    }}
                  >
                    {skill.name}
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;