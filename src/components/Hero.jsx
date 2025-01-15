import React from 'react'
import profile from '../assets/profile.jpg'
import { HERO_CONTENT } from '../constants'
const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36 lg:px-20'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center mt-[-70px] lg:p-8 lg:mt-[-90px]'><img src={profile} className='border border-stone-900 rounded-3xl ' width={400} height={400}/></div>
          </div>
          <div className='w-full lg:w-1/2'>
        <div className='flex flex-col items-center mt-5 lg:items-start'>
          <h2 className='text-white text-3xl lg:text-8xl lg:mt-10 pb-2 tracking-tighter'>A C GOVARDHAN</h2>
          <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl lg:text-5xl text-transparent tracking-tight'>Full Stack Web Developer</span>
          <p className='text-white mt-[-5px] lg:mt-3 text-sm my-2 max-w-lg py-6 lg:text-xl text-justify leading-relaxed tracking-tighter'>{HERO_CONTENT}</p>
          <a href='#' target='_blank' className='mt-[-10px] lg:mt-0 p-3 bg-white rounded-full lg:p-4 text-sm text-stone-800 mb-10'>Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
