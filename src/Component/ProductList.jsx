import React, { useEffect, useRef } from 'react'; // ១. ថែមការ Import useEffect និង useRef ត្រង់នេះ
import { FaStar } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { products } from '../data/productData';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const { addToCart, searchQuery } = useCart();
  
  // ២. បង្កើត Ref មួយសម្រាប់បោះទៅចំណាំទីតាំងរបស់ Section នេះ
  const productSectionRef = useRef(null);

  // ៣. បង្កើត useEffect ដើម្បីតាមដានការស៊ើច
  useEffect(() => {
    // បើសិនជាមានការវាយអក្សរ Search (មិនមែនជាប្រអប់ទទេ)
    if (searchQuery.trim() !== '') {
      // បញ្ជាឱ្យ Browser រត់ Scroll ទៅរកទីតាំង Ref នោះយ៉ាងរលូន (Smooth)
      productSectionRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, [searchQuery]); // ដំណើរការរាល់ពេលដែល searchQuery ប្រែប្រួល

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // ៤. ដាក់ ref={productSectionRef} ទៅលើ Tag ក្រៅបង្អស់នៃ Section នេះដើម្បីឱ្យកូដស្គាល់ទីតាំង
    <div ref={productSectionRef} className="max-w-7xl mx-auto px-4 md:px-12 py-12 scroll-mt-24">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Featured Products'}
        </h2>
        <button className="text-blue-600 hover:underline font-medium text-sm">View All</button>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 text-gray-500 font-medium">
          No products found matching your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between relative group cursor-pointer"
            >
              <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 mb-4">
                <img src={product.image} alt={product.name} className="h-full object-contain transform group-hover:scale-105 transition duration-300" />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-gray-400 uppercase tracking-wider">{product.category}</p>
                <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition h-12">{product.name}</h3>
                <div className="flex text-orange-400 text-sm">
                  {[...Array(product.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  <button onClick={() => addToCart(product)} className="bg-blue-50 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
                    <FiShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;