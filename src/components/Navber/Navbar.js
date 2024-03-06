import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";




const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isSticky, setSticky] = useState(false)
    const toggeleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handeleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }

        window.addEventListener("scroll", handeleScroll)

        return () => {
            window.addEventListener("scroll", handeleScroll)
        }
    }, [])
    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 '>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 right-0 bg-blue-300": ""} `}>
                <div className='flex justify-between items-center text-base gab-8 container'>
                    <Link to='/' className='text-2xl font-bold text-blue-700 flex items-center gab-2'><FaBlog className='inline-block' /> BIOFNI</Link>
              


                <ul className='md:flex space-x-12 hidden'>
                    <li><Link className='block text-base text-black uppercase cursor-pointer hover:text-blue-700' to="/">Home</Link></li>
                    <li><Link className='block text-base text-black uppercase cursor-pointer hover:text-blue-700' to="/About">About</Link></li>
                    <li><Link className='block text-base text-black uppercase cursor-pointer hover:text-blue-700' to="/Reservation">Reservation</Link></li>
                    <li><Link className='block text-base text-black uppercase cursor-pointer hover:text-blue-700' to="/contact">Contact</Link></li>
                </ul>


                <div className='space-x-12 lg:flex items-center hidden'>
                    <button><FaBarsStaggered className='w-5 hover:text-blue-700 cursor-pointer' /></button>
                </div>

                <div className='md:hidden'>
                    <button onClick={toggeleMenu} className='text-black focus:outline-none'>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black ' /> : <FaBarsStaggered className='h-5 w-5 text-black ' />
                        }
                    </button>
                </div>


                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    <li><Link className='block text-base text-white uppercase cursor-pointer' to="/">Home</Link></li>
                    <li><Link className='block text-base text-white uppercase cursor-pointer' to="/About">About</Link></li>
                    <li><Link className='block text-base text-white uppercase cursor-pointer' to="/Book">Sell Your Book</Link></li>
                    <li><Link className='block text-base text-white uppercase cursor-pointer' to="/Contact">Contac</Link></li>


                </div>
            </div>
            </nav>
        </header>

    )
}

export default Navbar