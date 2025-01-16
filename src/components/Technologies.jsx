import React from 'react'
import { FiFigma } from 'react-icons/fi'
import { FaPython } from 'react-icons/fa'
import { DiJava } from 'react-icons/di'
import { FaC } from 'react-icons/fa6'

const Technologies = () => {
  return (
    <div>
      <div><h2 className='text-white flex justify-center text-3xl lg:text-6xl'>Technologies</h2></div>
      <div className='text-white flex justify-evenly py-20 text-7xl'>
        <div className='w-50 bg-gradient-to-r from-slate-300 to-slate-600 rounded-xl'><FiFigma/></div>
        <div className='w-50 bg-gradient-to-r from-slate-300 to-slate-600 rounded-xl'><DiJava/></div>
        <div className='w-50 bg-gradient-to-r from-slate-300 to-slate-600 rounded-xl'><FaPython/></div>
        <div className='w-50 bg-gradient-to-r from-slate-300 to-slate-600 rounded-xl'><FaC/></div>
      </div>
    </div>
  )
}

export default Technologies
