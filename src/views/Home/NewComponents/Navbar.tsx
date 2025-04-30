import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useThemeStore } from '@/store/themeStore';
import { themes } from '@/views/Home/themes/themeLoader';

const Navbar: React.FC = () => {
    const { theme } = useThemeStore();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [navStyle, setNavStyle] = useState({
        background: 'bg-white',
        text: 'text-black',
        border: 'border-gray-200',
        button: 'bg-black text-white'
    });

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const themeData = themes[theme];
        if (themeData) {
            if (theme === 'light') {
                setNavStyle({
                    background: 'bg-white',
                    text: 'text-black',
                    border: 'border-gray-200',
                    button: 'bg-black text-white'
                });
            } else if (theme === 'dark') {
                setNavStyle({
                    background: 'bg-black',
                    text: 'text-white',
                    border: 'border-gray-700',
                    button: 'bg-white text-black'
                });
            } else {
                setNavStyle({
                    background: '',
                    text: 'text-white',
                    border: theme === 'blue' ? 'border-blue-700' : 'border-purple-700',
                    button: 'bg-white text-black'
                });
            }
        }
    }, [theme]);

    const currentThemeBg = themes[theme]?.colors?.background || '#ffffff';

    const scrollToSection = (id: string) => {
        const navigateAndScroll = () => {
            setTimeout(() => {
                const section = document.getElementById(id);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        };

        if (location.pathname !== '/') {
            navigate('/');
            navigateAndScroll();
        } else {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        setIsOpen(false);
    };

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-50 ${navStyle.text} border-b ${navStyle.border}`}
            style={{
                backgroundColor: ['light', 'dark'].includes(theme) ? '' : currentThemeBg
            }}
        >
            <div className={`flex h-16 px-4 sm:px-6 lg:px-10 justify-between items-center ${['light', 'dark'].includes(theme) ? navStyle.background : ''}`}>
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img
                        className={`h-8 w-auto ${theme === 'light' ? 'filter invert' : ''}`}
                        src="/img/logo/logo-dark-full.png"
                        alt="Logo"
                    />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-8">
                    <Link to="/" onClick={() => scrollToSection('Home')} className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:opacity-80">
                        Home
                    </Link>
                    <a onClick={() => scrollToSection('about-us')} className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:opacity-80 cursor-pointer">
                        About Us
                    </a>
                    <a onClick={() => scrollToSection('faq')} className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:opacity-80 cursor-pointer">
                        F&Q
                    </a>
                    <a onClick={() => scrollToSection('contact')} className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:opacity-80 cursor-pointer">
                        Contact Us
                    </a>
                    <Link to="/themes" className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:opacity-80">
                        Themes
                    </Link>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center">
                    <button className="rounded-lg font-semibold hover:opacity-80">
                        Login
                    </button>
                    <button className={`ml-4 px-6 py-2 rounded-full font-semibold ${navStyle.button} hover:opacity-80`}>
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`absolute top-16 right-0 w-full sm:w-3/4 h-[calc(100vh-4rem)] shadow-lg transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out flex flex-col px-6 pt-6 pb-8 gap-6 z-30 lg:hidden ${['light', 'dark'].includes(theme) ? navStyle.background : ''}`}
                style={{
                    backgroundColor: ['light', 'dark'].includes(theme) ? '' : currentThemeBg
                }}
            >
                <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold hover:opacity-80">
                    Home
                </Link>
                <a onClick={() => scrollToSection('about-us')} className="text-lg font-semibold hover:opacity-80 cursor-pointer">
                    About Us
                </a>
                <a onClick={() => scrollToSection('faq')} className="text-lg font-semibold hover:opacity-80 cursor-pointer">
                    F&Q
                </a>
                <a onClick={() => scrollToSection('contact')} className="text-lg font-semibold hover:opacity-80 cursor-pointer">
                    Contact Us
                </a>
                <Link to="/themes" onClick={() => setIsOpen(false)} className="text-lg font-semibold hover:opacity-80">
                    Themes
                </Link>
                <button className="text-lg font-semibold text-left hover:opacity-80">
                    Login
                </button>
                <button className={`mt-2 px-4 py-2 rounded-full font-semibold ${navStyle.button} hover:opacity-80 w-full text-center`}>
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
