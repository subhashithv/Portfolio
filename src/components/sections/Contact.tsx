import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formState);
    alert('Thanks for your message!');
    setFormState({ name: '', email: '', message: '' });
  };

  const inputClasses = "w-full bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors";

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/subhashithv', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/subhashithv', label: 'LinkedIn' },
    
    { icon: <Mail className="w-5 h-5" />, url: 'mailto:subhashithv@gmail.com', label: 'Email' }
  ];

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={inputClasses}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className={inputClasses}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Your message here..."
                required
                rows={5}
                className={inputClasses}
              />
            </div>
            
            <Button type="submit" fullWidth>
              Send Message
            </Button>
          </form>
        </motion.div>
        
        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
          
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these platforms.
          </p>
          
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="flex items-center p-4 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-700 text-white hover:bg-gray-700 transition-colors"
                whileHover={{ 
                  x: 5,
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                  borderColor: 'rgba(59, 130, 246, 0.5)'
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mr-4">
                  {link.icon}
                </div>
                <span>{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;