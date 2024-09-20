import { useRef , } from "react";
import { FaBars, FaTimes ,FaGlobe ,FaCartPlus , FaUser } from "react-icons/fa";
import { MdOutlineHeadsetMic } from "react-icons/md";
import "./Navbar.css";
import logo from "../Assets/logo.png"





import React from 'react'
const Navbar = () => {

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	
  return (

	<header>
			<div className="logo"><img src={logo} alt="logo"></img></div>
			<nav ref={navRef}>
				<a href="/#">< MdOutlineHeadsetMic className="nav-icon"/>Contact Us</a>



				<a href="/#"><FaGlobe className="nav-icon" />IN/INR</a>


				
        

				<a href="/#"><FaCartPlus className="nav-icon"/>Cart</a>
				<a href="/#">< FaUser className="nav-icon" />Sign In</a>
				<button className="signup">Signup for Free!</button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			<hr/>
		</header>
	

  )
}

export default Navbar