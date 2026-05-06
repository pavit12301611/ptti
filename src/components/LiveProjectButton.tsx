import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const LiveProjectButton: React.FC<{ label?: string; onClick?: () => void }> = ({ label = 'Live Demo', onClick }) => (
  <motion.button
    onClick={onClick}
    className="rounded-full border-2 border-[#00d4ff] px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-medium uppercase tracking-widest text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all duration-300 cursor-pointer flex items-center gap-2"
    whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,212,255,0.3)' }}
    whileTap={{ scale: 0.95 }}
  >
    <ExternalLink className="w-4 h-4" /> {label}
  </motion.button>
);

export default LiveProjectButton;