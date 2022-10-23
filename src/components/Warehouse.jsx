import React from 'react'

const Warehouse = () => {
  return (
    <React.Fragment>
        <div className='p-20 lg:flex sm:hidden md:hidden'>
            <div className='grid grid-cols-3 '>
                <div className='col-span-2 w-full h-[400px] bg-cover bg-center rounded-tl-[100px] border-2 border-amber-100' style={{backgroundImage:`url(https://cms.linklogistics.com/wp-content/uploads/2022/05/home-large-cta.png)`}}>
                </div>
                <div className='bg-[#96B7C0] w-full h-[400px]  rounded-tr-[100px] border-2 border-amber-100'>
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
        <div className='p-20 md:flex sm:hidden lg:hidden'>
            <div className='grid grid-cols-3'>
                <div className='col-span-1 w-full h-[350px] bg-cover bg-center rounded-tl-[100px] border-2 border-amber-100' style={{backgroundImage:`url(https://cms.linklogistics.com/wp-content/uploads/2022/05/home-large-cta.png)`}}>
                </div>
                <div className='col-span-2 bg-[#96B7C0] w-full h-[350px] rounded-tr-[100px] border-2 border-amber-100'>
                    <div className='p-5 mt-10'>
                        <p className='text-black font-sans font-semibold text-[32px]'>Our space is your space.</p>
                        <p className='text-black font-sans text-[16px] '>Link invites charities, nonprofits and philanthropic organizations across the country to utilize our warehouse space in order to help them continue the critical work they do.</p>
                        <button className='bg-[#252429] rounded-tr-[30px] mt-5 text-white hover:bg-black lg:w-[150px] lg:h-[50px] md:w-[150px] md:h-[50px] sm:w-[150px] sm:h-[50px]'>
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='p-10 sm:flex md:hidden lg:hidden'>
            <div className='grid grid-rows-2 w-[400px]'>
                <div className='row-span-1 w-full bg-cover bg-center rounded-tr-[100px] border-2 border-amber-100' style={{backgroundImage:`url(https://cms.linklogistics.com/wp-content/uploads/2022/05/home-large-cta.png)`}}>
                </div>
                <div className='p-1 row-span-1 bg-[#96B7C0] border-2 border-amber-100'>
                    <p className='text-black font-sans font-semibold text-[20px]'>Our space is your space.</p>
                    <p className='text-black font-sans text-[14px] '>Link invites charities, nonprofits and philanthropic organizations across the country to utilize our warehouse space in order to help them continue the critical work they do.</p>
                    <button className='bg-[#252429] rounded-tr-[30px] mt-10 mb-5 text-white hover:bg-black lg:w-[150px] lg:h-[50px] md:w-[150px] md:h-[50px] sm:w-[150px] sm:h-[50px]'>
                            LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Warehouse