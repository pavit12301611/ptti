import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const imgs = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif','https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif','https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif','https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif','https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif','https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif','https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif','https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif','https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif','https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif','https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];
const r1 = imgs.slice(0, 11), r2 = imgs.slice(11);

const MarqueeSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 300]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.5]);

  return (
    <motion.section ref={ref} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative" style={{ opacity: sectionOpacity }}>
      <FadeIn delay={0} y={30}><div className="text-center mb-12 px-6"><span className="text-[#00d4ff] font-mono text-xs uppercase tracking-widest">{'<'} Inspiration Gallery {'/>'}</span></div></FadeIn>
      <div className="flex gap-3 mb-3">
        <motion.div className="flex gap-3" style={{ x: x1, willChange: 'transform' }}>
          {[...r1,...r1,...r1].map((s, i) => (
            <div key={i} className="relative group flex-shrink-0"><img src={s} alt="" loading="lazy" className="w-[420px] h-[270px] rounded-2xl object-cover transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" /></div>
          ))}
        </motion.div>
      </div>
      <div className="flex gap-3">
        <motion.div className="flex gap-3" style={{ x: x2, willChange: 'transform' }}>
          {[...r2,...r2,...r2].map((s, i) => (
            <div key={i} className="relative group flex-shrink-0"><img src={s} alt="" loading="lazy" className="w-[420px] h-[270px] rounded-2xl object-cover transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" /></div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MarqueeSection;