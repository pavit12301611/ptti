import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Maximize2 } from 'lucide-react';
import FadeIn from './FadeIn';
import SmartCalculator from '../projects/SmartCalculator';
import ColorPaletteGenerator from '../projects/ColorPaletteGenerator';
import PrecisionStopwatch from '../projects/PrecisionStopwatch';
import PasswordGenerator from '../projects/PasswordGenerator';
import MarkdownPreviewer from '../projects/MarkdownPreviewer';
import PixelArtCanvas from '../projects/PixelArtCanvas';

interface Proj { name: string; emoji: string; desc: string; longDesc: string; color: string; tech: string[]; component: React.FC; }
const projects: Proj[] = [
  { name: 'Smart Calculator', emoji: '🧮', desc: 'Sleek, functional calculator with chained operations', longDesc: 'A beautiful calculator supporting basic arithmetic, percentages, sign toggle, and chained operations. Built with clean React state management and smooth Framer Motion animations. Every button press feels satisfying with haptic-like tap animations.', color: '#00d4ff', tech: ['React', 'TypeScript', 'Framer Motion'], component: SmartCalculator },
  { name: 'Color Palette', emoji: '🎨', desc: 'Generate beautiful random color palettes instantly', longDesc: 'Generate stunning 5-color palettes with a single click. Lock your favorite colors to keep them while regenerating the rest. Click any color to copy its hex code to clipboard. Features smooth color transitions and a satisfying UX.', color: '#ff006e', tech: ['React', 'Clipboard API', 'Animation'], component: ColorPaletteGenerator },
  { name: 'Precision Stopwatch', emoji: '⏱️', desc: 'High-precision timing with millisecond accuracy', longDesc: 'A professional-grade stopwatch using performance.now() for sub-millisecond precision. Features a gorgeous circular SVG progress indicator, lap recording, and smooth start/pause/reset transitions. Perfect for timing anything from workouts to code benchmarks.', color: '#7b2ff7', tech: ['React', 'Performance API', 'SVG'], component: PrecisionStopwatch },
  { name: 'Password Generator', emoji: '🔐', desc: 'Cryptographically inspired secure passwords', longDesc: 'Generate ultra-secure passwords with fine-tuned control over length (6-32 chars) and character sets. Real-time strength analysis gives visual feedback from "Weak" to "Unbreakable". One-click copy to clipboard with visual confirmation.', color: '#00ff87', tech: ['React', 'Crypto', 'TypeScript'], component: PasswordGenerator },
  { name: 'Markdown Previewer', emoji: '📝', desc: 'Real-time markdown rendering with live preview', longDesc: 'A split-pane markdown editor with real-time preview. Supports headers (H1-H3), bold, italic, inline code, blockquotes, lists, and horizontal rules. Syntax-highlighted output with custom styling for each element type. Write on the left, see beautiful output on the right.', color: '#ff6b35', tech: ['React', 'Regex', 'Split View'], component: MarkdownPreviewer },
  { name: 'Pixel Art Canvas', emoji: '🎮', desc: '16×16 grid pixel art editor with export', longDesc: 'Create retro pixel art on a 16×16 grid with 16 carefully chosen colors. Features draw mode, eraser mode, full canvas clear, and PNG export. Click-and-drag painting for smooth drawing experience. Export your masterpiece as a high-res PNG image.', color: '#ffbe0b', tech: ['React', 'Canvas API', 'State Management'], component: PixelArtCanvas },
];

const ProjectsSection: React.FC = () => {
  const [active, setActive] = useState<Proj | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <span className="text-[#00d4ff] font-mono text-xs uppercase tracking-widest block text-center mb-3">{'<'} Live & Interactive {'/>'}</span>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>Projects</h2>
        <p className="text-center text-[#D7E2EA]/30 font-mono text-sm max-w-2xl mx-auto mb-16 sm:mb-20 md:mb-28">
          Every project below is <span className="text-[#00d4ff]">fully functional</span> and runs right here on this page.
          Click &quot;Live Demo&quot; to interact with each one — no redirects, no downloads, just pure interactive code. Each project showcases different skills from my arsenal,
          from state management and animations to canvas manipulation and real-time rendering. Go ahead, break things — that&apos;s how we learn! ⚡
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.map((p, i) => (
          <FadeIn key={i} delay={i * 0.1} y={30}>
            <motion.div className="relative rounded-3xl overflow-hidden cursor-pointer group"
              style={{ border: `1px solid ${hovered === i ? p.color + '40' : 'rgba(215,226,234,0.08)'}` }}
              onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} onClick={() => setActive(p)}
              whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <div className="relative p-6 sm:p-7 glass-light">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3"><span className="text-4xl">{p.emoji}</span><span className="font-mono text-xs text-[#D7E2EA]/15 font-bold">0{i + 1}</span></div>
                  <motion.div className="p-2 rounded-xl" style={{ backgroundColor: hovered === i ? p.color + '15' : 'rgba(255,255,255,0.03)' }} whileHover={{ rotate: 15 }}>
                    <Maximize2 className="w-4 h-4" style={{ color: p.color }} />
                  </motion.div>
                </div>
                <h3 className="text-[#D7E2EA] font-bold text-xl mb-1 group-hover:text-white transition-colors">{p.name}</h3>
                <p className="text-[#D7E2EA]/35 text-sm font-light mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">{p.tech.map(t => (<span key={t} className="px-2 py-0.5 rounded-md text-xs font-mono" style={{ color: p.color + 'aa', backgroundColor: p.color + '0a' }}>{t}</span>))}</div>
                <motion.button className="w-full py-3 rounded-xl font-medium text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300"
                  style={{ backgroundColor: hovered === i ? p.color : 'rgba(255,255,255,0.03)', color: hovered === i ? '#0C0C0C' : '#D7E2EA', border: `1px solid ${hovered === i ? p.color : 'rgba(255,255,255,0.08)'}` }}
                  whileTap={{ scale: 0.95 }}><ExternalLink className="w-4 h-4" /> Live Demo</motion.button>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setActive(null)} />
            <motion.div className="relative w-full max-w-2xl max-h-[90vh] rounded-3xl overflow-hidden"
              style={{ border: `2px solid ${active.color}25`, backgroundColor: '#0C0C0C' }}
              initial={{ scale: 0.8, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}>
              <div className="flex items-center justify-between p-4 sm:p-6 border-b" style={{ borderColor: active.color + '15' }}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{active.emoji}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">{active.name}</h3>
                    <div className="flex gap-2 mt-1">{active.tech.map(t => (<span key={t} className="text-xs font-mono px-2 py-0.5 rounded" style={{ color: active.color, backgroundColor: active.color + '10' }}>{t}</span>))}</div>
                  </div>
                </div>
                <motion.button onClick={() => setActive(null)} className="p-2 rounded-xl hover:bg-white/10 cursor-pointer" whileHover={{ rotate: 90 }} whileTap={{ scale: 0.9 }}><X className="w-5 h-5 text-white/50" /></motion.button>
              </div>
              <div className="px-4 sm:px-6 py-3 border-b" style={{ borderColor: active.color + '08' }}>
                <p className="text-[#D7E2EA]/40 text-sm font-light leading-relaxed">{active.longDesc}</p>
              </div>
              <div className="p-4 sm:p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 200px)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: active.color }} />
                  <span className="text-xs font-mono uppercase tracking-widest" style={{ color: active.color }}>Live & Interactive</span>
                </div>
                <div className="rounded-2xl p-4 sm:p-6" style={{ border: `1px solid ${active.color}10`, backgroundColor: '#111' }}>
                  <active.component />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;