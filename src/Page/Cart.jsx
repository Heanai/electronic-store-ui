import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';

const Cart = () => {
    // ហៅមុខងារ decreaseQuantity និង removeFromCart មកប្រើត្រង់នេះ
    const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

    // គណនាតម្លៃទំនិញសរុប (លុប totalPrice2 ចេញ ទុកតែមួយនេះបានហើយ)
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 md:px-12 py-24 text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
                <p className="text-gray-500">Looks like you haven't added any products to your cart yet.</p>
                <Link to="/" className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* ផ្នែកខាងឆ្វេង៖ បញ្ជីទំនិញ */}
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
                            <div className="flex items-center space-x-4">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded-lg bg-gray-50" />
                                <div>
                                    <h3 className="font-semibold text-gray-800 line-clamp-1">{item.name}</h3>
                                    <p className="text-sm text-gray-400">{item.category}</p>
                                    <p className="text-blue-600 font-bold mt-1">${item.price.toFixed(2)}</p>
                                </div>
                            </div>

                            {/* ប៊ូតុងបញ្ជាចំនួន (Quantity Controls) */}
                            <div className="flex items-center space-x-3 border border-gray-200 rounded-lg p-1">
                                {/* កែត្រង់នេះ៖ ប៊ូតុងសញ្ញាដក ហៅប្រើ decreaseQuantity */}
                                <button onClick={() => decreaseQuantity(item)} className="text-gray-500 hover:text-blue-600 p-1">
                                    <FiMinus size={16} />
                                </button>
                                
                                <span className="font-semibold text-gray-800 px-2">{item.quantity}</span>
                                
                                {/* ប៊ូតុងសញ្ញាបូក ហៅប្រើ addToCart រក្សាដដែល */}
                                <button onClick={() => addToCart(item)} className="text-gray-500 hover:text-blue-600 p-1">
                                    <FiPlus size={16} />
                                </button>
                            </div>

                            {/* តម្លៃសរុបតាមមុខទំនិញ និងប៊ូតុងលុប */}
                            <div className="flex items-center space-x-4">
                                <span className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                                
                                {/* កែត្រង់នេះ៖ ប៊ូតុងធុងសំរាម ហៅប្រើ removeFromCart ដោយបោះ id ទៅឱ្យវា */}
                                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 p-2">
                                    <FiTrash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ផ្នែកខាងស្តាំ៖ ផ្ទាំងសរុបលុយ (Order Summary) */}
                <div className="border border-gray-100 rounded-xl p-6 bg-gray-50 h-fit space-y-4">
                    <h2 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-4">Order Summary</h2>
                    <div className="flex justify-between text-gray-600 text-sm">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 text-sm">
                        <span>Shipping</span>
                        <span className="text-green-600 font-medium">Free</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900">
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition shadow-md">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;