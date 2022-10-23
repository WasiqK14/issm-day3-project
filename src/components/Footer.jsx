import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#252429] px-32 py-16 w-full'>
        <div className='w-fullgrid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1'>
            <div className='col-span-2'>
                <span className='text-[#DEC7AC] font-sans text-[32px]'> Link Logo </span>
            </div>
            <div className='col-span-1'>
                <div>
                    <span className='text-[#DEC7AC] font-sans text-[16px]'> PORTFOLIO </span>
                    <ul className='mt-3'>
                        <li className='mb-1 text-[#DEC7AC] font-sans text-[14px]'> East Region </li>
                        <li className='mb-1 text-[#DEC7AC] font-sans text-[14px]'> Central Region </li>
                        <li className='text-[#DEC7AC] font-sans text-[14px]'> West Region </li>
                    </ul>
                </div>
                <div className='mt-10'>
                    <span className='text-[#DEC7AC] font-sans text-[16px]'> CAPABILTIES </span>
                    <ul className='mt-3'>
                        <li className='mb-1 text-[#DEC7AC] font-sans text-[14px]'> Customer Support </li>
                        <li className='text-[#DEC7AC] font-sans text-[14px]'>Custom Property Development</li>
                    </ul>
                </div>
                
            </div>
            <div className='col-span-1'>
                <span className='text-[#DEC7AC] font-sans text-[16px]'> ABOUT </span>
                <ul className='mt-3'>
                    <li className='mb-1 text-[#DEC7AC] font-sans text-[14px]'> Leadership </li>
                    <li className='mb-1 text-[#DEC7AC] font-sans text-[14px]'> News </li>
                    <li className='mb-1 text-[#DEC7AC] font-sans text-[14px]'> ESG </li>
                    <li className='mb-1 text-[#DEC7AC] font-sans text-[14px]'> 2021 ESG Report </li>
                    <li className='text-[#DEC7AC] font-sans text-[14px]'> Community Link </li>
                </ul>
            </div>
            <div className='col-span-1'>
                <div>
                    <span className='text-[#DEC7AC] font-sans text-[16px]'> CUSTOMER LOGIN </span>
                </div>
                <div className='mt-14'>
                    <span className='text-[#DEC7AC] font-sans text-[16px]'> BROKER MARKETING </span>
                </div>
                <div className='mt-14'>
                    <span className='text-[#DEC7AC] font-sans text-[16px]'> CONTACT </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer