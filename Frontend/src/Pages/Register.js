import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethod";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await publicRequest.post("/auth/register", {
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
      <Navbar />
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
                height: "3vh",
                width: "3vh",
                marginRight: "1.5vw",
                cursor: "pointer",
              }}
            />
            <label htmlFor="checkbox">I agree to terms & conditions</label>
          </div>
          <button className="register-button" type="button" onClick={handleRegister}>
            Sign Up
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
