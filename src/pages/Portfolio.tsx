import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Checkerboard rhythm:  landscape → portrait  /  portrait → landscape
const projects: { title: string; category: string; aspect: "landscape" | "portrait"; image?: string }[] = [
  { title: "Project Name", category: "Brand Identity & Packaging", aspect: "landscape" }, // top-left
  { title: "Project Name", category: "Digital Publication", aspect: "portrait" }, // top-right
  { title: "Project Name", category: "Visual Identity", aspect: "portrait" }, // bottom-left
  { title: "May Corner Restaurant", category: "Restaurant Menu Design", aspect: "landscape", image: "/Menu.png" }, // bottom-right
];

// landscape ≈ 16:10   portrait ≈ 4:5
const aspectClass = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
};

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" as const }}
      className="group cursor-pointer w-full"
    >
      {/* Image placeholder */}
      <div
        className={`w-full ${aspectClass[project.aspect]} rounded-none overflow-hidden bg-[#E2E2E2] relative`}
      >
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#E8E8E8] to-[#D4D4D4]" />
        )}
      </div>

      {/* Caption */}
      <div className="mt-4 flex items-start justify-between">
        <div>
          {/* Serif title */}
          <p
            className="text-[19px] font-medium leading-snug text-accent group-hover:text-accent transition-colors duration-300"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            {project.title}
          </p>
          {/* Category */}
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] font-medium text-textMuted">
            {project.category}
          </p>
        </div>

        {/* Arrow — aligned with title baseline */}
        <ArrowUpRight
          size={16}
          strokeWidth={1.5}
          className="text-accent mt-1 shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
        />
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const navigate = useNavigate();
  const leftCards = [projects[0], projects[2]]; // landscape, portrait
  const rightCards = [projects[1], projects[3]]; // portrait, landscape

  return (
    <div className="section-padding overflow-x-hidden">
      {/* Header - Constrained to standard width */}
      <div className="max-w-[1200px] mx-auto">
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
      </div>

      {/* Grid — Wider layout with larger gaps and wide horizontal padding */}
      <div className="w-full px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32">
          {/* Left column */}
          <div className="flex flex-col gap-y-20 md:gap-y-32">
            {leftCards.map((p, i) => (
              <ProjectCard key={i} project={p} delay={i * 0.1} />
            ))}
          </div>

          {/* Right column offset down to create zig-zag rhythm */}
          <div className="flex flex-col gap-y-20 md:gap-y-32 sm:mt-20 md:mt-32">
            {rightCards.map((p, i) => (
              <ProjectCard key={i} project={p} delay={i * 0.1 + 0.15} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA - Constrained to standard width */}
      <div className="max-w-[1200px] mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center"
        >
          <button
            onClick={() => {
              navigate('/portfolio');
              window.scrollTo(0, 0);
            }}
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full border border-textMain text-textMain font-medium text-sm hover:bg-textMain hover:text-white transition-all duration-300"
          >
            See full portfolio
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
