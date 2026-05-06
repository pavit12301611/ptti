import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, ChevronDown, Zap, Github, Sparkles, Menu, X } from 'lucide-react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import GlitchText from './GlitchText';

const HeroSection: React.FC = () => {
  const [code, setCode] = useState('');
  const [line, setLine] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);

  const snippet = `class PavitSingh {
  constructor() {
    this.age = 14;
    this.location = "Saharanpur 🇮🇳";
    this.passion = "∞";
    this.sleep = null;
    // who needs it? 💀
  }
  skills() {
    return ["Python 🐍", "C++ ⚡",
      "JavaScript 🌐", "Java ☕",
      "Three.js 🎮", "WebGL 🔮"];
  }
  code() { return "magic ✨"; }
}
const me = new PavitSingh();
console.log(me.code());`;

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      if (i <= snippet.length) {
        setCode(snippet.slice(0, i));
        setLine(snippet.slice(0, i).split('\n').length);
        i++;
      } else clearInterval(iv);
    }, 22);
    return () => clearInterval(iv);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];
  const tags = [
    { name: 'Python', emoji: '🐍', color: '#3776AB' },
    { name: 'C++', emoji: '⚡', color: '#00599C' },
    { name: 'JavaScript', emoji: '🌐', color: '#F7DF1E' },
    { name: 'Java', emoji: '☕', color: '#f89820' },
    { name: 'Three.js', emoji: '🎮', color: '#00d4ff' },
    { name: 'WebGL', emoji: '🔮', color: '#7b2ff7' },
  ];
  const stats = [
    { value: '4+', label: 'Years Coding', color: '#00d4ff' },
    { value: '20+', label: 'Projects', color: '#7b2ff7' },
    { value: '50K+', label: 'Lines Written', color: '#00ff87' },
    { value: '∞', label: 'Passion', color: '#ff006e' },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-12 blur-[150px]" style={{ background: 'radial-gradient(circle,#7b2ff7,transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-8 blur-[120px]" style={{ background: 'radial-gradient(circle,#00d4ff,transparent 70%)' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="relative z-30">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          <motion.a href="#" className="flex items-center gap-2 cursor-pointer" whileHover={{ scale: 1.05 }}>
            <Terminal className="w-6 h-6 text-[#00d4ff]" />
            <span className="text-[#D7E2EA] font-bold text-sm sm:text-base tracking-wider font-mono">PAVIT<span className="text-[#00d4ff]">.DEV</span></span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden sm:flex gap-6 md:gap-8">
            {navLinks.map(l => (
              <motion.a key={l} href={`#${l.toLowerCase()}`} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg hover:text-[#00d4ff] transition-colors relative group" whileHover={{ y: -2 }}>
                {l}<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="sm:hidden p-2 text-[#D7E2EA] cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </FadeIn>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 sm:hidden glass flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#D7E2EA] cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            {navLinks.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="text-[#D7E2EA] font-bold uppercase tracking-wider text-3xl hover:text-[#00d4ff] transition-colors"
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 md:px-10 relative z-10 gap-8 lg:gap-16 py-10"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}>
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <FadeIn delay={0.05} x={-40} y={0}>
            <motion.div className="flex items-center gap-2 mb-5 px-4 py-2 rounded-full glass neon-border"
              animate={{ boxShadow: ['0 0 15px rgba(0,212,255,0.06)', '0 0 25px rgba(0,212,255,0.12)', '0 0 15px rgba(0,212,255,0.06)'] }}
              transition={{ duration: 2, repeat: Infinity }}>
              <div className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
              <Code2 className="w-3.5 h-3.5 text-[#00ff87]" />
              <span className="text-[#00ff87] font-mono text-[10px] sm:text-xs md:text-sm">// A developer so good, even bugs fear him! 🐛💀</span>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.15} x={-60} y={0}>
            <h1 className="font-black uppercase tracking-tight leading-none" style={{ fontSize: 'clamp(3rem,13vw,11rem)' }}>
              <span className="hero-heading">Pavit</span><br /><span className="gradient-text-cyan">Singh</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.25} x={-40} y={0}>
            <div className="mt-3 flex items-center gap-2 justify-center lg:justify-start">
              <Zap className="w-4 h-4 text-[#ffbe0b]" />
              <GlitchText text="Digital Architect & Code Wizard" className="text-[#D7E2EA]/70 font-mono text-xs sm:text-sm md:text-base tracking-wider" />
            </div>
          </FadeIn>

          <FadeIn delay={0.3} x={-40} y={0}>
            <p className="text-[#D7E2EA]/45 font-light leading-relaxed mt-5 max-w-xl text-left" style={{ fontSize: 'clamp(0.9rem,1.5vw,1.12rem)' }}>
              A <span className="text-[#00d4ff] font-medium">14-year-old architect</span> of digital realities from <span className="text-[#ffbe0b] font-medium">Saharanpur, UP, India 🇮🇳</span>.
              I don&apos;t just write code — I craft <span className="text-[#ff006e] font-medium">immersive experiences</span> that blur the line between imagination and reality.
              From <span className="text-[#00ff87] font-medium">full-stack apps</span> to <span className="text-[#7b2ff7] font-medium">3D web experiences</span>,
              every pixel has purpose and every function tells a story.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} x={-30} y={0}>
            <div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
              {tags.map((t, i) => (
                <motion.span key={t.name} className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium font-mono cursor-default"
                  style={{ color: t.color, border: `1px solid ${t.color}25`, background: `${t.color}06` }}
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.07, type: 'spring' }}
                  whileHover={{ scale: 1.1, background: `${t.color}15`, boxShadow: `0 0 20px ${t.color}20` }}>
                  {t.emoji} {t.name}
                </motion.span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.5} x={-30} y={0}>
            <div className="flex gap-6 sm:gap-10 mt-8 flex-wrap justify-center lg:justify-start">
              {stats.map((s, i) => (
                <motion.div key={s.label} className="text-center lg:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }}>
                  <motion.div className="font-black font-mono" style={{ fontSize: 'clamp(1.5rem,3.5vw,3rem)', color: s.color }} whileHover={{ scale: 1.1 }}>{s.value}</motion.div>
                  <div className="text-[#D7E2EA]/25 text-[10px] sm:text-xs font-light uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.6} x={-30} y={0}>
            <div className="mt-8 flex gap-4 flex-wrap justify-center lg:justify-start">
              <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
              <motion.a href="#projects" className="rounded-full border-2 border-[#00d4ff] px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,212,255,0.15)' }} whileTap={{ scale: 0.95 }}>
                <Sparkles className="w-4 h-4" /> View Projects
              </motion.a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.7} y={30} className="flex-shrink-0 hidden lg:block">
          <Magnet padding={100} strength={5}>
            <motion.div className="code-block rounded-2xl p-6 w-[400px] xl:w-[440px] relative overflow-hidden scanline"
              animate={{ boxShadow: ['0 0 20px rgba(0,212,255,0.08)', '0 0 35px rgba(0,212,255,0.15)', '0 0 20px rgba(0,212,255,0.08)'] }}
              transition={{ duration: 3, repeat: Infinity }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" /><div className="w-3 h-3 rounded-full bg-[#ffbd2e]" /><div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-auto text-[#D7E2EA]/20 text-xs font-mono flex items-center gap-1"><Github className="w-3 h-3" /> pavit.js</span>
              </div>
              <div className="flex gap-4 max-h-[400px] overflow-hidden">
                <div className="flex flex-col text-right select-none">{code.split('\n').map((_, i) => <span key={i} className="text-white/8 font-mono text-xs leading-relaxed">{i + 1}</span>)}</div>
                <pre className="font-mono text-xs leading-relaxed whitespace-pre overflow-hidden flex-1">
                  {code.split('\n').map((l, i) => <div key={i}>{colorize(l)}{i === line - 1 && <span className="text-[#00d4ff] animate-pulse">▊</span>}</div>)}
                </pre>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-white/12 text-xs font-mono">JavaScript</span>
                <span className="text-[#00ff87]/30 text-xs font-mono flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff87]" />Ready</span>
              </div>
            </motion.div>
          </Magnet>
        </FadeIn>
      </motion.div>

      <FadeIn delay={0.8} y={10}>
        <div className="flex justify-center pb-8 relative z-10">
          <motion.a href="#about" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2 cursor-pointer group">
            <span className="text-[#D7E2EA]/20 text-xs uppercase tracking-widest font-mono group-hover:text-[#00d4ff] transition-colors">Scroll</span>
            <ChevronDown className="w-5 h-5 text-[#D7E2EA]/20 group-hover:text-[#00d4ff] transition-colors" />
          </motion.a>
        </div>
      </FadeIn>
    </section>
  );
};

function colorize(l: string): React.ReactNode {
  if (l.trim().startsWith('//')) return <span className="text-[#00ff87]/30">{l}</span>;
  const parts: React.ReactNode[] = [];
  const rx = /(class |constructor|this|return |new |null|const |let |console|log|"[^"]*"|'[^']*'|\d+)/g;
  let last = 0, m, k = 0;
  while ((m = rx.exec(l)) !== null) {
    if (m.index > last) parts.push(<span key={k++} className="text-[#D7E2EA]/50">{l.slice(last, m.index)}</span>);
    const v = m[0];
    if (v.startsWith('"') || v.startsWith("'")) parts.push(<span key={k++} className="text-[#ff6b35]">{v}</span>);
    else if (/^\d+$/.test(v)) parts.push(<span key={k++} className="text-[#ffbe0b]">{v}</span>);
    else parts.push(<span key={k++} className="text-[#7b2ff7]">{v}</span>);
    last = rx.lastIndex;
  }
  if (last < l.length) parts.push(<span key={k++} className="text-[#D7E2EA]/50">{l.slice(last)}</span>);
  return parts.length > 0 ? parts : <span className="text-[#D7E2EA]/50">{l}</span>;
}

export default HeroSection;