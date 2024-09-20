import React from "react";
import logo from "../Assets/logo.png";
import "./Footer.css";
import {
  FaInstagramSquare,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaApple 
} from "react-icons/fa";

import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="horizontalSection">
          <img src={logo} alt="logo" />
        </div>
        <div className="findUs">
          <p>Find us on:</p>

          <FaInstagramSquare className="logoWhite" />
          <FaFacebookF className="logoWhite" />
          <FaLinkedinIn className="logoWhite" />
          <FaYoutube className="logoWhite" />
          <FaTiktok className="logoWhite" />
        </div>
      </div>


      <div className="columns">
      <div className="column">
       <p>Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.</p>
       <button className="getStarted">Get started</button>
       <h4>Get the App</h4>
       <div className="apps"><button><FaApple className="logo"/>App store</button>  <button><IoLogoGooglePlaystore className="logo"/>Google play</button></div>
      </div>


      <div className="column">
        <h4>Print on demand</h4>
        <a >What is print on demand?</a>
        <a >Product catalog</a>
        <a >Shipping and delivery</a>
        <a >Dropshipping Products</a>
        <a >Pro sellers</a>
        <a >White label products</a>
        <a >Return Policy</a>
        <a >Global yet local</a>
        <a > sustainibility </a>
        <a >Support</a>
        


      </div>

      <div className="column">
        <h4>Integrations</h4>
        <a >Shopify</a>
        <a >Itsy</a>
        <a >Woo commerce</a>
        <a >wix</a>
        <a >SquareSpace</a>
       


      </div>

      <div className="column">
        <h4>Start Selling</h4>
        <a >Embroidery</a>
        <a >Print on demand hoodies</a>
        <a >Print on demand Tshirts</a>
        <a >Print on demand Canvas</a>
        <a >Print on demand Calanders</a>
        <a >Print on demand Mugs</a>
        <a >Custom Products</a>
        <a >Custom clothing</a>
        <a > Custom Merchandise </a>
        <a >custom phone cases</a>
        <a >Print on demand in Europe</a>
        <a >Print on demand in UK</a>
        <a >Print on demand in France</a>
        <a >Print on demand in Canada</a>
        


      </div>


      
      <div className="column">
        <h4>Company</h4>
        <a >GelatoConnect</a>
        <a >About Gelato</a>
        <a >Leadership Team</a>
        <a >Board & Inverstors</a>
        <a >Print on demand Calanders</a>
        <a >Print on demand Mugs</a>
        <a >NewsRooms</a>
        <a >Blogs</a>
        <a > Customer stories</a>
        <a >Parteners</a>
        <a >Careers</a>
        <a >Affiliate Programs</a>
        <a >Print on demand in France</a>
        
        


      </div>

      </div>
    </footer>
  );
};

export default Footer;
