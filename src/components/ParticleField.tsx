import React, { useEffect, useRef } from 'react';

const ParticleField: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = canvas.current; if (!c) return;
    const ctx = c.getContext('2d'); if (!ctx) return;
    let id: number, mouse = { x: 0, y: 0 };
    const colors = ['#00d4ff','#7b2ff7','#00ff87','#ff006e','#ff6b35'];
    type P = { x:number;y:number;vx:number;vy:number;s:number;o:number;c:string };
    let ps: P[] = [];
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    const create = () => { ps = []; const n = Math.min(50, Math.floor(c.width*c.height/25000));
      for (let i=0;i<n;i++) ps.push({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-0.5)*0.3,vy:(Math.random()-0.5)*0.3,s:Math.random()*1.5+0.5,o:Math.random()*0.3+0.1,c:colors[Math.floor(Math.random()*colors.length)]}); };
    const anim = () => {
      ctx.clearRect(0,0,c.width,c.height);
      ps.forEach((p,i) => {
        p.x+=p.vx;p.y+=p.vy;
        if(p.x<0)p.x=c.width;if(p.x>c.width)p.x=0;if(p.y<0)p.y=c.height;if(p.y>c.height)p.y=0;
        const dx=mouse.x-p.x,dy=mouse.y-p.y,dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<120){const f=(120-dist)/120;p.vx-=(dx/dist)*f*0.01;p.vy-=(dy/dist)*f*0.01;}
        p.vx*=0.99;p.vy*=0.99;
        ctx.beginPath();ctx.arc(p.x,p.y,p.s,0,Math.PI*2);ctx.fillStyle=p.c;ctx.globalAlpha=p.o;ctx.fill();
        ps.forEach((p2,j)=>{if(j<=i)return;const d=Math.sqrt((p.x-p2.x)**2+(p.y-p2.y)**2);
          if(d<90){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p2.x,p2.y);ctx.strokeStyle=p.c;ctx.globalAlpha=(1-d/90)*0.08;ctx.lineWidth=0.5;ctx.stroke();}});
      });
      ctx.globalAlpha=1;id=requestAnimationFrame(anim);
    };
    const onM=(e:MouseEvent)=>{mouse.x=e.clientX;mouse.y=e.clientY;};
    resize();create();anim();
    window.addEventListener('resize',()=>{resize();create();});
    window.addEventListener('mousemove',onM);
    return()=>{cancelAnimationFrame(id);window.removeEventListener('mousemove',onM);};
  },[]);
  return <canvas ref={canvas} className="fixed inset-0 pointer-events-none z-0" style={{opacity:0.4}} />;
};

export default ParticleField;