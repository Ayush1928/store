import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Register = () => {
  return (
    <>
    <Navbar/>
      <div className="register-container">
        <div className="register-box">
          <h1>Create Account</h1>
          <input className="register-name" placeholder="Your Name" />
          <input className="register-email" placeholder="Your Email" />
          <input className="register-password" placeholder="Password" />
          <div className="register-checkbox">
            <input
              className="checkbox-box"
              type="checkbox"
              name="checkbox"
              style={{
                border: "1px solid black",
                height: "3vh",
                width: "3vh",
                marginRight: "1.5vw",
                cursor: "pointer",
              }}
            />
            <label htmlFor="checkbox"> I agree to terms & conditions</label>
          </div>
          <button className="register-button" type="button">
            Sign Up
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Register;
