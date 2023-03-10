import React from 'react'
 import Showcase from '../../component/Showcase';
 import Categories from '../../component/Categories';
 import Imagecard from  '../../component/Imagecard';
 import ProductListing from '../../component/ProductListing';
 import Footer from '../../component/Footer';
const Homepage = () => {
  return (
    <div>
< Imagecard/>
  <Showcase/>
  <Categories/>
  <ProductListing/>
  <Footer/>
    </div>
  )
}

export default Homepage;
