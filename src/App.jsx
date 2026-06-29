import React, { useState, useEffect } from 'react';
import HexagonBackground from './components/HexagonBackground.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import AITools from './components/AITools.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import { LanguageProvider } from './hooks/useLanguage.jsx';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-tech-dark overflow-hidden">
        <HexagonBackground />
        <LanguageSwitcher />
        <Navbar scrollY={scrollY} />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <AITools />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;