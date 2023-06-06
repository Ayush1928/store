import axios from "axios";
import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 10000,
          }
        );
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    if(stripeToken){
        makeRequest();
    };
  }, [stripeToken]);
  return (
    <div className="pay-container">
      <StripeCheckout
        name="Store"
        image="https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        billingAddress
        shippingAddress
        description="Your total is $100"
        amount={10000}
        currency="INR"
        token={onToken}
        stripeKey="pk_test_51MuqHvSFJJGANshzEtUwkrQVu8Gxt3PPybeAMwtqZr8DaHJHALl5MZQZYPAZqgexv12HYOpeXI6cwpzVlhEwZfbb00Mtuy4wJm"
      >
        <button className="pay-button">Pay</button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
