import { FaInstagram, FaFacebook, FaBehance } from 'react-icons/fa';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-borderLight py-12 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="flex flex-col items-center mb-8">
          <img src="/logonobg.png" alt="Heesh Visuals Logo" className="h-16 w-auto object-contain mb-6" />
          <p className="text-textMuted max-w-md text-sm font-light leading-relaxed">
            Empowering startups and businesses with smart, striking design solutions that make you stand out in the market.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8 text-textMuted">
          <a href="https://instagram.com/heesh_visuals" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.facebook.com/izan.massi" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
            <FaFacebook size={20} />
          </a>
          <a href="https://behance.net/hichammanseur1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
            <FaBehance size={20} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=213676372031&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
            <MessageCircle size={20} />
          </a>
        </div>

        <div className="pt-8 border-t border-borderLight/50">
          <p className="text-textMuted text-xs font-light tracking-widest uppercase">
            &copy; {currentYear} Heesh Visuals. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
