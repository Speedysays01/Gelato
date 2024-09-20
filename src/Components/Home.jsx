import React from 'react';
import './Home.css';
import homeImg from "../Assets/home.png"

const HomeSection = () => {
    return (
        <section className="home-section">
            <div className="text-container">
                <h1 className="main-slogan">
                    Design it! Print it! Love it! Print on Demand with Gelato.
                </h1>
                <p className="sub-slogan">
                    Sign up for free and only pay for what you sell
                </p>
                <p className="small-text">
                    Turn your passion into profit with the world's largest print on demand network.
                </p>
                <div className="buttons-container">
                    <button className="black-button">Get Started for Free</button>
                    <button className="white-button">See Our Products</button>
                </div>
                <div className="reviews-container">
                    <div className="stars">
                        {Array(5).fill().map((_, i) => (
                            <span key={i} className={`star ${i < 4.8 ? 'filled' : ''}`}>★</span>
                        ))}
                    </div>
                    <p className="reviews-text">
                        4.8/5 star reviews based on 910 reviews on Shopify
                    </p>
                </div>
            </div>
            <div className="image-container">
                <img src={homeImg} alt="Gelato Print on Demand" className="image" />
            </div>
        </section>
    );
};

export default HomeSection;
