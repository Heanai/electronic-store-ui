import React from 'react';

const Hero = () => {
    return (
        <div className="w-full bg-[#f5f7f9] py-12 md:py-24 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* ផ្នែកខាងឆ្វេង៖ អត្ថបទ និងប៊ូតុង */}
            <div className="flex-1 max-w-xl space-y-4 md:space-y-6 text-center md:text-left">
                <h5 className="text-orange-500 font-semibold text-sm md:text-base uppercase tracking-wider">
                    Best Deals Online
                </h5>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Incredible Prices on All Your Favorite Gadgets
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                    Get up to <span className="font-semibold text-blue-600">50% OFF</span> on selected headphones, smartphones, and laptops. Limited time offer!
                </p>
                <div>
                    <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-md">
                        SHOP NOW
                    </button>
                </div>
            </div>

            {/* ផ្នែកខាងស្តាំ៖ រូបភាពផលិតផល */}
            <div className="flex-1 flex justify-center items-center relative">
                {/* រង្វង់ Background លម្អពីក្រោយរូបភាព */}
                <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-full filter blur-xl opacity-70 -z-10"></div>

                {/* រូបភាពផលិតផល (ប្រើលីងរូបភាពបណ្ដោះអាសន្ន) */}
                <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Featured Headphone"
                    className="w-full max-w-xs md:max-w-md object-contain drop-shadow-2xl transform hover:scale-105 transition duration-500"
                />
            </div>
        </div>
    );
};

export default Hero;