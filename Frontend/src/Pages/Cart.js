import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";
import Context from "../Components/Context";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethod";
const Cart = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const context = useContext(Context);
  const { handleQuantity, quantity } = context;
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", { data: res.data });
      } catch {}
    };

    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);
  return (
    <>
      <Navbar />
      <h1 className="cart-headline">Bag</h1>
      <div className="cart-container">
        <div className="cart-products">
          {cart.products.map((item) => (
            <div className="cart-product-item" key={item._id}>
              <div className="cart-product-image">
                <img src={item.img} />
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
            <StripeCheckout
              name="Store"
              billingAddress
              shippingAddress
              description={`Your total is ₹${cart.total + 50}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={process.env.STRIPE_SECRET_KEY_MY}
            >
              <button className="place-order" type="button">
                Place Order
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
