import { fromJSON } from 'postcss'
import React,{useState} from 'react'
import  Logo  from '../../assets/LinkLogo.png'
import Search from '../../assets/search.png'
import { navLinks } from '../../constants'
import NavDropdown from './NavDropdown'
import Close from '../../assets/close.svg'
import Menu from '../../assets/menu.svg'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <React.Fragment>
            <nav className="w-full inline-flex justify-between items-center bg-[#96B7C0] py-4 navbar lg:flex ">
                <div className="justify-start">
                    <img className="cursor-pointer ml-10  w-24" src={Logo} alt="Logo" />
                </div>
                <div className='mr-16 lg:flex hidden'>
                    {navLinks.map(item => (
                        <NavDropdown key={item.key} item={item}/>
                    ))}
                    <img className="cursor-pointer" src={Search} alt="Search" />
                </div>
                <div className="flex lg:hidden justify-end mr-5">
                    <img className="cursor-pointer object-contain" src={toggle ? Search : Menu} alt="Menu" onClick={() => setToggle(!toggle)} />
                </div>
            </nav>
        </React.Fragment>
        
  )
}

export default Navbar