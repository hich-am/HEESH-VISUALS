import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';

const mockProjects = [
  { title: "Project Alpha", category: "BRAND IDENTITY" },
  { title: "Project Beta", category: "UI/UX DESIGN" },
  { title: "Project Gamma", category: "GRAPHIC DESIGN" },
  { title: "Project Delta", category: "BRAND IDENTITY" },
  { title: "Project Epsilon", category: "PACKAGING" },
  { title: "Project Zeta", category: "WEB DESIGN" },
  { title: "Project Eta", category: "BRAND IDENTITY" },
  { title: "Project Theta", category: "PHOTOGRAPHY" },
  { title: "Project Iota", category: "REBRAND" },
];

export default function PortfolioPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="w-full">
      {/* Page Header (Ultra Thin) */}
      <div className="px-6 md:px-10 py-3 md:py-4 border-b border-borderLight bg-white">
        <h1 className="text-xl md:text-2xl font-sans font-medium tracking-tight text-textMain">Full Archive</h1>
      </div>

      {/* 3-Column Full-Width Modular Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full border-b border-borderLight overflow-hidden">
        {mockProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="flex flex-col aspect-[3/4] border-b md:border-b-0 border-borderLight"
          >
            {/* Image Section (Vertical separator stays here) */}
            <div className={`flex-1 relative bg-[#E8E8E8] overflow-hidden group/tile border-b border-borderLight ${(i + 1) % 3 !== 0 ? 'md:border-r' : ''}`}>
              {/* Placeholder for project image */}
              <div className="w-full h-full bg-gradient-to-br from-[#F5F5F5] to-[#DCDCDC] transition-transform duration-700 group-hover/tile:scale-105" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover/tile:bg-black/5 transition-all duration-500" />
              
              {/* Floating Arrow */}
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white opacity-0 translate-y-4 group-hover/tile:opacity-100 group-hover/tile:translate-y-0 transition-all duration-500 flex items-center justify-center shadow-xl">
                <ArrowUpRight size={18} className="text-textMain" />
              </div>
            </div>

            {/* Caption Section (Fixed thin bar, no horizontal separation between neighbors) */}
            <div className="py-2 md:py-3 px-6 text-center bg-white flex flex-col justify-center">
              <h3 className="text-sm md:text-[15px] text-[#1a3336] font-medium leading-tight uppercase tracking-tight">
                {project.title}
              </h3>
              <p className="text-[8px] font-bold tracking-[0.25em] text-[#6b8a8d] uppercase leading-none mt-1">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
        {/* Fill the grid if items aren't a multiple of 3 */}
        {mockProjects.length % 3 !== 0 && Array.from({ length: 3 - (mockProjects.length % 3) }).map((_, i) => (
          <div key={`empty-${i}`} className="hidden md:flex flex-col aspect-[3/4] bg-white border-b md:border-b-0 border-borderLight uppercase font-bold tracking-widest text-[8px] text-[#D1D1D1] text-center">
            <div className={`flex-1 bg-[#F9F9F9] ${ (mockProjects.length + i + 1) % 3 !== 0 ? 'md:border-r' : '' } border-b border-borderLight`} />
            <div className="py-2 md:py-3 px-6" />
          </div>
        ))}
      </div>
      
      {/* Bottom Padding */}
      <div className="py-24 text-center">
        <p className="text-sm text-textMuted font-light">More work coming soon.</p>
      </div>
    </div>
  );
}
