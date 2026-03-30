import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-24 max-w-3xl"
      >
        <span className="label-text mb-6 block">Inquiries</span>
        <h2 className="text-4xl md:text-5xl font-sans font-medium mb-8 leading-tight tracking-tight">Get In Touch</h2>
        <p className="text-xl text-textMuted font-light leading-relaxed">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-12">
            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-white border border-borderLight rounded-2xl text-accent shrink-0 group-hover:bg-background transition-colors duration-300 shadow-sm">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h3 className="label-text mb-2">Email</h3>
                <a href="mailto:hichamst9.5@outlook.com" className="text-lg md:text-xl font-light hover:text-accent transition-colors text-textMain break-all">
                  hichamst9.5@outlook.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-white border border-borderLight rounded-2xl text-accent shrink-0 group-hover:bg-background transition-colors duration-300 shadow-sm">
                <Phone className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h3 className="label-text mb-2">Phone</h3>
                <a href="tel:+213676372031" className="text-lg md:text-xl font-light hover:text-accent transition-colors text-textMain">
                  +213 676 372 031
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-white border border-borderLight rounded-2xl text-accent shrink-0 group-hover:bg-background transition-colors duration-300 shadow-sm">
                <MapPin className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h3 className="label-text mb-2">Location</h3>
                <p className="text-lg md:text-xl font-light text-textMain">
                  Algiers, Algeria
                </p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-borderLight">
              <h3 className="label-text mb-6">Connect & Messaging</h3>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#" className="py-3 px-5 bg-white border border-borderLight rounded-full hover:border-accent hover:text-accent transition-all flex items-center gap-3 text-textMuted shadow-sm hover:shadow-md">
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} /> <span className="text-sm font-medium">WhatsApp</span>
                </a>
                <a href="#" className="p-3.5 bg-white border border-borderLight rounded-full text-textMuted hover:border-accent hover:text-accent transition-all shadow-sm hover:shadow-md"><FaInstagram className="w-4 h-4" /></a>
                <a href="#" className="p-3.5 bg-white border border-borderLight rounded-full text-textMuted hover:border-accent hover:text-accent transition-all shadow-sm hover:shadow-md"><FaLinkedin className="w-4 h-4" /></a>
                <a href="#" className="p-3.5 bg-white border border-borderLight rounded-full text-textMuted hover:border-accent hover:text-accent transition-all shadow-sm hover:shadow-md"><FaGithub className="w-4 h-4" /></a>
                <a href="#" className="p-3.5 bg-white border border-borderLight rounded-full text-textMuted hover:border-accent hover:text-accent transition-all font-display font-medium text-sm w-[42px] h-[42px] flex items-center justify-center shadow-sm hover:shadow-md">Bē</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card-style h-fit"
        >
          <form className="space-y-6">
            <div>
              <label className="label-text mb-3 block">Name</label>
              <input type="text" className="w-full bg-background border border-borderLight rounded-xl p-4 text-textMain focus:outline-none focus:border-accent/40 focus:bg-white transition-colors font-light" placeholder="John Doe" />
            </div>
            <div>
              <label className="label-text mb-3 block">Email</label>
              <input type="email" className="w-full bg-background border border-borderLight rounded-xl p-4 text-textMain focus:outline-none focus:border-accent/40 focus:bg-white transition-colors font-light" placeholder="john@example.com" />
            </div>
            <div>
              <label className="label-text mb-3 block">Message</label>
              <textarea rows={5} className="w-full bg-background border border-borderLight rounded-xl p-4 text-textMain focus:outline-none focus:border-accent/40 focus:bg-white transition-colors resize-none font-light" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="button" className="w-full flex justify-center items-center space-x-3 bg-textMain text-white font-medium rounded-xl py-4 hover:bg-black transition-colors duration-300">
              <span>Send Message</span>
              <Send className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
