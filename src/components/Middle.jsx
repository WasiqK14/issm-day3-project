import React from 'react'
import { middleData } from '../constants'

const Middle = () => {

    console.log("middleData", middleData)

    return (
        <React.Fragment>
            <div className=' bg-[#252429] ml-5 mr-5 lg:rounded-br-[100px] lg:rounded-tl-[100px] md:rounded-br-[100px] md:rounded-tl-[100px] sm:rounded-br-[50px] sm:rounded-tl-[50px] mb-20 border-2 border-amber-100'>
                <div className='lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 sm:hidden'>
                    <div className='flex flex-col col-span-1 justify-start py-14 px-20'>
                        <span className='text-white font-sans font-semibold text-[32px]'>It is all about connections.</span>
                        <p className='text-white font-sans text-[15px] mt-5'>Logistics real estate connects products with the people who need them. Link connects businesses with the warehouse spaces they need to make it all happen—helping its customers grow all along the way.</p>
                        <span className='text-white font-sans font-bold text-[15px] mt-5'>We will get you there.</span>
                        <p className='text-white font-sans text-[15px]'>Link owns the largest portfolio of U.S.-only industrial real estate. Our scale is expansive, our technology is leading-edge and our people are talented contributors who bring a passion for what we do.</p>
                    </div>
                    <div className='h-full col-span-1 bg-center bg-cover lg:rounded-br-[100px] md:rounded-br-[100px] border-2 border-amber-100' style={{backgroundImage:`url("https://cms.linklogistics.com/wp-content/uploads/2021/07/GettyImages-1272641181-scaled.jpg")`}}>
                    </div>
                </div>
                <div className='sm:grid sm:grid-rows-2 lg:hidden md:hidden'>
                    <div className='flex flex-col row-span-1 justify-start py-2 px-5'>
                        <span className='text-white font-sans font-semibold text-[20px]'>It is all about connections.</span>
                        <p className='text-white font-sans text-[12px] mt-1'>Logistics real estate connects products with the people who need them. Link connects businesses with the warehouse spaces they need to make it all happen—helping its customers grow all along the way.</p>
                        <span className='text-white font-sans font-bold text-[16px] mt-2'>We will get you there.</span>
                        <p className='text-white font-sans text-[12px]'>Link owns the largest portfolio of U.S.-only industrial real estate. Our scale is expansive, our technology is leading-edge and our people are talented contributors who bring a passion for what we do.</p>
                    </div>
                    <div className='row-span-1 order-first bg-center bg-cover rounded-tl-[50px] border-2 border-amber-100' style={{backgroundImage:`url("https://cms.linklogistics.com/wp-content/uploads/2021/07/GettyImages-1272641181-scaled.jpg")`}}>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-[30px] ml-20 mr-20 p-10'>
                    {
                        middleData.map((item) => {
                            return (
                                <div className='md:min-h-[350px] min-h-[290px] flex items-end bg-cover bg-center border-2 border-amber-100 cursor-pointer underline hover:no-underline' style={{backgroundImage:`url(${item.imgLink})`}}>
                                    <div class="z-[1] bg-[#252429] w-full px-4 md:p-[15px] py-[30px] md:min-h-[135px] min-h-[135px]">
                                        <p class="mb-2 text-white font-sans font-semibold">
                                            {item.title}
                                        </p>
                                        <p class="mb-2 text-white font-sans">
                                            {item.desc}
                                        </p>
                                        <div class="flex flex-col sm:flex-row items-end sm:justify-end">
                                            <a class="mt-5 text-white font-sans font-semibold">
                                                READ MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    
    )
}

export default Middle

{/* <div class="wow fadeInUp bg-center bg-cover md:min-h-[350px] min-h-[290px] flex items-end text-white relative border-2 border-darkGold" style="background-image: url(&quot;https://cms.linklogistics.com/wp-content/uploads/2022/10/CoreGiving2023.jpg&quot;); visibility: visible; animation-name: fadeInUp;" animated="true">
    <div class="z-[1] bg-obsidian w-full px-4 md:p-[15px] py-[30px] md:min-h-[135px] min-h-[135px]">
        <p class="mb-2 leading-[1.2em] eyebrow--md">
        Second Annual CoreGiving Day 
        </p>
        <p class="mb-2">Link, in partnership with Blackstone and 13 other companies, donated over 17K hours and provided over 650K meals.
        </p>
        <div class="flex flex-col sm:flex-row items-end  sm:justify-end">
            <a class="mt-5 text-white border-white link link--sm full-link" target="" href="https://linklogistics.com/news/second-annual-coregiving-day-unites-2100-volunteers-to-fight-childhood-hunger/ ">
                Read More
            </a>
        </div>
    </div>
</div> */}