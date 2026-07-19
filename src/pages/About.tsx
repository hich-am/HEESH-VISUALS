import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import RevealText from '../components/RevealText';

const capabilities = [
  'BRAND IDENTITY',
  'VISUAL SYSTEMS',
  'PACKAGING DESIGN',
  'DIGITAL DESIGN',
  'WEB DEVELOPMENT',
  'SOCIAL MEDIA',
  'EDITORIAL DESIGN',
  'ART DIRECTION',
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const capRef = useRef<HTMLDivElement>(null);
  const capInView = useInView(capRef, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative bg-bg py-24 md:py-40">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="label-text block">ABOUT</span>
        </motion.div>

        <div className="diagonal-divider mb-8 md:mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-7">
            <RevealText
              as="h2"
              className="text-display-sm font-sans font-medium text-textMain leading-tight glitch-text"
              delay={0.1}
              data-text="Design that doesn't follow trends — it sets them."
            >
              Design that doesn't follow trends — it sets them.
            </RevealText>
          </div>

          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-8">
            <motion.p
              className="text-sm font-body font-light leading-relaxed text-textMuted"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Heesh Visuals was built to empower brands through intentional, strategic design.
              Based in Algiers, working worldwide — helping businesses craft visual identities
              that resonate and endure.
            </motion.p>

            <motion.p
              className="text-sm font-body font-light leading-relaxed text-textMuted"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Every project is a collaboration. Every detail is deliberate.
              No templates, no shortcuts — only work that matters.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="mt-16 md:mt-24 flex flex-wrap gap-x-12 gap-y-2 text-textMuted"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <span className="text-2xl md:text-3xl font-sans font-bold text-textMain">50+</span>
          <span className="text-xs tracking-[0.2em] uppercase self-center">Projects</span>
          <span className="text-textDim self-center">—</span>
          <span className="text-2xl md:text-3xl font-sans font-bold text-textMain">3+</span>
          <span className="text-xs tracking-[0.2em] uppercase self-center">Years</span>
          <span className="text-textDim self-center">—</span>
          <span className="text-xs tracking-[0.2em] uppercase self-center">Worldwide</span>
        </motion.div>
      </div>

      <div className="diagonal-divider mt-16 md:mt-24 mb-16 md:mb-24" />

      <div ref={capRef} className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          animate={capInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="label-text block">CAPABILITIES</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap}
              className="border-t border-borderLight py-5 md:py-6 group"
              initial={{ opacity: 0, x: -20 }}
              animate={capInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="flex items-center gap-6">
                <span className="text-xs font-sans text-textDim tracking-[0.2em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg md:text-xl font-sans font-medium text-textMuted group-hover:text-textMain transition-colors duration-300 tracking-tight">
                  {cap}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
