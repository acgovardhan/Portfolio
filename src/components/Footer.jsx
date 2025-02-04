import React from 'react'
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <div className="mt-10 pb-10 relative overflow-hidden">
      <div class="border-t border-white opacity-25"></div>
      <div className="text-sm text-center tracking-tighter text-white mt-5">
        <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }} className="overflow-hidden">+91 9645100641</motion.div>

        <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }} className="overflow-hidden">Thiruvanathapuran , Kerala</motion.div>

        <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }} className="overflow-hidden">mail2acgovardhan@gmail.com</motion.div>
      </div>
    </div>
  );
}

export default Footer
