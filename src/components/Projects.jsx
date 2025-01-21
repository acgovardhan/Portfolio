import React from 'react'
import ecom from '../assets/projects/e-com.png'
const Projects = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen text-white p-5">
        {/* Title */}
        <h1 className="text-3xl lg:text-6xl mb-10 text-center">Projects</h1>

        {/* Project Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <img
              src={ecom}
              width={200}
              alt="E-Commerce Website"
              className="mx-auto"
            />
          </div>

        {/* Right: Text Content */}
        <div className="max-w-lg text-center lg:text-left">
        {/* Project Title */}
          <h1 className="text-2xl mb-3">College and Career Guidance App</h1>

          {/* Project Description */}
          <p className="text-sm mb-5">
            A fully functional Career Guidance App ,with functionalities like predicting career using interests of the user.If no user have interest, still he/she can find Interest using our specially tailored psychological questions.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-5">
            <div className="bg-zinc-700 px-3 py-1">JAVA</div>
            <div className="bg-zinc-700 px-3 py-1">Java Swing</div>
          </div>
        </div>

    
    </div>
</div>


  </div> 
  )
}

export default Projects
