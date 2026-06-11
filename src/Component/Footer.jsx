import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {/* ប្លុកទី១៖ ព័ត៌មានក្រុមហ៊ុន */}
                <div className="space-y-4">
                    <div className="text-2xl font-bold text-white tracking-wider">
                        NAI-STORE<span className="text-orange-500">.</span>
                    </div>
                    <p className="text-sm text-gray-400">
                        Your one-stop destination for all the latest electronics and premium gadgets at the best prices.
                    </p>
                    <div className="flex space-x-4 text-gray-400 text-lg">
                        <a href="https://www.facebook.com/share/1Lv7vpg1cQ/?mibextid=wwXIfr" className="hover:text-blue-500 transition"><FaFacebook /></a>
                        <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
                        <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-600 transition"><FaLinkedin /></a>
                    </div>
                </div>

                {/* ប្លុកទី២៖ Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition">Shop Products</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                    </ul>
                </div>

                {/* ប្លុកទី៣៖ Customer Care */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">Customer Care</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">My Account</a></li>
                        <li><a href="#" className="hover:text-white transition">Track Order</a></li>
                        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* ប្លុកទី៤៖ Newsletter Subscription */}
                <div className="space-y-4">
                    <h4 className="text-white font-semibold text-lg">Subscribe to Newsletter</h4>
                    <p className="text-sm text-gray-400">Stay updated with our latest offers and product arrivals.</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition shrink-0">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-900 pt-8 text-center text-xs text-gray-600 max-w-7xl mx-auto px-4 md:px-12">
                &copy; {new Date().getFullYear()} E-STORE. All rights reserved. Built with React & Tailwind CSS.
            </div>
        </footer>
    );
};

export default Footer;