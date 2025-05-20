import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-12 pb-6 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="mb-8 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <p className="flex items-center justify-center text-gray-400 text-sm">
              © {currentYear} Ash. Built with <Heart className="mx-1 w-4 h-4 text-red-500" /> using React
            </p>
            
            <p className="mt-2 text-gray-500 text-xs">
              Explore the console for easter eggs!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;