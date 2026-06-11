import React from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { totalQuantities,searchQuery, setSearchQuery } = useCart(); // ហៅចំនួនសរុបមកប្រើ
    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-gray-100 text-gray-600 text-xs py-2 px-4 md:px-12 flex justify-between items-center">
                <p>Welcome to Worldwide Electronics Store</p>
                <p>Call Us: +123 456 789</p>
            </div>

            {/* Main Nav */}
            <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-600 tracking-wider">
                    NAI-STORE<span className="text-orange-500">.</span>
                </Link>
                {/* Search Bar */}
                <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
                    <div className="w-full relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
                        />
                        <button className="absolute right-0 top-0 bottom-0 bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition">
                            <FiSearch size={18} />
                        </button>
                    </div>
                </div>

                {/* Icons Action */}
                <div className="flex items-center space-x-6 text-gray-700">
                    <button className="hover:text-blue-600 transition"><FiUser size={22} /></button>
                    <button className="hover:text-blue-600 transition relative">
                        <FiHeart size={22} />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
                    </button>
                    <Link to="/cart" className="hover:text-blue-600 transition relative">
                        <FiShoppingCart size={22} />
                        {/* ប្តូរពីលេខ 0 ទៅជា {totalQuantities} */}
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                            {totalQuantities}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;