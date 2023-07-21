import { Add, Remove } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Context from "../Components/Context";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { addProduct } from "../Redux/cartRedux";
import { publicRequest } from "../requestMethod";

const SingleProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const context = useContext(Context);
  const { handleQuantity, quantity, size, setSize } = context;
  const dispatch = useDispatch();
  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
  };
  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        size,
      })
    );
  };
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="product-page-container">
        <div className="product-page-image">
          <img src={product.img} alt="" />
        </div>
        <div className="product-page-info" style={{ margin: "1vh 0 3vh" }}>
          <h1>{product.title}</h1>
          <p>{product.desc}</p>
          <hr />
          <h2>₹{product.price}</h2>
          <div className="size-selector">
            <h2>Select Size :</h2>
            {product.size?.map((s) => (
              <button
                type="button"
                className={`sizes ${size === s ? "selected" : ""}`}
                key={s}
                onClick={() => handleSizeChange(s)}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="quantity">
            <p>Quantity : &nbsp;</p>
            <div className="product-quantity">
              <Remove onClick={() => handleQuantity("dec")} />
              <span>{quantity}</span>
              <Add onClick={() => handleQuantity("inc")} />
            </div>
          </div>
          <div className="add-to-cart-button" onClick={handleAddToCart}>
            <ShoppingCartOutlinedIcon />
            &nbsp;Add to Cart
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleProductPage;
