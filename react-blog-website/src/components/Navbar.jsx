import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook,FaTwitter,FaDribbble,FaBars,FaXmark } from "react-icons/fa6";
import '../App.css'
import Modal from './Modal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModalOpen,setIsModalOpen] = useState(false)

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
    // navItems
    const navitems = [
        { path:"/", link:"Home" },
        { path:"/services", link:"Services" },
        { path:"/about", link:"About" },
        { path:"/blogs", link:"Blogs" },
        { path:"/contact", link:"Contact" },

    ]

    // model details

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

  return (
    <header className=' bg-black text-white fixed top-0 left-0 right-0'>
        <nav className=' py-4 px-4 max-w-7xl mx-auto flex justify-between items-center'> 
            <a href="/" className='text-xl font-bold text-white'>Design<span className=' text-orange-400'>DK</span></a>

            {/* lg navItems */}
            <ul className=' md:flex gap-12 hidden text-lg'>
                { 
                navitems.map(({path,link}) => 
                <li key={path} className=' text-white hover:text-orange-500'>
                    <NavLink to={path}
                    className={({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                      ? "pending"
                      : ""
                  }>{link}</NavLink>
                </li>
                )}
            </ul>


            {/* menu icons */}
            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href="/" className=' hover:text-orange-500'><FaFacebook/></a>
                <a href="/" className=' hover:text-orange-500'><FaDribbble/></a>
                <a href="/" className=' hover:text-orange-500'><FaTwitter/></a>
                <button onClick={openModal}
                className=' bg-orange-500 px-6 py-2 rounded hover:bg-white font-medium hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
            </div>

            {/* Modal component */}
            <Modal isOpen={isModalOpen} onClose={closeModal}/>


            {/* Mobile menu items */}
            <div className=' md:hidden'>
                <button className=' cursor-pointer' onClick={toggleMenu}>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className=' h-5 w-5'></FaBars>
                    } 
                </button>
            </div>
        </nav>

        {/* menu items only for mobile */}
        <div>
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py- mt-14 bg-white ${isMenuOpen ? "fixed left-0 top-0 transition-all ease-out duration-150 w-full" : "hidden"}`}>
                { 
                navitems.map(({path,link}) => 
                <li key={path} className=' text-black hover:text-orange-500'>
                    <NavLink to={path} onClick={toggleMenu}>{link}</NavLink>
                </li>
                )}
            </ul>
        </div>

    </header>
  )
}

export default Navbar