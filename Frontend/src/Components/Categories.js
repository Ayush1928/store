import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { CategoryData2 } from "./SampleData";
const Categories = () => {
  return (
    <div className="categories">
      <div className="headline">
        <h1>Categories</h1>
      </div>
        <div className="cat-box">
          {CategoryData2.map((item) => (
            <Link
            className="cat-link"
              to={`/products/${item.cat}`}
              key={item.id}
              style={{ textDecoration: "none" }}
            >
              <div className="category-item" key={item.id}>
                <h2>{item.title}</h2>
                <img src={item.img} alt="" />
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default Categories;
