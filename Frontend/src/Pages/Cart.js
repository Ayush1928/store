import { Add, Remove } from "@mui/icons-material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { userRequest } from "../requestMethod";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [updatedProducts, setUpdatedProducts] = useState(cart.products);
  const makeRequest = async () => {
    try {
      console.log("makeRequest Clicked");
      const paymentData = {
        purpose: "Payment",
        amount: cart.total,
      };

      const response = await userRequest.post("/checkout/payment", paymentData);

      navigate(response.data.paymentUrl);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuantity = (action, itemId) => {
    const updatedProducts = cart.products.map((item) => {
      if (item._id === itemId) {
        if (action === "inc") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (action === "dec" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setUpdatedProducts(updatedProducts);
  };
  return (
    <>
      <Navbar />
      <h1 className="cart-headline">Bag</h1>
      <div className="cart-container">
        <div className="cart-products">
          {updatedProducts.map((item) => (
            <div className="cart-product-item" key={item._id}>
              <div className="cart-product-image">
                <img src={item.img} alt="Product" />
              </div>
              <div className="cart-product-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <h3>
                  Color :&nbsp;
                  <div
                    className="cart-product-color"
                    style={{ backgroundColor: `${item.color}` }}
                  ></div>
                </h3>
                <h3>Size : {item.size}</h3>
              </div>
              <div className="quantity-price">
                <div className="product-quantity">
                  <Remove onClick={() => handleQuantity("dec")} />
                  <span>{item.quantity}</span>
                  <Add onClick={() => handleQuantity("inc")} />
                </div>
                <h2>Price - ₹{item.price * item.quantity}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h1>Order Summary</h1>
          <div className="order-summary">
            <div className="order-summary-details">
              <p>Subtotal</p>
              <p>₹{cart.total}</p>
            </div>
            <div className="order-summary-details">
              <p>Convenience Fee</p>
              <p>₹50</p>
            </div>
            <div className="order-summary-details">
              <p>
                <b>Total</b>
              </p>
              <p>
                <b>₹{cart.total + 50}</b>
              </p>
            </div>
            <form onSubmit={makeRequest}>
              <button className="place-order" type="submit">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
