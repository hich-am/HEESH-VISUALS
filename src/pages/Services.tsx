import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  { title: "Logo Design", description: "Memorable logos that capture your brand essence and make lasting first impressions." },
  { title: "Full Visual Identity", description: "Complete visual identity systems including colors, typography, and brand guidelines." },
  { title: "Business Card Design", description: "Professional business cards that leave a strong impression." },
  { title: "Packaging Design", description: "Eye-catching packaging that stands out on shelves and tells your product story." },
  { title: "Digital Flyers & Brochures", description: "Modern digital flyers and brochures to promote your business online." },
  { title: "Sticker & Label Design", description: "Creative and custom stickers and labels that enhance your product branding." },
  { title: "Social Media Designs", description: "Unique and engaging visuals tailored for your social media platforms." },
  { title: "Presentations & Documents", description: "Professional presentations, documents (PowerPoint, Word), and CVs that stand out." },
  { title: "Landing Page Creation", description: "Attractive and effective landing pages to boost your online presence." }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24 max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">Our Services</h1>
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
          From logo design to complete brand identity systems, we offer comprehensive visual solutions.
        </p>
      </motion.div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden h-full flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            <div className="text-white/10 font-display font-black text-6xl absolute -right-2 -bottom-4 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500 z-0 select-none">
              {String(index + 1).padStart(2, '0')}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 font-display tracking-tight text-white">{service.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
