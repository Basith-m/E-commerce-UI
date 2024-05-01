// import { Link } from "react-router-dom"
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import VRLOGO from '../../assets/Virtual Reality Logo _ VR logo.jpeg'
import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    const toggleSearch = () => {
        setIsSearchBoxOpen(!isSearchBoxOpen)
    }

    console.log(isOpen);

    return (
        <nav className="bg-gray-800 border-gray-200 relative">
            <div className="max-w-screen-xl flex gap-8 md:gap-0 flex-wrap items-center justify-between mx-auto p-4">

                {/* logo */}
                <Link to="/" className="flex items-center me-12 sm:me-0">
                    <img src={VRLOGO} alt="Logo" className="mr-2 rounded-full w-10 h-10" />
                    <span className="text-white text-2xl font-semibold">GadgetZone</span>
                </Link>

                {/* nav buttons in smaller device */}
                <div className="-ms-8 sm:ms-36 md:ms-0">

                    {/* search button in smaller device */}
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1" onClick={toggleSearch}>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>

                    {/* toggle button in smaller devices for nav */}
                    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-search" aria-expanded="false" onClick={toggleNavbar}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                {/* search input box */}
                <div className={`${isSearchBoxOpen ? "flex" : "hidden"} w-auto mx-auto items-center justify-center md:flex`} id="navbar-search">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="search-navbar" className="md:w-96 sm:min-w-80 min-w-64 block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                    </div>
                </div>

                <div className="justify-between items-center gap-10 hidden md:flex md:order-3">
                    {/* Login Button */}
                    <div className="flex gap-2 items-center cursor-pointer">
                        <FaRegUser className="text-green-500" />
                        <Link to="/login" className="text-white">Login</Link>
                    </div>

                    {/* Cart Icon */}
                    <div>
                        <BsCart3 className="text-white text-2xl cursor-pointer" />
                    </div>
                </div>

            </div>

            {/* nav menu when clicking toggle button in smaller device */}
            <div className={`w-24 bg-gray-700 absolute top-19 right-0 md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col justify-center items-center gap-5">
                    {/* Login Button */}
                    <div className="flex gap-2 items-center cursor-pointer border-b-gray-300 pt-4">
                        <FaRegUser className="text-green-500" />
                        <Link to="/login" className="text-white">Login</Link>
                    </div>
                    {/* Cart Icon */}
                    <div className="pb-4">
                        <BsCart3 className="text-white text-2xl cursor-pointer" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header