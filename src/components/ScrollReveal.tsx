import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  offset?: number;
  parallaxStrength?: number;
}

const ScrollReveal: React.FC<Props> = ({
  children, className = '', direction = 'left', offset = 100, parallaxStrength = 0.5,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const xLeft = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-offset, 0, 0, offset * parallaxStrength]);
  const xRight = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [offset, 0, 0, -offset * parallaxStrength]);
  const yUp = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [offset, 0, 0, -offset * parallaxStrength]);
  const yDown = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-offset, 0, 0, offset * parallaxStrength]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);

  const getTransform = () => {
    switch (direction) {
      case 'left': return { x: xLeft, opacity, scale };
      case 'right': return { x: xRight, opacity, scale };
      case 'up': return { y: yUp, opacity, scale };
      case 'down': return { y: yDown, opacity, scale };
    }
  };

  return (
    <motion.div ref={ref} className={className} style={getTransform()}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;