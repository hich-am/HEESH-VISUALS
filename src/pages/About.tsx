import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

export default function About() {
  return (
    <div className="section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mb-32"
      >
        <span className="label-text mb-6 block">About Us</span>
        <h2 className="text-4xl md:text-5xl font-sans font-medium mb-16 leading-tight max-w-2xl tracking-tight">
          Design Bold.<br />
          <span className="text-textMuted font-light">Grow Smart.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h3 className="label-text mb-6">Who we are</h3>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-textMain">
              Heesh Visuals was founded to empower brands through smart, striking design that helps small businesses grow with tailored visual solutions.
            </p>
          </div>
          <div>
            <h3 className="label-text mb-6">Our Vision</h3>
            <div className="space-y-6 text-lg font-light leading-relaxed text-textMuted">
              <p>
                We believe every business deserves a visual identity that tells their unique story. 
              </p>
              <p>
                Our mission is to help startups and entrepreneurs create memorable brands that connect with their audience and drive growth.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <h3 className="label-text mb-8 block">Our Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-style flex flex-col">
             <div className="w-1 h-8 bg-accent mb-6 rounded-full" />
            <h4 className="text-xl font-medium mb-3">Originality</h4>
            <p className="text-textMuted font-light leading-relaxed">Every design is crafted uniquely for your brand, ensuring you strongly stand apart from the competition with authenticity.</p>
          </div>

          <div className="card-style flex flex-col">
            <div className="w-1 h-8 bg-accent mb-6 rounded-full" />
            <h4 className="text-xl font-medium mb-3">Simplicity</h4>
            <p className="text-textMuted font-light leading-relaxed">Clean, focused design that communicates clearly and creates lasting impressions without unnecessary noise.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
