import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { blogPosts } from '../../data/blogPosts';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <Section id="blog" title="Latest Articles">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full group overflow-hidden">
              {/* Subtle glow effect on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-teal-400/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="text-sm text-blue-400 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.summary}</p>
                
                <a 
                  href={post.link}
                  className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                >
                  Read more 
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </motion.span>
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Blog;