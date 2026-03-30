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
    <div className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-24 max-w-3xl"
      >
        <span className="label-text mb-6 block">Methodology</span>
        <h2 className="text-4xl md:text-5xl font-sans font-medium mb-8 leading-tight tracking-tight">Our Process</h2>
        <p className="text-xl text-textMuted font-light leading-relaxed">
          A streamlined, collaborative methodology designed to transform your vision into reality.
        </p>
      </motion.div>

      <div ref={ref} className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col relative"
            >
              <div className="mb-6 pb-6 border-b border-borderLight flex justify-between items-end">
                <h3 className="text-2xl font-medium tracking-tight text-textMain">{step.title}</h3>
                <span className="text-sm font-bold tracking-widest text-accent font-sans">{step.id}</span>
              </div>
              <p className="text-textMuted text-lg leading-relaxed font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
