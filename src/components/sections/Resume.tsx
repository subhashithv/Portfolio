import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { timelineItems } from '../../data/timeline';
import { FileDown } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <Section id="resume" title="Resume & Experience">
      <div className="flex justify-center mb-10">
        <Button 
          variant="primary"
          className="flex items-center"
        >
         <a 
  href="/subhashith_resume.pdf" 
  download 
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center"
>
  <FileDown className="mr-2 w-5 h-5" />
  Download CV
</a>

        </Button>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-blue-500"></div>
        
        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/50"></div>
              
              {/* Left column (or right on even items) */}
              <div className="md:w-1/2 ml-8 md:ml-0 md:pr-8 md:text-right">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm text-blue-300 text-sm font-medium mb-2">
                  {item.year}
                </div>
                {item.location && (
                  <div className="text-gray-400 text-sm">{item.location}</div>
                )}
              </div>
              
              {/* Right column (or left on even items) */}
              <div className="md:w-1/2 ml-8 md:ml-0 md:pl-8">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                {item.company && (
                  <div className="text-blue-400 font-medium mb-2">{item.company}</div>
                )}
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Resume;