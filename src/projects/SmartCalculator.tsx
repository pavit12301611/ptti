import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SmartCalculator: React.FC = () => {
  const [d, setD] = useState('0'); const [p, setP] = useState<number|null>(null); const [o, setO] = useState<string|null>(null); const [w, setW] = useState(false);
  const dig = (v:string) => { if(w){setD(v);setW(false);} else setD(d==='0'?v:d+v); };
  const cl = () => {setD('0');setP(null);setO(null);setW(false);};
  const doOp = (n:string) => { const c=parseFloat(d); if(p!==null&&o&&!w){let r=0;if(o==='+')r=p+c;else if(o==='-')r=p-c;else if(o==='×')r=p*c;else if(o==='÷')r=c?p/c:0;setD(String(parseFloat(r.toFixed(10))));setP(r);}else setP(c);setW(true);setO(n);};
  const calc = () => {if(p===null||!o)return;doOp('=');setO(null);};
  const h = (b:string) => {if(b==='C')cl();else if(b==='±')setD(String(-parseFloat(d)));else if(b==='%')setD(String(parseFloat(d)/100));else if(b==='=')calc();else if(b==='.')if(w){setD('0.');setW(false);}else{if(!d.includes('.'))setD(d+'.');}else if(['+','-','×','÷'].includes(b))doOp(b);else dig(b);};
  const btns=[['C','±','%','÷'],['7','8','9','×'],['4','5','6','-'],['1','2','3','+'],['0','.','=']];
  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="mb-4 p-4 rounded-2xl bg-[#0a0a0a] border border-[#00d4ff]/12"><div className="text-right text-[#00d4ff]/35 text-xs font-mono h-5 mb-1">{p!==null?`${p} ${o||''}`:''}</div><div className="text-right text-white font-mono font-bold overflow-hidden" style={{fontSize:d.length>12?'1.2rem':d.length>8?'1.8rem':'2.5rem'}}>{d}</div></div>
      <div className="grid grid-cols-4 gap-2">{btns.flat().map((b,i)=><motion.button key={b+i} onClick={()=>h(b)} whileTap={{scale:0.9}} className={`h-14 rounded-xl font-mono font-bold text-lg cursor-pointer ${b==='0'?'col-span-2':''} ${b==='C'||b==='±'||b==='%'?'bg-[#333] text-white':(['+','-','×','÷'].includes(b))?(b===o&&w?'bg-white text-[#ff6b35]':'bg-[#ff6b35] text-white'):b==='='?'bg-[#00d4ff] text-[#0a0a0a]':'bg-[#1a1a1a] text-white border border-white/5'}`}>{b}</motion.button>)}</div>
    </div>
  );
};
export default SmartCalculator;
