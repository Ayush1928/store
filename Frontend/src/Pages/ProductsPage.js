import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import Context from "../Components/Context";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import ProductsPageItem from "../Components/ProductsPageItem";

const ProductsPage = () => {
  const [sort, setSort] = useState(null);

  const context = useContext(Context);
  const { filters, setFilters } = context;
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Navbar />
      <div className="cat-page-container">
        <div className="cat-page-headline">
          <h1>{capitalize(cat)}</h1>
        </div>
        <div className="cat-page-filter">
          <div className="filter">
            <FilterAltOutlinedIcon style={{ fontSize: "30px" }} />
            <h2> Filter : </h2>
            <div className="filter-color">
              <select name="color" onChange={handleFilters}>
                <option>Color</option>
                <option>Red</option>
                <option>White</option>
                <option>Black</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Grey</option>
                <option>Green</option>
              </select>
            </div>
            <div className="filter-size">
              <select name="size" onChange={handleFilters}>
                <option>Size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
          </div>
          <div className="sort">
            <SortOutlinedIcon style={{ fontSize: "30px" }} />
            <h2> Sort : </h2>
            <select
              style={{ width: "14vw" }}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="arrival">New Arrival</option>
              <option value="asc">Price - Low to High</option>
              <option value="desc">Price - High to Low</option>
            </select>
          </div>
        </div>
        <div className="cat-page-products">
          <ProductsPageItem cat={cat} sort={sort} />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductsPage;
