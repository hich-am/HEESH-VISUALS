import { motion } from 'framer-motion';
import { Search, Lightbulb, Paintbrush, PackageCheck } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Discovery",
    tag: "Understanding You",
    description: "We dive deep into your brand, goals, and target audience. No guesswork — just clarity.",
    icon: Search,
  },
  {
    id: "02",
    title: "Strategy",
    tag: "Planning the Path",
    description: "We define the creative direction, messaging, and brief that keeps everything aligned.",
    icon: Lightbulb,
  },
  {
    id: "03",
    title: "Design",
    tag: "Bringing it to Life",
    description: "Tailored visual concepts built around your brand — every decision intentional.",
    icon: Paintbrush,
  },
  {
    id: "04",
    title: "Delivery",
    tag: "Ready to Launch",
    description: "All final assets in every format you need — organised and ready to make an impact.",
    icon: PackageCheck,
  },
];

export default function Process() {
  return (
    <div className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-20 max-w-3xl"
      >
        <span className="label-text mb-6 block">Methodology</span>
        <h2 className="text-4xl md:text-5xl font-sans font-medium mb-6 leading-tight tracking-tight">Our Process</h2>
        <p className="text-xl text-textMuted font-light leading-relaxed">
          A streamlined, collaborative journey — from first conversation to final delivery.
        </p>
      </motion.div>

      {/* Horizontal Timeline */}
      <div className="relative overflow-x-auto pb-4">
        {/* Connector line */}
        <div className="hidden md:block absolute top-[28px] left-[56px] right-[56px] h-px bg-gradient-to-r from-accent/60 via-accent/30 to-accent/10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-start group"
              >
                {/* Icon bubble */}
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-accent/20 group-hover:border-accent group-hover:bg-accent/5 flex items-center justify-center transition-all duration-300 shadow-sm mb-6 z-10 relative">
                  <Icon size={22} className="text-accent" strokeWidth={1.5} />
                </div>

                {/* Step meta */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">{step.id}</span>
                  <span className="w-3 h-px bg-borderLight inline-block"></span>
                  <span className="text-[10px] tracking-wider uppercase text-textMuted/60">{step.tag}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-sans font-medium mb-3 tracking-tight text-textMain group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-textMuted text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
