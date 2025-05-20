import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import EasterEggs from './components/easter-eggs/EasterEggs';

function App() {
  // Update page title
  useEffect(() => {
    document.title = "Ash | ML Engineer & Educator";
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Blog />
          <Contact />
        </main>
        
        <Footer />
        <EasterEggs />
      </div>
    </ThemeProvider>
  );
}

export default App;