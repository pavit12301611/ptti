import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const AnimatedText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.3'] });

  const words = text.split(' ');
  const totalWords = words.length;

  return (
    <p ref={ref} className={className} style={{ wordSpacing: '0.05em' }}>
      {words.map((word, i) => (
        <Word key={i} word={word} index={i} total={totalWords} progress={scrollYProgress} />
      ))}
    </p>
  );
};

const Word: React.FC<{ word: string; index: number; total: number; progress: MotionValue<number> }> = ({ word, index, total, progress }) => {
  const start = index / total;
  const end = (index + 0.5) / total;
  const opacity = useTransform(progress, [start, end], [0.1, 1]);

  return (
    <>
      <motion.span style={{ opacity, display: 'inline-block' }}>
        {word}
      </motion.span>
      {index < total - 1 && ' '}
    </>
  );
};

export default AnimatedText;