import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const mockProjects = [
  { title: "32", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/32.png", link: "" },
  { title: "43rd News Channel", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/43rd News Channel.png", link: "" },
  { title: "Ahmed Fal Motel", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Ahmed Fal Motel.png", link: "" },
  { title: "Animal vet", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Animal vet.png", link: "" },
  { title: "Birdy Quotes", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Birdy Quotes.png", link: "" },
  { title: "Buddy Baker", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Buddy Baker.png", link: "" },
  { title: "Busy Bee", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Busy Bee.png", link: "" },
  { title: "Cat", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Cat.png", link: "" },
  { title: "Chameleon", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Chameleon.png", link: "" },
  { title: "Dog", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Dog.png", link: "" },
  { title: "Elastic", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Elastic.png", link: "" },
  { title: "Elk", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Elk.png", link: "" },
  { title: "Equine", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Equine.png", link: "" },
  { title: "Frenchy's Utensils", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Frenchy's Utensils.png", link: "" },
  { title: "Hunt", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Hunt.png", link: "" },
  { title: "Kiddy Space", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Kiddy Space.png", link: "" },
  { title: "Melissa Fleuriste", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Melissa Fleuriste.png", link: "" },
  { title: "Mr. Drink", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Mr. Drink.png", link: "" },
  { title: "Open Lock", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Open Lock.png", link: "" },
  { title: "Panda", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Panda.png", link: "" },
  { title: "Samir Coffee Shop", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Samir Coffee Shop.png", link: "" },
  { title: "Shawarma Master", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Shawarma Master.png", link: "" },
  { title: "String House", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/String House.png", link: "" },
  { title: "Sushiro", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Sushiro.png", link: "" },
  { title: "Tennis", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Tennis.png", link: "" },
  { title: "Women's Music School", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Women's Music School.png", link: "" },
  { title: "Wood Shop", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Wood Shop.png", link: "" },
  { title: "Heesh Visual", category: "BRAND Website", type: "websites", image: "/PORTFOLIO/web/heeshvisuals.png", link: "https://heeshvisuals.vercel.app" },
  { title: "Bidjed Belmeliani", category: "Model Portfolio Website", type: "websites", image: "/PORTFOLIO/web/bidjed.png", link: "https://bidjedblm.vercel.app" },
  { title: "Rania Omari", category: "Model Portfolio Website", type: "websites", image: "/PORTFOLIO/web/rania.png", link: "https://raniaomari.vercel.app" },
  { title: "Mohcene Medjadji", category: "Photographer/Model Portfolio Website", type: "websites", image: "/PORTFOLIO/web/mohcene.png", link: "https://mohcenemed.vercel.app" },
  { title: "Rania Zargoun", category: "Model Portfolio Website", type: "websites", image: "/PORTFOLIO/web/raniaz.png", link: "https://raniazargoun.vercel.app" },
  { title: "Steve Temimi", category: "Model Portfolio Website", type: "websites", image: "/PORTFOLIO/web/steve.png", link: "" },
  { title: "Silem Kelvin", category: "Model Portfolio Website", type: "websites", image: "/PORTFOLIO/web/silem.png", link: "" },

];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<'logos' | 'websites'>('logos');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const displayProjects = mockProjects.filter((p) => p.type === activeTab);

  return (
    <div className="w-full">
      {/* Page Header (Ultra Thin) */}
      <div className="px-6 md:px-10 py-3 md:py-4 border-b border-borderLight bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-sans font-medium tracking-tight text-textMain">Full Archive</h1>
        
        {/* Category Filter */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setActiveTab('logos')}
            className={`text-xs md:text-[13px] uppercase tracking-widest font-bold transition-colors duration-300 ${activeTab === 'logos' ? 'text-accent' : 'text-textMuted hover:text-textMain'}`}
          >
            Logos
          </button>
          <button 
            onClick={() => setActiveTab('websites')}
            className={`text-xs md:text-[13px] uppercase tracking-widest font-bold transition-colors duration-300 ${activeTab === 'websites' ? 'text-accent' : 'text-textMuted hover:text-textMain'}`}
          >
            Websites
          </button>
        </div>
      </div>

      {/* 3-Column Full-Width Modular Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full border-b border-borderLight overflow-hidden">
        {displayProjects.length > 0 ? (
          displayProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: (i % 6) * 0.1 }}
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
              </div>

              {/* Caption Section (Fixed thin bar, no horizontal separation between neighbors) */}
              <div className="py-2 md:py-2.5 px-6 text-center bg-white flex flex-col justify-center items-center">
                <h3 className="text-[11px] md:text-[13px] text-accent font-light leading-none uppercase tracking-[0.1em]">
                  {project.title}
                </h3>
                <p className="text-[7px] font-bold tracking-[0.3em] text-textMuted uppercase leading-none mt-1 mb-2">
                  {project.category}
                </p>
                
                {activeTab === 'websites' && (
                  <a 
                    href={project.link || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-1 px-4 py-1.5 border border-accent/20 text-accent text-[8px] uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-white hover:border-accent transition-all duration-500 rounded-full"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-1 md:col-span-3 py-32 flex justify-center items-center bg-[#FAFAFA]">
            <p className="text-sm text-textMuted font-light uppercase tracking-widest">Coming Soon</p>
          </div>
        )}
        
        {/* Fill the grid if items aren't a multiple of 3 */}
        {displayProjects.length > 0 && displayProjects.length % 3 !== 0 && Array.from({ length: 3 - (displayProjects.length % 3) }).map((_, i) => (
          <div key={`empty-${i}`} className="hidden md:flex flex-col aspect-square bg-white border-b md:border-b-0 border-borderLight uppercase font-bold tracking-widest text-[8px] text-[#D1D1D1] text-center">
            <div className={`flex-1 bg-white ${ (displayProjects.length + i + 1) % 3 !== 0 ? 'md:border-r' : '' } border-b border-borderLight`} />
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
