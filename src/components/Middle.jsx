import React from 'react'
import Overpass from '../assets/Overpass.jpg'
const Middle = () => {
  return (
        <React.Fragment>
            <div className='bg-[#252429] ml-5 mr-5 rounded-br-[100px] rounded-tl-[100px] mb-20 border-2 border-amber-100'>
                <div className='grid lg:grid-cols-2 '>
                    <div className='flex flex-col justify-start p-10 lg:order-first md:order-last sm:order-last '>
                        <span className='text-white font-sans font-semibold text-[32px]'>It is all about connections.</span>
                        <p className='text-white font-sans text-[15px] mt-5'>Logistics real estate connects products with the people who need them. Link connects businesses with the warehouse spaces they need to make it all happen—helping its customers grow all along the way.</p>
                        <span className='text-white font-sans font-bold text-[20px] mt-1'>We will get you there.</span>
                        <p className='text-white font-sans text-[15px]'>Link owns the largest portfolio of U.S.-only industrial real estate. Our scale is expansive, our technology is leading-edge and our people are talented contributors who bring a passion for what we do.</p>
                    </div>
                    <div className='md:rounded-tl-[100px]'>
                        <img className='object-cover w-full h-[320px] border-2 border-amber-100 lg:rounded-br-[100px] md:rounded-tl-[100px] sm:rounded-tl-[100px]' src={Overpass} alt='Overpass' />
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center ml-10 mr-10'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                    <div className='bg-cover bg-center border-2 border-amber-100 cursor-pointer underline hover:no-underline' style={{backgroundImage:`url("https://cms.linklogistics.com/wp-content/uploads/2022/09/High-Corporate_Marketing_2021_CoreGiving-10.jpg")`}}>
                        <div class=" bg-[#252429] w-full px-4 md:p-[15px] py-[30px] md:min-h-[135px] min-h-[135px] mt-48">
                            <p class="mb-2 text-white font-sans font-semibold">
                                FIGHTING CHILD HUNGER </p>
                            <p class="mb-2 text-white font-sans">
                                On CoreGiving Day, Blackstone, Link and 13 other companies will volunteer across the U.S.companies will volunteer across the U.S
                            </p>
                            <div class="flex flex-col sm:flex-row items-end  sm:justify-end">
                                <a class="mt-5 text-white font-sans font-semibold">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-cover bg-center border-2 border-amber-100 cursor-pointer underline hover:no-underline' style={{backgroundImage:`url("https://cms.linklogistics.com/wp-content/uploads/2022/08/PR-Medium-Corporate-Marketing_Stock_220809-scaled.jpg")`}}>
                        <div class=" bg-[#252429] w-full px-4 md:p-[15px] py-[30px] md:min-h-[135px] min-h-[135px] mt-48">
                            <p class="mb-2 text-white font-sans font-semibold">
                                SUPPORTING fAMILY LANDOWNERS  </p>
                            <p class="mb-2 text-white font-sans">
                                Link committed nearly $5 million to support family forest owners, conserve woodlands and fight climate change.
                            </p>
                            <div class="flex flex-col sm:flex-row items-end  sm:justify-end">
                                <a class="mt-5 text-white font-sans font-semibold ">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-cover bg-center border-2 border-amber-100 cursor-pointer underline hover:no-underline' style={{backgroundImage:`url("https://cms.linklogistics.com/wp-content/uploads/2022/10/CoreGiving2023.jpg")`}}>
                        <div class=" bg-[#252429] w-full px-4 md:p-[15px] py-[30px] md:min-h-[135px] min-h-[135px] mt-48">
                            <p class="mb-2 text-white font-sans font-semibold">
                                SECOND ANNUAL COREGIVING DAY</p>
                            <p class="mb-2 text-white font-sans">
                                Link, in partnership with Blackstone and 13 other companies, donated over 17K hours and provided over 650K meals.
                            </p>
                            <div class="flex flex-col sm:flex-row items-end sm:justify-end">
                                <a class=" mt-5 text-white font-sans font-semibold ">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    
  )
}

export default Middle