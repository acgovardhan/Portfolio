import React from 'react'
import ecom from '../assets/projects/e-com.png'
const Projects = () => {
  return (
    <div>
      <div className='flex justify-center'><h1 className='text-white text-3xl lg:text-6xl'>Projects</h1></div>
      <div className='text-white mt-20 ml-20 flex items-start space-x-10'>
      {/* Left: Image */}
      <div className='flex justify-center'>
      <div className='flex-shrink-0'>
        <img src={ecom} width={200} alt="E-Commerce Website" />
      </div>
  
  {/* Right: Text Content */}
  <div className='text-right'>
    <div className='text-2xl mb-3'>
      <h1>E-Commerce Website</h1>
    </div>
    <div className='text-sm mb-5'>
      <p>
        A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.
      </p>
    </div>
    <div className='flex justify-end mt-5'>
      <div className='bg-zinc-700 mr-5 px-3 py-1'>HTML</div>
      <div className='bg-zinc-700 mr-5 px-3 py-1'>CSS</div>
      <div className='bg-zinc-700 mr-5 px-3 py-1'>React</div>
      <div className='bg-zinc-700 mr-5 px-3 py-1'>Node.js</div>
      <div className='bg-zinc-700 px-3 py-1'>MongoDB</div>
    </div>
    </div>
    </div>
    </div>


    
  </div> 
  )
}

export default Projects
