import { motion } from 'framer-motion';
import { PenTool, Layout, CreditCard, Box, FileText, Tag, Smartphone, MonitorPlay, Monitor } from 'lucide-react';

const services = [
  { title: "Logo Design", description: "Memorable logos that capture your brand essence and make lasting first impressions.", icon: PenTool },
  { title: "Full Visual Identity", description: "Complete visual identity systems including colors, typography, and brand guidelines.", icon: Layout },
  { title: "Business Card Design", description: "Professional business cards that leave a strong impression.", icon: CreditCard },
  { title: "Packaging Design", description: "Eye-catching packaging that stands out on shelves and tells your product story.", icon: Box },
  { title: "Digital Flyers & Brochures", description: "Modern digital flyers and brochures to promote your business online.", icon: FileText },
  { title: "Sticker & Label Design", description: "Creative and custom stickers and labels that enhance your product branding.", icon: Tag },
  { title: "Social Media Designs", description: "Unique and engaging visuals tailored for your social media platforms.", icon: Smartphone },
  { title: "Presentations & Documents", description: "Professional presentations, documents, and CVs that stand out.", icon: MonitorPlay },
  { title: "Landing Page Creation", description: "Attractive and effective landing pages to boost your online presence.", icon: Monitor }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Services() {
  return (
    <div className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-24 max-w-3xl"
      >
        <span className="label-text mb-6 block">Capabilities</span>
        <h2 className="text-4xl md:text-5xl font-sans font-medium mb-8 leading-tight tracking-tight">Our Services</h2>
        <p className="text-xl text-textMuted font-light leading-relaxed">
          From logo design to complete brand identity systems, we offer comprehensive visual solutions tailored to your unique needs.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="card-style flex flex-col group"
            >
              <div className="w-12 h-12 rounded-xl bg-background border border-borderLight flex items-center justify-center mb-8 group-hover:border-accent/30 group-hover:bg-accent/5 transition-colors duration-300">
                <Icon className="text-accent" size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-3 text-textMain">{service.title}</h3>
              <p className="text-textMuted font-light leading-relaxed flex-1">{service.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
