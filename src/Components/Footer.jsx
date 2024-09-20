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
        <a href="">What is print on demand?</a>
        <a href="">Product catalog</a>
        <a href="">Shipping and delivery</a>
        <a href="">Dropshipping Products</a>
        <a href="">Pro sellers</a>
        <a href="">White label products</a>
        <a href="">Return Policy</a>
        <a href="">Global yet local</a>
        <a href=""> sustainibility </a>
        <a href="">Support</a>
        


      </div>

      <div className="column">
        <h4>Integrations</h4>
        <a href="">Shopify</a>
        <a href="">Itsy</a>
        <a href="">Woo commerce</a>
        <a href="">wix</a>
        <a href="">SquareSpace</a>
       


      </div>

      <div className="column">
        <h4>Start Selling</h4>
        <a href="">Embroidery</a>
        <a href="">Print on demand hoodies</a>
        <a href="">Print on demand Tshirts</a>
        <a href="">Print on demand Canvas</a>
        <a href="">Print on demand Calanders</a>
        <a href="">Print on demand Mugs</a>
        <a href="">Custom Products</a>
        <a href="">Custom clothing</a>
        <a href=""> Custom Merchandise </a>
        <a href="">custom phone cases</a>
        <a href="">Print on demand in Europe</a>
        <a href="">Print on demand in UK</a>
        <a href="">Print on demand in France</a>
        <a href="">Print on demand in Canada</a>
        


      </div>


      
      <div className="column">
        <h4>Company</h4>
        <a href="">GelatoConnect</a>
        <a href="">About Gelato</a>
        <a href="">Leadership Team</a>
        <a href="">Board & Inverstors</a>
        <a href="">Print on demand Calanders</a>
        <a href="">Print on demand Mugs</a>
        <a href="">NewsRooms</a>
        <a href="">Blogs</a>
        <a href=""> Customer stories</a>
        <a href="">Parteners</a>
        <a href="">Careers</a>
        <a href="">Affiliate Programs</a>
        <a href="">Print on demand in France</a>
        
        


      </div>

      </div>
    </footer>
  );
};

export default Footer;
