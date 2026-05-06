import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Maximize2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SmartCalculator from '../projects/SmartCalculator';
import ColorPaletteGenerator from '../projects/ColorPaletteGenerator';
import PrecisionStopwatch from '../projects/PrecisionStopwatch';
import PasswordGenerator from '../projects/PasswordGenerator';
import MarkdownPreviewer from '../projects/MarkdownPreviewer';
import PixelArtCanvas from '../projects/PixelArtCanvas';

interface Proj { name:string;emoji:string;desc:string;longDesc:string;color:string;tech:string[];component:React.FC; }
const projects:Proj[]=[
  {name:'Smart Calculator',emoji:'🧮',desc:'Sleek calculator with chained operations',longDesc:'Beautiful calculator with basic arithmetic, percentages, sign toggle, and chained operations. Clean React state management with buttery Framer Motion tap animations.',color:'#00d4ff',tech:['React','TypeScript','Framer Motion'],component:SmartCalculator},
  {name:'Color Palette',emoji:'🎨',desc:'Generate beautiful random palettes instantly',longDesc:'Generate stunning 5-color palettes with one click. Lock favorites, regenerate the rest. Click any color to copy hex to clipboard. Smooth transitions and satisfying UX throughout.',color:'#ff006e',tech:['React','Clipboard API','Animation'],component:ColorPaletteGenerator},
  {name:'Precision Stopwatch',emoji:'⏱️',desc:'Millisecond accuracy with circular progress',longDesc:'Professional stopwatch using performance.now() for sub-millisecond precision. Beautiful circular SVG progress, lap recording, and smooth state transitions.',color:'#7b2ff7',tech:['React','Performance API','SVG'],component:PrecisionStopwatch},
  {name:'Password Generator',emoji:'🔐',desc:'Secure passwords with strength analysis',longDesc:'Generate ultra-secure passwords with customizable length and character sets. Real-time strength analysis from "Weak" to "Unbreakable". One-click copy with visual confirmation.',color:'#00ff87',tech:['React','Crypto','TypeScript'],component:PasswordGenerator},
  {name:'Markdown Previewer',emoji:'📝',desc:'Real-time split-pane markdown rendering',longDesc:'Split-pane editor with live preview. Supports H1-H3, bold, italic, code, blockquotes, lists, horizontal rules. Syntax-highlighted output with custom styling.',color:'#ff6b35',tech:['React','Regex','Split View'],component:MarkdownPreviewer},
  {name:'Pixel Art Canvas',emoji:'🎮',desc:'16×16 pixel art editor with PNG export',longDesc:'Retro pixel art on 16×16 grid with 16 colors. Draw mode, eraser, canvas clear, and PNG export. Click-and-drag for smooth painting. Export your masterpiece instantly.',color:'#ffbe0b',tech:['React','Canvas API','State'],component:PixelArtCanvas},
];

const ProjectsSection: React.FC = () => {
  const [active, setActive] = useState<Proj|null>(null);
  const [hov, setHov] = useState<number|null>(null);
  return (
    <section id="projects" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="left" offset={80}>
          <span className="text-[#00d4ff] font-mono text-xs uppercase tracking-widest block mb-3">{'<'} Live & Interactive {'/>'}</span>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{fontSize:'clamp(3rem,12vw,140px)'}}>Projects</h2>
          <p className="text-[#D7E2EA]/25 font-mono text-sm max-w-2xl mt-4 mb-16">Every project is fully functional and runs right here. Click &quot;Live Demo&quot; to interact — no redirects needed. ⚡</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p,i)=>(
            <ScrollReveal key={i} direction="left" offset={30+i*10}>
              <motion.div className="relative rounded-3xl overflow-hidden cursor-pointer group"
                style={{border:`1px solid ${hov===i?p.color+'35':'rgba(215,226,234,0.06)'}`}}
                onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)} onClick={()=>setActive(p)}
                whileHover={{y:-10}} transition={{duration:0.3}}>
                <div className="relative p-6 glass-light">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3"><span className="text-4xl">{p.emoji}</span><span className="font-mono text-xs text-[#D7E2EA]/12 font-bold">0{i+1}</span></div>
                    <motion.div className="p-2 rounded-xl" style={{backgroundColor:hov===i?p.color+'12':'rgba(255,255,255,0.02)'}}><Maximize2 className="w-4 h-4" style={{color:p.color}}/></motion.div>
                  </div>
                  <h3 className="text-[#D7E2EA] font-bold text-xl mb-1">{p.name}</h3>
                  <p className="text-[#D7E2EA]/30 text-sm font-light mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">{p.tech.map(t=><span key={t} className="px-2 py-0.5 rounded-md text-xs font-mono" style={{color:p.color+'99',backgroundColor:p.color+'08'}}>{t}</span>)}</div>
                  <motion.button className="w-full py-3 rounded-xl font-medium text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                    style={{backgroundColor:hov===i?p.color:'rgba(255,255,255,0.02)',color:hov===i?'#0C0C0C':'#D7E2EA',border:`1px solid ${hov===i?p.color:'rgba(255,255,255,0.06)'}`}}
                    whileTap={{scale:0.95}}><ExternalLink className="w-4 h-4"/>Live Demo</motion.button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active&&(
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <motion.div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={()=>setActive(null)}/>
            <motion.div className="relative w-full max-w-2xl max-h-[90vh] rounded-3xl overflow-hidden" style={{border:`2px solid ${active.color}20`,backgroundColor:'#0C0C0C'}}
              initial={{scale:0.8,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} exit={{scale:0.8,opacity:0,y:50}} transition={{type:'spring',damping:25,stiffness:300}}>
              <div className="flex items-center justify-between p-4 sm:p-6 border-b" style={{borderColor:active.color+'12'}}>
                <div className="flex items-center gap-3"><span className="text-3xl">{active.emoji}</span><div><h3 className="text-white font-bold text-lg">{active.name}</h3><div className="flex gap-2 mt-1">{active.tech.map(t=><span key={t} className="text-xs font-mono px-2 py-0.5 rounded" style={{color:active.color,backgroundColor:active.color+'0d'}}>{t}</span>)}</div></div></div>
                <motion.button onClick={()=>setActive(null)} className="p-2 rounded-xl hover:bg-white/10 cursor-pointer" whileHover={{rotate:90}} whileTap={{scale:0.9}}><X className="w-5 h-5 text-white/40"/></motion.button>
              </div>
              <div className="px-4 sm:px-6 py-3 border-b" style={{borderColor:active.color+'06'}}><p className="text-[#D7E2EA]/35 text-sm font-light">{active.longDesc}</p></div>
              <div className="p-4 sm:p-6 overflow-y-auto" style={{maxHeight:'calc(90vh - 200px)'}}>
                <div className="flex items-center gap-2 mb-4"><div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor:active.color}}/><span className="text-xs font-mono uppercase tracking-widest" style={{color:active.color}}>Live & Interactive</span></div>
                <div className="rounded-2xl p-4 sm:p-6" style={{border:`1px solid ${active.color}0a`,backgroundColor:'#111'}}><active.component/></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;