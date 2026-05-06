import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Coffee, MapPin, ArrowUp, Terminal, Bug, Mail, Instagram, Phone } from 'lucide-react';
import FadeIn from './FadeIn';

const SOCIALS = {
  email: 'your-email@example.com',
  instagram: 'https://instagram.com/your_handle',
  whatsapp: 'https://wa.me/91XXXXXXXXXX',
};

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/4 px-5 sm:px-8 md:px-10 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <FadeIn delay={0} x={-30} y={0}>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Terminal className="w-5 h-5 text-[#00d4ff]" />
                <span className="text-[#D7E2EA] font-black text-2xl sm:text-3xl uppercase tracking-tight font-mono">PAVIT<span className="text-[#00d4ff]">.</span>SINGH</span>
              </div>
              <p className="text-[#D7E2EA]/20 font-light text-sm flex items-center gap-1 justify-center md:justify-start font-mono">
                <MapPin className="w-3 h-3" />14 y/o developer · Saharanpur, UP, India 🇮🇳
              </p>
            </div>
          </FadeIn>

          {/* Social Icons */}
          <FadeIn delay={0.1} y={20}>
            <div className="flex gap-3">
              {[
                { icon: <Mail className="w-4 h-4" />, href: `mailto:${SOCIALS.email}`, color: '#00d4ff', label: 'Email' },
                { icon: <Instagram className="w-4 h-4" />, href: SOCIALS.instagram, color: '#ff006e', label: 'Instagram' },
                { icon: <Phone className="w-4 h-4" />, href: SOCIALS.whatsapp, color: '#00ff87', label: 'WhatsApp' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-[#D7E2EA]/8 flex items-center justify-center text-[#D7E2EA]/30 cursor-pointer"
                  whileHover={{ y: -3, borderColor: s.color + '40', color: s.color, boxShadow: `0 0 15px ${s.color}20` }}
                >
                  {s.icon}
                </motion.a>
              ))}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
                className="w-10 h-10 rounded-full border border-[#D7E2EA]/8 flex items-center justify-center text-[#D7E2EA]/30 cursor-pointer ml-2"
                whileHover={{ y: -3, borderColor: 'rgba(0,212,255,0.4)', color: '#00d4ff' }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} y={20}>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-10 py-8 border-y border-[#D7E2EA]/4">
            {[
              { v: '50K+', l: 'Lines of Code', icon: <Code2 className="w-4 h-4" />, c: '#00d4ff' },
              { v: '∞', l: 'Cups of Coffee', icon: <Coffee className="w-4 h-4" />, c: '#ff6b35' },
              { v: '0', l: 'Bugs Left', icon: <Bug className="w-4 h-4" />, c: '#00ff87' },
            ].map((s, i) => (
              <motion.div key={i} className="text-center" whileHover={{ scale: 1.1 }}>
                <div className="flex items-center gap-1.5 justify-center mb-1">
                  <span style={{ color: s.c }}>{s.icon}</span>
                  <span className="text-[#D7E2EA] font-black text-xl sm:text-2xl font-mono">{s.v}</span>
                </div>
                <span className="text-[#D7E2EA]/15 text-xs uppercase tracking-wider font-mono">{s.l}</span>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3} y={10}>
          <div className="text-center">
            <p className="text-[#D7E2EA]/20 text-sm font-light font-mono">
              Crafted with <Heart className="inline w-3 h-3 text-red-400/50 mx-0.5" /> & lots of <Coffee className="inline w-3 h-3 text-[#ff6b35]/50 mx-0.5" /> by <span className="text-[#D7E2EA]/40 font-medium">Pavit Singh</span>
            </p>
            <p className="text-[#D7E2EA]/10 text-xs font-mono mt-2">© {year} // Built with React + TypeScript + Framer Motion</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;