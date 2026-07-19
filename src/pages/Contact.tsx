import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import RevealText from '../components/RevealText';
import MagneticElement from '../components/MagneticElement';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-bg py-32 md:py-48">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="label-text block">CONTACT</span>
        </motion.div>

        <div className="h-px w-full bg-borderLight mb-16 md:mb-24" />

        <div className="max-w-4xl">
          <RevealText
            as="h2"
            className="text-display-md font-sans font-bold uppercase text-textMain mb-16 md:mb-24"
            delay={0.1}
          >
            LET'S WORK TOGETHER
          </RevealText>

          <div className="space-y-8">
            <MagneticElement strength={0.1} className="inline-block">
              <motion.a
                href="mailto:heeshdesign@gmail.com"
                className="block text-2xl md:text-4xl lg:text-5xl font-sans font-medium text-textMuted hover:text-textMain transition-colors duration-500 tracking-tight group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                HEESHDESIGN@GMAIL.COM
                <span className="block h-px bg-textDim group-hover:bg-textMain transition-colors duration-500 mt-2" />
              </motion.a>
            </MagneticElement>

            <motion.a
              href="tel:+213676372031"
              className="block text-lg md:text-xl font-sans font-light text-textDim hover:text-textMuted transition-colors duration-500 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              +213 676 372 031
            </motion.a>
          </div>

          <div className="h-px w-full bg-borderLight mt-16 md:mt-24 mb-12" />

          <motion.div
            className="flex flex-wrap items-center gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { label: 'WhatsApp', href: 'https://api.whatsapp.com/send/?phone=213676372031&text&type=phone_number&app_absent=0' },
              { label: 'Instagram', href: 'https://instagram.com/heesh_visuals' },
              { label: 'Facebook', href: 'https://www.facebook.com/izan.massi' },
              { label: 'Behance', href: 'https://behance.net/hichammanseur1' },
            ].map((link, i) => (
              <span key={link.label} className="flex items-center gap-8">
                {i > 0 && <span className="text-textDim text-xs">—</span>}
                <a href={link.href} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-sans tracking-[0.2em] uppercase text-textMuted hover:text-textMain transition-colors duration-300"
                >{link.label}</a>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
