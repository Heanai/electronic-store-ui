import React from 'react'
import Hero from '../component/Hero'
import Category from '../Component/Category'
import ProductList from '../Component/ProductList'
import Banner from '../Component/Banner'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <ProductList/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home
