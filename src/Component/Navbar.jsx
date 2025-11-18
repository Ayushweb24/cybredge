import React from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const[navMenu,setNavMenu]= useState(false);

  const menuToggle=()=>{
    setNavMenu(!navMenu);
  }
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-sm bg-white/5 border-b border-white/20 z-50">

    <div className='p-3 m-2 w-full bg-transparent flex  justify-between'>
       <div>
        <h1 className='text-4xl md:text-6xl font-bold mb-4l flex-nowrap whitespace-nowrap text-white'>Cybredge Pvt Ltd.</h1>
       </div>
       <div className='mr-16 '>

        <nav className='{navMenu ? "menu-web" : "menu-phone"} text-lg gap-4 p-2  flex text-white'>
          <Link className='hover:text-cyan-600 hover:cursor-pointer m-1' to="/">Home</Link>
          <Link className='hover:text-cyan-600 hover:cursor-pointer m-1' to="/about">About</Link>
          <Link className='hover:text-cyan-600 hover:cursor-pointer m-1' to="/services">Services</Link>
          <Link className='hover:text-cyan-600 hover:cursor-pointer m-1' to="/portfolio">Portfolio</Link>
          <Link className='hover:text-cyan-600 hover:cursor-pointer m-1' to="/team">Team</Link>
          <Link className='hover:text-cyan-600 hover:cursor-pointer m-1' to="/blog">Blog</Link>
          <Link className='hover:text-cyan-600 hover:cursor-pointer m-1' to="/contact">Contact</Link>
          <Link className='hover:text-cyan-600 hover:cursor-pointer m-1' to="/dropdown">Dropdown</Link>

          <button className='ml-20 h-9 m-0.5 w-28 backdrop-blur-md hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] text-white border border-white/20  rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300'>Get Started</button> 
        
        </nav>
        
        <div className='menu'>
          <button onClick={menuToggle}>
          <GiHamburgerMenu/>
          </button>
         </div>
       </div>
    </div>
    </header>
  )
}

export default Navbar