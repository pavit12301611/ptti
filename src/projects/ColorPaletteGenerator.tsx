import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Copy, Check, Lock, Unlock } from 'lucide-react';
const g=()=>'#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
const ct=(h:string)=>{const r=parseInt(h.slice(1,3),16),gv=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return(0.299*r+0.587*gv+0.114*b)/255>0.5?'#000':'#fff';};
const ColorPaletteGenerator: React.FC = () => {
  const [cs, setCs] = useState(Array.from({length:5},()=>({hex:g(),locked:false})));
  const [cp, setCp] = useState<number|null>(null);
  const regen = useCallback(()=>setCs(p=>p.map(c=>c.locked?c:{...c,hex:g()})),[]);
  const copy = (h:string,i:number) => {navigator.clipboard.writeText(h).catch(()=>{});setCp(i);setTimeout(()=>setCp(null),1500);};
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex rounded-2xl overflow-hidden h-64 mb-4 border border-white/10">{cs.map((c,i)=>(<motion.div key={i} className="flex-1 flex flex-col items-center justify-end pb-4 relative cursor-pointer group" style={{backgroundColor:c.hex}} onClick={()=>copy(c.hex,i)}>
        <button onClick={e=>{e.stopPropagation();setCs(p=>p.map((cc,j)=>j===i?{...cc,locked:!cc.locked}:cc));}} className="absolute top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" style={{color:ct(c.hex)}}>{c.locked?<Lock className="w-4 h-4"/>:<Unlock className="w-4 h-4"/>}</button>
        <span className="font-mono text-xs font-bold uppercase px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" style={{color:ct(c.hex),background:'rgba(0,0,0,0.2)'}}>{cp===i?<span className="flex items-center gap-1"><Check className="w-3 h-3"/>Copied!</span>:c.hex}</span>
        {c.locked&&<Lock className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3" style={{color:ct(c.hex)}}/>}
      </motion.div>))}</div>
      <motion.button onClick={regen} whileHover={{scale:1.02}} whileTap={{scale:0.98}} className="w-full py-3 rounded-xl bg-[#1a1a1a] text-white font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 cursor-pointer"><RefreshCw className="w-4 h-4"/>Generate</motion.button>
    </div>
  );
};
export default ColorPaletteGenerator;