import React, { useEffect, useState } from 'react';
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
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  // Simple admin check - replace with actual auth logic
  useEffect(() => {
    const adminMode = new URLSearchParams(window.location.search).get('admin') === 'true';
    setIsAdmin(adminMode);
  }, []);

  // Update page title
  useEffect(() => {
    document.title = "Ash | ML Engineer & Educator";
  }, []);

  if (isAdmin) {
    return <AdminDashboard />;
  }

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