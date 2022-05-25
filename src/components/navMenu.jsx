import React, {useEffect, useState} from "react";
import LogoAnimated from '../components/elements/logoAnimated'
import { Linkedin, Instagram, Github } from 'react-bootstrap-icons';


const NavMenu = (icon) => {

    const [mobileMenu, setMobileMenu] = useState(true)

    const handleClick = (event) => {
        event.preventDefault() 
        setMobileMenu(!mobileMenu)
        console.log(mobileMenu)
      }

    useEffect(() => {
       // console.log('props from navMenu', dataIcon)
    }, [])

    return (
        <nav className="flex items-center justify-between flex-wrap p-3 bg-slate-300 shadow-md">
            <div className="flex items-center flex-shrink-0 mr-6 text-white">
                <LogoAnimated icon={icon}/>
                <a href="https://github.com/vladimir-kott/weather_app" target="_blank">
                    <span className="font-semibold text-xl">Weather API</span>
                </a>
            </div>

            <div className="block lg:hidden">
                <button 
                onClick={handleClick}
                className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-100 hover:border-gray-200">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${mobileMenu ? 'md:hidden sm:hidden st:hidden sx:hidden': ''}`}>
                <div className="text-sm lg:flex-grow">
                <a href="https://www.linkedin.com/in/vladimir-kott-511268208/" target="_blank" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-100 mr-4">
                    <Linkedin size={20}/>
                </a>
                <a href="https://www.instagram.com/vladik_kott/" target="_blank" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-100">
                    <Instagram size={20}/>
                </a>
                </div>
                <div> 
                    <a href="https://github.com/vladimir-kott/weather_app" target="_blank" className="inline-flex justify-between text-sm px-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-100 hover:bg-white mt-4 lg:mt-0">
                        <Github size={20}/>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default NavMenu;