import React, { useEffect, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import SkillShowcase from './components/SkillShowcase';
import ProjectsSection from './components/ProjectsSection';
import FunZone from './components/FunZone';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';
import CursorGlow from './components/CursorGlow';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handler = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="bg-[#0C0C0C] font-kanit relative min-h-screen" style={{ overflowX: 'clip' }}>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[9998] origin-left"
        style={{
          background: 'linear-gradient(90deg, #00d4ff, #7b2ff7, #ff006e)',
          scaleX: scrollYProgress,
        }}
      />

      <ParticleField />
      <CursorGlow />

      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillShowcase />
      <ProjectsSection />
      <FunZone />
      <ContactSection />
      <Footer />

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full glass neon-border flex items-center justify-center text-[#00d4ff] cursor-pointer"
            whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
