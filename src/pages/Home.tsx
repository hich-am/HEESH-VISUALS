import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div className="h-[100dvh] w-full flex flex-col justify-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/HOMEVIDEO.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark overlay so white text remains readable against bright video segments */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl relative z-10 px-8 md:px-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="label-text !text-white mb-8 inline-block drop-shadow-sm"
        >
          Heesh Visuals Studio
        </motion.div>

        <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-sans font-medium leading-[1.1] mb-8 text-white tracking-tight drop-shadow-sm">
          Creative Strategies.<br />
          <span className="text-gray-200 font-light">Powerful Visuals.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-16 leading-relaxed font-light drop-shadow-sm">
          Empowering startups and businesses with smart, striking design solutions that make you stand out in the market.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
            className="cursor-pointer group flex items-center justify-center px-10 py-4 bg-white text-textMain font-medium rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Explore Work
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
            className="cursor-pointer group flex items-center justify-center px-10 py-4 bg-transparent border border-white/50 text-white font-medium rounded-full hover:border-white hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
          >
            Get in touch
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-12 left-8 md:left-16 z-10"
      >
        <Link to="about" spy={true} smooth={true} offset={-50} duration={800} className="cursor-pointer flex flex-col items-center gap-3 text-white/80 hover:text-white transition-colors w-fit">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold drop-shadow-sm">Scroll</span>
          <ArrowDown size={18} strokeWidth={1.5} className="animate-bounce" />
        </Link>
      </motion.div>
    </div>
  );
}
