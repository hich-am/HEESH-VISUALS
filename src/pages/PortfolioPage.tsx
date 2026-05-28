import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mockProjects = [
  { title: "32", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/32.png", link: "" },
  { title: "43rd News Channel", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/43rd News Channel.png", link: "" },
  { title: "Ahmed Fal Motel", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Ahmed Fal Motel.png", link: "" },
  { title: "Animal Vet", category: "BRAND IDENTITY", type: "logos", image: "/PORTFOLIO/logos/Animal vet.png", link: "" },
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
  { title: "Heesh Visual", category: "BRAND WEBSITE", type: "websites", image: "/PORTFOLIO/web/heeshvisuals.png", link: "https://heeshvisuals.vercel.app" },
  { title: "Bidjed Belmeliani", category: "MODEL PORTFOLIO", type: "websites", image: "/PORTFOLIO/web/bidjed.png", link: "https://bidjedblm.vercel.app" },
  { title: "Rania Omari", category: "MODEL PORTFOLIO", type: "websites", image: "/PORTFOLIO/web/rania.png", link: "https://raniaomari.vercel.app" },
  { title: "Mohcene Medjadji", category: "PHOTOGRAPHER PORTFOLIO", type: "websites", image: "/PORTFOLIO/web/mohcene.png", link: "https://mohcenemed.vercel.app" },
  { title: "Rania Zargoun", category: "MODEL PORTFOLIO", type: "websites", image: "/PORTFOLIO/web/raniaz.png", link: "https://raniazargoun.vercel.app" },
  { title: "Steve Temimi", category: "MODEL PORTFOLIO", type: "websites", image: "/PORTFOLIO/web/steve.png", link: "" },
  { title: "Silem Kelvin", category: "MODEL PORTFOLIO", type: "websites", image: "/PORTFOLIO/web/silem.png", link: "" },
  { title: "Brand Identity Framework", category: "STRATEGY & DESIGN", type: "branding", image: "/PORTFOLIO/logos/32.png", link: "" },
  { title: "Corporate Refresh", category: "BRAND EVOLUTION", type: "branding", image: "/PORTFOLIO/logos/Elastic.png", link: "" },
  { title: "Instagram Grid Template", category: "CONTENT CREATION", type: "social media", image: "/PORTFOLIO/logos/Dog.png", link: "" },
  { title: "Campaign Assets 2024", category: "DIGITAL MARKETING", type: "social media", image: "/PORTFOLIO/logos/Cat.png", link: "" },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<'logos' | 'websites' | 'branding' | 'social media'>('logos');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    mockProjects.forEach((project) => {
      if (project.image) {
        const img = new Image();
        img.src = project.image;
      }
    });
  }, []);

  const displayProjects = mockProjects.filter((p) => p.type === activeTab);

  return (
    <div className="min-h-screen bg-bg pt-24">
      <div className="section-padding mb-12">
        <button
          onClick={() => navigate('/')}
          className="text-xs font-sans tracking-[0.2em] uppercase text-textMuted hover:text-textMain transition-colors mb-8 block"
          data-cursor-hover
        >
          ← BACK
        </button>

        <h1 className="text-display-md font-sans font-bold uppercase text-textMain tracking-tight mb-8">
          ARCHIVE
        </h1>

        <div className="flex items-center gap-6 md:gap-8 border-b border-borderLight pb-4 overflow-x-auto whitespace-nowrap">
          {(['logos', 'websites', 'branding', 'social media'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-sans tracking-[0.25em] uppercase transition-colors duration-300 relative pb-2 ${
                activeTab === tab ? 'text-textMain' : 'text-textMuted hover:text-textMain'
              }`}
              data-cursor-hover
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-textMain"
                  layoutId="tab-indicator"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-borderLight">
        {displayProjects.map((project, i) => (
          <motion.div
            key={`${activeTab}-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
            className={`group relative aspect-square border-b border-borderLight ${
              (i + 1) % 3 !== 0 ? 'lg:border-r' : ''
            } ${(i + 1) % 2 !== 0 ? 'md:border-r lg:border-r-0' : ''} ${
              (i + 1) % 3 !== 0 ? '' : ''
            } overflow-hidden`}
            data-cursor-hover
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="text-lg font-sans font-bold uppercase text-textMain tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-textMuted mt-1">
                {project.category}
              </p>
              {activeTab === 'websites' && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-xs font-sans tracking-[0.2em] uppercase text-textMain border-b border-textMain pb-0.5 w-fit hover:text-textMuted hover:border-textMuted transition-colors"
                >
                  VISIT →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="py-24 text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-textDim">
          AN ALWAYS EXPANDING LIBRARY
        </p>
      </div>
    </div>
  );
}
