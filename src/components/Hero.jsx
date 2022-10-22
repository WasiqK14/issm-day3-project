import React from 'react'
import Video from '../assets/hero-video.mp4'
const Hero = () => {
  return (
    <section className="flex">
        <video className="w-full h-[500px] mr-7 ml-5 mb-8 object-cover rounded-bl-[100px] overflow-hidden" src={Video} autoPlay loop muted />
        <div className='flex flex-col absolute top-72 left-36'>
            <span className='text-white font-sans lg:text-[55px] md:text-[40px] sm:text-[30px]'>We see the future of logistics</span>
            <span className='text-white font-sans lg:text-[55px] md:text-[40px] sm:text-[30px]'>through{' '}
                <span className='underline'>
                    connections
                </span>
                
            </span>
            <button className='bg-[#EB6547]  rounded-tr-[30px] hover:bg-[#F49684] lg:w-[250px] h-[50px] md:w-[150px] h-[50px] sm:w-[150px] h-[50px]'>
                VIEW OUR PORTFOLIO
            </button>
        </div>
    </section>
  )
}

export default Hero