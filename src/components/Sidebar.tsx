import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaInstagram, FaFacebook, FaBehance } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Portfolio', to: 'portfolio' },
  { name: 'Process', to: 'process' },
  { name: 'Contact', to: 'contact' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Header */}
      <div className="md:hidden fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-borderLight p-4 flex justify-between items-center transition-colors">
        <Link to="home" spy={true} smooth={true} offset={0} duration={800} className="flex items-center cursor-pointer">
          <img src="/logonobg.png" alt="Heesh Visuals Logo" className="h-10 w-auto object-contain" />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-textMain focus:outline-none">
          {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Sidebar Content */}
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 768) && (
          <motion.div 
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed top-0 left-0 h-screen z-40 w-64 md:w-[280px] flex flex-col justify-between py-12 px-10 border-r border-borderLight ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
            style={{ background: 'linear-gradient(160deg, #ffffff 60%, rgba(14,117,134,0.06) 100%)' }}
          >
            <div className="flex flex-col h-full">
              {/* Logo + Tagline */}
              <div className="hidden md:flex flex-col mb-10 items-center">
                <img src="/logonobg.png" alt="Heesh Visuals Logo" className="h-24 w-auto object-contain mb-3" />
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-accent/80">Creative Design Studio</span>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-accent/40"></div>
                <div className="w-1 h-5 bg-accent/30 rounded-full"></div>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col space-y-6 md:mt-0 mt-16 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    onClick={() => setIsOpen(false)}
                    activeClass="!text-accent font-medium"
                    className="cursor-pointer text-textMuted hover:text-textMain text-sm transition-colors duration-300 w-fit pb-1 border-b-2 border-transparent hover:border-accent/30"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Bottom section */}
              <div className="mt-auto pt-8 border-t border-borderLight/60 space-y-5">
                {/* Email */}
                <a
                  href="mailto:heeshdesign@gmail.com"
                  className="flex items-center gap-2 text-xs text-textMuted hover:text-accent transition-colors duration-300 group"
                >
                  <span className="w-3 h-px bg-textMuted group-hover:bg-accent transition-colors duration-300 inline-block"></span>
                  heeshdesign@gmail.com
                </a>

                {/* Social Icons */}
                <div className="flex items-center space-x-4 text-textMuted">
                  <a href="https://instagram.com/heesh_visuals" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300"><FaInstagram size={17} /></a>
                  <a href="https://www.facebook.com/izan.massi" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300"><FaFacebook size={17} /></a>
                  <a href="https://behance.net/hichammanseur1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300"><FaBehance size={17} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-textMain/20 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
