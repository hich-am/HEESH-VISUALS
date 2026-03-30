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
      <div className="w-full">
        {/* We group them by 3-item rows for the caption-row effect */}
        {Array.from({ length: Math.ceil(mockProjects.length / 3) }).map((_, rowIndex) => {
          const rowItems = mockProjects.slice(rowIndex * 3, rowIndex * 3 + 3);
          
          return (
            <div key={rowIndex} className="w-full group/row">
              {/* Tile Row — No horizontal gaps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-borderLight">
                {rowItems.map((_project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: (rowIndex * 3 + i) * 0.1 }}
                    className={`relative w-full aspect-[3/4] bg-[#E8E8E8] overflow-hidden group/tile ${i < 2 ? 'md:border-r border-borderLight' : ''}`}
                  >
                    {/* Placeholder for project image */}
                    <div className="w-full h-full bg-gradient-to-br from-[#F5F5F5] to-[#DCDCDC] transition-transform duration-700 group-hover/tile:scale-105" />
                    
                    {/* Hover Overlay — Optional premium touch */}
                    <div className="absolute inset-0 bg-black/0 group-hover/tile:bg-black/5 transition-all duration-500" />
                    
                    {/* Floating Arrow (Bottom Right) */}
                    <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white opacity-0 translate-y-4 group-hover/tile:opacity-100 group-hover/tile:translate-y-0 transition-all duration-500 flex items-center justify-center shadow-xl">
                      <ArrowUpRight size={18} className="text-textMain" />
                    </div>
                  </motion.div>
                ))}
                {/* Pad out row if it has less than 3 items */}
                {rowItems.length < 3 && Array.from({ length: 3 - rowItems.length }).map((_, i) => (
                  <div key={`empty-${i}`} className="hidden md:block bg-[#F9F9F9] border-r border-borderLight last:border-r-0" />
                ))}
              </div>

              {/* Caption Row — Ultra-thin modular rhythm */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white">
                {rowItems.map((project, i) => (
                  <div key={i} className={`py-1.5 md:py-2.5 px-6 text-center border-b border-borderLight ${i < 2 ? 'md:border-r border-borderLight' : ''}`}>
                    <h3 
                      className="text-sm md:text-[15px] text-[#1a3336] font-medium"
                      style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-[8px] font-bold tracking-[0.25em] text-[#6b8a8d] uppercase leading-none mt-0.5">
                      {project.category}
                    </p>
                  </div>
                ))}
                {/* Pad out empty row if needed */}
                {rowItems.length < 3 && Array.from({ length: 3 - rowItems.length }).map((_, i) => (
                  <div key={`empty-caption-${i}`} className="hidden md:block bg-white border-b border-borderLight border-r border-borderLight last:border-r-0" />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Bottom Padding */}
      <div className="py-24 text-center">
        <p className="text-sm text-textMuted font-light">More work coming soon.</p>
      </div>
    </div>
  );
}
