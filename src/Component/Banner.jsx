import React from 'react';

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-8">
            <div className="w-full bg-linear-to-r block md:flex items-center justify-between bg-blue-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg">
                {/* លម្អពន្លឺ Background ពីក្រោយ */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700 rounded-full filter blur-3xl opacity-30 -mr-20 -mt-20"></div>

                <div className="max-w-md space-y-4 relative z-10">
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Limited Offer
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        Clearance Sale <br /> Up To <span className="text-orange-400">50% OFF</span>
                    </h2>
                    <p className="text-blue-100 text-sm md:text-base">
                        Get the best deals on certified refurbished smart devices and laptops. Valid until stocks last!
                    </p>
                    <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300">
                        Shop Clearance
                    </button>
                </div>

                {/* រូបភាពផលិតផលលម្អខាងស្តាំ */}
                <div className="mt-8 md:mt-0 flex justify-center relative z-10">
                    <img
                        src="https://img.magnific.com/free-psd/black-friday-super-sale-social-media-banner-instagram-post-template_120329-5152.jpg"
                        alt="Laptop Promo"
                        className="w-64 md:w-80 object-contain drop-shadow-2xl rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;