import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <div className="pb-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">Design Bold.<br /><span className="text-gray-400">Grow Smart.</span></h1>
        <div className="h-px w-full bg-white/10 my-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4">Who we are</h2>
            <p className="text-2xl font-light leading-relaxed text-gray-300">
              Heesh Visuals was founded to empower brands through smart, striking design that helps small businesses grow with tailored visual solutions.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4">Our Vision</h2>
            <p className="text-xl font-light leading-relaxed text-gray-400 mb-6">
              We believe every business deserves a visual identity that tells their unique story. 
            </p>
            <p className="text-xl font-light leading-relaxed text-gray-400">
              Our mission is to help startups and entrepreneurs create memorable brands that connect with their audience and drive growth.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-display font-bold mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-125 duration-500" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Originality</h3>
            <p className="text-gray-400 text-lg relative z-10">Every design is crafted uniquely for your brand, ensuring you stand apart from the competition.</p>
          </div>

          <div className="p-10 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-125 duration-500" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Simplicity</h3>
            <p className="text-gray-400 text-lg relative z-10">Clean, focused design that communicates clearly and creates lasting impressions.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
