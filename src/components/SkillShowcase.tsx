import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

// ═══════════════════════════════════════════════════════════════
// PYTHON ANIMATION
// ═══════════════════════════════════════════════════════════════
const PythonAnim: React.FC = () => {
  const [ps] = useState(() =>
    'import def class return print for while if else try except lambda yield async await'
      .split(' ')
      .map((c, i) => ({ id: i, x: Math.random() * 100, char: c, speed: 3 + Math.random() * 5, delay: Math.random() * 4 }))
  );
  return (
    <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1117] to-[#1a1a2e] border border-[#3776AB]/20">
      {ps.map(p => (
        <motion.span key={p.id} className="absolute font-mono text-[#3776AB]/25 text-xs" style={{ left: `${p.x}%` }}
          initial={{ y: -20, opacity: 0 }} animate={{ y: ['0%', '100%'], opacity: [0, 0.5, 0] }}
          transition={{ duration: p.speed, repeat: Infinity, delay: p.delay, ease: 'linear' }}>
          {p.char}
        </motion.span>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="200" height="160" viewBox="0 0 200 160" className="drop-shadow-[0_0_25px_rgba(55,118,171,0.4)]">
          <motion.path d="M 20 80 Q 50 20 80 80 Q 110 140 140 80 Q 170 20 180 60" fill="none" stroke="#3776AB" strokeWidth="6" strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, ease: 'easeInOut' }} />
          <motion.circle cx="180" cy="58" r="6" fill="#ffbe0b" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.5, type: 'spring' }} />
          <motion.circle cx="176" cy="55" r="2" fill="#0d1117" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.7 }} />
        </svg>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
        {['Automation', 'AI/ML', 'Data Science', 'Scripting', 'Django'].map((t, i) => (
          <motion.span key={t} className="px-2 py-1 rounded-md text-xs font-mono bg-[#3776AB]/10 text-[#3776AB] border border-[#3776AB]/20"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
            {t}
          </motion.span>
        ))}
      </div>
      <span className="absolute top-4 right-4 text-5xl opacity-25">🐍</span>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════
// HTML ANIMATION
// ═══════════════════════════════════════════════════════════════
const HtmlAnim: React.FC = () => {
  const tags = ['<div>', '</div>', '<h1>', '<p>', '{color}', '.flex', '#app', 'const', '=>', 'async'];
  const [lines, setLines] = useState<string[]>([]);
  useEffect(() => {
    const allLines = ['<html>', '  <body>', '    <h1>Hello</h1>', '    <p>World</p>', '  </body>', '</html>'];
    let i = 0;
    setLines([]);
    const iv = setInterval(() => {
      if (i < allLines.length) { setLines(p => [...p, allLines[i]]); i++; }
      else clearInterval(iv);
    }, 600);
    return () => clearInterval(iv);
  }, []);
  return (
    <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1117] to-[#1a0a00] border border-[#F7DF1E]/20">
      {tags.map((t, i) => (
        <span key={i} className="absolute font-mono text-xs html-tag-float"
          style={{ left: `${5 + (i * 9) % 85}%`, top: `${10 + (i * 14) % 65}%`, color: i < 3 ? '#e34c26' : i < 6 ? '#264de4' : '#F7DF1E', opacity: 0.15, animationDelay: `${i * 0.3}s` }}>
          {t}
        </span>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="code-block rounded-xl p-4 w-52 border border-white/5">
          <div className="flex items-center gap-1 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
            <div className="w-2 h-2 rounded-full bg-[#28c840]" />
          </div>
          {lines.map((l, i) => (
            <motion.div key={i} className="font-mono text-xs leading-relaxed" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
              <span className={l.includes('<') ? 'text-[#e34c26]' : 'text-white/50'}>{l}</span>
            </motion.div>
          ))}
          <span className="text-[#F7DF1E] font-mono text-xs animate-pulse">▊</span>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
        {['React', 'Three.js', 'GSAP', 'Tailwind', 'WebGL'].map((t, i) => (
          <motion.span key={t} className="px-2 py-1 rounded-md text-xs font-mono bg-[#F7DF1E]/10 text-[#F7DF1E] border border-[#F7DF1E]/20"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
            {t}
          </motion.span>
        ))}
      </div>
      <span className="absolute top-4 right-4 text-3xl opacity-25">🌐</span>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════
// CPP ANIMATION
// ═══════════════════════════════════════════════════════════════
const CppAnim: React.FC = () => {
  const [bits] = useState(() => Array.from({ length: 25 }, (_, i) => ({ id: i, x: Math.random() * 100, speed: 2 + Math.random() * 4, delay: Math.random() * 3 })));
  return (
    <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1117] to-[#0a0a1a] border border-[#00599C]/20">
      {bits.map(b => (
        <motion.span key={b.id} className="absolute font-mono text-[#00599C]/20 text-xs" style={{ left: `${b.x}%` }}
          initial={{ y: -10, opacity: 0 }} animate={{ y: ['0%', '100%'], opacity: [0, 0.4, 0] }}
          transition={{ duration: b.speed, repeat: Infinity, delay: b.delay, ease: 'linear' }}>
          {Math.random() > 0.5 ? '1' : '0'}
        </motion.span>
      ))}
      <div className="absolute inset-0 flex items-center justify-center gap-4">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
          <svg width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="15" fill="none" stroke="#00599C" strokeWidth="3" opacity="0.6" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
              <rect key={a} x="37" y="5" width="6" height="14" rx="3" fill="#00599C" opacity="0.5" transform={`rotate(${a} 40 40)`} />
            ))}
          </svg>
        </motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="10" fill="none" stroke="#00599C" strokeWidth="2.5" opacity="0.4" />
            {[0, 60, 120, 180, 240, 300].map(a => (
              <rect key={a} x="28" y="4" width="4" height="10" rx="2" fill="#00599C" opacity="0.35" transform={`rotate(${a} 30 30)`} />
            ))}
          </svg>
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
        {['Algorithms', 'OOP', 'STL', 'Pointers', 'DSA'].map((t, i) => (
          <motion.span key={t} className="px-2 py-1 rounded-md text-xs font-mono bg-[#00599C]/10 text-[#00599C] border border-[#00599C]/20"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
            {t}
          </motion.span>
        ))}
      </div>
      <span className="absolute top-4 right-4 text-5xl opacity-25">⚡</span>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════
// JAVA ANIMATION
// ═══════════════════════════════════════════════════════════════
const JavaAnim: React.FC = () => (
  <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1117] to-[#1a1000] border border-[#f89820]/20">
    {['public', 'static', 'void', 'main()', 'class', 'new', 'extends', 'interface'].map((kw, i) => (
      <motion.span key={i} className="absolute font-mono text-[#f89820]/12 text-xs"
        style={{ left: `${(i * 11) % 80 + 5}%`, top: `${(i * 13) % 70 + 5}%` }}
        animate={{ y: [0, -10, 0], opacity: [0.08, 0.2, 0.08] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}>
        {kw}
      </motion.span>
    ))}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        {[0, 1, 2].map(i => (
          <div key={i} className="absolute java-cup-steam"
            style={{ left: 20 + i * 20, bottom: 80, width: 2, height: 25, borderRadius: 10, background: `rgba(248,152,32,${0.15 - i * 0.03})`, animationDelay: `${i * 0.5}s` }} />
        ))}
        <svg width="80" height="90" viewBox="0 0 80 90">
          <motion.rect x="10" y="30" width="50" height="55" rx="5" fill="none" stroke="#f89820" strokeWidth="3" opacity="0.6"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
          <motion.path d="M 60 45 Q 75 45 75 60 Q 75 75 60 75" fill="none" stroke="#f89820" strokeWidth="3" opacity="0.4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.5 }} />
          <motion.text x="35" y="65" textAnchor="middle" fill="#f89820" fontSize="14" opacity="0.7"
            initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 2 }}>☕</motion.text>
        </svg>
      </div>
    </div>
    <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
      {['Spring', 'OOP', 'JVM', 'Collections', 'Threads'].map((t, i) => (
        <motion.span key={t} className="px-2 py-1 rounded-md text-xs font-mono bg-[#f89820]/10 text-[#f89820] border border-[#f89820]/20"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
          {t}
        </motion.span>
      ))}
    </div>
    <span className="absolute top-4 right-4 text-5xl opacity-25">☕</span>
  </div>
);

// ═══════════════════════════════════════════════════════════════
// SKILLS DATA
// ═══════════════════════════════════════════════════════════════
const skills = [
  {
    name: 'Python', emoji: '🐍', level: 95, color: '#3776AB', grade: 'Expert',
    desc: 'Python was my gateway drug into programming. At age 11, I discovered it and immediately fell in love with its elegance and raw power. From automating repetitive tasks to building complex data analysis scripts and web scrapers, Python has been my most reliable companion. I\'ve built automation bots, dabbled in machine learning with TensorFlow and scikit-learn, and created Django web applications.',
    Anim: PythonAnim,
  },
  {
    name: 'HTML / CSS / JS', emoji: '🌐', level: 92, color: '#F7DF1E', grade: 'Expert',
    desc: 'The holy trinity of the web — and the foundation of everything I build. HTML gives structure, CSS brings beauty, and JavaScript breathes life into it all. I\'ve mastered React for complex UIs, Three.js for mind-bending 3D browser experiences, GSAP for animations that make users go "wow", and WebGL for raw GPU performance. Tailwind CSS is my styling weapon of choice.',
    Anim: HtmlAnim,
  },
  {
    name: 'C / C++', emoji: '⚡', level: 82, color: '#00599C', grade: 'Advanced',
    desc: 'C++ taught me to think like a machine. While Python handles high-level magic, C++ showed me what happens under the hood — memory management, pointers, data structures, and algorithms at their most fundamental. I\'ve implemented complex data structures from scratch, solved hundreds of competitive programming problems, and built performance-critical applications.',
    Anim: CppAnim,
  },
  {
    name: 'Java', emoji: '☕', level: 60, color: '#f89820', grade: 'Intermediate',
    desc: 'Java is my newest adventure. Object-oriented programming in Java feels like building with perfectly designed LEGO blocks — everything has its place, every class has its purpose. I\'m diving deep into JVM internals, working with the collections framework, exploring multithreading, and getting hands dirty with Spring Boot.',
    Anim: JavaAnim,
  },
];

// ═══════════════════════════════════════════════════════════════
// PORTAL COMPONENT
// ═══════════════════════════════════════════════════════════════
interface PortalProps {
  progress: MotionValue<number>;
  color: string;
}

const Portal: React.FC<PortalProps> = ({ progress, color }) => {
  const scale = useTransform(progress, [0, 0.5, 1], [0, 2, 0]);
  const opacity = useTransform(progress, [0, 0.3, 0.7, 1], [0, 0.7, 0.7, 0]);
  const rotate = useTransform(progress, [0, 1], [0, 360]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      style={{ opacity }}
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600, height: 600,
          background: `conic-gradient(from 0deg, transparent, ${color}, transparent, ${color}, transparent)`,
          scale, rotate, filter: 'blur(30px)',
        }}
      />
      <motion.div
        className="absolute rounded-full border-2"
        style={{
          width: 400, height: 400, borderColor: color, scale,
          boxShadow: `0 0 80px ${color}, inset 0 0 80px ${color}`,
        }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 250, height: 250,
          background: `radial-gradient(circle, ${color}aa, transparent)`,
          scale, filter: 'blur(40px)',
        }}
      />
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════
// SKILL PANEL — All hooks at top level ✅
// ═══════════════════════════════════════════════════════════════
interface SkillPanelProps {
  skill: typeof skills[0];
  index: number;
  total: number;
  sectionProgress: MotionValue<number>;
}

const SkillPanel: React.FC<SkillPanelProps> = ({ skill, index, total, sectionProgress }) => {
  // Calculate ranges
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = start + segmentSize;
  const center = start + segmentSize / 2;

  // Safe ranges (clamped 0-1)
  const fadeInStart = Math.max(0, start - 0.05);
  const fadeOutEnd = Math.min(1, end + 0.05);

  // ✅ ALL HOOKS AT TOP LEVEL
  const opacity = useTransform(
    sectionProgress,
    [fadeInStart, start, end, fadeOutEnd],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    sectionProgress,
    [fadeInStart, center, fadeOutEnd],
    [0.6, 1, 0.6]
  );

  const rotateY = useTransform(
    sectionProgress,
    [fadeInStart, center, fadeOutEnd],
    [-25, 0, 25]
  );

  const portalProgress = useTransform(
    sectionProgress,
    [fadeInStart, start + 0.03, end - 0.03, fadeOutEnd],
    [0, 1, 1, 0]
  );

  // Slide animations
  const animX = useTransform(sectionProgress, [start, center, end], [-150, 0, 150]);
  const infoX = useTransform(sectionProgress, [start, center, end], [150, 0, -150]);
  const blur = useTransform(sectionProgress, [fadeInStart, center, fadeOutEnd], [10, 0, 10]);
  const filterValue = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-5 sm:px-8 md:px-10"
      style={{
        opacity,
        scale,
        rotateY,
        filter: filterValue,
        transformPerspective: 1500,
      }}
    >
      <Portal progress={portalProgress} color={skill.color} />

      <div className="relative z-10 max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Animation side */}
          <motion.div style={{ x: animX }}>
            <skill.Anim />
          </motion.div>

          {/* Info side */}
          <motion.div style={{ x: infoX }}>
            <div className="flex items-center gap-4 mb-4">
              <motion.span
                className="text-5xl sm:text-6xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                {skill.emoji}
              </motion.span>
              <div>
                <h3 className="text-[#D7E2EA] font-bold text-2xl sm:text-3xl md:text-4xl">{skill.name}</h3>
                <span
                  className="font-mono text-xs uppercase tracking-widest px-2 py-0.5 rounded mt-1 inline-block"
                  style={{ color: skill.color, backgroundColor: skill.color + '15' }}
                >
                  {skill.grade}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-1.5">
                <span className="text-[#D7E2EA]/30 text-xs font-mono">Proficiency</span>
                <span className="font-mono font-bold text-sm" style={{ color: skill.color }}>{skill.level}%</span>
              </div>
              <div className="skill-bar-bg h-3 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full relative overflow-hidden"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                    width: `${skill.level}%`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-gradient-x" style={{ backgroundSize: '200% 100%' }} />
                </div>
              </div>
            </div>

            <p className="text-[#D7E2EA]/40 font-light leading-relaxed text-sm sm:text-base text-left">
              {skill.desc}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════
// MAIN — STICKY HORIZONTAL SCROLL WITH GATEWAY
// ═══════════════════════════════════════════════════════════════
const SkillShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    mass: 0.5,
  });

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const unsub = smoothProgress.on('change', (v) => {
      const idx = Math.min(skills.length - 1, Math.max(0, Math.floor(v * skills.length)));
      setActiveIdx(idx);
    });
    return () => unsub();
  }, [smoothProgress]);

  const scrollHintOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0]);

  return (
    <section id="skills" className="bg-[#0C0C0C] relative">
      {/* Intro heading */}
      <div className="px-5 sm:px-8 md:px-10 pt-24 sm:pt-32 pb-12 max-w-5xl mx-auto">
        <ScrollReveal direction="left" offset={80}>
          <span className="text-[#00d4ff] font-mono text-xs uppercase tracking-widest block mb-3">{'<'} Tech Arsenal ⚔️ {'/>'}</span>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 140px)' }}>Skills</h2>
          <p className="text-[#D7E2EA]/30 font-mono text-sm max-w-2xl mt-4">
            Scroll down to enter the gateway. Each skill emerges through a portal — a journey through my tech arsenal.
          </p>
        </ScrollReveal>
      </div>

      {/* STICKY HORIZONTAL SCROLL CONTAINER */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${skills.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background tint */}
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-1000"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${skills[activeIdx].color}10, transparent 70%)`,
            }}
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          {/* Top progress dots */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
            {skills.map((s, i) => (
              <div
                key={i}
                className="h-1 rounded-full transition-all duration-500"
                style={{
                  width: activeIdx === i ? 40 : 20,
                  backgroundColor: activeIdx === i ? s.color : 'rgba(215,226,234,0.15)',
                  boxShadow: activeIdx === i ? `0 0 15px ${s.color}80` : 'none',
                }}
              />
            ))}
          </div>

          {/* Bottom skill label */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass border"
                style={{ borderColor: skills[activeIdx].color + '40' }}
              >
                <span className="text-lg">{skills[activeIdx].emoji}</span>
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: skills[activeIdx].color }}>
                  {String(activeIdx + 1).padStart(2, '0')} / {String(skills.length).padStart(2, '0')} — {skills[activeIdx].name}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* All skill panels stacked */}
          {skills.map((skill, i) => (
            <SkillPanel
              key={i}
              skill={skill}
              index={i}
              total={skills.length}
              sectionProgress={smoothProgress}
            />
          ))}

          {/* Scroll hint */}
          <motion.div
            className="absolute right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2"
            style={{ opacity: scrollHintOpacity }}
          >
            <span className="text-[#D7E2EA]/30 text-xs font-mono uppercase tracking-widest [writing-mode:vertical-rl]">
              Scroll to traverse
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-12 bg-gradient-to-b from-[#00d4ff] to-transparent"
            />
          </motion.div>
        </div>
      </div>

      {/* Summary section after scroll completes */}
      <div className="px-5 sm:px-8 md:px-10 py-20 max-w-5xl mx-auto">
        <ScrollReveal direction="left" offset={40}>
          <h3 className="text-[#D7E2EA]/30 font-mono text-xs uppercase tracking-widest mb-6">// All Skills Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                className="flex items-center gap-4 p-4 rounded-xl glass-light border border-white/5"
                whileHover={{ borderColor: s.color + '40', boxShadow: `0 0 20px ${s.color}15`, x: 4 }}
              >
                <span className="text-2xl">{s.emoji}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-[#D7E2EA] text-sm font-medium">{s.name}</span>
                    <span className="font-mono text-xs font-bold" style={{ color: s.color }}>{s.level}%</span>
                  </div>
                  <div className="skill-bar-bg h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: s.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.15 }}
                    />
                  </div>
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
