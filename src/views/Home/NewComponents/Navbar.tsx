import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);


    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); 
        }
    };


    return (
        <>
            <nav className="bg-white fixed top-0 left-0 w-full z-50 rounded-2xl">
                <div className="flex h-16 p-5 justify-between items-center">
                    {/* logo */}
                    <a href="/" className="ml-10">
                        <img
                            className="h-8 w-auto filter invert"
                            src="/img/logo/logo-dark-full.png"
                            alt="Logo"
                        />
                    </a>

                    {/* mid-content */}
                    <div className="hidden md:flex gap-8">
                        <a

                            onClick={() => scrollToSection('about-us')}
                            className="text-black hover:text-gray-600 inline-flex items-center px-1 pt-1 text-sm font-medium cursor-pointer"
                        >
                            About Us
                        </a>
                        <a

                            onClick={() => scrollToSection('faq')}
                            className="text-black hover:text-gray-600 inline-flex items-center px-1 pt-1 text-sm font-medium cursor-pointer"
                        >
                            F&Q
                        </a>
                        <a
                            onClick={() => scrollToSection('contact')}
                            className="text-black hover:text-gray-600 inline-flex items-center px-1 pt-1 text-sm font-medium cursor-pointer"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Right-content */}
                    <div className="hidden md:flex items-center mr-4">
                        <button className="rounded-lg font-semibold text-black hover:text-gray-600">
                            Login
                        </button>
                        <button className="ml-4 px-6 py-2 rounded-full font-semibold bg-black text-white hover:bg-gray-700">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden mr-4">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute top-16 right-0 w-3/4 h-[calc(100vh-4rem)] bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        } transition-transform duration-300 ease-in-out md:hidden flex flex-col px-6 pt-6 pb-8 gap-6 z-30`}
                >
                    <a

                        onClick={() => scrollToSection('about-us')}
                        className="text-black hover:text-gray-600 text-lg font-semibold"
                    >
                        About Us
                    </a>
                    <a

                        onClick={() => scrollToSection('faq')}
                        className="text-black hover:text-gray-600 text-lg font-semibold"
                    >
                        F&Q
                    </a>
                    <a

                        onClick={() => scrollToSection('contact')}
                        className="text-black hover:text-gray-600 text-lg font-semibold"
                    >
                        Contact Us
                    </a>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-black hover:text-gray-600 text-lg font-semibold text-left"
                    >
                        Login
                    </button>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="mt-2 px-4 py-2 rounded-full font-semibold bg-black text-white hover:bg-gray-700 w-full text-center"
                    >
                        Get Started
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
