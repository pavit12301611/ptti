import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import FadeIn from './FadeIn';

const PythonAnim: React.FC = () => {
  const [ps] = useState(() => 'import def class return print for while if else try except lambda yield async await'.split(' ').map((c, i) => ({ id: i, x: Math.random() * 100, char: c, speed: 3 + Math.random() * 5, delay: Math.random() * 4 })));
  return (
    <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1117] to-[#1a1a2e] border border-[#3776AB]/15">
      {ps.map(p => <motion.span key={p.id} className="absolute font-mono text-[#3776AB]/25 text-xs" style={{ left: `${p.x}%` }} initial={{ y: -20, opacity: 0 }} animate={{ y: ['0%', '100%'], opacity: [0, 0.5, 0] }} transition={{ duration: p.speed, repeat: Infinity, delay: p.delay, ease: 'linear' }}>{p.char}</motion.span>)}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg width="200" height="160" viewBox="0 0 200 160" className="drop-shadow-[0_0_20px_rgba(55,118,171,0.25)]">
          <motion.path d="M 20 80 Q 50 20 80 80 Q 110 140 140 80 Q 170 20 180 60" fill="none" stroke="#3776AB" strokeWidth="6" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2.5, ease: 'easeInOut' }} />
          <motion.circle cx="180" cy="58" r="6" fill="#ffbe0b" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.5, type: 'spring' }} />
          <motion.circle cx="176" cy="55" r="2" fill="#0d1117" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.7 }} />
        </motion.svg>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
        {['Automation', 'AI/ML', 'Data Science', 'Scripting', 'Django'].map((t, i) => <motion.span key={t} className="px-2 py-1 rounded-md text-xs font-mono bg-[#3776AB]/8 text-[#3776AB] border border-[#3776AB]/15" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>{t}</motion.span>)}
      </div>
      <span className="absolute top-4 right-4 text-5xl opacity-20">🐍</span>
    </div>
  );
};

const HtmlAnim: React.FC = () => {
  const tags = ['<div>', '</div>', '<h1>', '<p>', '{color}', '.flex', '#app', 'const', '=>', 'async'];
  const [lines, setLines] = useState<string[]>([]);
  const allLines = ['<html>', '  <body>', '    <h1>Hello</h1>', '    <p>World</p>', '  </body>', '</html>'];
  React.useEffect(() => { let i = 0; const iv = setInterval(() => { if (i < allLines.length) { setLines(p => [...p, allLines[i]]); i++; } else clearInterval(iv); }, 600); return () => clearInterval(iv); }, []);
  return (
    <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1117] to-[#1a0a00] border border-[#F7DF1E]/15">
      {tags.map((t, i) => <motion.span key={i} className="absolute font-mono text-xs html-tag-float" style={{ left: `${5 + (i * 9) % 85}%`, top: `${10 + (i * 14) % 65}%`, color: i < 3 ? '#e34c26' : i < 6 ? '#264de4' : '#F7DF1E', opacity: 0.12, animationDelay: `${i * 0.3}s` }}>{t}</motion.span>)}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="code-block rounded-xl p-4 w-52 border border-white/5">
          <div className="flex items-center gap-1 mb-2"><div className="w-2 h-2 rounded-full bg-[#ff5f57]" /><div className="w-2 h-2 rounded-full bg-[#ffbd2e]" /><div className="w-2 h-2 rounded-full bg-[#28c840]" /></div>
          <AnimatePresence>{lines.map((l, i) => <motion.div key={i} className="font-mono text-xs leading-relaxed" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}><span className={l.includes('<') ? 'text-[#e34c26]' : 'text-white/50'}>{l}</span></motion.div>)}</AnimatePresence>
          <span className="text-[#F7DF1E] font-mono text-xs animate-pulse">▊</span>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
        {['React', 'Three.js', 'GSAP', 'Tailwind', 'WebGL'].map((t, i) => <motion.span key={t} className="px-2 py-1 rounded-md text-xs font-mono bg-[#F7DF1E]/8 text-[#F7DF1E] border border-[#F7DF1E]/15" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>{t}</motion.span>)}
      </div>
      <span className="absolute top-4 right-4 text-3xl opacity-20">🌐</span>
    </div>
  );
};

const CppAnim: React.FC = () => {
  const [bits] = useState(() => Array.from({ length: 25 }, (_, i) => ({ id: i, x: Math.random() * 100, speed: 2 + Math.random() * 4, delay: Math.random() * 3 })));
  return (
    <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1117] to-[#0a0a1a] border border-[#00599C]/15">
      {bits.map(b => <motion.span key={b.id} className="absolute font-mono text-[#00599C]/15 text-xs" style={{ left: `${b.x}%` }} initial={{ y: -10, opacity: 0 }} animate={{ y: ['0%', '100%'], opacity: [0, 0.3, 0] }} transition={{ duration: b.speed, repeat: Infinity, delay: b.delay, ease: 'linear' }}>{Math.random() > 0.5 ? '1' : '0'}</motion.span>)}
      <div className="absolute inset-0 flex items-center justify-center gap-4">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
          <svg width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="15" fill="none" stroke="#00599C" strokeWidth="3" opacity="0.5" />
            {[0,45,90,135,180,225,270,315].map(a => <rect key={a} x="37" y="5" width="6" height="14" rx="3" fill="#00599C" opacity="0.4" transform={`rotate(${a} 40 40)`} />)}</svg>
        </motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}>
          <svg width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="10" fill="none" stroke="#00599C" strokeWidth="2.5" opacity="0.3" />
            {[0,60,120,180,240,300].map(a => <rect key={a} x="28" y="4" width="4" height="10" rx="2" fill="#00599C" opacity="0.25" transform={`rotate(${a} 30 30)`} />)}</svg>
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
        {['Algorithms', 'OOP', 'STL', 'Pointers', 'DSA'].map((t, i) => <motion.span key={t} className="px-2 py-1 rounded-md text-xs font-mono bg-[#00599C]/8 text-[#00599C] border border-[#00599C]/15" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>{t}</motion.span>)}
      </div>
      <span className="absolute top-4 right-4 text-5xl opacity-20">⚡</span>
    </div>
  );
};

const JavaAnim: React.FC = () => (
  <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1117] to-[#1a1000] border border-[#f89820]/15">
    {['public', 'static', 'void', 'main()', 'class', 'new', 'extends', 'interface'].map((kw, i) => (
      <motion.span key={i} className="absolute font-mono text-[#f89820]/10 text-xs" style={{ left: `${(i * 11) % 80 + 5}%`, top: `${(i * 13) % 70 + 5}%` }}
        animate={{ y: [0, -10, 0], opacity: [0.06, 0.15, 0.06] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}>{kw}</motion.span>
    ))}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        {[0, 1, 2].map(i => <motion.div key={i} className="absolute java-cup-steam" style={{ left: 20 + i * 20, bottom: 80, width: 2, height: 25, borderRadius: 10, background: `rgba(248,152,32,${0.12 - i * 0.03})`, animationDelay: `${i * 0.5}s` }} />)}
        <svg width="80" height="90" viewBox="0 0 80 90">
          <motion.rect x="10" y="30" width="50" height="55" rx="5" fill="none" stroke="#f89820" strokeWidth="3" opacity="0.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} />
          <motion.path d="M 60 45 Q 75 45 75 60 Q 75 75 60 75" fill="none" stroke="#f89820" strokeWidth="3" opacity="0.3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1.5 }} />
          <motion.text x="35" y="65" textAnchor="middle" fill="#f89820" fontSize="14" opacity="0.6" initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }} transition={{ delay: 2 }}>☕</motion.text>
        </svg>
      </div>
    </div>
    <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
      {['Spring', 'OOP', 'JVM', 'Collections', 'Threads'].map((t, i) => <motion.span key={t} className="px-2 py-1 rounded-md text-xs font-mono bg-[#f89820]/8 text-[#f89820] border border-[#f89820]/15" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>{t}</motion.span>)}
    </div>
    <span className="absolute top-4 right-4 text-5xl opacity-20">☕</span>
  </div>
);

const skills = [
  { name: 'Python', emoji: '🐍', level: 95, color: '#3776AB', grade: 'Expert', desc: 'Python was my gateway drug into programming. At age 11, I discovered it and immediately fell in love with its elegance and raw power. From automating repetitive tasks to building complex data analysis scripts and web scrapers, Python has been my most reliable companion. I\'ve built automation bots, dabbled in machine learning with TensorFlow and scikit-learn, and created Django web applications. Python taught me that the best code isn\'t always the most complex — sometimes the simplest solution is the most beautiful one. My journey with Python spans automation, data science, AI/ML foundations, and backend development.', Anim: PythonAnim },
  { name: 'HTML / CSS / JS', emoji: '🌐', level: 92, color: '#F7DF1E', grade: 'Expert', desc: 'The holy trinity of the web — and the foundation of everything I build. HTML gives structure, CSS brings beauty, and JavaScript breathes life into it all. I\'ve mastered React for complex UIs, Three.js for mind-bending 3D browser experiences, GSAP for animations that make users go "wow", and WebGL for raw GPU performance. Tailwind CSS is my styling weapon of choice. Every website I create is responsive, accessible, and performs like a dream. The web is my canvas, JavaScript is my brush — and I\'m painting experiences people remember long after closing the tab.', Anim: HtmlAnim },
  { name: 'C / C++', emoji: '⚡', level: 82, color: '#00599C', grade: 'Advanced', desc: 'C++ taught me to think like a machine. While Python handles high-level magic, C++ showed me what happens under the hood — memory management, pointers, data structures, and algorithms at their most fundamental. I\'ve implemented complex data structures from scratch, solved hundreds of competitive programming problems, and built performance-critical applications. Understanding C++ made me a fundamentally better programmer in every language. When you know how memory works, when you can trace pointer arithmetic in your head — you start seeing code differently.', Anim: CppAnim },
  { name: 'Java', emoji: '☕', level: 60, color: '#f89820', grade: 'Intermediate', desc: 'Java is my newest adventure. Object-oriented programming in Java feels like building with perfectly designed LEGO blocks — everything has its place, every class has its purpose. I\'m diving deep into JVM internals, working with the collections framework, exploring multithreading, and getting hands dirty with Spring Boot. What excites me most is Java\'s "write once, run anywhere" philosophy and its massive enterprise presence. Every day I write more Java is a day closer to mastery.', Anim: JavaAnim },
];

const SkillShowcase: React.FC = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgGlow = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '50%', '100%']);

  return (
    <section id="skills" ref={sectionRef} className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/4 right-0 w-[500px] h-[500px] opacity-4 blur-[100px]" style={{ background: `radial-gradient(circle,${skills[active].color},transparent)` }} /></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <ScrollReveal direction="left" offset={80}>
          <span className="text-[#00d4ff] font-mono text-xs uppercase tracking-widest block mb-3">{'<'} Tech Arsenal ⚔️ {'/>'}</span>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem,12vw,140px)' }}>Skills</h2>
          <p className="text-[#D7E2EA]/25 font-mono text-sm max-w-2xl mt-4 mb-16">Each skill has a live 2D animation and deep dive into my experience. Click to explore.</p>
        </ScrollReveal>

        <ScrollReveal direction="left" offset={50}>
          <div className="flex flex-wrap gap-3 mb-12">
            {skills.map((s, i) => (
              <motion.button key={s.name} onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full font-mono text-sm font-medium cursor-pointer transition-all flex items-center gap-2 ${active === i ? 'text-[#0C0C0C]' : 'text-[#D7E2EA]/40 border border-[#D7E2EA]/8 hover:border-[#D7E2EA]/15'}`}
                style={active === i ? { backgroundColor: s.color, boxShadow: `0 0 25px ${s.color}25` } : {}}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span className="text-lg">{s.emoji}</span> {s.name}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="order-2 lg:order-1">{React.createElement(skills[active].Anim)}</div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{skills[active].emoji}</span>
                  <div>
                    <h3 className="text-[#D7E2EA] font-bold text-2xl sm:text-3xl">{skills[active].name}</h3>
                    <span className="font-mono text-xs uppercase tracking-widest px-2 py-0.5 rounded mt-1 inline-block" style={{ color: skills[active].color, backgroundColor: skills[active].color + '12' }}>{skills[active].grade}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-1.5"><span className="text-[#D7E2EA]/30 text-xs font-mono">Proficiency</span><span className="font-mono font-bold text-sm" style={{ color: skills[active].color }}>{skills[active].level}%</span></div>
                  <div className="skill-bar-bg h-3 rounded-full overflow-hidden">
                    <motion.div className="h-full rounded-full relative overflow-hidden" style={{ background: `linear-gradient(90deg,${skills[active].color},${skills[active].color}88)` }}
                      initial={{ width: 0 }} animate={{ width: `${skills[active].level}%` }} transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-gradient-x" style={{ backgroundSize: '200% 100%' }} />
                    </motion.div>
                  </div>
                </div>
                <p className="text-[#D7E2EA]/40 font-light leading-relaxed text-sm sm:text-base text-left">{skills[active].desc}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Summary */}
        <ScrollReveal direction="left" offset={40} className="mt-16">
          <h3 className="text-[#D7E2EA]/25 font-mono text-xs uppercase tracking-widest mb-6">// All Skills Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((s, i) => (
              <motion.div key={s.name} className="flex items-center gap-4 p-4 rounded-xl glass-light border border-white/4 cursor-pointer"
                onClick={() => setActive(i)} whileHover={{ borderColor: s.color + '30', boxShadow: `0 0 15px ${s.color}08` }}>
                <span className="text-2xl">{s.emoji}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1"><span className="text-[#D7E2EA] text-sm font-medium">{s.name}</span><span className="font-mono text-xs font-bold" style={{ color: s.color }}>{s.level}%</span></div>
                  <div className="skill-bar-bg h-1.5 rounded-full overflow-hidden"><motion.div className="h-full rounded-full" style={{ background: s.color }} initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.15 }} /></div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillShowcase;