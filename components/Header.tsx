import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Logo = () => (
    <a href="/#" className="flex items-center space-x-2 text-primary font-bold text-xl md:text-2xl" aria-label="KA Cobon Digital Marketing Home">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
        </svg>
        <span>KA Cobon Digital Marketing</span>
    </a>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const servicesMenuRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
    }, [location]);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleServicesToggle = () => {
        setIsServicesOpen(prev => !prev);
    }
    
    return (
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-md">
            <nav role="navigation" aria-label="Main Navigation" className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {NAV_LINKS.map((link) => (
                                link.submenu ? (
                                    <div className="relative" key={link.name} ref={servicesMenuRef}>
                                        <button 
                                            onClick={handleServicesToggle} 
                                            aria-haspopup="true" 
                                            aria-expanded={isServicesOpen}
                                            className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary flex items-center"
                                        >
                                            {link.name}
                                            <svg className={`ml-1 h-5 w-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {isServicesOpen && (
                                            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <div className="py-1" role="none">
                                                    {link.submenu.map((sublink) => (
                                                        <NavLink
                                                            key={sublink.name}
                                                            to={sublink.path}
                                                            className={({ isActive }) => `block px-4 py-2 text-md ${isActive ? 'bg-secondary text-white' : 'text-gray-700'} hover:bg-light-gray`}
                                                            role="menuitem"
                                                        >
                                                            {sublink.name}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        className={({ isActive }) => `text-gray-600 hover:text-primary px-3 py-2 rounded-md text-md font-medium transition-colors ${isActive && link.path === location.pathname ? 'text-primary border-b-2 border-primary' : ''}`}
                                    >
                                        {link.name}
                                    </NavLink>
                                )
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) => (
                           link.submenu ? (
                            <div key={link.name}>
                                <h3 className="text-gray-500 px-3 py-2 text-sm font-medium uppercase">{link.name}</h3>
                                {link.submenu.map(sublink => (
                                     <NavLink
                                        key={sublink.name}
                                        to={sublink.path}
                                        className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-secondary text-white' : 'text-dark-gray hover:bg-gray-200'}`}
                                     >
                                        {sublink.name}
                                     </NavLink>
                                ))}
                            </div>
                           ) : (
                             <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive && link.path === location.pathname ? 'bg-secondary text-white' : 'text-dark-gray hover:bg-gray-200'}`}
                             >
                                {link.name}
                             </NavLink>
                           )
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;