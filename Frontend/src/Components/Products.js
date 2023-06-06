import React from "react";
import { Link } from "react-router-dom";
import { ProductData } from "./SampleData";
const Products = () => {
  return (
    <div>
      <div className="headline">
        <h1>Products</h1>
      </div>
      <div className="product-box-1">
        <div className="product-box-2">
          {ProductData.filter((item) => item.id < 5).map((item) => (
            <div className="product-item" key={item.id}>
              <div className="product-image">
                <img src={item.img} alt="" />
              </div>
              <div className="product-desc">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="product-box-3">
          <Link to="/product" className="explore">
            + Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
