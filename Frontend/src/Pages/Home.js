import React from 'react';
import Carousel from "../Components/Carousel";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Navbar from '../Components/Navbar';
import Newletter from "../Components/Newsletter";
import Products from "../Components/Products";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Categories/>
      <Products/>
      <Newletter/>
      <Footer/>
    </div>
  )
}

export default Home
