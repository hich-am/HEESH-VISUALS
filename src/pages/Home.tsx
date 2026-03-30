import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center relative pt-24 pb-12 overflow-hidden rounded-3xl">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/HOMEVIDEO.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl relative z-10 px-6 md:px-10"
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
            className="cursor-pointer group flex items-center justify-center px-10 py-4 bg-textMain text-white font-medium rounded-full hover:bg-black transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Work
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
            className="cursor-pointer group flex items-center justify-center px-10 py-4 bg-white/50 backdrop-blur-md border border-borderLight text-textMain font-medium rounded-full hover:border-textMuted hover:bg-white transition-colors duration-300 shadow-md"
          >
            Get in touch
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-24 md:absolute bottom-12 left-10 relative z-10"
      >
        <Link to="about" spy={true} smooth={true} offset={-50} duration={800} className="cursor-pointer flex flex-col items-center gap-3 text-textMuted hover:text-accent transition-colors w-fit">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
          <ArrowDown size={18} strokeWidth={1.5} className="animate-bounce" />
        </Link>
      </motion.div>
    </div>
  );
}
