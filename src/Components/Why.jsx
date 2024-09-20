import React from 'react';
import './Why.css'; 
import whyImg from "../Assets/why.png"

const WhyChooseGelato = () => {
    return (
      <div className="why">
        <h1>Why Gelato?</h1>
        <section className="why-choose-section">
            
            <div className="image-container">
                <img src={whyImg} alt="Why Choose Gelato" className="image" />
            </div>
            <div className="text-container">
                <div className="info-item">
                    <h3 className="title">▻ World's largest print-on-demand network</h3>
                    <p className="subtext">140+ print partners in 32 countries. Gelato is a truly global service.</p>
                </div>
                <div className="info-item">
                    <h3 className="title">▻ Sell globally, produce locally</h3>
                    <p className="subtext">Your products are produced close to your customers, wherever they are.</p>
                </div>
                <div className="info-item">
                    <h3 className="title">▻ 100% free editing tools</h3>
                    <p className="subtext">Create your custom products using our suite of free tools.</p>
                </div>
                <div className="info-item">
                    <h3 className="title">▻ 60+ logistics partners</h3>
                    <p className="subtext">Our global network of logistics partners ensures your products are delivered fast.</p>
                </div>

                <div className="info-item">
                    <h3 className="title">▻ High-quality products</h3>
                    <p className="subtext">We partner with the world's leading brands to ensure the best quality products.</p>
                </div>

                <div className="info-item">
                    <h3 className="title">▻ Endless creativity with Shutterstock Images</h3>
                    <p className="subtext">Access millions of images and graphics to create unique products you can sell in your store.</p>
                </div>

                
                <div className="info-item">
                    <h3 className="title">▻ 1-click integration to the leading ecommerce platforms</h3>
                    <p className="subtext">Connect your store to Gelato using our integrations with Shopify, Etsy and more.</p>
                </div>
            </div>
        </section>
        </div>
    );
};

export default WhyChooseGelato;
