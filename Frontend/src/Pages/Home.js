import React from 'react';
import Navbar from '../Components/Navbar';
import Carousel from "../Components/Carousel";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import Newletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
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
