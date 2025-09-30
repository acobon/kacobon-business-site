import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer id="contact" role="contentinfo" className="bg-dark-gray text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: About */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">KA Cobon Digital Marketing</h3>
                        <p className="text-gray-300 mb-2">A progressive, LGBTQ-owned digital marketing agency based in Indianapolis, Indiana.</p>
                        <p className="text-gray-300">Serving local businesses and global brands with 15+ years of collective experience.</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link to="/services/digital-marketing" className="text-gray-300 hover:text-accent transition-colors">Services</Link></li>
                            <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Testimonials</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <address className="not-italic text-gray-300 space-y-2">
                            <p>3223 Summersong Drive<br/>Indianapolis, IN 46241</p>
                            <p>
                                <a href="tel:+13175004946" className="hover:text-accent transition-colors">317-500-4946</a>
                            </p>
                            <p>
                                <a href="mailto:contact@kacobon.cc" className="hover:text-accent transition-colors">contact@kacobon.cc</a>
                            </p>
                        </address>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">&copy; 2025 Adrian Cobon. All rights reserved.</p>
                    {/* Placeholder for Social Media Icons */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                       <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-accent transition-colors">
                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                       </a>
                       <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-accent transition-colors">
                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                       </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;