import React, { useRef, useState, useCallback } from 'react';

interface Props { children: React.ReactNode; padding?: number; strength?: number; className?: string; }

const Magnet: React.FC<Props> = ({ children, padding = 150, strength = 3, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({ transform: 'translate3d(0,0,0)', transition: 'transform 0.6s ease-in-out', willChange: 'transform' });

  const move = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    const d = Math.sqrt(dx * dx + dy * dy), max = Math.max(r.width, r.height) / 2 + padding;
    if (d < max) setStyle({ transform: `translate3d(${dx / strength}px,${dy / strength}px,0)`, transition: 'transform 0.3s ease-out', willChange: 'transform' });
    else setStyle({ transform: 'translate3d(0,0,0)', transition: 'transform 0.6s ease-in-out', willChange: 'transform' });
  }, [padding, strength]);

  const leave = useCallback(() => setStyle({ transform: 'translate3d(0,0,0)', transition: 'transform 0.6s ease-in-out', willChange: 'transform' }), []);

  return <div ref={ref} className={className} style={style} onMouseMove={move} onMouseLeave={leave}>{children}</div>;
};

export default Magnet;