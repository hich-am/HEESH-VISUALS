import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<'counting' | 'revealing' | 'done'>('counting');

  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      if (current > 100) current = 100;

      const eased = Math.round(easeOutQuart(current / 100) * 100);
      setCount(eased);

      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => setPhase('revealing'), 300);
        setTimeout(() => {
          setPhase('done');
          onComplete();
        }, 1200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  function easeOutQuart(x: number): number {
    return 1 - Math.pow(1 - x, 4);
  }

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              className="text-[12vw] md:text-[8vw] font-sans font-bold tracking-[-0.04em] text-textMain leading-none"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              HEESH
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="h-px w-12 bg-textMuted" />
              <span className="text-textMuted font-sans text-sm tracking-[0.3em] font-light tabular-nums">
                {String(count).padStart(3, '0')}
              </span>
              <div className="h-px w-12 bg-textMuted" />
            </motion.div>

            <motion.div
              className="mt-8 h-px bg-textMuted origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              style={{ width: '200px' }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
