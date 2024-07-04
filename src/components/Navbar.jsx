import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-[#0B0C10] p-1 fixed top-0 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-[#45a29e] text-2xl font-bold">
                            <img className='max-w-[50px] max-h-[45px]' src="./coding.png" alt="Logo" />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink to="/" handleClick={handleLinkClick}>Home</NavLink>
                            <NavLink to="/about" handleClick={handleLinkClick}>About</NavLink>
                            <NavLink to="/projects" handleClick={handleLinkClick}>Projects</NavLink>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#45a29e] hover:text-white hover:bg-[#1F2833] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0C10] focus:ring-white  "
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/" handleClick={handleLinkClick} mobile>Home</NavLink>
                        <NavLink to="/about" handleClick={handleLinkClick} mobile>About</NavLink>
                        <NavLink to="/projects" handleClick={handleLinkClick} mobile>Projects</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ to, children, mobile, handleClick }) => {
    const baseClasses = "text-[#45a29e] hover:bg-[#1F2833] hover:text-white px-3 py-2 rounded-md text-sm font-medium";
    const mobileClasses = mobile ? "block" : "";

    return (
        <Link
            to={to}
            className={`${baseClasses} ${mobileClasses}`}
            onClick={handleClick}
        >
            {children}
        </Link>
    );
};

export default Navbar;
