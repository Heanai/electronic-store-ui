// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // ១. មុខងារថែមចំនួន (បូក ១)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isExist = prevItems.find((item) => item.id === product.id);
      if (isExist) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // ២. មុខងារបន្ថយចំនួន (ដក ១)
  const decreaseQuantity = (product) => {
    setCartItems((prevItems) => {
      const isExist = prevItems.find((item) => item.id === product.id);
      
      // បើចំនួនសល់ត្រឹម ១ ហើយ User ចុចដកទៀត គឺលុបទំនិញនោះចេញពីកន្ត្រកតែម្ដង
      if (isExist.quantity === 1) {
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        // បើលើសពី ១ គឺដកចំនួនថយចុះ ១
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  // ៣. មុខងារលុបទំនិញចោលទាំងស្រុង (សម្រាប់ប៊ូតុងធុងសំរាម)
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalQuantities = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    // កុំភ្លេចបោះមុខងារថ្មីទាំងពីរ (decreaseQuantity, removeFromCart) ចូលក្នុង value
    <CartContext.Provider value={{searchQuery, setSearchQuery,cartItems, addToCart, decreaseQuantity, removeFromCart, totalQuantities }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);