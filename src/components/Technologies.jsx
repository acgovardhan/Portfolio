import React from 'react'
import { FaPython } from 'react-icons/fa'
import { DiJava } from 'react-icons/di'
import { FaC } from 'react-icons/fa6'
import { FaReact } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'

const Technologies = () => {
  return (
    <div>
      <div><h2 className='text-white flex justify-center text-3xl lg:text-6xl'>Technologies</h2></div>
      <div className='text-white flex justify-evenly py-20 text-7xl'>
        <div className='w-50 text-yellow-300'><FaJs/></div>
        <div className='w-50 text-orange-600 bg-white rounded-2xl'><DiJava/></div>
        <div className='w-50 text-blue-500'><FaReact/></div>
        <div className='w-50 text-yellow-300 rounded-xl'><FaPython/></div>
        <div className='w-50'><FaC/></div>
        
      </div>
    </div>
  )
}

export default Technologies
