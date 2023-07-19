import React, { useEffect, useContext } from "react";
import Context from "../Components/Context";
import axios from "axios";
import { Link } from "react-router-dom";
const ProductsPageItem = ({ cat, sort }) => {
  const context = useContext(Context);
  const {
    filters,
    setProducts,
    setFilteredProducts,
    products,
    filteredProducts,
  } = context;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/product?category=${cat}`
            : `http://localhost:5000/api/product`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  useEffect(() => {
    if (sort === "arrival") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <>
      {filteredProducts.map((item) => (
        <Link className="product-link"
          to={`/product/${item._id}`}
          key={item._id}
          style={{ display: "flex", color: "black" }}
        >
          <div className="cat-page-product-item">
            <div className="cat-page-product-image">
              <img src={item.img} alt="" />
            </div>
            <div className="cat-page-product-desc">
              <p>
                {item.title}
                <br />
                Price - ₹{item.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductsPageItem;
