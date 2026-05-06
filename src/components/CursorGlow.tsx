import React, { useEffect, useState } from 'react';

const CursorGlow: React.FC = () => {
  const [p, setP] = useState({ x: 0, y: 0 });
  useEffect(() => { const h = (e: MouseEvent) => setP({ x: e.clientX, y: e.clientY }); window.addEventListener('mousemove', h); return () => window.removeEventListener('mousemove', h); }, []);
  return <div className="fixed pointer-events-none z-[9999] mix-blend-screen hidden md:block" style={{ left: p.x-200, top: p.y-200, width: 400, height: 400, background: 'radial-gradient(circle,rgba(0,212,255,0.05) 0%,rgba(123,47,247,0.02) 40%,transparent 70%)', transition: 'left 0.15s ease-out,top 0.15s ease-out' }} />;
};

export default CursorGlow;