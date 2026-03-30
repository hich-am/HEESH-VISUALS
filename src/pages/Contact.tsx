import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24 max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">Get In Touch</h1>
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-10">
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-white/5 rounded-full text-white shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-2">Email</h3>
                <a href="mailto:hichamst9.5@outlook.com" className="text-xl md:text-2xl font-light hover:text-white transition-colors text-gray-300 break-all">
                  hichamst9.5@outlook.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="p-4 bg-white/5 rounded-full text-white shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-2">Phone</h3>
                <a href="tel:+213676372031" className="text-xl md:text-2xl font-light hover:text-white transition-colors text-gray-300">
                  +213 676 372 031
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="p-4 bg-white/5 rounded-full text-white shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-2">Location</h3>
                <p className="text-xl md:text-2xl font-light text-gray-300">
                  Algiers, Algeria
                </p>
              </div>
            </div>
            
            <div className="pt-8 block">
              <h3 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-6">Connect & Messaging</h3>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp
                </a>
                <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all"><FaInstagram className="w-5 h-5" /></a>
                <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all"><FaLinkedin className="w-5 h-5" /></a>
                <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all"><FaGithub className="w-5 h-5" /></a>
                <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all font-display font-bold">Bē</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm h-fit"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold tracking-widest uppercase text-gray-500 mb-2">Name</label>
              <input type="text" className="w-full bg-[#050505] border border-white/10 p-4 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold tracking-widest uppercase text-gray-500 mb-2">Email</label>
              <input type="email" className="w-full bg-[#050505] border border-white/10 p-4 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold tracking-widest uppercase text-gray-500 mb-2">Message</label>
              <textarea rows={6} className="w-full bg-[#050505] border border-white/10 p-4 text-white focus:outline-none focus:border-white/30 transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="button" className="w-full justify-center flex items-center space-x-2 bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-gray-200 transition-colors border border-white">
              <span>Send Message</span>
              <Send className="w-4 h-4 ml-2" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
