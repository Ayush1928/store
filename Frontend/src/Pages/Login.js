import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/apiCalls";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state=>state.user);
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <>
      <Navbar />
      <div className="register-container">
        <div className="register-box" style={{ height: "50vh", width: "30vw" }}>
          <h1>Login</h1>
          <input
            className="register-email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="register-password"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{color:"red"}}>Someting went wrong ...</p>}
          <button
            className="register-button"
            type="button"
            disabled={isFetching}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
