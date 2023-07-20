import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { publicRequest } from "../requestMethod";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await publicRequest.post("auth/register", {
        username,
        email,
        password,
      });
      if(response.status === 201){
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="register-container">
        <div className="register-box">
          <h1>Create Account</h1>
          <input
            className="register-name"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="register-email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="register-password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="register-checkbox">
            <input
              className="checkbox-box"
              type="checkbox"
              name="checkbox"
              style={{
                border: "1px solid black",
                height: "20px",
                width: "20px",
                marginRight: "1vw",
                cursor: "pointer",
                display:"flex",
                alignItems:"center",
                marginTop:"0"
              }}
            />
            <label htmlFor="checkbox">I agree to terms & conditions</label>
          </div>
          <button className="register-button" type="button" onClick={handleRegister}>
            Sign Up
          </button><br/>
          <p>Already have an account ? <Link to="/login">Login</Link></p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
