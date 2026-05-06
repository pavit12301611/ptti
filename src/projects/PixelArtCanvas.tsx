import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Eraser, Download, Trash2 } from 'lucide-react';
const S=16;const C=['#000000','#ffffff','#ff006e','#00d4ff','#7b2ff7','#00ff87','#ff6b35','#ffbe0b','#fb5607','#3a86ff','#8338ec','#06d6a0','#ef476f','#ffd166','#118ab2','#073b4c'];
const PixelArtCanvas: React.FC = () => {
  const [g, setG] = useState<string[]>(Array(S*S).fill('transparent'));const [c, setC] = useState('#00d4ff');const [e, setE] = useState(false);const [d, setD] = useState(false);
  const paint=useCallback((i:number)=>setG(p=>{const n=[...p];n[i]=e?'transparent':c;return n;}),[c,e]);
  const clear=()=>setG(Array(S*S).fill('transparent'));
  const dl=()=>{const cv=document.createElement('canvas');cv.width=cv.height=S*20;const x=cv.getContext('2d');if(!x)return;g.forEach((cl,i)=>{if(cl!=='transparent'){x.fillStyle=cl;x.fillRect((i%S)*20,Math.floor(i/S)*20,20,20);}});const a=document.createElement('a');a.download='pixel-art.png';a.href=cv.toDataURL();a.click();};
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="grid mx-auto mb-4 rounded-xl overflow-hidden border border-white/10" style={{gridTemplateColumns:`repeat(${S},1fr)`,width:'min(100%,320px)',aspectRatio:'1'}} onMouseDown={()=>setD(true)} onMouseUp={()=>setD(false)} onMouseLeave={()=>setD(false)}>
        {g.map((cl,i)=><div key={i} className="border border-white/[0.03] cursor-crosshair" style={{backgroundColor:cl==='transparent'?'#0a0a0a':cl}} onMouseDown={()=>paint(i)} onMouseEnter={()=>d&&paint(i)}/>)}
      </div>
      <div className="flex flex-wrap gap-1.5 justify-center mb-4">{C.map(cl=><motion.button key={cl} className={`w-7 h-7 rounded-lg cursor-pointer ${c===cl&&!e?'ring-2 ring-white ring-offset-1 ring-offset-[#0c0c0c] scale-110':''}`} style={{backgroundColor:cl}} onClick={()=>{setC(cl);setE(false);}} whileTap={{scale:0.85}}/>)}</div>
      <div className="flex justify-center gap-2">
        <motion.button onClick={()=>setE(false)} whileTap={{scale:0.95}} className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono cursor-pointer ${!e?'bg-[#00d4ff]/15 text-[#00d4ff] border border-[#00d4ff]/25':'bg-white/5 text-white/30 border border-white/5'}`}><Paintbrush className="w-3.5 h-3.5"/>Draw</motion.button>
        <motion.button onClick={()=>setE(true)} whileTap={{scale:0.95}} className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono cursor-pointer ${e?'bg-[#ff006e]/15 text-[#ff006e] border border-[#ff006e]/25':'bg-white/5 text-white/30 border border-white/5'}`}><Eraser className="w-3.5 h-3.5"/>Erase</motion.button>
        <motion.button onClick={clear} whileTap={{scale:0.95}} className="px-4 py-2 rounded-lg text-xs font-mono bg-white/5 text-white/30 border border-white/5 cursor-pointer hover:text-[#ff006e]"><Trash2 className="w-3.5 h-3.5"/></motion.button>
        <motion.button onClick={dl} whileTap={{scale:0.95}} className="px-4 py-2 rounded-lg text-xs font-mono bg-white/5 text-white/30 border border-white/5 cursor-pointer hover:text-[#00ff87]"><Download className="w-3.5 h-3.5"/></motion.button>
      </div>
    </div>
  );
};
export default PixelArtCanvas;