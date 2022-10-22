import React from 'react'
import Video from '../assets/hero-video.mp4'
const Hero = () => {
  return (
    <section className="flex">
        <video className="w-full h-[500px] mr-7 ml-5 mb-8 object-cover rounded-bl-[100px] overflow-hidden" src={Video} autoPlay loop muted />
        <div className='flex flex-col fixed top-72 left-36'>
            <span className='text-white font-sans text-[55px]'>We see the future of logistics</span>
            <span className='text-white font-sans text-[55px]'>through{' '}
                <span className='underline'>
                    connections
                </span>
                
            </span>
            <button className='bg-[#EB6547] w-[250px] h-[50px] rounded-tr-[30px] hover:bg-[#F49684]'>
                VIEW OUR PORTFOLIO
            </button>
        </div>
    </section>
  )
}

export default Hero