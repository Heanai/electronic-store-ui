import React from 'react';

import { categories } from '../Data/Category.js'

const Category = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Shop by Categories</h2>

            {/* Responsive Grid System */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="border border-gray-100 rounded-lg p-6 flex items-center justify-between bg-white shadow-sm hover:shadow-md transition duration-300 cursor-pointer group"
                    >
                        <div>
                            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition">{cat.name}</h3>
                            <p className="text-gray-500 text-sm">{cat.count}</p>
                        </div>
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-16 h-16 object-contain transform group-hover:scale-110 transition duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;