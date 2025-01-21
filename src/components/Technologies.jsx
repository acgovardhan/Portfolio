import React from 'react'
import { FaPython } from 'react-icons/fa'
import { DiJava } from 'react-icons/di'
import { FaC } from 'react-icons/fa6'
import { FaReact } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { animate, inertia, inView, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -15 },
  animate: {
    y: [15, -15],
    transition: {
      duration: duration,
      ease: "easeInOut",

      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div>
      <div><h2 className='text-white flex justify-center text-3xl lg:text-6xl'>Technologies</h2></div>
      <div className='text-white flex justify-evenly py-20 text-7xl mt-10'>
        <motion.div initial="initial"
          animate="animate" variants={iconVariants(1.5)} className='w-50 text-yellow-300'><FaJs/></motion.div>
        <motion.div  initial="initial"
          animate="animate" variants={iconVariants(1)} className='w-50 text-orange-600 bg-white rounded-2xl'><DiJava/></motion.div>
        <motion.div initial="initial"
          animate="animate" variants={iconVariants(0.8)} className='w-50 text-blue-500'><FaReact/></motion.div>
        <motion.div  initial="initial"
          animate="animate" variants={iconVariants(1)} className='w-50 text-yellow-300 rounded-xl'><FaPython/></motion.div>
        <motion.div initial="initial"
          animate="animate"  variants={iconVariants(1.5)}className='w-50'><FaC/></motion.div>
        
      </div>
    </div>
  )
}

export default Technologies
