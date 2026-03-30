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
    <div className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-24 max-w-3xl"
      >
        <span className="label-text mb-6 block">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-sans font-medium mb-8 leading-tight tracking-tight">Selected Work</h2>
        <p className="text-xl text-textMuted font-light leading-relaxed">
          A showcase of our latest creative strategies and powerful visuals straight from our Instagram feed.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-full relative min-h-[700px] mt-8 overflow-visible"
      >
        {/* Elfsight Instagram Widget */}
        <div className="elfsight-app-602a4def-c686-4662-aa87-edf09693e1d0 w-full h-full" data-elfsight-app-lazy></div>
      </motion.div>
    </div>
  );
}
