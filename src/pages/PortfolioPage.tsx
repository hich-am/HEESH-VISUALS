import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';

const mockProjects = [
  { title: "32", category: "BRAND IDENTITY", image: "/PORTFOLIO/32.png" },
  { title: "43rd News Channel", category: "BRAND IDENTITY", image: "/PORTFOLIO/43rd News Channel.png" },
  { title: "Ahmed Fal Motel", category: "BRAND IDENTITY", image: "/PORTFOLIO/Ahmed Fal Motel.png" },
  { title: "Animal vet", category: "BRAND IDENTITY", image: "/PORTFOLIO/Animal vet.png" },
  { title: "Birdy Quotes", category: "BRAND IDENTITY", image: "/PORTFOLIO/Birdy Quotes.png" },
  { title: "Buddy Baker", category: "BRAND IDENTITY", image: "/PORTFOLIO/Buddy Baker.png" },
  { title: "Busy Bee", category: "BRAND IDENTITY", image: "/PORTFOLIO/Busy Bee.png" },
  { title: "Cat", category: "BRAND IDENTITY", image: "/PORTFOLIO/Cat.png" },
  { title: "Chameleon", category: "BRAND IDENTITY", image: "/PORTFOLIO/Chameleon.png" },
  { title: "Dog", category: "BRAND IDENTITY", image: "/PORTFOLIO/Dog.png" },
  { title: "Elastic", category: "BRAND IDENTITY", image: "/PORTFOLIO/Elastic.png" },
  { title: "Elk", category: "BRAND IDENTITY", image: "/PORTFOLIO/Elk.png" },
  { title: "Equine", category: "BRAND IDENTITY", image: "/PORTFOLIO/Equine.png" },
  { title: "Frenchy's Utensils", category: "BRAND IDENTITY", image: "/PORTFOLIO/Frenchy's Utensils.png" },
  { title: "Hunt", category: "BRAND IDENTITY", image: "/PORTFOLIO/Hunt.png" },
  { title: "Kiddy Space", category: "BRAND IDENTITY", image: "/PORTFOLIO/Kiddy Space.png" },
  { title: "Melissa Fleuriste", category: "BRAND IDENTITY", image: "/PORTFOLIO/Melissa Fleuriste.png" },
  { title: "Mr. Drink", category: "BRAND IDENTITY", image: "/PORTFOLIO/Mr. Drink.png" },
  { title: "Open Lock", category: "BRAND IDENTITY", image: "/PORTFOLIO/Open Lock.png" },
  { title: "Panda", category: "BRAND IDENTITY", image: "/PORTFOLIO/Panda.png" },
  { title: "Samir Coffee Shop", category: "BRAND IDENTITY", image: "/PORTFOLIO/Samir Coffee Shop.png" },
  { title: "Shawarma Master", category: "BRAND IDENTITY", image: "/PORTFOLIO/Shawarma Master.png" },
  { title: "String House", category: "BRAND IDENTITY", image: "/PORTFOLIO/String House.png" },
  { title: "Sushiro", category: "BRAND IDENTITY", image: "/PORTFOLIO/Sushiro.png" },
  { title: "Tennis", category: "BRAND IDENTITY", image: "/PORTFOLIO/Tennis.png" },
  { title: "Women's Music School", category: "BRAND IDENTITY", image: "/PORTFOLIO/Women's Music School.png" },
  { title: "Wood Shop", category: "BRAND IDENTITY", image: "/PORTFOLIO/Wood Shop.png" },
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
            className="flex flex-col aspect-square border-b md:border-b-0 border-borderLight"
          >
            {/* Image Section (Vertical separator stays here) */}
            <div className={`flex-1 relative bg-white overflow-hidden group/tile border-b border-borderLight ${(i + 1) % 3 !== 0 ? 'md:border-r' : ''}`}>
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/tile:scale-105" 
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover/tile:bg-black/5 transition-all duration-500" />
              
              {/* Floating Arrow */}
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white opacity-0 translate-y-4 group-hover/tile:opacity-100 group-hover/tile:translate-y-0 transition-all duration-500 flex items-center justify-center shadow-xl">
                <ArrowUpRight size={18} className="text-textMain" />
              </div>
            </div>

            {/* Caption Section (Fixed thin bar, no horizontal separation between neighbors) */}
            <div className="py-2 md:py-2.5 px-6 text-center bg-white flex flex-col justify-center">
              <h3 className="text-[11px] md:text-[13px] text-accent font-light leading-none uppercase tracking-[0.1em]">
                {project.title}
              </h3>
              <p className="text-[7px] font-bold tracking-[0.3em] text-textMuted uppercase leading-none mt-1">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
        {/* Fill the grid if items aren't a multiple of 3 */}
        {mockProjects.length % 3 !== 0 && Array.from({ length: 3 - (mockProjects.length % 3) }).map((_, i) => (
          <div key={`empty-${i}`} className="hidden md:flex flex-col aspect-square bg-white border-b md:border-b-0 border-borderLight uppercase font-bold tracking-widest text-[8px] text-[#D1D1D1] text-center">
            <div className={`flex-1 bg-white ${ (mockProjects.length + i + 1) % 3 !== 0 ? 'md:border-r' : '' } border-b border-borderLight`} />
            <div className="py-2 md:py-3 px-6" />
          </div>
        ))}
      </div>
      
      {/* Bottom Padding */}
      <div className="py-24 text-center">
        <p className="text-sm text-textMuted font-light">An always Expanding Library.</p>
      </div>
    </div>
  );
}
