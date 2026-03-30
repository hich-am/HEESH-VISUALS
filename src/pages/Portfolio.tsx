import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 4 cards in asymmetric layout matching reference:
// Col left:  [landscape-wide] then [tall-portrait]
// Col right: [tall-portrait]  then [landscape-wide]
const projects = [
  { title: "Project Name", category: "Brand Identity",     colPos: "left",  aspect: "aspect-[16/10]" },  // top-left: wide landscape
  { title: "Project Name", category: "Visual Identity",    colPos: "right", aspect: "aspect-[3/5]"   },  // top-right: tall portrait
  { title: "Project Name", category: "Logo Design",        colPos: "left",  aspect: "aspect-[3/4]"   },  // bottom-left: portrait
  { title: "Project Name", category: "Packaging Design",   colPos: "right", aspect: "aspect-[16/10]" },  // bottom-right: wide landscape
];

const leftCards  = projects.filter(p => p.colPos === "left");
const rightCards = projects.filter(p => p.colPos === "right");

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="group cursor-pointer"
    >
      {/* Thumbnail */}
      <div className={`relative w-full ${project.aspect} rounded-2xl overflow-hidden bg-[#E0E0E0] shadow-sm group-hover:shadow-lg transition-all duration-500`}>
        {/* Gray placeholder gradient — replace with <img> when ready */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EBEBEB] to-[#D0D0D0]" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

        {/* Arrow badge */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md">
          <ArrowUpRight size={16} className="text-textMain" strokeWidth={2} />
        </div>
      </div>

      {/* Caption */}
      <div className="mt-3 px-0.5 flex items-end justify-between">
        <div>
          <p className="text-sm font-medium text-textMain leading-snug">{project.title}</p>
          <p className="text-[10px] uppercase tracking-[0.18em] text-textMuted/60 font-medium mt-0.5">{project.category}</p>
        </div>
        <ArrowUpRight
          size={14}
          className="text-textMuted/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mb-0.5"
          strokeWidth={1.5}
        />
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <div className="section-padding">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-20 max-w-3xl"
      >
        <span className="label-text mb-6 block">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-sans font-medium mb-6 leading-tight tracking-tight">Selected Work</h2>
        <p className="text-xl text-textMuted font-light leading-relaxed">
          A curated selection of brand identities, visual systems, and creative work — each one a story told through design.
        </p>
      </motion.div>

      {/* 2-column asymmetric grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {leftCards.map((p, i) => (
            <ProjectCard key={i} project={p} index={i * 2} />
          ))}
        </div>
        {/* Right column — offset down to create the stagger */}
        <div className="flex flex-col gap-6 sm:mt-16">
          {rightCards.map((p, i) => (
            <ProjectCard key={i} project={p} index={i * 2 + 1} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex justify-center"
      >
        <button
          onClick={() => navigate('/portfolio')}
          className="group inline-flex items-center gap-3 px-10 py-4 rounded-full border border-textMain text-textMain font-medium text-sm hover:bg-textMain hover:text-white transition-all duration-300"
        >
          See full portfolio
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            strokeWidth={1.5}
          />
        </button>
      </motion.div>
    </div>
  );
}
