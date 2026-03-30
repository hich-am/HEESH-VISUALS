import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center relative pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="label-text mb-8 inline-block"
        >
          Heesh Visuals Studio
        </motion.div>

        <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-sans font-medium leading-[1.1] mb-8 text-textMain tracking-tight">
          Creative Strategies.<br />
          <span className="text-textMuted font-light">Powerful Visuals.</span>
        </h1>

        <p className="text-xl md:text-2xl text-textMuted max-w-2xl mb-16 leading-relaxed font-light">
          Empowering startups and businesses with smart, striking design solutions that make you stand out in the market.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
            className="cursor-pointer group flex items-center justify-center px-10 py-4 bg-textMain text-white font-medium rounded-full hover:bg-black transition-colors duration-300"
          >
            Explore Work
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
            className="cursor-pointer group flex items-center justify-center px-10 py-4 bg-transparent border border-borderLight text-textMain font-medium rounded-full hover:border-textMuted hover:bg-white transition-colors duration-300"
          >
            Get in touch
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-24 md:absolute bottom-12 left-0"
      >
        <Link to="about" spy={true} smooth={true} offset={-50} duration={800} className="cursor-pointer flex flex-col items-center gap-3 text-textMuted hover:text-accent transition-colors w-fit">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
          <ArrowDown size={18} strokeWidth={1.5} className="animate-bounce" />
        </Link>
      </motion.div>
    </div>
  );
}
