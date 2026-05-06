import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Flag } from 'lucide-react';

const PrecisionStopwatch: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const accumulatedRef = useRef<number>(0);

  const start = useCallback(() => {
    if (isRunning) return;
    setIsRunning(true);
    startTimeRef.current = performance.now();
    intervalRef.current = window.setInterval(() => {
      setTime(accumulatedRef.current + (performance.now() - startTimeRef.current));
    }, 10);
  }, [isRunning]);

  const pause = useCallback(() => {
    if (!isRunning) return;
    setIsRunning(false);
    accumulatedRef.current += performance.now() - startTimeRef.current;
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, [isRunning]);

  const reset = useCallback(() => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    accumulatedRef.current = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const addLap = useCallback(() => {
    if (isRunning) {
      setLaps((prev) => [time, ...prev]);
    }
  }, [isRunning, time]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return {
      min: String(minutes).padStart(2, '0'),
      sec: String(seconds).padStart(2, '0'),
      cs: String(centiseconds).padStart(2, '0'),
    };
  };

  const t = formatTime(time);
  const progress = (time % 60000) / 60000;

  return (
    <div className="w-full max-w-xs mx-auto text-center">
      {/* Circular display */}
      <div className="relative w-48 h-48 mx-auto mb-6">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="url(#stopwatchGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 90}`}
            strokeDashoffset={2 * Math.PI * 90 * (1 - progress)}
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
          <defs>
            <linearGradient id="stopwatchGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#7b2ff7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="font-mono text-white">
            <span className="text-3xl font-bold">{t.min}:{t.sec}</span>
            <span className="text-lg text-[#00d4ff]">.{t.cs}</span>
          </div>
          <span className="text-white/30 text-xs font-mono mt-1">
            {isRunning ? 'RUNNING' : time > 0 ? 'PAUSED' : 'READY'}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3 mb-4">
        <motion.button
          onClick={reset}
          className="w-12 h-12 rounded-full bg-[#1a1a1a] text-white/60 flex items-center justify-center border border-white/10 cursor-pointer"
          whileTap={{ scale: 0.9 }}
        >
          <RotateCcw className="w-5 h-5" />
        </motion.button>
        <motion.button
          onClick={isRunning ? pause : start}
          className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer ${
            isRunning ? 'bg-[#ff006e]' : 'bg-[#00d4ff]'
          }`}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          {isRunning ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-[#0a0a0a] ml-0.5" />}
        </motion.button>
        <motion.button
          onClick={addLap}
          className="w-12 h-12 rounded-full bg-[#1a1a1a] text-white/60 flex items-center justify-center border border-white/10 cursor-pointer"
          whileTap={{ scale: 0.9 }}
        >
          <Flag className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Laps */}
      {laps.length > 0 && (
        <div className="max-h-32 overflow-y-auto">
          {laps.map((lap, i) => {
            const l = formatTime(lap);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-between px-4 py-1.5 text-xs font-mono border-b border-white/5"
              >
                <span className="text-white/40">Lap {laps.length - i}</span>
                <span className="text-white">{l.min}:{l.sec}.{l.cs}</span>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PrecisionStopwatch;