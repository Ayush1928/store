import React from "react";
import "../App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="connect-with-us">
          <h1 style={{ fontSize: "4rem" }}>Store</h1>
          <h2>Connect with us</h2>
          <div className="social-icons">
            <FacebookIcon style={{ fontSize: "36px" }} />
            <InstagramIcon style={{ fontSize: "36px" }} />
            <TwitterIcon style={{ fontSize: "36px" }} />
            <YouTubeIcon style={{ fontSize: "36px" }} />
          </div>
        </div>
        <div className="useful-links">
          <h2>Useful Links</h2>
          <h3>Home</h3>
          <h3>Order Tracking</h3>
          <h3>Terms</h3>
          <h3>About</h3>
          <h3>FAQs</h3>
        </div>
        <div className="shop-by">
          <h2>Shop By</h2>
          <h3>Men</h3>
          <h3>Women</h3>
          <h3>Kids</h3>
          <h3>Home & Kitchen</h3>
          <h3>Beuty</h3>
        </div>
        <div className="contact">
          <h2>Contact Us</h2>
          <h3>
            <LocationOnOutlinedIcon /> 121-Abc Street , Delhi
          </h3>
          <h3>
            <LocalPhoneOutlinedIcon /> 987654XXXX
          </h3>
          <h3>
            <EmailOutlinedIcon /> abc@gmail.com
          </h3>
          <div className="payment-icons">
            <i className="fa-brands fa-cc-mastercard fa-2xl"></i>
            <i className="fa-brands fa-cc-paypal fa-2xl"></i>
            <i className="fa-brands fa-cc-visa fa-2xl"></i>
            <i className="fa-regular fa-credit-card fa-2xl"></i>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <hr/>
        <h4>Developed by <b>Ayush </b>| <b><a href="https://www.linkedin.com/in/ayush-bansal-559914214" target="_blank">LinkedIn </a></b>| <b><a href="https://github.com/Ayush1928" target="_blank">Github</a></b></h4>
      </div>
    </div>
  );
};

export default Footer;
