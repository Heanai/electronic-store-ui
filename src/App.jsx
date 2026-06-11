import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home'
import { CartProvider } from './context/CartContext';
import Cart from './Page/Cart';

// បង្កើត Component បណ្ដោះអាសន្នសម្រាប់តេស្ត
const Products = () => <div className="p-12 text-center text-2xl font-bold">Product Page</div>;
const App = () => {
  return (
    <CartProvider>
    <Router>
      <div className='min-h-screen bg-white font-sans'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  )
}

export default App
