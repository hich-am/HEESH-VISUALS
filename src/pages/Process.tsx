import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { 
    id: "01", 
    title: "Discovery", 
    description: "We dive deep into understanding your brand, target audience, and project goals." 
  },
  { 
    id: "02", 
    title: "Design", 
    description: "Our team crafts tailored visual concepts and strategies that align with your vision." 
  },
  { 
    id: "03", 
    title: "Feedback", 
    description: "We collaborate and refine our work based on your input to ensure absolute perfection." 
  },
  { 
    id: "04", 
    title: "Delivery", 
    description: "You receive all final assets in every format you need, ready to make an impact." 
  }
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24 max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">Our Process</h1>
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
          A streamlined, collaborative methodology designed to transform your vision into reality.
        </p>
      </motion.div>

      <div ref={ref} className="relative max-w-4xl mx-auto py-10">
        {/* Connecting Line hidden on mobile */}
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block -translate-x-1/2" />

        <div className="space-y-16 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`w-full md:w-[45%] ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'} order-2 md:order-none bg-white/5 md:bg-transparent p-6 md:p-0 rounded-sm border border-white/5 md:border-none hover:bg-white/10 md:hover:bg-transparent transition-colors`}>
                <h3 className="text-3xl font-bold font-display tracking-tight text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
              </div>
              
              <div className="relative flex items-center justify-center order-1 md:order-none z-10 w-full md:w-[10%] shrink-0">
                <div className="w-20 h-20 rounded-full bg-[#050505] border-2 border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] mx-auto">
                  <span className="text-2xl font-display font-black text-white">{step.id}</span>
                </div>
              </div>
              
              <div className="hidden md:block w-full md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
