import React from 'react'
import { regionsData } from '../constants'

const Region = () => {
  return (
    <React.Fragment>
        <div className='p-10'>
            <div className='flex justify-center items-center'>
                <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-[30px]'>
                    
                    {
                        regionsData.map((item) => {

                            return(
                                <div className='w-[350px] h-[350px] flex items-end bg-cover bg-center border-2 border-amber-100 cursor-pointer' style={{backgroundImage:`url(${item.imgLink})`}}>
                                    <div className="bg-[#252429] w-full p-5 min-h-[50px] ">
                                        <p className=" text-white font-sans font-semibold">{item.title} </p>
                                        <p className=" text-white font-sans text-[32px]"> {item.total} <span className='text-[16px]'>TotalSF</span></p>
                                        <div className='flex flex-col'>
                                            <span className=" text-white font-sans text-[32px]"> {item.properties} 
                                                <span className='text-[20px]'>
                                                    Properties
                                                </span>
                                            </span>
                                            <span className=" text-white text-[12px] font-sans font-semibold underline hover:no-underline text-right">
                                                MEET THE TEAM
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
       
    </React.Fragment>
  )
}

export default Region