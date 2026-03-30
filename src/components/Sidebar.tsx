import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Our Process', path: '/process' },
  { name: 'Contact', path: '/contact' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on location change for mobile
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Mobile Hamburger Header */}
      <div className="md:hidden fixed top-0 w-full z-50 bg-darker/90 backdrop-blur-md border-b border-white/5 p-4 flex justify-between items-center">
        <div className="font-display font-bold text-xl tracking-tight text-white uppercase">
          HEESH <span className="opacity-50">VISUALS</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className={`fixed top-0 left-0 h-screen bg-darker border-r border-white/5 z-40 w-64 md:w-[300px] flex flex-col justify-between py-10 px-8 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
          >
            <div>
              <div className="hidden md:block font-display font-black text-4xl tracking-tighter text-white mb-20 leading-none">
                HEESH
                <br />
                <span className="opacity-50 text-2xl font-bold">VISUALS</span>
              </div>
              
              <nav className="flex flex-col space-y-6 mt-16 md:mt-0">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `font-medium text-[0.95rem] uppercase tracking-widest transition-all duration-300 w-fit ${
                        isActive
                          ? 'text-white translate-x-3 glow'
                          : 'text-gray-500 hover:text-white hover:translate-x-1'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <span className="flex items-center space-x-3">
                        {isActive && <span className="h-0.5 w-6 bg-white block rounded-full" />}
                        <span>{link.name}</span>
                      </span>
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-6 text-gray-500 mt-10">
              <a href="#" className="hover:text-white transform hover:scale-110 transition-all duration-300"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-white transform hover:scale-110 transition-all duration-300"><FaLinkedin size={20} /></a>
              <a href="#" className="hover:text-white transform hover:scale-110 transition-all duration-300"><FaGithub size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
