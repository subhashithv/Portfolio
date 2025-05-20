import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { projects } from '../../data/projects';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-1 bg-gray-800 bg-opacity-50 rounded-md text-xs font-medium text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;