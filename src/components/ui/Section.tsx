import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  children, 
  className = ''
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`py-20 ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5 }
              }
            }}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </motion.section>
  );
};

export default Section;