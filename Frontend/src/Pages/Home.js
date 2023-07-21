import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Carousel from "../Components/Carousel";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Navbar from '../Components/Navbar';
import Newletter from "../Components/Newsletter";
import Products from "../Components/Products";

const Home = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/register");
    }
  }, [currentUser,navigate]);

  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Categories/>
      <Products/>
      <Newletter/>
      <Footer/>
    </div>
  );
}

export default Home;
