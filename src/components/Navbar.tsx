import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import MagneticElement from './MagneticElement';

const navLinks = [
  { name: 'WORK', to: 'work' },
  { name: 'ABOUT', to: 'about' },
  { name: 'CONTACT', to: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (to: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(to, { smooth: true, duration: 800, offset: 0 });
      }, 100);
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
          <MagneticElement strength={0.2}>
            <RouterLink
              to="/"
              onClick={() => {
                setIsOpen(false);
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-white text-sm font-sans font-bold tracking-[0.2em] uppercase"
            >
              HEESH
            </RouterLink>
          </MagneticElement>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <MagneticElement key={link.name} strength={0.15}>
                {location.pathname === '/' ? (
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    className="text-white text-sm font-sans tracking-[0.2em] uppercase cursor-pointer relative group"
                    activeClass="opacity-100"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  </ScrollLink>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.to)}
                    className="text-white text-sm font-sans tracking-[0.2em] uppercase relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  </button>
                )}
              </MagneticElement>
            ))}

            <MagneticElement strength={0.15}>
              <RouterLink
                to="/portfolio"
                className="text-white text-sm font-sans tracking-[0.2em] uppercase relative group"
              >
                ARCHIVE
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </RouterLink>
            </MagneticElement>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-[60] relative"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <motion.span
                className="block h-px bg-white origin-center"
                animate={isOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-px bg-white origin-center"
                animate={isOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-bg flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {location.pathname === '/' ? (
                    <ScrollLink
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={800}
                      onClick={() => setIsOpen(false)}
                      className="text-textMain text-4xl md:text-5xl font-sans font-bold tracking-[-0.02em] uppercase hover:text-textMuted transition-colors duration-300"
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.to)}
                      className="text-textMain text-4xl md:text-5xl font-sans font-bold tracking-[-0.02em] uppercase hover:text-textMuted transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <RouterLink
                  to="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className="text-textMain text-4xl md:text-5xl font-sans font-bold tracking-[-0.02em] uppercase hover:text-textMuted transition-colors duration-300"
                >
                  ARCHIVE
                </RouterLink>
              </motion.div>
            </nav>

            <motion.div
              className="absolute bottom-12 flex items-center gap-6 text-textMuted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a href="https://instagram.com/heesh_visuals" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.2em] uppercase hover:text-textMain transition-colors">IG</a>
              <span className="text-textDim">—</span>
              <a href="https://behance.net/hichammanseur1" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.2em] uppercase hover:text-textMain transition-colors">BE</a>
              <span className="text-textDim">—</span>
              <a href="https://www.facebook.com/izan.massi" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.2em] uppercase hover:text-textMain transition-colors">FB</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
