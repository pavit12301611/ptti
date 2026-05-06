import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Copy, Check } from 'lucide-react';
const PasswordGenerator: React.FC = () => {
  const [pw, setPw] = useState('');const [len, setLen] = useState(16);const [opts, setOpts] = useState({uppercase:true,lowercase:true,numbers:true,symbols:true});const [cp, setCp] = useState(false);
  const gen=useCallback(()=>{let c='';if(opts.uppercase)c+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';if(opts.lowercase)c+='abcdefghijklmnopqrstuvwxyz';if(opts.numbers)c+='0123456789';if(opts.symbols)c+='!@#$%^&*()_+-=[]{}|;:,.<>?';if(!c)c='abcdefghijklmnopqrstuvwxyz';let r='';for(let i=0;i<len;i++)r+=c.charAt(Math.floor(Math.random()*c.length));setPw(r);setCp(false);},[len,opts]);
  const copy=()=>{if(!pw)return;navigator.clipboard.writeText(pw).catch(()=>{});setCp(true);setTimeout(()=>setCp(false),2000);};
  const str=(()=>{if(!pw)return{l:'Generate',c:'#333',p:0};let s=0;if(pw.length>=12)s+=25;if(pw.length>=16)s+=15;if(/[A-Z]/.test(pw))s+=15;if(/[a-z]/.test(pw))s+=10;if(/[0-9]/.test(pw))s+=15;if(/[^A-Za-z0-9]/.test(pw))s+=20;if(s<30)return{l:'Weak',c:'#ff006e',p:s};if(s<60)return{l:'Medium',c:'#ff6b35',p:s};if(s<80)return{l:'Strong',c:'#00d4ff',p:s};return{l:'Unbreakable 🔒',c:'#00ff87',p:100};})();
  useEffect(()=>{gen();},[gen]);
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative mb-4 p-4 rounded-2xl bg-[#0a0a0a] border border-white/10"><div className="flex items-center justify-between gap-2"><code className="text-[#00d4ff] font-mono text-sm flex-1 break-all">{pw||'...'}</code><motion.button onClick={copy} whileTap={{scale:0.9}} className="p-2 rounded-lg bg-white/5 cursor-pointer">{cp?<Check className="w-4 h-4 text-[#00ff87]"/>:<Copy className="w-4 h-4 text-white/40"/>}</motion.button></div>
        <div className="mt-3 flex items-center gap-2"><div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden"><motion.div className="h-full rounded-full" style={{backgroundColor:str.c}} animate={{width:`${str.p}%`}}/></div><span className="text-xs font-mono" style={{color:str.c}}>{str.l}</span></div></div>
      <div className="mb-4"><div className="flex justify-between mb-2"><span className="text-white/40 text-xs font-mono">Length</span><span className="text-[#00d4ff] text-xs font-mono font-bold">{len}</span></div><input type="range" min={6} max={32} value={len} onChange={e=>setLen(Number(e.target.value))} className="w-full h-1.5 rounded-full appearance-none bg-white/10 cursor-pointer accent-[#00d4ff]"/></div>
      <div className="grid grid-cols-2 gap-2 mb-4">{Object.entries(opts).map(([k,v])=><button key={k} onClick={()=>setOpts(p=>({...p,[k]:!v}))} className={`py-2 px-3 rounded-xl text-xs font-mono uppercase cursor-pointer ${v?'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/25':'bg-white/5 text-white/25 border border-white/5'}`}>{k}</button>)}</div>
      <motion.button onClick={gen} whileHover={{scale:1.02}} whileTap={{scale:0.98}} className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] text-white font-bold text-sm uppercase flex items-center justify-center gap-2 cursor-pointer"><RefreshCw className="w-4 h-4"/>Generate</motion.button>
    </div>
  );
};
export default PasswordGenerator;