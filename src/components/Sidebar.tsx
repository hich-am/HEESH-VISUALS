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
          <img src="/logo.png" alt="Heesh Visuals Logo" className="h-8 w-auto object-contain" />
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
            className={`fixed top-0 left-0 h-screen bg-card border-r border-borderLight z-40 w-64 md:w-[280px] flex flex-col justify-between py-12 px-10 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
          >
            <div>
              <div className="hidden md:flex mb-20 items-center justify-start">
                <img src="/logo.png" alt="Heesh Visuals Logo" className="h-16 w-auto object-contain" />
              </div>
              
              <nav className="flex flex-col space-y-6 md:mt-0 mt-16">
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
                    className="cursor-pointer text-textMuted hover:text-textMain text-sm transition-colors duration-300 w-fit pb-1 border-b-2 border-transparent"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-5 text-textMuted mt-10">
              <a href="https://instagram.com/heesh_visuals" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300"><FaInstagram size={18} /></a>
              <a href="https://www.facebook.com/izan.massi" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300"><FaFacebook size={18} /></a>
              <a href="https://behance.net/hichammanseur1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300"><FaBehance size={18} /></a>
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
