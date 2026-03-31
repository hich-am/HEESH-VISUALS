import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Years of Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <div className="section-padding">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-16 max-w-3xl"
      >
        <span className="label-text mb-6 block">About Us</span>
        <h2 className="text-4xl md:text-5xl font-sans font-medium mb-6 leading-tight tracking-tight">
          Design Bold.<br />
          <span className="text-textMuted font-light">Grow Smart.</span>
        </h2>
        <p className="text-xl text-textMuted font-light leading-relaxed">
          Helping startups and brands stand out in a crowded market — through design that's intentional, strategic, and made to last.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="grid grid-cols-3 gap-6 mb-16 max-w-2xl"
      >
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-3xl md:text-4xl font-sans font-bold text-accent leading-none mb-1">{stat.value}</span>
            <span className="text-xs uppercase tracking-[0.15em] text-textMuted font-medium mt-1">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Who We Are + Vision Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="card-style flex flex-col">
          <div className="w-1 h-8 bg-accent mb-6 rounded-full" />
          <h3 className="label-text mb-4">Who we are</h3>
          <p className="text-lg font-light leading-relaxed text-textMain mb-6">
            Heesh Visuals was founded to empower brands through smart, striking design that helps small businesses grow with tailored visual solutions.
          </p>
          <div className="flex items-center gap-2 mt-auto text-textMuted">
            <MapPin size={14} strokeWidth={1.5} className="text-accent shrink-0" />
            <span className="text-sm font-light">Based in Algeria — working worldwide</span>
          </div>
        </div>

        <div className="card-style flex flex-col">
          <div className="w-1 h-8 bg-accent mb-6 rounded-full" />
          <h3 className="label-text mb-4">Our Vision</h3>
          <div className="space-y-4 text-lg font-light leading-relaxed text-textMuted">
            <p>We believe every business deserves a visual identity that tells their unique story.</p>
            <p>Our mission is to help startups and entrepreneurs create memorable brands that connect with their audience and drive real growth.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
