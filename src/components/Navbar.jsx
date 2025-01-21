import React from 'react'
import logo from '../assets/logoo.png'
import { FaLinkedin,FaInstagram,FaGithub } from 'react-icons/fa'
const Navbar = () => {
  return (
    <>
    <nav className="mt-1  mb-20 flex items-center justify-between py-6 lg:mt-5 lg:px-20"><div>
      <img className="mx-2 w-20"src={logo} />
    </div>
    <div className='mx-4 text-white flex items-center justify-center py-4 gap-4 text-4xl'>
      <a href='https://github.com/acgovardhan'target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
      <a href='https://github.com/acgovardhan'target='_blank' rel="noopener noreferrer"><FaInstagram/></a>
      <a href='https://github.com/acgovardhan'target='_blank' rel="noopener noreferrer"><FaGithub/></a>
      
    </div>
    </nav>
    </>
  )
}

export default Navbar
