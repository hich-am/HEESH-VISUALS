import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  useEffect(() => {
    // Dynamically inject the Elfsight script for Instagram feed
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up to prevent duplicate scripts if navigating back
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24 max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-display font-black mb-8">Selected Work</h1>
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
          A showcase of our latest creative strategies and powerful visuals straight from our Instagram feed.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full bg-white/5 border border-white/10 rounded-sm relative overflow-hidden min-h-[500px]"
      >
        {/* Elfsight Instagram Widget */}
        <div className="elfsight-app-602a4def-c686-4662-aa87-edf09693e1d0 w-full h-full" data-elfsight-app-lazy></div>
      </motion.div>
    </div>
  );
}
