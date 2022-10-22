import React from 'react'

const Region = () => {
  return (
    <React.Fragment>
        <div className='p-20'>
            <div className='flex justify-center items-center'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                    <div className='bg-cover bg-center border-2 border-amber-100 cursor-pointer w-[400px]' style={{backgroundImage:`url("https://cms.linklogistics.com/wp-content/uploads/2021/07/GettyImages-503703570-1.jpg")`}}>
                        <div class="bg-[#252429] w-full px-4 md:p-[15px] py-[30px] md:min-h-[135px] min-h-[135px] mt-48">
                            <p class=" text-white font-sans font-semibold">WEST REGION </p>
                            <p class=" text-white font-sans text-[32px]"> 145,800,00 <span className='text-[16px]'>TotalSF</span></p>
                            <p class=" text-white font-sans text-[32px]"> 1132 <span className='text-[16px]'>Properties</span></p>
                            <div class="flex flex-col sm:flex-row items-end  sm:justify-end">
                                <a class="mt-5 text-white font-sans font-semibold underline hover:no-underline">
                                    MEET THE TEAM
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-cover bg-center border-2 border-amber-100 cursor-pointer w-[400px]' style={{backgroundImage:`url("https://cms.linklogistics.com/wp-content/uploads/2021/07/GettyImages-503703570-2.jpg")`}}>
                        <div class=" bg-[#252429] w-full px-4 md:p-[15px] py-[30px] md:min-h-[135px] min-h-[135px] mt-48">
                            <p class=" text-white font-sans font-semibold">CENTRAL REGION</p>
                            <p class=" text-white font-sans text-[32px]"> 188,700,00 <span className='text-[16px]'>TotalSF</span></p>
                            <p class=" text-white font-sans text-[32px]"> 1076<span className='text-[16px]'>Properties</span></p>
                            <div class="flex flex-col sm:flex-row items-end  sm:justify-end">
                                <a class="mt-5 text-white font-sans font-semibold underline hover:no-underline">
                                    MEET THE TEAM
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-cover bg-center border-2 border-amber-100 cursor-pointer w-[400px]' style={{backgroundImage:`url("https://cms.linklogistics.com/wp-content/uploads/2021/07/GettyImages-503703570-3.jpg")`}}>
                        <div class=" bg-[#252429] w-full px-4 md:p-[15px] py-[30px] md:min-h-[135px] min-h-[135px] mt-48">
                            <p class=" text-white font-sans font-semibold">EAST REGION</p>
                            <p class=" text-white font-sans text-[32px]"> 224,800,00 <span className='text-[16px]'>TotalSF</span></p>
                            <p class=" text-white font-sans text-[32px]"> 1348 <span className='text-[16px]'>Properties</span></p>
                            <div class="flex flex-col sm:flex-row items-end  sm:justify-end">
                                <a class="mt-5 text-white font-sans font-semibold underline hover:no-underline">
                                    MEET THE TEAM
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </React.Fragment>
  )
}

export default Region