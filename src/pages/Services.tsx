import { motion } from 'framer-motion';
export default function Services() { 
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className='text-4xl md:text-6xl font-display font-bold uppercase'>Services</h1>
      <p className='mt-4 text-gray-400'>Loading content...</p>
    </motion.div>
  ); 
}
