import React from 'react'

const Warehouse = () => {
  return (
    <div className='p-10'>
        <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1'>
            <div className='bg-center bg-cover w-full h-[350px] col-span-2 rounded-tl-[100px] border-2 border-amber-100' style={{backgroundImage:`url(https://cms.linklogistics.com/wp-content/uploads/2022/05/home-large-cta.png)`}}>
            </div>
            <div className='bg-[#96B7C0] rounded-tr-[100px] border-2 border-amber-100'>
                <div className='p-5 mt-10'>
                    <p className='text-black font-sans font-semibold text-[32px]'>Our space is your space.</p>
                    <p className='text-black font-sans text-[16px] '>Link invites charities, nonprofits and philanthropic organizations across the country to utilize our warehouse space in order to help them continue the critical work they do.</p>
                    <button className='bg-[#252429] rounded-tr-[30px] mt-5 text-white hover:bg-black lg:w-[150px] h-[50px] md:w-[150px] h-[50px] sm:w-[150px] h-[50px]'>
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Warehouse