import React from 'react'

const Stats = () => {
  return (
    <div className='bg-[#DEC7AC] p-28'>
        <div className='grid grid-cols-4 gap-4 md:grid-cols-4 sm:grid-cols-1'>
            <div className='flex flex-col justify-center items-center border-r-2 border-black h-[200px]'>
                <span className='text-white font-sans text-[64px] font-semibold'>
                    1000+
                </span>
                <p className='text-white font-sans text-[18px] text-center'>employees throughout the U.S</p>
            </div>
            <div className='flex flex-col justify-center items-center border-r-2 border-black h-[200px]'>
                <span className='text-white font-sans text-[64px] font-semibold'>
                   25
                </span>
                <p className='text-white font-sans text-[18px] text-center'>offices in key markets across U.S.</p>
            </div>
            <div className='flex flex-col justify-center items-center border-r-2 border-black h-[200px]'>
                <span className='text-white font-sans text-[64px] font-semibold'>
                    $8.8B
                </span>
                <p className='text-white font-sans text-[18px] text-center '>development pipeline</p>
            </div>
            <div className='flex flex-col justify-center items-centerh-[200px]'>
                <span className='text-white font-sans text-[64px] font-semibold '>
                    3500+
                </span>
                <p className='text-white font-sans text-[18px] text-center'>properties</p>
            </div>
        </div>
    </div>
  )
}

export default Stats