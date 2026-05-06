import React, { useState, useEffect } from 'react';

const GlitchText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const [d, setD] = useState(text);
  useEffect(() => {
    const iv = setInterval(() => {
      const ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
      let it = 0;
      const gi = setInterval(() => {
        setD(text.split('').map((c, i) => i < it ? text[i] : c === ' ' ? ' ' : ch[Math.floor(Math.random() * ch.length)]).join(''));
        it++; if (it > text.length) { clearInterval(gi); setD(text); }
      }, 25);
    }, 6000);
    return () => clearInterval(iv);
  }, [text]);
  return <span className={className}>{d}</span>;
};

export default GlitchText;