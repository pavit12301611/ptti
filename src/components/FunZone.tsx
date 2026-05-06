import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, Sparkles, MessageCircle, Dice6, Smile } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FunZone: React.FC = () => {
  const [ip, setIp] = useState({x:0,y:0});const [cc, setCc] = useState(0);const [vr, setVr] = useState('');const [ex, setEx] = useState('');const [ft, setFt] = useState('');
  const vibes=['🔥 On fire!','😴 Need coffee...','🧠 Big brain!','🎯 In the zone!','🌈 Vibing hard!','💀 RIP productivity','⚡ Unstoppable!','🦄 Legendary!'];
  const excuses=['"Works on my machine" 🤷','"Feature, not a bug" 🐛','"Deadline was unrealistic" ⏰','"Git did something weird" 😱','"I was refactoring" 🔨','"Docs were wrong" 📖'];
  const fortunes=['🎱 Merge conflict incoming...','🎱 Stack Overflow saves you','🎱 Compiles first try!','🎱 Off-by-one error ahead...','🎱 Wild semicolon appears!','🎱 PR approved instantly ✅'];

  return (
    <section className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="left" offset={60}>
          <span className="text-[#0C0C0C]/25 font-mono text-xs uppercase tracking-widest block mb-3"><Smile className="inline w-3 h-3 mr-1"/>Easter Eggs 🥚</span>
          <h2 className="font-black uppercase text-[#0C0C0C] leading-none tracking-tight mb-16" style={{fontSize:'clamp(3rem,12vw,120px)'}}>Fun Zone</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ScrollReveal direction="left" offset={40}><div className="p-6 sm:p-8 rounded-3xl border-2 border-[#0C0C0C]/8 bg-white relative overflow-hidden h-56 flex flex-col items-center justify-center"><p className="text-[#0C0C0C] font-bold text-lg mb-2"><MousePointer2 className="inline w-4 h-4 mr-2"/>The Impossible Button</p><p className="text-[#0C0C0C]/25 text-xs mb-4 font-mono">{cc>0?`Attempts: ${cc}`:'Can you click it?'}</p><motion.button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#7b2ff7] to-[#00d4ff] text-white font-bold text-sm cursor-pointer z-10" animate={{x:ip.x,y:ip.y}} onMouseEnter={()=>setIp({x:(Math.random()-0.5)*200,y:(Math.random()-0.5)*80})} onClick={()=>{setCc(c=>c+1);alert('HOW?! 🎉');}} transition={{type:'spring',stiffness:400,damping:15}} whileTap={{scale:0.9}}>Click Me!</motion.button></div></ScrollReveal>
          <ScrollReveal direction="left" offset={30}><div className="p-6 sm:p-8 rounded-3xl border-2 border-[#0C0C0C]/8 bg-white h-56 flex flex-col items-center justify-center"><p className="text-[#0C0C0C] font-bold text-lg mb-4"><Sparkles className="inline w-4 h-4 mr-2"/>Vibe Check</p><motion.button className="px-6 py-2 rounded-full bg-[#0C0C0C] text-white font-medium text-sm uppercase tracking-wider cursor-pointer mb-3" onClick={()=>setVr(vibes[Math.floor(Math.random()*vibes.length)])} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Check My Vibe</motion.button><AnimatePresence mode="wait">{vr&&<motion.p initial={{opacity:0,scale:0.5,y:10}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0}} key={vr} className="text-[#0C0C0C] font-medium">{vr}</motion.p>}</AnimatePresence></div></ScrollReveal>
          <ScrollReveal direction="left" offset={20}><div className="p-6 sm:p-8 rounded-3xl border-2 border-[#0C0C0C]/8 bg-white h-56 flex flex-col items-center justify-center"><p className="text-[#0C0C0C] font-bold text-lg mb-4"><MessageCircle className="inline w-4 h-4 mr-2"/>Excuse Generator</p><motion.button className="px-6 py-2 rounded-full bg-[#0C0C0C] text-white font-medium text-sm uppercase tracking-wider cursor-pointer mb-3" onClick={()=>setEx(excuses[Math.floor(Math.random()*excuses.length)])} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Generate Excuse</motion.button><AnimatePresence mode="wait">{ex&&<motion.p initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} exit={{opacity:0}} key={ex} className="text-[#0C0C0C] font-medium text-sm text-center">{ex}</motion.p>}</AnimatePresence></div></ScrollReveal>
          <ScrollReveal direction="left" offset={10}><div className="p-6 sm:p-8 rounded-3xl border-2 border-[#0C0C0C]/8 bg-white h-56 flex flex-col items-center justify-center"><p className="text-[#0C0C0C] font-bold text-lg mb-4"><Dice6 className="inline w-4 h-4 mr-2"/>Code Fortune</p><motion.button className="px-6 py-2 rounded-full bg-[#0C0C0C] text-white font-medium text-sm uppercase tracking-wider cursor-pointer mb-3" onClick={()=>setFt(fortunes[Math.floor(Math.random()*fortunes.length)])} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Tell My Fortune</motion.button><AnimatePresence mode="wait">{ft&&<motion.p initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} exit={{opacity:0}} key={ft} className="text-[#0C0C0C] font-medium text-sm text-center">{ft}</motion.p>}</AnimatePresence></div></ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FunZone;