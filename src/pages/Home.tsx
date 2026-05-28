import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import RevealText from '../components/RevealText';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div ref={containerRef} className="relative h-[100dvh] w-full flex flex-col justify-center overflow-hidden bg-bg">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div style={{ opacity: videoOpacity }} className="w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale contrast-125"
          >
            <source src="/HOMEVIDEO.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-bg/70" />
      </div>

      <motion.div
        style={{ y: titleY }}
        className="relative z-10 section-padding"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <div className="mb-8">
            <span className="label-text">HEESH VISUALS — CREATIVE STUDIO</span>
          </div>

          <div className="max-w-[90vw]">
            <RevealText
              as="h1"
              className="text-display-xl font-sans font-bold uppercase text-textMain"
              delay={2.6}
            >
              GRAPHIC
            </RevealText>
            <RevealText
              as="h1"
              className="text-display-xl font-sans font-bold uppercase text-textMain"
              delay={2.75}
            >
              DESIGN &
            </RevealText>
            <RevealText
              as="h1"
              className="text-display-xl font-sans font-bold uppercase text-textMuted"
              delay={2.9}
            >
              VISUAL
            </RevealText>
            <RevealText
              as="h1"
              className="text-display-xl font-sans font-bold uppercase text-textMuted"
              delay={3.05}
            >
              SYSTEMS
            </RevealText>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-0 right-0 z-10 section-padding flex items-end justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <div className="flex items-center gap-4 text-textMuted">
          <motion.div
            className="w-px bg-textMuted origin-top"
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            transition={{ delay: 3.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <span className="text-xs font-sans tracking-[0.2em] uppercase">Scroll</span>
        </div>

        <div className="text-right">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-textMuted">
            ALGIERS, DZ
          </p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10 border-t border-borderLight">
        <motion.div
          className="flex whitespace-nowrap py-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          <div className="animate-marquee flex items-center">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="text-xs font-sans tracking-[0.3em] uppercase text-textDim mx-4">
                DESIGN&nbsp;&nbsp;•&nbsp;&nbsp;IDENTITY&nbsp;&nbsp;•&nbsp;&nbsp;DIGITAL&nbsp;&nbsp;•&nbsp;&nbsp;BRANDING&nbsp;&nbsp;•&nbsp;&nbsp;PACKAGING&nbsp;&nbsp;•&nbsp;&nbsp;VISUAL SYSTEMS&nbsp;&nbsp;•&nbsp;&nbsp;WEB&nbsp;&nbsp;•&nbsp;&nbsp;STRATEGY&nbsp;&nbsp;•&nbsp;&nbsp;
              </span>
            ))}
          </div>
          <div className="animate-marquee flex items-center" aria-hidden="true">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="text-xs font-sans tracking-[0.3em] uppercase text-textDim mx-4">
                DESIGN&nbsp;&nbsp;•&nbsp;&nbsp;IDENTITY&nbsp;&nbsp;•&nbsp;&nbsp;DIGITAL&nbsp;&nbsp;•&nbsp;&nbsp;BRANDING&nbsp;&nbsp;•&nbsp;&nbsp;PACKAGING&nbsp;&nbsp;•&nbsp;&nbsp;VISUAL SYSTEMS&nbsp;&nbsp;•&nbsp;&nbsp;WEB&nbsp;&nbsp;•&nbsp;&nbsp;STRATEGY&nbsp;&nbsp;•&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
