import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RevealText from '../components/RevealText';

const projects = [
  {
    title: 'ANTLER',
    category: 'Brand Identity & Packaging',
    image: '/Clothes.png',
    year: '2024',
  },
  {
    title: 'BUSY BEE',
    category: 'Modeling & Fashion',
    image: '/bee clothes.png',
    year: '2024',
  },
  {
    title: 'SUSHIRO',
    category: 'Brand & Packaging Design',
    image: '/sushi.png',
    year: '2023',
  },
  {
    title: 'MAY CORNER',
    category: 'Restaurant Menu Design',
    image: '/Menu.png',
    year: '2023',
  },
];

function ProjectItem({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="relative border-b border-borderLight group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="section-padding py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className={`${isEven ? 'md:col-span-5 md:col-start-1' : 'md:col-span-5 md:col-start-8 md:row-start-1'} relative z-10`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-textDim block mb-4">
              {String(index + 1).padStart(2, '0')} / {project.year}
            </span>
          </motion.div>

          <RevealText
            as="h3"
            className="text-display-lg font-sans font-bold uppercase text-textMain mb-4"
            delay={0.2}
          >
            {project.title}
          </RevealText>

          <motion.p
            className="text-sm font-sans tracking-[0.2em] uppercase text-textMuted"
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.category}
          </motion.p>
        </div>

        <div className={`${isEven ? 'md:col-span-6 md:col-start-7' : 'md:col-span-6 md:col-start-1 md:row-start-1'} relative overflow-hidden`}>
          <motion.div
            className="aspect-[4/3] relative overflow-hidden bg-surface"
            initial={{ opacity: 0, x: isEven ? 100 : -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' });

  return (
    <section className="relative bg-bg py-20 md:py-32">
      <div ref={headerRef} className="section-padding mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="label-text block mb-6">SELECTED WORK</span>
        </motion.div>

        <RevealText
          as="h2"
          className="text-display-md font-sans font-bold uppercase text-textMain"
        >
          PROJECTS
        </RevealText>
      </div>

      <div className="border-t border-borderLight">
        {projects.map((project, i) => (
          <ProjectItem key={i} project={project} index={i} />
        ))}
      </div>

      <div className="section-padding mt-16 md:mt-24 flex justify-center">
        <motion.button
          onClick={() => {
            navigate('/portfolio');
            window.scrollTo(0, 0);
          }}
          className="group relative text-sm font-sans tracking-[0.3em] uppercase text-textMain transition-colors duration-500 py-4 px-8 border border-textDim hover:border-white animate-pulse-glow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          VIEW FULL ARCHIVE
          <span className="absolute bottom-0 left-0 w-0 h-px bg-textMain group-hover:w-full transition-all duration-500" />
        </motion.button>
      </div>
    </section>
  );
}
