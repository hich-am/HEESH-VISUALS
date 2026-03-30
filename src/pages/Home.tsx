import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center relative">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium tracking-wide uppercase"
        >
          Heesh Visuals Studio
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-black leading-tight md:leading-[1.1] mb-8 text-white">
          Creative Strategies.<br />
          <span className="text-gray-400">Powerful Visuals.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          Empowering startups and businesses with smart, striking design solutions that make you stand out in the market.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            to="/portfolio"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-darker font-bold uppercase tracking-wider overflow-hidden rounded-sm transition-transform hover:scale-105 duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Our Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider rounded-sm hover:bg-white/5 transition-colors duration-300"
          >
            Start a Project
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
