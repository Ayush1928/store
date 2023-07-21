import React from 'react';
import { useSelector } from "react-redux";
import Carousel from "../Components/Carousel";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Navbar from '../Components/Navbar';
import Newletter from "../Components/Newsletter";
import Products from "../Components/Products";
import Register from "./Register"; 

const Home = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div>
      {currentUser ? ( 
        <>
          <Navbar />
          <Carousel />
          <Categories />
          <Products />
          <Newletter />
          <Footer />
        </>
      ) : (
        <Register />
      )}
    </div>
  );
}

export default Home;
