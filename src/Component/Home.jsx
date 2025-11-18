import React from 'react'
import bg from "../assets/banner image for my website which website related to IT department (1).jpg"

const Home = () => {
  return (
  
	<div className=' relative w-screen h-screen overflow-hidden'>
    <div className='w-full h-full relative'>
      <img className='absolute w-screen h-screen object-cover' src={bg} alt="banner" />
      <div className='absolute inset-0 w-full h-full bg-black opacity-50'> </div>
      <div className='absolute inset-0 w-full h-[500px] flex flex-col justify-center items-center text-white mt-20' data-aos="fade-up" data-aos-delay="100">
        <h2 className='text-4xl md:text-6xl font-bold2 mb-3' data-aos="fade-up" data-aos-delay="100">Creativity Engineered, Value Delivered.
</h2>
<h1>Where Ideas Evolve Into Digital Reality
</h1>
<button className='mt-6 px-6 py-3 backdrop-blur-md text-white border border-white/20  rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]'>Get Started</button>
      </div>  
    </div>
	</div>
  )
}

export default Home