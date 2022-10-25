import React from 'react'
import { navLinks } from '../../constants'
import Caret from '../../assets/caret-down.svg'
const NavDropdown = (props) => {

    const { path, title, sublinkValue, sublink } = props.item

    return (
        <div className="group inline-block relative">
            <button className="inline-flex items-center mr-8">
                <a className='cursor-pointer hover:text-[#A4999D] hover:flex text-black font-sans font-semibold text-sm '>{title}</a>
                <img className={`${sublink ? null : 'hidden'} cursor-pointer w-[15px] h-[15px] ml-3`} src={Caret} alt="Caret"/>
            </button>
            <ul className="absolute hidden group-hover:block bg-white items-center justify-center ">
                {sublinkValue?.map(listItem =>(
                    <li key={listItem.key} className="hover:text-[#A4999D] block whitespace-nowrap py-2 px-4 text-xs">
                        <a>{listItem.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavDropdown